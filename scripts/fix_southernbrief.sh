#!/usr/bin/env bash
set -euo pipefail
LOG="/tmp/southernbrief_fix.log"
: > "$LOG"
APPLY=false
# if argument --apply provided, we will kill extension processes and push branch
if [[ "${1-}" == "--apply" ]]; then APPLY=true; fi

function log { echo "[$(date '+%F %T')] $*" | tee -a "$LOG"; }
log "START: southernbrief fix script (apply=$APPLY)"

# check git
if ! git rev-parse --show-toplevel >/dev/null 2>&1; then log "ERROR: not inside a git repo."; exit 1; fi
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"
log "Repo root: $REPO_ROOT"
BRANCH="add/tailwind"
REMOTE="origin"

# Create backup branch
BACKUP="backup-before-fix-$(date +%s)"
git branch -f "$BACKUP" HEAD
log "Created backup branch: $BACKUP"

# Detect extension processes (Zed copilot / github extension)
EXT_REGEX='github-mcp-server|copilot-language-server|github-gas-server|github-gas|zed-editor'
PIDS="$(ps aux | egrep \"$EXT_REGEX\" | grep -v grep | awk '{print \$2}' | tr '\n' ' ' || true)"
if [ -z "$PIDS" ]; then
  log "No matching extension processes found."
else
  log "Found extension PIDs: $PIDS"
  if [ "$APPLY" = true ]; then
    log "Attempting to stop extension processes..."
    for p in $PIDS; do
      if ps -p "$p" >/dev/null 2>&1; then
        log "Killing PID $p"
        kill "$p" || true
      fi
    done
    sleep 1
    # force-kill if still running
    for p in $PIDS; do
      if ps -p "$p" >/dev/null 2>&1; then
        log "Force killing PID $p"
        kill -9 "$p" || true
      fi
    done
    log "Stopped extension processes."
  else
    log "Run the script with '--apply' to stop these processes."
  fi
fi

# Find duplicate southernbrief folders under home (depth 3)
log "Searching for 'southernbrief' directories under $HOME (depth 3)..."
mapfile -t FOUND_DIRS < <(find "$HOME" -maxdepth 3 -type d -iname '*southernbrief*' 2>/dev/null || true)
if [ ${#FOUND_DIRS[@]} -eq 0 ]; then
  log "No southernbrief folders found under $HOME (depth 3)."
else
  log "Found directories:"
  for d in "${FOUND_DIRS[@]}"; do
    printf " - %s (size: " "$d" | tee -a "$LOG"
    du -sh "$d" 2>/dev/null | awk '{print $1 "): " $2}' | tee -a "$LOG" || true
    if [ -d "$d/.git" ]; then
      log "   -> Git remotes for $d:"
      git -C "$d" remote -v || true
    fi
  done
fi

# Switch or create the add/tailwind branch
log "Switching to or creating branch $BRANCH..."
if git show-ref --verify --quiet "refs/heads/$BRANCH"; then git checkout "$BRANCH"; else
  if git ls-remote --exit-code --heads "$REMOTE" "$BRANCH" >/dev/null 2>&1; then
    git fetch "$REMOTE" "$BRANCH:$BRANCH"
    git checkout "$BRANCH"
  else
    git checkout -b "$BRANCH"
  fi
fi
log "Now on branch: $(git rev-parse --abbrev-ref HEAD)"

# Remove scripts/node_modules from git if tracked
if git ls-files --error-unmatch "scripts/node_modules" >/dev/null 2>&1; then
  log "scripts/node_modules is tracked in git — removing from index and adding to .gitignore."
  git rm -r --cached "scripts/node_modules" || true
  grep -qxF 'scripts/node_modules' .gitignore || echo 'scripts/node_modules' >> .gitignore
  git add .gitignore
  git commit -m "chore: ignore scripts/node_modules" || log "No commit for .gitignore or already committed."
else
  log "scripts/node_modules is not tracked in git index (good)."
fi

# Helper to safely write file if missing (back up existing)
write_if_missing() {
  local path="$1"
  local content="$2"
  if [ -f "$path" ]; then
    cp "$path" "$path.bak" || true
    log "Backed up $path -> $path.bak"
  fi
  printf "%s\n" "$content" > "$path"
  log "Wrote $path"
}

# Create minimal essential files if missing
if [ ! -f "tailwind.config.cjs" ]; then
  write_if_missing "tailwind.config.cjs" "module.exports = { content: ['./src/**/*.{njk,html,md,js}','./content/**/*.{md,html}','./src/_includes/**/*.{njk,html}'], theme: { extend: { colors: { primary: '#111827', accent: '#1D4ED8', muted: '#6B7280' } } }, plugins: [] };"
fi
if [ ! -f "postcss.config.cjs" ]; then
  write_if_missing "postcss.config.cjs" "module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };"
fi

mkdir -p src/assets src/_includes/layouts static
if [ ! -f "src/assets/styles.css" ]; then
  write_if_missing "src/assets/styles.css" "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base { body { @apply bg-white text-gray-900 font-sans; } }\n@layer components { .site-header { @apply bg-white border-b; } .site-container { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; } .hero { @apply p-8 rounded-lg bg-white shadow-md; } .article-card { @apply p-4 border border-gray-100 rounded-md bg-white; } }"
fi
if [ ! -f ".eleventy.js" ]; then
  write_if_missing ".eleventy.js" "module.exports = function(eleventyConfig) { eleventyConfig.addPassthroughCopy('static'); eleventyConfig.addCollection('articles', function(c){return c.getFilteredByGlob('content/articles/**/*.md').reverse()}); eleventyConfig.addCollection('aggregated', function(c){return c.getFilteredByGlob('content/aggregated/**/*.md').reverse()}); return { dir: { input: 'src', includes: '_includes', data: '_data', output: '_site' } } }"
fi

BASE="src/_includes/layouts/base.njk"
if [ ! -f "$BASE" ]; then
  write_if_missing "$BASE" "<!doctype html>\n<html lang='en'>\n<head>\n  <meta charset='utf-8' /><meta name='viewport' content='width=device-width,initial-scale=1' />\n  <title>{{ title | default('Southern Brief') }}</title>\n  <link rel='stylesheet' href='/css/style.css' />\n  <script src='https://cdn.tailwindcss.com'></script>\n</head>\n<body class='bg-white text-gray-900'>\n<header class='site-header'><div class='site-container'><a href='/' class='text-2xl font-bold'>Southern Brief</a></div></header>\n<main class='site-container'>{{ content | safe }}</main>\n<footer class='site-container'><p>© Southern Brief</p></footer>\n</body></html>"
fi

if [ ! -f "src/index.njk" ]; then
  write_if_missing "src/index.njk" "---\nlayout: layouts/base.njk\ntitle: Home\n---\n<section class='grid grid-cols-1 lg:grid-cols-3 gap-8'>\n  <div class='lg:col-span-2'>\n    <h2 class='text-2xl font-semibold mb-4'>Top Story</h2>\n    {% set featured = collections.articles | first %}\n    {% if featured %}\n      <article class='hero article-card'><h3 class='text-xl font-bold mb-2'><a href='{{ featured.url }}'>{{ featured.data.title }}</a></h3><p class='text-muted'>{{ featured.data.excerpt }}</p></article>\n    {% else %}\n      <div class='p-6 bg-gray-50 rounded'>No top stories yet.</div>\n    {% endif %}\n  </div>\n  <aside><h3 class='text-lg font-medium mb-4'>Latest Aggregated</h3><div class='space-y-3'>{% for a in collections.aggregated | slice(0,10) %}<div class='article-card'><h4 class='text-md font-semibold'><a href='{{ a.url }}' class='text-blue-600 hover:underline'>{{ a.data.title }}</a></h4><p class='text-sm text-muted'>{{ a.data.summary }}</p></div>{% endfor %}</div></aside>\n</section>"
fi

if [ ! -f "src/article.njk" ]; then
  write_if_missing "src/article.njk" "---\nlayout: layouts/base.njk\n---\n<article class='mx-auto max-w-3xl'><h1 class='text-3xl font-bold'>{{ title }}</h1><div class='mt-6'>{{ content | safe }}</div></article>"
fi

if [ ! -f "src/country.njk" ]; then
  write_if_missing "src/country.njk" "---\nlayout: layouts/base.njk\n---\n<h1 class='text-3xl font-bold'>{{ title }}</h1><p class='text-muted'>{{ data.summary }}</p>"
fi

touch static/.gitkeep

# Update package.json scripts/devDependencies safely
log "Updating package.json scripts + devDependencies..."
if [ ! -f package.json ]; then
  cat > package.json <<'PKG'
{
  "name": "southern-brief",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "npm-run-all --parallel watch:css dev:eleventy",
    "dev:eleventy": "npx eleventy --serve --config .eleventy.js",
    "build:css": "npx tailwindcss -i ./src/assets/styles.css -o ./static/css/style.css --minify",
    "watch:css": "npx tailwindcss -i ./src/assets/styles.css -o ./static/css/style.css --watch",
    "build": "npm run build:css && npx eleventy --config .eleventy.js"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1",
    "autoprefixer": "^10.4.14",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.23",
    "postcss-cli": "^10.1.0",
    "tailwindcss": "^3.5.1"
  }
}
PKG
else
  cp package.json package.json.bak || true
  node - <<'NODE'
const fs = require('fs');
const p = 'package.json';
const pkg = JSON.parse(fs.readFileSync(p, 'utf8') || '{}');
pkg.scripts = Object.assign({}, pkg.scripts||{}, {
  "dev": "npm-run-all --parallel watch:css dev:eleventy",
  "dev:eleventy": "npx eleventy --serve --config .eleventy.js",
  "build:css": "npx tailwindcss -i ./src/assets/styles.css -o ./static/css/style.css --minify",
  "watch:css": "npx tailwindcss -i ./src/assets/styles.css -o ./static/css/style.css --watch",
  "build": "npm run build:css && npx eleventy --config .eleventy.js"
});
pkg.devDependencies = Object.assign({
  "@11ty/eleventy": "^2.0.1",
  "autoprefixer": "^10.4.14",
  "npm-run-all": "^4.1.5",
  "postcss": "^8.4.23",
  "postcss-cli": "^10.1.0",
  "tailwindcss": "^3.5.1"
}, pkg.devDependencies||{});
fs.writeFileSync(p, JSON.stringify(pkg, null, 2));
console.log('package.json updated');
NODE
fi

# Install packages (prefer speedy ci)
log "Installing npm dependencies..."
if npm ci --silent 2>/dev/null ; then log "npm ci succeeded"; else npm install --silent; fi

# Build CSS
log "Building Tailwind CSS..."
npx tailwindcss -i ./src/assets/styles.css -o ./static/css/style.css --minify || log "tailwind build failed (check logs)"

# Run Eleventy build to validate
log "Validating Eleventy build (this may print errors)..."
set +e
npx eleventy --config .eleventy.js 2>&1 | tee -a "$LOG"
ELE_EXIT=${PIPESTATUS[0]}
set -e
if [ "$ELE_EXIT" -ne 0 ]; then log "Eleventy build failed (check $LOG and the CLI output)."; else log "Eleventy build succeeded"; fi

# Add & commit
log "Staging and committing changes..."
git add -A
git commit -m "chore: Tailwind + Eleventy baseline / ensure repo structure" || log "No changes to commit."

# Push branch
log "Pushing branch $BRANCH to $REMOTE..."
git push -u "$REMOTE" "$BRANCH" || log "Push failed. Check network or remote permissions."

log "FINISHED. See $LOG for details and errors."
log "Tail of log:"
tail -n 60 "$LOG"
EXIT_STATUS=0
if [ "$ELE_EXIT" -ne 0 ]; then EXIT_STATUS=2; fi
exit $EXIT_STATUS
