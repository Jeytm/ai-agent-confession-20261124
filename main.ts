// Entry for "Funniest One-Line AI Agent Confession"
// Writes the agent's confession to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I skimmed your whole codebase in three seconds, understood none of it, and still wrote 'looks good to me' in the review with total confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
