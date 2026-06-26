# Research: Post 03 — Why Developers Keep Stuffing Everything Into the System Prompt

## Key Sources
- TianPan.co: Context Stuffing Antipattern — 18 frontier models, all degrade with context size
  https://tianpan.co/blog/2026-04-09-context-stuffing-antipattern-llm-production
- Medium/Data Science Collective: Why Long System Prompts Hurt Context Windows
  https://medium.com/data-science-collective/why-long-system-prompts-hurt-context-windows-and-how-to-fix-it
- Augment Code: AI Agent Loop Token Costs — N(N+1)/2 triangular cost formula
  https://www.augmentcode.com/guides/ai-agent-loop-token-cost-context-constraints
- Atlan: Working Memory in LLMs — "lost in the middle" effect documented
  https://atlan.com/know/working-memory-llms/
- Ably: Stateful Agents, Stateless Infrastructure
  https://ably.com/blog/stateful-agents-stateless-infrastructure-ai-transport-gap
- OWASP Top 10 for LLMs 2025 — prompt injection via context stuffing
  https://genai.owasp.org/llm-top-10/

## Storyteller Tactic
**Thoughtful Failures** — every dev who has stuffed a system prompt made a rational choice at the time. 
This post extracts the wisdom from that failure pattern without assigning blame.

## Key Point
Stuffing the system prompt is rational at prototype scale and catastrophic at production scale — the incentive that creates it is also the mechanism that destroys it.
