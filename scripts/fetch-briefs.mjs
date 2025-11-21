#!/usr/bin/env node
import Parser from "rss-parser";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const briefsPath = path.join(__dirname, "..", "src", "data", "briefs.json");

/**
 * Southern Cone RSS sources
 * These can be tuned over time, but keep the mapping to the existing Brief shape.
 */
const RSS_SOURCES = [
  {
    url: "https://www.lanacion.com.ar/politica/rss",
    source: "La Nación",
    country: "Argentina",
    countryId: "argentina",
    limit: 3,
  },
  {
    url: "https://oglobo.globo.com/rss.xml",
    source: "O Globo",
    country: "Brazil",
    countryId: "brazil",
    limit: 3,
  },
  {
    url: "https://www.emol.com/rss/economia.xml",
    source: "El Mercurio",
    country: "Chile",
    countryId: "chile",
    limit: 3,
  },
  {
    url: "https://www.elobservador.com.uy/rss/",
    source: "El Observador",
    country: "Uruguay",
    countryId: "uruguay",
    limit: 3,
  },
];

const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: ["description", "content:encoded"],
  },
});

function formatDate(dateLike) {
  const d = new Date(dateLike);
  if (Number.isNaN(d.getTime())) {
    return "Unknown";
  }
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getDate()}`;
}

function cleanSummary(text) {
  if (!text) return "";
  // Strip basic HTML tags
  let t = text.replace(/<[^>]*>/g, "").trim();
  if (!t) return "";
  if (t.length <= 150) return t;
  const truncated = t.slice(0, 150);
  const lastPeriod = truncated.lastIndexOf(".");
  if (lastPeriod > 50) {
    return truncated.slice(0, lastPeriod + 1);
  }
  return truncated.trimEnd() + "…";
}

async function readExistingBriefs() {
  try {
    const raw = await readFile(briefsPath, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    console.warn("briefs.json is not an array, resetting to empty array");
    return [];
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn("briefs.json not found, starting with empty array");
      return [];
    }
    console.error("Error reading briefs.json:", err);
    process.exit(1);
  }
}

async function main() {
  const existingBriefs = await readExistingBriefs();
  const existingTitles = new Set(
    existingBriefs
      .map((b) => (b.title || "").toLowerCase().trim())
      .filter(Boolean),
  );

  const newBriefs = [];

  for (const source of RSS_SOURCES) {
    try {
      console.log(`Fetching ${source.source} (${source.url})…`);
      const feed = await parser.parseURL(source.url);
      const items = (feed.items || []).slice(0, source.limit ?? 3);

      for (const item of items) {
        const title = (item.title || "").trim();
        if (!title) continue;

        const titleKey = title.toLowerCase();
        if (existingTitles.has(titleKey)) continue;

        const rawText =
          item.contentSnippet ||
          item["content:encoded"] ||
          item.summary ||
          item.description ||
          "";

        const summary = cleanSummary(rawText);
        if (!summary) continue;

        const brief = {
          source: source.source,
          title,
          summary,
          country: source.country,
          countryId: source.countryId,
          date: formatDate(item.pubDate || item.isoDate || new Date()),
        };

        newBriefs.push(brief);
        existingTitles.add(titleKey);
      }
    } catch (err) {
      console.error(`Failed to fetch ${source.source}:`, err.message);
    }
  }

  if (newBriefs.length === 0) {
    console.log("No new briefs found.");
    return;
  }

  const updatedBriefs = [...newBriefs, ...existingBriefs].slice(0, 50);

  try {
    await writeFile(
      briefsPath,
      JSON.stringify(updatedBriefs, null, 2) + "\n",
      "utf8",
    );
    console.log(`✅ Added ${newBriefs.length} new briefs.`);
    for (const b of newBriefs) {
      console.log(`  - ${b.source}: ${b.title}`);
    }
  } catch (err) {
    console.error("Error writing briefs.json:", err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
