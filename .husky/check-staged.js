import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("\n[Husky] Running pre-commit verification...\n");

const FILE_REGEX = /\.(ts|tsx|js|jsx)$/;

function getFilesRecursively(dir) {
  let results = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (FILE_REGEX.test(file)) {
      results.push(filePath);
    }
  }

  return results;
}

// Get staged files
let stagedFiles = [];

try {
  const output = execSync(
    "git diff --cached --name-only --diff-filter=ACMR",
    {
      encoding: "utf8",
    }
  );

  stagedFiles = output
    .split("\n")
    .map((file) => file.trim())
    .filter((file) => file && FILE_REGEX.test(file));
} catch {
  stagedFiles = [];
}

// Fallback
if (stagedFiles.length === 0) {
  stagedFiles = getFilesRecursively("./src");
}

if (stagedFiles.length === 0) {
  console.log("No TypeScript/JavaScript files found.");
  process.exit(0);
}

console.log(`Files to verify (${stagedFiles.length}):`);

stagedFiles.forEach((file) => {
  console.log(`   • ${file}`);
});

console.log("\n------------------------------------------------\n");

let hasErrors = false;

// ESLint
console.log("[1/2] Checking ESLint...");

try {
  execSync("npx eslint .", {
    stdio: "inherit",
  });

  console.log("\n   ✓ ESLint passed\n");
} catch {
  hasErrors = true;

  console.log("\n   ✗ ESLint failed\n");
}

// TypeScript
console.log("[2/2] Checking TypeScript...");

try {
  execSync("npx tsc -b", {
    stdio: "inherit",
  });

  console.log("\n   ✓ TypeScript passed\n");
} catch {
  hasErrors = true;

  console.log("\n   ✗ TypeScript failed\n");
}

console.log("------------------------------------------------");

if (hasErrors) {
  console.log("\n✗ Pre-commit verification FAILED.");
  console.log("Fix the errors before committing.\n");

  process.exit(1);
}

console.log("\n✓ All checks passed.");
console.log("✓ Proceeding with commit...\n");

process.exit(0);