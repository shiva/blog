# Research: Post 14 — I Built Agent Memory on SQLite + FTS5 + sqlite-vec. Here's What Broke.

## Key Sources
- ZeroClaw: SQLite + FTS5 + vectors beat dedicated vector databases on latency and memory
  https://zeroclaws.io/blog/zeroclaw-sqlite-fts5-vector-hybrid-memory-explained/
- Cloudflare agents issue: sqlite-vec not supported in Durable Object SQLite; vec0 virtual table rejected
  https://github.com/cloudflare/agents/issues/1472
- AIngram GitHub: SQLite + FTS5 + QJL two-pass vector, LongMemEval recall@3=1.000 oracle
  https://github.com/bozbuilds/AIngram
- EvolveMem arXiv:2605.13941: SQLite schema version 6, WAL mode, FTS5 virtual table
  https://arxiv.org/html/2605.13941v1
- Hermes Agent issue: SQLite FTS5 memory lifecycle, trust scores, daily pruning
  https://github.com/NousResearch/hermes-agent/issues/31720

## Storyteller Tactic
**Thoughtful Failures** — first-person build log. What went wrong, why, what it revealed. The failures are the learning.

## Key Point
SQLite + FTS5 + sqlite-vec gets you 80% of agent memory for free — and the remaining 20% reveals exactly why a schema-native purpose-built system is necessary.
