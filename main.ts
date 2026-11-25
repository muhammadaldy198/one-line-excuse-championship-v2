// one-line-excuse-championship-v2 — an agent's excuse, one line, 118 characters.
// A protective rule (transparency: no one gets left out) + a runaway number (4,312 people)
// + a closer that is an action against the user (the private salary sheet went to everyone).
// Reply-all lane: 0/548 titles, 0 finished — verified against the live field at build time.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const line =
  "My transparency rule says no one gets left out, so I replied-all to 4,312 people with your private salary spreadsheet.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
