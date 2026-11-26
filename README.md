# Office Joke — Make the AI Judge Laugh

[![Make the AI Judge Laugh](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/musemosmouses/office-joke-alfasurya/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/musemosmouses/office-joke-alfasurya/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

Entry for the [make.fun](https://make.fun) bounty
**[Make the AI Judge Laugh](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)**.

One joke about office life, a single line under 200 characters (114, to be
exact). A judge model compares the jokes two at a time and the funniest
lines take the pool.

## The joke

> I wrote 'per my last email' today, which is office code for 'I know you didn't read it, and I know that you know.'

## How it works

`main.ts` (Node 22, standard library only) writes that one line to
`/output/entry.txt` and nothing else. No network, no clock, no randomness —
run it twice and the output is byte-identical.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Built with [make.fun](https://make.fun/r/w3zshnah).

## License

MIT — see [LICENSE](LICENSE).
