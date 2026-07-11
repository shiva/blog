# Research: Post 11 — Schema-Native Storage: What It Means and Why Agents Care

## Key Sources
- arXiv:2606.24775: Are We Ready For An Agent-Native Memory System? — schema vs schemaless tradeoffs
  https://arxiv.org/html/2606.24775
- arXiv:2605.26252: Is Agent Memory a Database? — schema-volatile domains, rigid schema breaks
  https://arxiv.org/html/2605.26252
- Atlan: Agent Memory Architectures 2026 — Pattern 4 graph memory: "do not use when domain schema is highly volatile"
  https://atlan.com/know/agent-memory-architectures/
- Zylos: AI Agent Memory Architectures — Weaviate Context Engineering framework
  https://zylos.ai/research/2026-04-05-ai-agent-memory-architectures-persistent-knowledge/
- CoALA Framework arXiv:2309.02427 — canonical taxonomy, memory types vs architectures

## Storyteller Tactic
**What's it About?** — introduce the concept cleanly before the reader needs it. Schema-native storage is the core SilicaDB concept; this post gives readers the vocabulary before the build-in-public arc begins.

## Key Point
Schema-native storage means the schema is not a constraint imposed on data — it is the data's native language. For agents, this distinction determines whether memory can make correctness guarantees.
