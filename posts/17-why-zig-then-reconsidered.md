---
title: "Why I Chose Zig (Then Reconsidered) for a Zero-Copy Memory Runtime"
series: "The Memory Problem"
post: 17
status: draft
storyteller_tactic: "No Easy Way"
tags: [silicadb, zig, c, implementation, zero-copy, embedded, build-in-public]
date: 2026-06-25
---

# Why I Chose Zig (Then Reconsidered) for a Zero-Copy Memory Runtime

The language choice for an embedded system is not a preference — it is a constraint satisfaction problem. The constraints come first. The language comes from what satisfies them.

For SilicaDB, the constraints are:

- **Zero dependencies.** The library must compile and run with no external dependencies. No garbage collector. No runtime. No dynamic linking to anything that is not guaranteed to be present.
- **Universal FFI.** The library must be callable from Go, Rust, Python, TypeScript, and any other language an agent developer might be using. Universal FFI means exposing a C ABI.
- **Zero-copy reads.** Retrieving a memory record should not require allocating a copy of the record. The agent should be able to read directly from the storage buffer.
- **Predictable allocation.** Memory allocation must be explicit and bounded. A memory runtime that allocates unpredictably cannot be trusted in embedded or resource-constrained environments.
- **Sub-50ms retrieval.** The p95 latency for a memory retrieval call must be under 50ms for the embedded architecture to be meaningfully faster than cloud alternatives.

These constraints, taken together, point strongly toward systems programming languages: C, C++, Rust, or Zig. They rule out languages with garbage collectors. They rule out languages without predictable allocation. They rule out languages with heavy runtimes.

---

## Why Zig Was the First Choice

Zig satisfies all five constraints while solving several problems that C does not.

**Comptime.** Zig's compile-time evaluation enables type-safe generic code without the complexity of C++ templates or Rust's trait system. For SODL, this means the parser can generate type-specialized memory accessors at compile time — if your schema declares a `UserPreference` semantic memory type, the compiled library includes a type-safe accessor for UserPreference records, not a generic void-pointer accessor that requires casting.

**Explicit allocators.** Zig requires every allocation to specify an allocator explicitly. There is no hidden malloc. This constraint makes allocation patterns visible and testable — you can run the entire library with an arena allocator that fails after N bytes to test allocation failure handling, without mocking any system calls.

**Safety without GC.** Zig provides optional runtime safety checks — bounds checking, null pointer detection, undefined behavior detection — that can be enabled in debug builds and disabled in release builds. This gives you C-level performance in production and safety checks during development, without the overhead of a garbage collector.

**WASM target.** Zig compiles to WebAssembly with minimal friction. An embedded memory library that targets WASM can run in Cloudflare Workers, browser extensions, and any other WASM-capable environment — addressing the portability gap that sqlite-vec's virtual table limitation creates in Durable Objects.

---

## Why C Is the First Build Step

Zig is the better language for this project in the long run. C is the right choice for the first build step.

The reason is toolchain maturity. Zig's toolchain is stable enough for production use in many contexts, but the ecosystem for FFI testing, cross-compilation verification, and integration testing against the full range of target environments is more mature for C. Every embedding target — CPython, Go's CGo, Rust's bindgen, Node.js's node-addon-api — has a decades-long track record of correctly integrating C libraries. The same cannot be said for Zig libraries, which expose a C ABI at the FFI boundary but are compiled by a Zig toolchain that each binding generator must learn to trust.

There is also the documentation and example ecosystem. When something goes wrong in a C FFI integration, there are twenty years of Stack Overflow answers, mailing list threads, and blog posts about how to debug it. When something goes wrong in a Zig FFI integration, the community is smaller and the documented failure modes are fewer.

The strategy is: C parser and storage layer first, validated against the SODL spec and tested through the full range of target FFI environments. Zig rewrite of the hot path — the zero-copy read operations and the temporal validity filter — after the C implementation is stable and the performance bottlenecks are measured rather than predicted.

This is the "No Easy Way" of implementation: the right path is longer than it appears, and the honest account of why the shorter path was not taken is part of the design documentation.

---

## Zero-Copy Reads: Why They Matter

The zero-copy read requirement deserves explanation, because it is the performance constraint that most strongly shapes the storage layer design.

A zero-copy read means that when an agent retrieves a memory record, the agent reads directly from the memory-mapped storage buffer — no allocation, no copying, no deserialization. The record is already in memory in its final form, and the agent reads it in place.

This requires that records are stored in a binary format that is valid in memory without transformation. Flatbuffers, Cap'n Proto, and similar zero-copy serialization formats achieve this. SQLite does not — a SQLite read involves deserializing the row from the database's page format into an in-memory structure that the caller can access. The deserialization is fast, but it is not zero.

For a memory system that is called thousands of times per complex agent run, the difference between zero-copy and deserialization-on-read accumulates. SODL's type system is designed to support zero-copy serialization: every field has a fixed offset within the record layout, every field has a fixed type, and the record layout is part of the schema specification. The C parser generates the record layout constants at compile time; the storage layer maps records directly to those layouts.

This is the performance justification for SODL — the schema is not just documentation. It is the contract that enables zero-copy reads.

---

*This is post 17 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
