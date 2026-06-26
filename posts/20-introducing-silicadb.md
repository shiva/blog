---
title: "Introducing SilicaDB: Embedded Schema-Native Memory for AI Agents"
series: "The Memory Problem"
post: 20
status: draft
storyteller_tactic: "Rags to Riches"
tags: [silicadb, introduction, launch, agent-memory, schema-native, embedded, mcp]
date: 2026-06-25
---

# Introducing SilicaDB: Embedded Schema-Native Memory for AI Agents

We started this series with a simple observation: AI agents have no memory. Every session begins from zero. Every correction is forgotten. Every preference evaporates when the context window clears.

Nineteen posts later, the implications of that observation have been unpacked. The token cost of compensating for missing memory scales quadratically. Sixty-five percent of enterprise AI failures trace to context drift and memory loss. The existing tools — Redis, vector databases, Mem0, Zep — address retrieval but not memory, and the distinction costs you at production scale. The EU AI Act and GDPR impose compliance requirements that no existing framework satisfies out of the box. And the academic literature has been converging, independently, on the same conclusion: agent memory is a database problem, not a retrieval problem.

SilicaDB is the answer to that database problem.

---

## What SilicaDB Is

SilicaDB is an embedded, schema-native memory runtime for AI agents. It is a library — not a service, not a cloud product — that runs in the agent's process and persists to a local file.

It is schema-native in the specific sense defined in post 11: the schema is not a constraint layer imposed on schemaless storage. The schema is the native representation. Every fact stored in SilicaDB is stored in the form defined by the SODL schema. Every fact retrieved from SilicaDB is guaranteed to conform to that form. The schema is what the database is.

It provides all four CoALA memory types — working, episodic, semantic, and procedural — each with appropriate storage semantics, temporal validity enforcement, and retrieval behavior. Working memory is transaction-scoped and automatically evicted. Episodic memory is immutable and bi-temporally indexed. Semantic memory is updatable via supersession with temporal validity filtering on retrieval. Procedural memory is versioned and confidence-ranked.

It provides ACID transactions across all four memory types. An update that touches working context, records an episodic event, asserts a semantic fact, and updates a procedural skill confidence score either succeeds completely or fails completely. Partial updates are not possible.

It distributes via MCP. The silicadb-mcp server wrapper exposes SilicaDB's eight core tools to any MCP-compatible client — Claude, ChatGPT, open-source agents — with no changes to how the client processes tool calls.

---

## The Differentiators

SilicaDB is not the first embedded agent memory library. It is the first that is simultaneously:

**Schema-native via SODL.** SODL is a domain-specific schema language for agent memory. It expresses what SQL DDL cannot: memory type semantics, temporal invariants, provenance types, supersession relationships, and retrieval behaviors. The SODL schema is the contract; the C parser enforces it; the storage layer executes it.

**All four memory types, natively.** Not a vector database with memory-adjacent features. Not a single memory type with workarounds for the others. All four types, with appropriate storage semantics for each, under a unified query interface.

**Temporally valid by default.** Retrieval of semantic facts filters by current validity automatically. Bi-temporal timestamps on episodic records support the "as-of" query required for audit trails. Temporal validity is not an option or a plugin — it is the default retrieval behavior.

**ACID across memory types.** A transaction in SilicaDB can span all four memory types. The WAL-mode write-ahead log ensures that partial writes do not persist after a crash. Consistency invariants defined in the SODL schema are enforced at commit time.

**Zero server.** No external process. No network dependency. No cloud billing. One file on the local filesystem. Deploy to edge, mobile, airgapped enterprise, or developer laptop without changing the deployment model.

---

## What SilicaDB Is Not

SilicaDB is not a vector database. It does not provide approximate nearest-neighbor search as its primary retrieval mechanism. Semantic retrieval in SilicaDB uses the typed predicate structure of SODL schemas — you query for facts about a specific subject with a specific predicate, not for the most similar embedding to a query vector. FTS5 is available for keyword retrieval over episodic content. Vector search is a planned extension, not a core primitive.

SilicaDB is not a replacement for Mem0 or Zep for use cases where cloud-managed, vector-first memory is the right architecture. For consumer-facing personalization at scale, Mem0's cloud deployment and large community are appropriate. For temporal knowledge graph use cases with regulatory compliance requirements, Zep's SOC 2 and HIPAA certifications matter. SilicaDB addresses the use cases where embedding matters: edge deployment, data sovereignty, deterministic retrieval, and the developer who wants to own their agent's memory layer.

SilicaDB is not finished. The SODL specification is published. The C parser is the first build milestone. The storage layer is under active development. The MCP server wrapper is the first distribution milestone. This is a build-in-public project; the series you have been reading is the documentation of the journey.

---

## The Argument, in One Paragraph

Agents without memory are not agents. They are stateless functions that simulate continuity. The tools available to make them stateful — context stuffing, vector databases, retrieval frameworks — address retrieval but not memory, and the gap produces the failures this series has documented: quadratic cost scaling, temporal inconsistency, compliance exposure, and agents that learn the same lesson twice. The right architecture is database architecture — schema enforcement, ACID transactions, temporal validity, and embedded deployment — applied specifically to the four memory types that AI agents require. SilicaDB is that architecture, shipped as a library, distributed via MCP, and documented in this series from first principles.

---

## Get Involved

SilicaDB is open source under the MIT license.

- **SODL Specification:** The spec is published and versioned. Feedback on the type system, temporal semantics, and schema language design is the highest-value contribution at this stage.
- **GitHub:** Source code and issue tracker at github.com/friedsilicon/silicadb (launching with this post).
- **MCP Server:** silicadb-mcp will be published to npm as part of the initial release.
- **This Blog:** The research folder for this series is public on GitHub at shiva/blog, branch research. All source notes, benchmark citations, and design rationale are there.

The memory problem is solvable. The tools to solve it exist. The missing piece was a runtime that puts them together correctly.

That is what SilicaDB is.

---

*This is post 20 in "The Memory Problem," a 20-part series on AI agent memory architecture. Thank you for reading.*
