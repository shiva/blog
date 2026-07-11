---
title: "The Four-Memory-Type Problem: How SilicaDB Models Agent Cognition"
series: "The Memory Problem"
post: 18
status: draft
storyteller_tactic: "Hero & Guide"
tags: [silicadb, memory-types, episodic, semantic, procedural, working-memory, architecture]
date: 2026-06-25
---

# The Four-Memory-Type Problem: How SilicaDB Models Agent Cognition

In post 02, this series introduced the four memory types that AI agents need — working, episodic, semantic, and procedural — and noted that most memory frameworks implement at most one of them well. In post 13, this series described what agent memory would look like if designed as a database. In posts 16 and 17, the language and implementation layer of SilicaDB were introduced.

This post closes the loop: how SilicaDB maps each of the four memory types to a concrete storage model, and what that means for the agent developer who uses it.

---

## Working Memory: Bounded Transaction Scope

Working memory in SilicaDB is a transaction-scoped in-memory buffer. It is not persisted between agent steps unless explicitly promoted to long-term storage. It is automatically evicted at transaction commit or rollback.

The SODL declaration for working memory is minimal:

```sodl
schema WorkingContext {
  memory_type: working
  scope: required string  // agent session ID
  key: required string
  value: required Value
  ttl: optional duration  // auto-evict after this duration if not committed
}
```

Working memory in SilicaDB is the only memory type with no temporal validity enforcement — there is nothing to validate temporally because working memory does not persist. What it provides instead is transaction isolation: multiple agent steps within the same transaction see a consistent view of working context, and no step sees uncommitted writes from other concurrent operations.

This is the fundamental guarantee that no existing framework provides for working memory: consistency within an agent's active reasoning window, without relying on the model's attention to maintain coherence.

---

## Episodic Memory: Immutable Event Log

Episodic memory in SilicaDB is an append-only event log. Records cannot be modified after creation — they can only be superseded with an explicit supersession record. Every episodic record carries a bi-temporal timestamp pair: occurred_at (when the event happened) and recorded_at (when the event was stored).

```sodl
schema EpisodicEvent {
  memory_type: episodic
  session_id: required string
  sequence: required int
  subject: required EntityRef
  event_type: required string
  content: required string
  occurred_at: required datetime
  recorded_at: required datetime  // auto-set on write
  confidence: required float(0.0, 1.0)
  provenance: required enum { agent_action, tool_result, user_input, system_event }

  behavior on_write: immutable
  behavior on_retrieval: order_by occurred_at asc
}
```

The immutability constraint is enforced at the storage layer: a write to an existing episodic record raises an error. This is not a convention; it is a storage guarantee. The agent can retrieve the complete history of its actions, in the order they occurred, with the confidence that the record has not been modified after the fact.

This is the property that makes episodic memory useful for audit trails — which is the compliance requirement from post 10. An immutable, bi-temporally timestamped event log satisfies the EU AI Act's audit trail requirement directly: every decision is recorded as an episodic event with the occurred_at time, the subject, the action taken, and the confidence score. The record cannot be altered; it can only be annotated with a correction record.

---

## Semantic Memory: Typed Facts with Supersession

Semantic memory in SilicaDB is the most complex of the four types. Facts are mutable in the sense that they can be superseded — a new version of a fact replaces the old version — but they are not arbitrary-update mutable. Every state transition from old fact to new fact is recorded as a supersession, maintaining the full history of how knowledge changed over time.

```sodl
schema SemanticFact {
  memory_type: semantic
  subject: required EntityRef
  predicate: required string
  object: required Value
  confidence: required float(0.0, 1.0)
  provenance: required enum { user_stated, tool_derived, agent_inferred, corrected }
  valid_from: required datetime
  valid_until: optional datetime
  supersedes: optional ref SemanticFact

  invariant valid_from < valid_until when valid_until is present
  invariant supersedes.valid_until == valid_from when supersedes is present

  behavior on_conflict: supersede_prior with provenance = corrected
  behavior on_retrieval: filter valid_until is null or valid_until > now()
}
```

The `on_retrieval` behavior is what distinguishes SilicaDB's semantic memory from a vector database. By default, a retrieval query for semantic facts returns only facts that are currently valid — facts whose valid_until is either null (meaning no expiry) or in the future. Superseded facts are retained in storage for audit and history purposes, but they are invisible to normal retrieval.

This single behavior difference eliminates the class of failure modes — contradictory facts, stale preferences, outdated location data — that produces incorrect agent output in every vector-database-based memory system.

---

## Procedural Memory: Versioned Skill Library

Procedural memory in SilicaDB is a versioned library of reusable action sequences. A procedural record defines a trigger condition — the type of task that activates this procedure — and an action sequence that the agent should follow when the trigger matches.

```sodl
schema ProceduralSkill {
  memory_type: procedural
  name: required string
  version: required semver
  trigger: required string  // task type or semantic pattern
  domain: required string
  steps: required list<ActionStep>
  success_count: int default 0
  failure_count: int default 0
  last_used: optional datetime
  confidence: required float(0.0, 1.0)
  derived_from: optional list<ref EpisodicEvent>

  behavior on_update: version_bump
  behavior on_retrieval: order_by confidence desc, last_used desc
}
```

The `derived_from` field is the key differentiator: it links a procedural skill back to the episodic events that produced it. When an agent successfully completes a novel task, the successful action sequence can be distilled into a procedural skill record, with references to the episodic events that contain the detailed execution history. The procedural memory is the summary; the episodic memory is the evidence.

This link is what makes procedural memory auditable. If a regulator asks "why did the agent take these steps in this order?", the answer is in the procedural record (this is the standard procedure for this task type, confidence 0.87) and the episodic history (these are the 23 successful executions from which the procedure was derived).

---

## The Unified Query Interface

Each of the four memory types has different storage semantics, different retrieval behaviors, and different temporal validity rules. But from the agent developer's perspective, all four are accessed through the same query interface.

SilicaDB exposes a typed query API in which memory type is a first-class query parameter. The same query pattern — `memory.query(type: semantic, subject: user_id, predicate: "city", as_of: now())` — works for all types. The storage layer handles the type-specific retrieval behavior (temporal filtering for semantic, sequence ordering for episodic, confidence ranking for procedural, scope isolation for working).

This unified interface is what makes SilicaDB practical for agent developers. The four memory types have different engineering requirements under the hood. The agent code does not need to know about them.

---

*This is post 18 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
