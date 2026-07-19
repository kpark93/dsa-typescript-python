#!/usr/bin/env node
/**
 * Removes AI/tool attribution trailers from commit messages.
 * Used by .githooks/prepare-commit-msg (installed via npm prepare).
 */

const fs = require("fs");

const messageFile = process.argv[2];
if (!messageFile) process.exit(0);

const blocked = [
  /^co-authored-by:\s*.+(cursor|anthropic|claude)/i,
  /^made-with:\s*cursor/i,
];

const cleaned = fs
  .readFileSync(messageFile, "utf8")
  .split("\n")
  .filter((line) => !blocked.some((pattern) => pattern.test(line)))
  .join("\n")
  .replace(/\s+$/, "\n");

fs.writeFileSync(messageFile, cleaned);
