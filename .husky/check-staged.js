import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('\n[Husky] Running pre-commit file verification...\n');

// Helper to recursively get files
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

// Try git staged files first
let stagedFiles = [];
try {
  const gitOutput = execSync('git diff --cached --name-only', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  stagedFiles = gitOutput
    .split('\n')
    .map((f) => f.trim())
    .filter((f) => f && /\.(ts|tsx|js|jsx)$/.test(f));
} catch (_err) {
  // Git fallback
}

// Fallback to all source files in src/ if no staged files detected
if (stagedFiles.length === 0) {
  try {
    stagedFiles = getFilesRecursively('./src');
  } catch (_err) {
    stagedFiles = [];
  }
}

if (stagedFiles.length === 0) {
  console.log('No TypeScript/JavaScript files found for verification.');
  console.log('------------------------------------------------\n');
  process.exit(0);
}

console.log(`Files To Verify (${stagedFiles.length} file${stagedFiles.length > 1 ? 's' : ''}):`);
stagedFiles.slice(0, 10).forEach((file) => console.log(`   • ${file}`));
if (stagedFiles.length > 10) {
  console.log(`   ... and ${stagedFiles.length - 10} more files`);
}
console.log('------------------------------------------------\n');

let hasErrors = false;

// 2. ESLint Check
console.log('[1/2] Checking ESLint Code Quality...');
try {
  execSync('npx eslint .', { stdio: 'pipe' });
  console.log('   Passed: All project files passed ESLint checks (0 errors)\n');
} catch (error) {
  hasErrors = true;
  console.log('   FAILED: ESLint check found issues!');
  console.log('   ---------------------------------------------');
  console.log('   Reason / Error Details:');
  const output = error.stdout ? error.stdout.toString() : error.stderr ? error.stderr.toString() : error.message;
  output.split('\n').forEach((line) => {
    if (line.trim()) console.log(`      ${line}`);
  });
  console.log('   ---------------------------------------------\n');
}

// 3. TypeScript Type Checker
console.log('[2/2] Checking TypeScript Types (tsc -b)...');
try {
  execSync('npx tsc -b', { stdio: 'pipe' });
  console.log('   Passed: All TypeScript types are 100% valid (0 errors)\n');
} catch (error) {
  hasErrors = true;
  console.log('   FAILED: TypeScript type check failed!');
  console.log('   ---------------------------------------------');
  console.log('   Reason / Error Details:');
  const output = error.stdout ? error.stdout.toString() : error.stderr ? error.stderr.toString() : error.message;
  output.split('\n').forEach((line) => {
    if (line.trim()) console.log(`      ${line}`);
  });
  console.log('   ---------------------------------------------\n');
}

console.log('------------------------------------------------');
if (hasErrors) {
  console.log('Pre-commit verification FAILED! Fix the errors above before committing.\n');
  process.exit(1);
} else {
  console.log('All files verified successfully! Proceeding with commit...\n');
  process.exit(0);
}
