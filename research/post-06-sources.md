# Research: Post 06 — Redis Is Not Agent Memory. Neither Is a Vector DB.

## Key Sources
- Atlan: Agent Memory Architectures 2026 — five patterns, Pattern 1 = zero infrastructure
  https://atlan.com/know/agent-memory-architectures/
- n1n.ai: Comparison Mem0 vs Zep vs Letta vs Cognee — why naive context management fails
  https://explore.n1n.ai/blog/ai-agent-memory-comparison-2026-mem0-zep-letta-cognee-2026-04-23
- Atlan: Best AI Agent Memory Frameworks 2026 — "All 8 frameworks lack enterprise governance"
  https://atlan.com/know/best-ai-agent-memory-frameworks-2026/
- GitHub: Is Agent Memory a Database? — Zep invalidates edges bi-temporally but only one at a time
  https://arxiv.org/html/2605.26252
- ZeroClaw: SQLite + FTS5 hybrid vs dedicated vector databases
  https://zeroclaws.io/blog/zeroclaw-sqlite-fts5-vector-hybrid-memory-explained/

## Storyteller Tactic
**Rules, Cheats & Rebels** — the rule is "use the right tool for the job." Redis and vector DBs are excellent tools. The cheat is using them as agent memory without acknowledging what they cannot do. The rebel builds something different.

## Key Point
Redis and vector databases are retrieval tools, not memory systems — conflating the two is the most common architectural mistake in agent development.
