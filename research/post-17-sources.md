# Research: Post 17 — Why I Chose Zig (Then Reconsidered) for a Zero-Copy Memory Runtime

## Key Sources
- Zig language: memory safety without GC, comptime, zero-cost abstractions
  https://ziglang.org
- C FFI: calling C from Go, Rust, Python — universal interop
- SilicaDB internal notes: C parser first, Zig rewrite planned later
- SQLite source: written in C, embedded everywhere, proof of C viability
- arXiv:2605.26252: performance requirements for agent memory — sub-50ms retrieval

## Storyteller Tactic
**No Easy Way** — realistic account of implementation tradeoffs. Zig is genuinely better in the long run. C is genuinely better right now. The post names the tradeoffs honestly and shows why the decision is not permanent.

## Key Point
The language choice for an embedded memory runtime is a deployment constraint problem, not a language preference problem — C reaches everywhere Zig does not yet.
