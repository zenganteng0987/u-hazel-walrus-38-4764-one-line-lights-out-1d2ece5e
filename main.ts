import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The lid just closed. Your cursor is still blinking on the last line you never finished, and the fan is the only thing still talking. Goodnight, I guess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
