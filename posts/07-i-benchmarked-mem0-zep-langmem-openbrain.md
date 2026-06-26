---
title: "I Benchmarked Mem0, Zep, LangMem, and OpenBrain So You Don't Have To"
series: "The Memory Problem"
post: 07
status: draft
storyteller_tactic: "Data Detectives"
tags: [ai-agents, memory, mem0, zep, langmem, openbrain, benchmarks, comparison]
date: 2026-06-25
---

# I Benchmarked Mem0, Zep, LangMem, and OpenBrain So You Don't Have To

Every benchmark tells two stories. The first is the number. The second is why the number is what it is — what it reveals about the system's design, its assumptions, and the kinds of problems it was built to solve.

The LongMemEval benchmark, which tests AI agent memory systems on multi-session recall across ten categories including temporal reasoning, event ordering, and contradiction resolution, is particularly good at telling both stories. The benchmark was designed to test the things that matter in production — the kinds of memory tasks that break real agents doing real work.

In 2026, the leading memory frameworks cluster around two scores on LongMemEval: Zep scores 63.8%. Mem0 scores 49.0%. A 15-point gap.

That gap is not a quality judgment. It is an architectural signal. Understanding why Zep scores 14.8 percentage points higher than Mem0 on temporal queries reveals more about memory system design than any feature comparison matrix.

---

## The Frameworks

**Mem0** is the most widely deployed open-source agent memory library: 48,000+ GitHub stars, 14 million downloads, chosen by AWS as the exclusive memory provider for their Agent SDK. Its architecture centers on fact extraction — every conversation turn is analyzed by an LLM, salient facts are identified, and those facts are stored in a vector database with deduplication. When a user says they moved from Mumbai to Bangalore, Mem0 identifies this as an update, deletes the old city fact, and installs the new one. This is intelligent, fast, and reasonably accurate.

**Zep** takes a different approach. Rather than extracting facts and storing them as flat vectors, Zep builds a temporal knowledge graph. Entities are nodes. Relationships are edges. Every edge carries a timestamp and validity window — it knows not just that a fact was true, but when it became true and, if applicable, when it stopped being true. When a user says they used to live in London but moved to Tokyo, Zep updates the graph: the London residence edge is closed with an end timestamp, the Tokyo residence edge is opened with a start timestamp. Both facts exist in the graph, correctly temporally bounded.

**LangChain Memory** is a modular set of memory abstractions that plug into the LangChain orchestration framework. It offers multiple strategies — buffer memory, summary memory, vector store memory — but is fundamentally an integration layer rather than a dedicated memory system. It is widely used because LangChain is widely used, not because it represents a strong memory architecture.

**OpenBrain** is a newer entrant: an open-source, self-hostable memory database built on Supabase with MCP compatibility, designed to give any MCP-compatible AI client — Claude, ChatGPT, others — persistent memory stored in infrastructure the user controls. Its design is vector-first with Postgres and pgvector. It solves the ownership and integration problem but inherits the architectural limitations of the vector approach.

---

## What the 15-Point Gap Reveals

The gap between Zep and Mem0 on LongMemEval is largest on temporal queries — the questions that require an agent to understand not just what is true but when it was true, when it changed, and which version is current.

The reason is architectural. Mem0 stores facts as flat vectors without temporal metadata. When you ask Mem0 whether a user lives in London or Tokyo, it retrieves the most semantically similar facts and returns them. If the update was recent and the deletion logic worked correctly, it returns Tokyo. If there was any lag in the extraction pipeline, or if the deletion failed, it might return both, or the wrong one.

Zep's temporal knowledge graph stores the answer differently. London is a closed node with an explicit end date. Tokyo is an open node with a start date. The query "where does the user currently live?" is answered by traversing the graph and returning the node with no end date. This is not semantic retrieval — it is structured querying of a temporally indexed graph. It is immune to the extraction lag problem. It is immune to the retrieval ambiguity problem. And it is why Zep scores 15 points higher on temporal queries.

---

## The MemPalace Surprise

In June 2026, a framework called MemPalace crossed 54,000 GitHub stars and shipped v3.4.0 with a score of 96.6% on LongMemEval — 33 points above Zep, 48 points above Mem0. With zero API calls. Running fully locally, on a laptop.

The MemPalace result is counterintuitive. It does not use embeddings. It does not use a vector database. It does not use an LLM extraction pipeline. It stores memory verbatim — the exact text of interactions, indexed for retrieval — and retrieves based on keyword and pattern matching, with no semantic similarity computation.

The result indicts a false assumption in the field: that better memory requires more sophisticated infrastructure. MemPalace's 96.6% score with zero API calls suggests that the benchmark tasks, at least, are not primarily testing semantic similarity — they are testing whether information can be reliably stored and retrieved with provenance intact.

Verbatim storage + reliable retrieval outperforms semantic extraction + vector search on the benchmark. The reasons are important: extraction loses information. Embeddings lose context. Deduplication introduces errors. MemPalace avoids all of these failure modes by not doing any of them.

This does not mean MemPalace is the right architecture for production agents. Verbatim storage scales poorly. It provides no update semantics. It cannot resolve contradictions. But its benchmark performance forces a useful question: what, exactly, are we trading away when we extract and embed, and is that trade worth making?

---

## What None of Them Do

Having compared the four frameworks on their strongest dimensions, it is worth cataloguing what none of them provide:

**Schema enforcement.** No framework in this comparison validates the structure of what is stored. Any fact, in any form, can enter the memory. This makes it impossible to assert invariants about memory content — impossible to guarantee that a retrieved fact is in a form that an agent can reliably use.

**ACID transactions.** When a memory update involves multiple related facts — update the user's city, update their timezone, update their local business hours — none of these frameworks guarantee that all three updates succeed or all three fail atomically. Partial updates are possible. Inconsistent memory states are possible.

**Temporal validity bounds.** Zep has the strongest temporal semantics, but even Zep's bi-temporal edge invalidation operates one edge at a time. When the "user moved to Tokyo" fact is invalidated, Zep does not automatically re-evaluate all the facts that depended on "user lives in London." Dependencies drift silently.

These are not edge cases. They are the classes of problems that make agent memory unreliable at scale. The next post examines the shared architectural assumption that underlies all of them — and why it is the real limit.

---

*This is post 07 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
