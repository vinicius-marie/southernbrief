#!/usr/bin/env node
import { exec as execCallback } from "node:child_process";
import { promisify } from "node:util";
import { gray, green, yellow } from "kolorist";

const exec = promisify(execCallback);

async function run(command) {
  console.log(gray(`\n$ ${command}`));
  const { stdout, stderr } = await exec(command);
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
}

export async function deploy({ skipIfClean = true } = {}) {
  const { stdout: statusBefore } = await exec("git status --porcelain");
  if (skipIfClean && !statusBefore.trim()) {
    console.log(yellow("\nNo changes to deploy; skipping build and push."));
    return;
  }

  await run("npm run build");

  const { stdout: statusAfterBuild } = await exec("git status --porcelain");
  if (skipIfClean && !statusAfterBuild.trim()) {
    console.log(
      yellow("\nNo changes after build; skipping commit and push."),
    );
    return;
  }

  await run("git add .");
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 16);
  await run(`git commit -m "Deploy: ${timestamp}"`);
  await run("git push");
  console.log(green("\nDeployment complete."));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  deploy().catch((error) => {
    console.error("Deployment failed:", error.message);
    process.exitCode = 1;
  });
}
