# Research: Post 15 — The Case for Embedded Agent Memory: No Server, No Problem

## Key Sources
- ZeroClaw: SQLite no network round-trips, 3.4MB binary, faster than dedicated vector databases
  https://zeroclaws.io/blog/zeroclaw-sqlite-fts5-vector-hybrid-memory-explained/
- AIngram: fully local, RTX 4060, no cloud dependencies
  https://github.com/bozbuilds/AIngram
- MemPalace: 96.6% LongMemEval with zero API calls
  https://rohitraj.tech/en/notes/open-source-ai-agent-memory-mem0-vs-zep-letta-2026
- Rohit Raj: "The capability that changed is where memory lives"
  https://rohitraj.tech/en/notes/open-source-ai-agent-memory-mem0-vs-zep-letta-2026
- Cloudflare agents: local-first per-agent memory inside Durable Object
  https://github.com/cloudflare/agents/issues/1472
- Mem0: 14M downloads, AWS Agent SDK exclusive — cloud-first dominance and its tradeoffs

## Storyteller Tactic
**Hero & Guide** — the hero is the developer building an agent that needs to work anywhere: edge, mobile, offline, airgapped enterprise. Cloud-first memory is the dragon. Embedded memory is the guide's gift. SilicaDB is the guide.

## Key Point
Cloud-first agent memory architectures create dependencies that break at exactly the moments when agents need to be most reliable. Embedded memory eliminates the dependency class entirely.
