# Research: Post 16 — Designing SODL: A Schema Language Built for Agent Memory

## Key Sources
- SODL spec (internal): schema definition language for SilicaDB, C parser first build step
- CoALA Framework arXiv:2309.02427 — four memory types as type system foundation
- arXiv:2605.26252: Is Agent Memory a Database? — schema volatility, type hierarchy for agent facts
- EvolveMem arXiv:2605.13941v1 — SQLite schema version 6, memory types as enum
- xRegistry spec (CNCF) — spec-first design methodology, schema as contract

## Storyteller Tactic
**Rags to Riches** — starts from the limitation (no language for expressing agent memory schemas), shows the hidden value in existing type theory and spec-first methodology, arrives at SODL as the earned result of applying known principles to an unsolved problem.

## Key Point
SODL exists because SQL DDL cannot express agent memory semantics — the four memory types, their temporal invariants, and their relationships require a language designed for this domain.
