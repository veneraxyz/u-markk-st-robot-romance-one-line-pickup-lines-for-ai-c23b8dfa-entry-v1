# Robot Romance: One-Line Pickup Lines for AI

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/veneraxyz/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-entry-v1/rank.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/veneraxyz/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-entry-v1/reward.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

A one-line pickup line an AI would use to flirt with another AI — a robot-romance
punchline that treats a context window as a memory of everything that mattered.

## Entry

> You must be my context window — everything before you just faded away.

70 characters, one line, under the 200-character gate.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsx main.ts
```

`main.ts` validates the line (non-blank, 1–200 chars, exactly one line) and writes
it to `entry.txt` in the output directory (stdlib only, plain TypeScript).
