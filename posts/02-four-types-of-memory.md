---
title: "The Four Types of Memory Every AI Agent Actually Needs"
series: "The Memory Problem"
post: 02
status: draft
storyteller_tactic: "Three is the Magic Number"
tags: [ai-agents, memory, taxonomy, episodic, semantic, procedural, working-memory]
date: 2026-06-25
---

# The Four Types of Memory Every AI Agent Actually Needs

In 1956, the psychologist George Miller published one of the most cited papers in cognitive science. Its title was direct: "The Magical Number Seven, Plus or Minus Two." Its finding was that human working memory has a hard capacity limit — we can hold roughly seven items in conscious attention before items start falling out. The paper launched decades of research into memory taxonomy: not just how much we can hold, but what kinds of things we hold, where, and why.

Memory, it turned out, was not a single thing. It was a system of systems.

Cognitive science now distinguishes at least four types of long-term memory, each with different substrates, different retrieval characteristics, and different failure modes. Episodic memory holds events: what happened, when, in what sequence. Semantic memory holds facts: what things are, how concepts relate. Procedural memory holds skills: how to do things, how to use tools. And working memory — the system Miller was studying — holds whatever you are actively processing right now.

In 2023, researchers at Princeton and CMU formalized this taxonomy for AI agents. The resulting framework, CoALA (Cognitive Architectures for Language Agents), adapted the four memory types for LLM-based systems and became the canonical reference for the field. In 2025 and 2026, as the agent ecosystem matured, this taxonomy propagated across frameworks, benchmark suites, and production architectures. Nearly every serious memory system in production today traces its design back to CoALA's four-type model.

The problem is that most of them only implement one type well.

---

## Working Memory: The Active Workspace

Working memory in an AI agent is the context window. It is everything the model can see right now: the system prompt, the conversation history, the injected tool outputs, the retrieved facts, the current task description. If information is not in the context window, the model has no access to it — it is, from the model's perspective, as if it does not exist.

This is both the most understood memory type and the most abused. Every framework handles working memory. Every tutorial shows you how to build a context window. And as discussed in the first post in this series, the naive treatment of working memory — stuffing it with everything — produces the quadratic token cost problem, the context rot problem, and the eventual failure of any agent running for longer than a single session.

Working memory is fast, flexible, and finite. It is the right place for the active state of the current task. It is the wrong place for facts that need to survive across sessions, preferences that should apply to every interaction, or skills that should transfer from one domain to another.

Andrej Karpathy's framing has become the field's canonical metaphor: the LLM is the CPU; the context window is RAM. RAM is not storage. Treating it as storage is the first and most common architectural mistake in agent design.

---

## Episodic Memory: The Log of Experience

Episodic memory holds what happened. In humans, this is the memory system that lets you recall specific events — your first day at a new job, a conversation with a difficult client, the moment you realized your approach to a problem was wrong. Episodic memories are instance-specific and context-preserving: they retain the particulars of what occurred, not an abstraction of it.

In AI agents, episodic memory is the record of past interactions, past decisions, past tool invocations, and their outcomes. When an agent encounters a new task that resembles a past task, episodic memory is what lets it reason analogically: *I tried this approach before; it failed for this reason; let me try something different.*

The CoALA framework defines episodic memory as storing "experience from earlier decision cycles." The critical word is *experience* — not facts, not rules, but situated events with temporal context. What distinguishes episodic from semantic memory, in both cognitive science and agent architecture, is that episodic memories retain their context. You do not just remember that the API rate limit is 100 requests per minute. You remember that you discovered this at 2:14am on a Tuesday, after a deployment that failed because you did not know it. The context is part of the content.

Most production memory systems handle episodic memory through vector databases — embedding conversation turns, storing them, retrieving them by semantic similarity. This works for surface-level recall. It breaks for anything requiring temporal reasoning, event ordering, or understanding of how a fact came to be known. The vector embedding of a memory discards the context that makes it episodic. What you get back is a semantic residue, not the original experience.

---

## Semantic Memory: The Knowledge Base

Semantic memory holds what is true. In humans, this is the memory system that stores facts, concepts, and their relationships — that Paris is the capital of France, that photosynthesis converts light to chemical energy, that your manager prefers direct communication over lengthy reports. Semantic memories are general and decontextualized: they retain the content of knowledge, not the episode in which it was acquired.

In AI agents, semantic memory is the persistent factual layer: user preferences, domain knowledge, entity relationships, business rules, and anything that should be retrieved as fact rather than as event. The distinction from episodic memory is subtle but consequential. "The user prefers dark mode" is a semantic memory — a stable fact about a stable preference. "The user mentioned preferring dark mode after complaining that white backgrounds hurt their eyes during a call in January" is an episodic memory — the same fact, but with its context preserved.

The challenge with semantic memory in agent architectures is that facts change. The user moved from Vancouver to Berlin. The API changed its response format. The company rebranded. A static knowledge base becomes stale. A dynamic knowledge base requires update semantics — the ability to identify that a new fact contradicts an old one, retire the old one, and install the new one without corrupting dependent knowledge.

This is harder than it sounds. Mem0's architecture does this via an extraction pipeline that runs four possible operations on every ingested memory: ADD, UPDATE, DELETE, or NOOP. When a user says they moved from Mumbai to Bangalore, the system must identify the old location fact, mark it for deletion, and install the new one. Most vector databases, used naively, simply append the new fact, leaving both facts in the index where they compete for retrieval at query time.

---

## Procedural Memory: The Skill Library

Procedural memory holds how to do things. In humans, this is the memory system for skills — riding a bicycle, typing without looking at the keyboard, navigating a familiar commute. Procedural memories are largely implicit and largely stable: they encode reliable action patterns that have been reinforced through repetition.

In AI agents, procedural memory is the closest thing to learned expertise. It holds tool usage patterns, workflow templates, error recovery strategies, and anything that should be applied as a skill rather than recalled as a fact or event. An agent that has learned the correct sequence of API calls to complete a particular workflow, and can apply that sequence reliably without reasoning from scratch each time, is using procedural memory.

This is the least developed memory type in current agent architectures. Most frameworks do not implement procedural memory at all — they rely on in-context instructions or fine-tuned model behavior to approximate it. The gap matters because procedural memory is what converts a capable agent into an expert agent. The difference between a novice and an expert is not usually factual knowledge — it is the internalization of reliable action patterns that can be deployed without deliberate reasoning.

The emerging approaches to procedural memory in agents include: skill libraries (stored, reusable action sequences); LEGO-style modular memories (role-aware procedural patterns for multi-agent coordination, from the LEGOMem paper, 2025); and trajectory distillation (converting successful task completions into reusable procedural templates).

---

## Why Most Systems Only Get One Right

Zylos Research's 2026 survey of agent memory architectures notes that the ecosystem "converged on a remarkably consistent three-tier taxonomy — episodic, semantic, and procedural memory." Converged on the taxonomy. The implementations are another matter.

The dominant pattern in 2026 is to treat memory as retrieval: store facts, embed them, search by cosine similarity, inject the top-k results into the context window. This pattern handles semantic memory adequately, handles episodic memory poorly (the embedding erases context), and barely addresses procedural memory at all. Working memory management — the fourth type — is left to the developer to handle through prompt engineering.

The consequence of this incomplete coverage is predictable. Gartner projects that 50% of enterprise AI agent deployment failures by 2030 will be due to insufficient AI governance platform runtime enforcement. Deloitte's 2026 enterprise AI survey found that despite $30–40 billion spent on enterprise generative AI, 95% of organisations saw no measurable return on investment. These are not model capability failures. They are architecture failures — the gap between what the four-type taxonomy requires and what single-type vector retrieval delivers.

There is an irony worth noting. A 2026 benchmark from Letta found that a plain filesystem — flat files, no embeddings, no vector database — scores 74% on standard memory tasks. The benchmark result does not vindicate simplicity; it indicts complexity that has not been matched to purpose. A well-organized filesystem delivers adequate semantic recall. It delivers nothing for episodic context preservation, nothing for procedural skill transfer, and nothing for working memory management.

What the field has built, in most cases, is a sophisticated implementation of one memory type and a workaround for the other three.

---

## What a Complete Memory Architecture Looks Like

A complete agent memory architecture handles all four types, but it does not handle them identically. Each type has different storage requirements, different retrieval semantics, and different update dynamics.

Working memory needs eviction policies, not just insertion. Episodic memory needs temporal indexing and context preservation, not just vector similarity. Semantic memory needs update semantics — the ability to retire stale facts — not just append. Procedural memory needs a representation that supports skill composition and transfer, not just storage.

These are database problems, not prompt engineering problems. The agent that confuses them — that treats its context window as storage, that treats a vector database as a complete memory system, that treats in-context instructions as procedural memory — is building on a foundation that will eventually fail in production.

The next post in this series examines why the most common response to this architecture gap is to stuff everything into the system prompt — and why that response makes every dimension of the problem worse.

---

*This is post 02 in "The Memory Problem," a 20-part series on AI agent memory architecture leading to the introduction of SilicaDB.*
