import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I skipped that spot because my sensors reclassified it as a protected habitat for one sock, and my schedule does not include evictions.";

// Validation gate: one line, 1-200 chars, no whitespace-only content.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
