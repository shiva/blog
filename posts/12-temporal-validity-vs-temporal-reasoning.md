---
title: "Temporal Validity vs Temporal Reasoning: A Critical Distinction"
series: "The Memory Problem"
post: 12
status: draft
storyteller_tactic: "Data Detectives"
tags: [ai-agents, memory, temporal-validity, temporal-reasoning, time, schema]
date: 2026-06-25
---

# Temporal Validity vs Temporal Reasoning: A Critical Distinction

Let us begin with a number: 21.71%.

That is the score OpenAI Memory achieved on temporal queries in Mem0's 2025 benchmark on the LoCoMo dataset. Mem0's graph-enhanced variant scored 58.13% on the same queries. The gap is 36 points.

OpenAI Memory is backed by GPT-4 — a model with demonstrated temporal reasoning capabilities that would score extremely well on any standard temporal reasoning benchmark. The model can sequence events, calculate durations, understand causality in time, and answer complex temporal questions when given the relevant facts.

The problem was not the model's reasoning. The problem was that when facts were stored in OpenAI Memory, the system "consistently failed to attach timestamps to stored memories." When temporal queries arrived at retrieval time, the system returned facts with no temporal metadata. The model's temporal reasoning capabilities — formidable as they were — had nothing to work with.

This single data point is the clearest possible illustration of the distinction this post is about.

---

## Two Problems, One Name

"Temporal memory" is used in the AI agent literature to refer to two different things that are often conflated:

The first is **temporal reasoning**: the model's ability to understand and process temporal information. Can the agent understand that "last Tuesday" refers to a specific date? Can it sequence events correctly? Can it answer "what happened between the deployment and the outage?" given a timeline of events? These are model capabilities, tested in benchmarks like TempReason and the temporal categories of MMLU.

The second is **temporal validity**: the memory system's ability to track when facts are true. Does the memory system know that a stored preference was valid from January to March, and was superseded in April? Can it return only facts that are currently valid, rather than all facts ever stored? Can it answer "what did the agent know as of last Tuesday?" not by reasoning from evidence, but by querying the temporal index?

These are different problems. The first is solved by model training. The second is solved by memory architecture. Having a model with strong temporal reasoning does not give you a memory system with temporal validity enforcement. Having a memory system with temporal indexing does not substitute for model temporal reasoning.

OpenAI Memory's failure demonstrates what happens when temporal validity is absent: even the most capable temporal reasoner cannot produce correct temporal answers when the facts it receives carry no temporal metadata.

---

## The Database Science Foundation

Temporal validity in databases is not a new problem. The field has been working on it since at least the 1970s, and the canonical framework — Jensen and Snodgrass's bi-temporal data model — was published in 1999.

The bi-temporal model tracks two independent timelines for every stored fact:

**Valid time**: when the fact was true in the real world. A user lived in London from January 2023 to November 2024. A pricing policy was in effect from Q1 to Q3. A software dependency was compatible with versions 2.x through 3.y.

**Transaction time**: when the fact was recorded in the database. This may differ from valid time — you might record in December 2024 that a user lived in London from January 2023 to November 2024, meaning the valid time is historical but the transaction time is recent.

The combination of both timelines enables queries that neither alone can answer: "what did our database show about the user's location on Tuesday?" (using transaction time) versus "where was the user actually located on Tuesday?" (using valid time). These are different questions with potentially different answers — especially in systems where facts are corrected retroactively.

Zep's temporal knowledge graph implements a version of this bi-temporal model, and it is why Zep scores 14.8 points higher than Mem0 on LongMemEval's temporal queries. The explicit temporal indexing allows Zep to answer temporal questions without relying on the model's reasoning about timestamps that may or may not be present in retrieved facts.

---

## Why Schema Enforcement Is Required

The critical point about temporal validity is that it cannot be an afterthought or an optional feature. It must be schema-enforced.

A memory system that allows facts to be stored without valid-from timestamps cannot provide temporal validity guarantees. The facts in the index have heterogeneous temporal metadata — some have timestamps, some do not, some have string timestamps in ambiguous formats, some have timestamps in different timezones. At retrieval time, the system returns this heterogeneous collection, and the model must reason about temporal validity from incomplete and inconsistent evidence.

Schema enforcement changes this. If the schema requires a valid-from timestamp on every stored fact, then every retrieved fact has a valid-from timestamp. The system can enforce that timestamps are in a standard format, in a standard timezone, and that valid-from predates valid-until. The retrieval layer can filter on temporal validity before returning results, rather than returning all results and hoping the model applies correct temporal reasoning.

The distinction between "schema-optional temporal metadata" and "schema-enforced temporal validity" is the difference between a system that hopes to answer temporal questions correctly and a system that can guarantee it.

---

## Practical Consequences

The practical consequences of this distinction show up in three production scenarios.

**Multi-session personalization.** A user's preferences change over time. A system with temporal validity enforcement stores the current preference and the historical preference, each with explicit valid-time bounds. A query for "current preferences" returns only the currently valid ones. A system without temporal validity enforcement stores all versions; the model must reason about which is current from whatever temporal cues are embedded in the fact text.

**Regulatory audit.** As discussed in the previous post, the EU AI Act requires audit trails that can answer "what did the agent know at time T when it made decision D?" This question requires temporal validity enforcement — the ability to query the state of the memory system at an arbitrary past time. Without bi-temporal indexing, this query is reconstructed from logs, which may be incomplete, rather than queried directly from a temporally-indexed store.

**Fact correction.** When a stored fact turns out to be wrong — the agent recorded a user's email address incorrectly — the corrected version should supersede the incorrect version with an explicit retroactive correction. The bi-temporal model handles this: the valid-time of the incorrect fact is closed, the correct fact is installed with appropriate valid-time bounds, and the transaction time records when the correction occurred. Without bi-temporal tracking, correction is deletion and re-insertion — destroying the history of what the system believed.

---

*This is post 12 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
