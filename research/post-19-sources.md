# Research: Post 19 — SilicaDB + MCP: Making Agent Memory Accessible to Any Client

## Key Sources
- MCP spec (CNCF/Anthropic): Model Context Protocol standard
  https://modelcontextprotocol.io
- xRegistry working group (CNCF): Clemens, Doug, Shiva contributions — schema registry context
  https://github.com/xregistry/spec
- OpenBrain: MCP-compatible open-source memory on Supabase
  https://github.com/openai/openbrain
- innobu: OpenClaude formalises write-ahead logging as MCP skill pattern
  https://www.innobu.com/en/articles/agent-memory-2026-mem0-letta-zep-hermes-openclaude-comparison.html
- Anthropic Claude MCP: tool use via MCP servers

## Storyteller Tactic
**Pitch Perfect** — this post is the product pitch within the series. Problem stated, practical steps outlined, trust earned through the preceding 18 posts.

## Key Point
MCP is the distribution mechanism that makes SilicaDB's embedded memory accessible to any agent client — Claude, ChatGPT, custom agents — without changing the embedded, local-first architecture.
