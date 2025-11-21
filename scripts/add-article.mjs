#!/usr/bin/env node
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bold, cyan, green, yellow, magenta, gray } from "kolorist";
import { deploy } from "./deploy.mjs";

const rl = createInterface({ input, output });

const ask = async (question, { required = true, defaultValue = "" } = {}) => {
  while (true) {
    const suffix = defaultValue ? ` (${defaultValue})` : "";
    const answer = (await rl.question(`${question}${suffix}: `)).trim();
    if (!answer && defaultValue) {
      return defaultValue;
    }
    if (!answer && required) {
      console.log(gray("This field is required.\n"));
      continue;
    }
    return answer;
  }
};

const askOptional = async (question) => {
  const answer = (await rl.question(`${question} (optional): `)).trim();
  return answer || undefined;
};

const askBoolean = async (question, defaultValue = false) => {
  const hint = defaultValue ? "Y/n" : "y/N";
  const answer = (await rl.question(`${question} (${hint}): `))
    .trim()
    .toLowerCase();
  if (!answer) return defaultValue;
  return ["y", "yes"].includes(answer);
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "..", "src", "data");
const articlesPath = path.join(dataDir, "articles.json");
const briefsPath = path.join(dataDir, "briefs.json");

const buildDateLabel = () => {
  const now = new Date();
  const monthDay = now.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const time = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${monthDay}, ${time}`;
};

const chooseContentType = async () => {
  while (true) {
    const answer = (await rl.question("Add analysis or brief? (analysis): "))
      .trim()
      .toLowerCase();
    if (!answer || answer === "analysis") return "analysis";
    if (answer === "brief") return "brief";
    console.log(gray("Please answer with 'analysis' or 'brief'.\n"));
  }
};

const showPreview = (title, payload) => {
  console.log(`\n${bold(cyan(title))}`);
  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined) return;
    console.log(`  ${magenta(key)}: ${value}`);
  });
  console.log();
};

try {
  console.log(bold(cyan("\nSouthern Brief Content Helper")));
  const type = await chooseContentType();

  if (type === "analysis") {
    const articles = JSON.parse(await readFile(articlesPath, "utf8"));
    const section = await ask("Section (e.g. Politics)");
    const country = await ask("Country");
    const defaultCountryId = slugify(country);
    const countryId = await ask("Country ID", {
      required: false,
      defaultValue: defaultCountryId,
    });
    const title = await ask("Headline");
    const standfirst = await ask("Standfirst / summary");
    const author = await ask("Author");
    const dateDefault = buildDateLabel();
    const date = await ask("Date label (e.g. Nov 21, 14:30)", {
      required: false,
      defaultValue: dateDefault,
    });
    const image = await askOptional("Image URL");
    const featured = await askBoolean("Make this the featured story?");
    const placeFirst = await askBoolean("Insert at top of list?", true);

    const newArticle = {
      section,
      country,
      countryId,
      title,
      standfirst,
      author,
      date,
    };

    if (image) newArticle.image = image;

    if (featured) {
      for (const article of articles) {
        if (article.featured) delete article.featured;
      }
      newArticle.featured = true;
    }

    if (placeFirst) {
      articles.unshift(newArticle);
    } else {
      articles.push(newArticle);
    }

    showPreview("New analysis", newArticle);
    await writeFile(articlesPath, `${JSON.stringify(articles, null, 2)}\n`);
    console.log(green("Analysis saved to src/data/articles.json"));
  } else {
    const briefs = JSON.parse(await readFile(briefsPath, "utf8"));
    const source = await ask("Source (e.g. La Nación)");
    const title = await ask("Headline");
    const summary = await ask("Summary sentence");
    const country = await ask("Country");
    const defaultCountryId = slugify(country);
    const countryId = await ask("Country ID", {
      required: false,
      defaultValue: defaultCountryId,
    });
    const dateDefault = buildDateLabel();
    const date = await ask("Date label (e.g. Nov 21, 14:30)", {
      required: false,
      defaultValue: dateDefault,
    });
    const placeFirst = await askBoolean("Insert at top of list?", true);

    const newBrief = {
      source,
      title,
      summary,
      country,
      countryId,
      date,
    };

    if (placeFirst) {
      briefs.unshift(newBrief);
    } else {
      briefs.push(newBrief);
    }

    showPreview("New brief", newBrief);
    await writeFile(briefsPath, `${JSON.stringify(briefs, null, 2)}\n`);
    console.log(green("Brief saved to src/data/briefs.json"));
  }

  console.log(
    yellow(
      "\nNext steps: review the JSON diff. This helper can now build, commit, and push for you.",
    ),
  );

  const shouldDeploy = await askBoolean(
    "Run build, commit, and push to origin now?",
    true,
  );

  if (shouldDeploy) {
    try {
      await deploy();
    } catch (error) {
      console.error("Deployment failed:", error.message);
      process.exitCode = 1;
    }
  }
} catch (error) {
  console.error("Failed to add content:", error.message);
  process.exitCode = 1;
} finally {
  rl.close();
}
