---
name: prompts
description: Run any repo workflow defined under .github/prompts/ (e.g. add a haiku to a post, add an Unsplash cover image). Use when the user names one of those prompts, invokes /prompts, or asks for a task matching a prompt file's description.
---

# Repo prompt dispatcher

The workflows shared with GitHub Copilot live in `.github/prompts/*.prompt.md`. This skill discovers and runs them.

## Steps

1. List `.github/prompts/*.prompt.md` at the repo root and read each file's frontmatter `description`.
2. Pick the prompt matching the user's request (or the argument, matched against the filename, e.g. `add-haiku` → `add-haiku.prompt.md`). If nothing matches clearly, show the list of available prompts with descriptions and ask which to run. If the user asked for several (e.g. "haiku and cover image"), run each in sequence.
3. Read the chosen file and follow its workflow exactly, ignoring its frontmatter (`mode`, `tools` are Copilot-specific).

## Tool mapping

Prompt files are written tool-agnostic for Copilot. In Claude Code:
- "web search / fetching a URL" → WebSearch / WebFetch
- terminal commands (`curl`, `git add`, …) → Bash, run from the repo root
- "currently open in the editor" → the file noted in the latest ide_opened_file reminder, if any
