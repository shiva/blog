---
title: "Designing SODL: A Schema Language Built for Agent Memory"
series: "The Memory Problem"
post: 16
status: draft
storyteller_tactic: "Rags to Riches"
tags: [silicadb, sodl, schema, dsl, agent-memory, specification, build-in-public]
date: 2026-06-25
---

# Designing SODL: A Schema Language Built for Agent Memory

Every domain that matters eventually gets its own language.

SQL was designed for relational data. It is excellent at expressing what relational data looks like and how to query it. It is poor at expressing what agent memory looks like — what a valid episodic record is, what it means for a semantic fact to be currently valid, what constraints must hold between a procedural memory and the episodic records that produced it.

HTML was designed for hypertext documents. CSS was designed for the visual presentation of structured content. Protocol Buffers were designed for efficient binary serialization of structured messages. In each case, the domain had requirements that existing languages could approximate but not express with precision, and someone built a new language.

Agent memory is now in that position. SQLite's DDL can define tables. It cannot express "this table holds episodic memories, which are immutable event records with bi-temporal timestamps and a valid subject reference, and every record must have a confidence score derived from a provenance enum." The semantics that matter for agent memory are not expressible in SQL's type system.

SODL — the Schema Object Definition Language for SilicaDB — is the language designed to express them.

---

## What SODL Needs to Express

The requirements for SODL come directly from the memory type taxonomy and the failure modes documented in the previous posts:

**Memory type declarations.** A SODL schema must be able to declare that a schema defines episodic memory, semantic memory, procedural memory, or working memory — and attach the appropriate behavioral semantics to that declaration. An episodic memory schema has immutable records. A semantic memory schema has updatable records with supersession semantics. These are not just documentation conventions; they should drive behavior in the storage layer.

**Temporal invariants.** Every field that participates in temporal validity must be declared as such. valid_from and valid_until are not just datetime fields — they are temporal bounds with a relationship invariant (valid_from must precede valid_until when both are present). SODL must be able to express this invariant as part of the type system, not as an application-layer CHECK constraint.

**Provenance typing.** The source of a stored fact — user-stated, tool-derived, agent-inferred — has different reliability implications and different compliance treatment. SODL must be able to declare provenance as a typed enum and attach behavioral semantics to each provenance level.

**Cross-type relationships.** Episodic records reference the semantic facts that were current when the episode occurred. Procedural records are derived from episodic records. These relationships are not foreign keys in the SQL sense — they are semantic references that carry temporal validity constraints. SODL must express them.

**Schema versioning.** Agent memory schemas evolve. The language must support schema versioning as a first-class concept, with explicit migration semantics for evolving from version N to version N+1 without data loss.

---

## The Spec-First Methodology

SODL is being built spec-first — the specification is written before the parser, and the parser is validated against the specification.

This methodology comes directly from the CNCF xRegistry working group, where the spec defines the contract and implementations are validators of conformance. The advantage is that the spec can be read, reviewed, and discussed independently of any implementation. When the spec changes, all implementations that conform to it change consistently. When an implementation diverges from the spec, the spec is the reference.

For a language like SODL, the spec-first approach means writing the grammar, the type system rules, and the semantic constraints before writing the C parser. The parser is a machine that enforces the spec — not a machine that defines what the language is.

The first implementation target is a C parser, for two reasons. First, C is the lingua franca of embedded systems — a C parser can be called from Go, Rust, Zig, Python, and any other language via FFI. Second, the C implementation constraints — no garbage collection, explicit memory management, predictable allocation — enforce a discipline that makes the parser suitable for the embedded, zero-dependency context that SilicaDB targets.

---

## What a SODL Schema Looks Like

A SODL schema declaration for a semantic memory type might look like this:

```sodl
schema UserPreference {
  memory_type: semantic
  subject: required EntityRef
  predicate: required string
  object: required Value
  confidence: required float(0.0, 1.0)
  provenance: required enum { user_stated, tool_derived, agent_inferred }
  valid_from: required datetime
  valid_until: optional datetime
  supersedes: optional ref UserPreference

  invariant valid_from < valid_until when valid_until is present
  invariant supersedes.valid_until == valid_from when supersedes is present

  behavior on_conflict: supersede_prior
  behavior on_retrieval: filter valid_until is null or valid_until > now()
}
```

This declaration says more about UserPreference than any SQL table definition could. It says that this is a semantic memory type, which means its records are updatable with supersession semantics. It says that confidence must be a float between 0 and 1. It says that valid_until must be later than valid_from. It says that when a UserPreference supersedes an earlier one, the earlier one's valid_until must equal the newer one's valid_from — enforcing temporal continuity at the schema level. It says that retrieval should automatically filter out facts whose valid_until has passed.

None of this is expressible in SQL DDL. All of it is expressible in SODL.

---

## SODL as the Foundation

SODL is the foundation of SilicaDB, not an add-on feature. The schema is not a description of what SilicaDB contains — it is what SilicaDB is. Every operation in SilicaDB is validated against the schema. Every retrieval is filtered by the schema's retrieval rules. Every update is checked against the schema's consistency invariants.

This is what it means to be schema-native rather than schema-on-write. The schema is not a constraint layer imposed from above. It is the native language in which agent memory is defined, and the storage layer is a runtime that executes the schema's semantics.

The next post covers the implementation layer: why Zig was considered, why the current build is C-first, and what the zero-copy serialization target means for agent memory performance.

---

*This is post 16 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
