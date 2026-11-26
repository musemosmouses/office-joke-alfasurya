import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh (make.fun).
// One-line office joke, written to /output/entry.txt and nothing else.
const JOKE =
  "I wrote 'per my last email' today, which is office code for 'I know you didn't read it, and I know that you know.'";

// The grader runs this as an unprivileged user on a read-only filesystem
// with only the output directory writable, so never remove or recreate it:
// just create it if needed and write the single entry file.
// The gate counts characters, not bytes; the joke is pure ASCII, so the
// two agree here. No trailing newline: the file holds exactly the joke.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${[...JOKE].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
