# Research: Post 07 — I Benchmarked Mem0, Zep, LangMem, and OpenBrain So You Don't Have To

## Key Sources
- Innobu: Agent Memory 2026 Comparison — Mem0 92.5% LoCoMo, Zep 63.8% LongMemEval vs Mem0 49.0%
  https://www.innobu.com/en/articles/agent-memory-2026-mem0-letta-zep-hermes-openclaude-comparison.html
- Rohit Raj: Mem0 vs Zep vs Letta vs MemPalace — MemPalace 96.6% LongMemEval zero API calls
  https://rohitraj.tech/en/notes/open-source-ai-agent-memory-mem0-vs-zep-letta-2026
- Atlan: Best AI Agent Memory Frameworks 2026 — Zep 63.8% vs Mem0 49.0%, 15-point gap
  https://atlan.com/know/best-ai-agent-memory-frameworks-2026/
- Dev Genius: AI Agent Memory Systems 2026 Compared — Mem0 architecture, OpenAI Memory failure on temporal
  https://blog.devgenius.io/ai-agent-memory-systems-in-2026
- Mem0: State of AI Agent Memory 2026 — temporal queries +29.6 points with new algorithm
  https://mem0.ai/blog/state-of-ai-agent-memory-2026
- OpenBrain: MCP-compatible open-source memory on Supabase
  https://github.com/openai/openbrain (via search context)

## Storyteller Tactic
**Data Detectives** — start with the numbers (benchmark comparison), zoom in on the story behind them (why the 15-point gap exists), identify the surprising finding (MemPalace beats dedicated frameworks with zero API calls), draw the conclusion.

## Key Point
The 15-point accuracy gap between Zep and Mem0 on temporal queries is not a product quality difference — it is an architectural difference that reveals what "memory" actually means.
