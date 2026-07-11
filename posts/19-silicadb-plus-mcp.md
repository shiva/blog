---
title: "SilicaDB + MCP: Making Agent Memory Accessible to Any Client"
series: "The Memory Problem"
post: 19
status: draft
storyteller_tactic: "Pitch Perfect"
tags: [silicadb, mcp, model-context-protocol, distribution, agent-memory, integration]
date: 2026-06-25
---

# SilicaDB + MCP: Making Agent Memory Accessible to Any Client

The Model Context Protocol was designed to solve a connectivity problem: every AI client — Claude, ChatGPT, open-source agents, custom toolchains — speaks a different language for accessing external tools and data. MCP provides a standard. A server that speaks MCP is accessible to any client that speaks MCP. One integration, many clients.

For SilicaDB, MCP solves the distribution problem. The embedded memory library is local-first — it runs in the developer's process, writes to a local file, and never phones home. But an agent client that does not speak SilicaDB's native API cannot access it without an integration layer.

The MCP server wrapper for SilicaDB is that integration layer. It exposes SilicaDB's four memory type operations — read, write, query, supersede — as MCP tools, callable from any MCP-compatible client. The memory stays local. The interface is standard.

---

## What the MCP Interface Exposes

The SilicaDB MCP server exposes eight tools, organized by memory type:

**Working memory:** `silicadb_working_set` (write key-value to working context), `silicadb_working_get` (read from working context), `silicadb_working_commit` (promote working context to long-term memory).

**Episodic memory:** `silicadb_record_event` (write an immutable episodic event), `silicadb_query_history` (retrieve episodic events by subject, time range, or session).

**Semantic memory:** `silicadb_assert_fact` (write or supersede a semantic fact), `silicadb_query_facts` (retrieve current semantic facts by subject and predicate).

**Procedural memory:** `silicadb_recall_skill` (retrieve the best-matching procedural skill for a task type), `silicadb_record_outcome` (record success or failure of a skill execution, updating confidence).

These eight tools cover the core memory lifecycle for an agent session. The MCP server handles the SODL schema validation, the temporal validity filtering, the supersession logic, and the ACID transaction management — all invisible to the agent client, which sees only the tool interface.

---

## The xRegistry Connection

SilicaDB's schema system is directly informed by work on the CNCF xRegistry specification — the schema registry standard that defines how event schema registries work at scale.

xRegistry's design principle is that schemas are first-class resources with identity, versioning, and discoverability properties. A schema in xRegistry is not a documentation artifact — it is a deployable, queryable, governable entity with its own lifecycle.

SODL inherits this principle. A SilicaDB schema is a versioned, deployable artifact. The MCP server exposes the schema as a discoverable resource: `silicadb_describe_schema` returns the SODL definition of the current memory schema, allowing the agent client to understand what memory types are available, what fields each type has, and what invariants the storage layer enforces.

This schema discoverability is what enables intelligent agent behavior with SilicaDB. An agent that can query the schema can reason about what kinds of memory to create and how to structure them — not through hard-coded assumptions, but through dynamic schema introspection at runtime.

---

## Deployment: One Command

The SilicaDB MCP server is designed to be runnable with one command:

```bash
npx silicadb-mcp --schema ./memory.sodl --db ./agent-memory.sdb
```

The `--schema` flag specifies the SODL schema file. The `--db` flag specifies the SilicaDB database file. Both are local. The MCP server starts, registers the eight tools, and begins accepting connections from MCP-compatible clients.

In Claude Desktop's configuration, adding SilicaDB looks like:

```json
{
  "mcpServers": {
    "silicadb": {
      "command": "npx",
      "args": ["silicadb-mcp", "--schema", "./memory.sodl", "--db", "./agent-memory.sdb"]
    }
  }
}
```

After configuration, Claude has access to the eight SilicaDB tools. It can record events, assert facts, recall skills, and query history — with all the schema-native guarantees that SilicaDB provides — without any changes to how Claude processes tool calls.

---

## Why Local-First and MCP-Distributed Are Complementary

The local-first and MCP-distributed properties of SilicaDB are not in tension. They address different parts of the deployment concern.

Local-first means: no cloud dependency, no API key, no network required, data stays on your machine, zero latency on the read path. This is the property that makes SilicaDB work in edge deployments, offline environments, and data-sovereign contexts.

MCP-distributed means: any agent client that speaks MCP can use SilicaDB without a custom integration. This is the property that makes SilicaDB usable across the heterogeneous ecosystem of AI clients without requiring the developer to maintain separate integrations for each.

Together, they define a deployment model: run SilicaDB locally, expose it via MCP, and any client in the ecosystem can use schema-native, ACID-consistent, temporally-valid agent memory without touching a cloud service.

The next and final post introduces SilicaDB as a complete product — what it is, what it provides, how to get it, and what comes next.

---

*This is post 19 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
