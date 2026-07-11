# Research: Post 09 — Why Temporal Reasoning in Mem0 and Zep Still Isn't Enough

## Key Sources
- Mem0: State of AI Agent Memory 2026 — temporal queries +29.6 points, still LLM-extracted not schema-enforced
  https://mem0.ai/blog/state-of-ai-agent-memory-2026
- arXiv:2605.26252: Is Agent Memory a Database? — Zep bi-temporal edges, silent dependency drift
  https://arxiv.org/html/2605.26252
- Atlan: Best AI Agent Memory Frameworks 2026 — Zep temporal knowledge graph, 300ms p95
  https://atlan.com/know/best-ai-agent-memory-frameworks-2026/
- Dev Genius: AI Agent Memory Systems Compared — OpenAI Memory failed temporal because no timestamps on stored memories
  https://blog.devgenius.io/ai-agent-memory-systems-in-2026
- arXiv:2602.19320: Anatomy of Agentic Memory — TiMem temporal-hierarchical memory tree
  https://arxiv.org/html/2602.19320v1

## Storyteller Tactic
**That's Funny** — it's funny (peculiar) that OpenAI Memory, the product of the world's most advanced AI lab, failed temporal queries not because of model capability but because nobody remembered to attach timestamps to stored memories. The insight: temporal reasoning and temporal validity are different problems.

## Key Point
Temporal reasoning (can the model reason about time?) and temporal validity (does the memory system enforce when facts are valid?) are different problems — and conflating them is why even the best systems fail on time-sensitive queries.
