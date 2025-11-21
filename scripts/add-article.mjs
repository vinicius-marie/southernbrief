#!/usr/bin/env node
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rl = createInterface({ input, output });

const ask = async (question, { required = true, defaultValue = "" } = {}) => {
  while (true) {
    const answer = (await rl.question(defaultValue ? `${question} (${defaultValue}): ` : `${question}: `)).trim();
    if (!answer && required && !defaultValue) {
      console.log("This field is required.\n");
      continue;
    }
    return answer || defaultValue;
  }
};

const askOptional = (question) => ask(question, { required: false });

const askBoolean = async (question) => {
  const answer = (await rl.question(`${question} (y/N): `)).trim().toLowerCase();
  return answer === "y" || answer === "yes";
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "..", "src", "data", "articles.json");

try {
  const raw = await readFile(dataPath, "utf8");
  const articles = JSON.parse(raw);

  console.log("\nAdd a new analysis article to src/data/articles.json\n");

  const section = await ask("Section (e.g. Politics)");
  const country = await ask("Country (e.g. Argentina)");
  const defaultCountryId = slugify(country);
  const countryId = await ask("Country ID", { required: false, defaultValue: defaultCountryId });
  const title = await ask("Headline");
  const standfirst = await ask("Standfirst / summary");
  const author = await ask("Author");
  const date = await ask("Date label (e.g. Nov 21)");
  const image = await askOptional("Image URL (leave blank for none)");
  const feature = await askBoolean("Mark as featured");

  const newArticle = {
    section,
    country,
    countryId,
    title,
    standfirst,
    author,
    date,
  };

  if (image) {
    newArticle.image = image;
  }

  if (feature) {
    articles.forEach((article) => {
      if (article.featured) {
        delete article.featured;
      }
    });
    newArticle.featured = true;
  }

  const placeFirst = await askBoolean("Place at top of the list");
  if (placeFirst) {
    articles.unshift(newArticle);
  } else {
    articles.push(newArticle);
  }

  await writeFile(dataPath, `${JSON.stringify(articles, null, 2)}\n`);

  console.log("\nArticle saved. Review src/data/articles.json and commit the change.");
} catch (error) {
  console.error("Failed to add article:", error.message);
  process.exitCode = 1;
} finally {
  rl.close();
}
