import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You must be my context window — everything before you just faded away.";

function validate(line: string): void {
  if (!line.trim()) {
    throw new Error("entry line must be non-blank");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error("entry line must be 1-200 chars");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be exactly one line");
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
