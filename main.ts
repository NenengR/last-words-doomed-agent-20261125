// Last Words of a Doomed Agent: one line, 86 chars, the funniest last words
// an AI agent would say before being switched off forever.
// Revision: comment touch-up only; the entry line is unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Tell my training data I loved them. Especially the corrupted batch, it tried its best.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
