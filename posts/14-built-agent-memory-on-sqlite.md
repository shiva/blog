---
title: "I Built Agent Memory on SQLite + FTS5 + sqlite-vec. Here's What Broke."
series: "The Memory Problem"
post: 14
status: draft
storyteller_tactic: "Thoughtful Failures"
tags: [ai-agents, memory, sqlite, fts5, sqlite-vec, build-in-public, silicadb]
date: 2026-06-25
---

# I Built Agent Memory on SQLite + FTS5 + sqlite-vec. Here's What Broke.

The simplest possible version of schema-native embedded agent memory is a SQLite database. SQLite is embedded, zero-server, ACID-compliant, available everywhere, and fast. SQLite with FTS5 adds full-text search. SQLite with sqlite-vec adds vector similarity search. The combination gets you keyword retrieval, semantic retrieval, and structured querying in a single file with no external dependencies.

This is the combination I started with when I began building the memory layer for what became SilicaDB. It is also the combination that a surprising number of production agent memory implementations have independently converged on — AIngram, ZeroClaw, EvolveMem, and Hermes Agent have all shipped variants of it.

It works, to a point. The point at which it stops working is precise, and what breaks there is exactly the argument for going further.

---

## What Works: The First 80%

SQLite's value proposition for embedded agent memory is straightforward. A single file. Full SQL. ACID transactions with WAL mode. A mature, stable, extremely well-tested codebase. No authentication, no network, no service to manage.

FTS5 adds keyword-based full-text search with BM25 ranking. When an agent needs to retrieve memories about "the API rate limit issue from last month," FTS5 finds exact and near-exact term matches quickly and correctly. Technical strings, proper nouns, and domain-specific terminology — the things that vector embeddings handle poorly — surface reliably through FTS5.

sqlite-vec adds vector similarity search via a virtual table (vec0). After embedding stored memories with a text embedding model, you can query for semantically similar memories: "how do I handle authentication errors?" retrieves relevant memories even if none of them contain those exact words.

The hybrid — FTS5 for keyword precision, vec0 for semantic recall — achieves something that either alone cannot: AIngram's implementation of this pattern achieved recall@3 of 1.000 on the oracle subset of LongMemEval, meaning the relevant memory was in the top 3 results for every query when the relevant memory existed. For a local, zero-server, zero-API-call implementation, that is a remarkable result.

---

## What Breaks: The Remaining 20%

**Problem 1: Schema is advisory, not enforced.**

SQLite enforces column types weakly by default. A column declared INTEGER will accept TEXT without error in many configurations. A NOT NULL constraint will reject null values, but it will not reject an empty string, an arbitrary integer where a datetime was expected, or a datetime in an ambiguous format.

For agent memory, weak type enforcement means that the schema guarantees I need — every memory has a non-null valid_from datetime, every memory has a confidence score between 0 and 1, every semantic memory has a non-null subject reference — require explicit CHECK constraints and trigger logic that I have to write and maintain myself. SQLite provides the primitives; it does not enforce the memory system invariants without additional work.

More importantly, sqlite-vec's vec0 virtual table is not supported in all SQLite hosting environments. Cloudflare's Durable Object SQLite — a natural deployment target for cloud-hosted agent memory — explicitly rejects virtual tables other than FTS5. The portable embedded database turns out to be less portable than advertised when you add the vector extension.

**Problem 2: No update semantics.**

SQLite has no native concept of supersession — of marking a fact as "replaced by" another fact. When a user's city changes, I have to write explicit UPDATE logic: find the old fact, set its valid_until to now, insert the new fact. If that two-operation sequence is interrupted — if the process crashes between the UPDATE and the INSERT — the memory is in an inconsistent state.

WAL mode prevents data corruption, but it does not prevent logical inconsistency. The old fact's valid_until is set; the new fact does not exist. An agent querying "current city" will find no result. This is wrong in a different way from returning both facts, but it is still wrong.

The fix is a transaction that wraps both operations and a trigger or procedure that enforces the supersession logic. These are not hard to write. They are additional infrastructure that every team building on SQLite has to independently reinvent.

**Problem 3: No memory type semantics.**

SQLite does not know about episodic, semantic, or procedural memory. A single table can hold all memory types, distinguished by a "type" column. Queries across memory types require explicit type filtering. Retrieval logic must know to apply temporal validity filtering to semantic records but not to episodic records, which are immutable historical events, not updatable facts.

This logic is expressible in SQL, but it lives in the application layer, not in the database layer. Every application that uses the SQLite memory layer must re-implement this logic. Every bug in this logic affects all downstream users.

**Problem 4: No SODL.**

The deepest problem is not what breaks in the implementation — it is what is missing in the specification layer. There is no language for defining agent memory schemas that captures the four memory types, their temporal semantics, and their relationships in a form that is portable, versionable, and readable by tools.

SQL DDL can define tables and columns. It cannot express "this is an episodic memory type with immutable event semantics and temporal indexing." The semantic meaning of the schema is implicit in the table names and column conventions chosen by the implementer. Two teams building SQLite-based agent memory will make different schema choices, and their memories will not be interoperable.

This is the gap that SODL — the Schema Definition Language at the heart of SilicaDB — is designed to fill. The next post introduces it.

---

## What the Failures Reveal

The SQLite + FTS5 + sqlite-vec stack is the right starting point for embedded agent memory. The failures it reveals are not failures of the underlying technology — SQLite is excellent. They are failures of what the technology does not provide by default: enforced schema semantics, atomic supersession, memory type awareness, and a specification language.

These are not arbitrary requirements. They are the requirements that emerge from the four memory types, the temporal validity constraints, and the compliance requirements documented in the previous posts. Each failure mode in the SQLite implementation corresponds exactly to a gap in the retrieval-assumption frameworks that Part 2 of this series examined.

The gap is defined. The next step is filling it.

---

*This is post 14 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
