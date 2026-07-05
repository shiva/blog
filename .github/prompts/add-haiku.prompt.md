---
mode: agent
description: Insert a haiku based on the blog post's content.
---

# Add a haiku to a blog post

## Input

The post: the path given as an argument, else the post currently open in the editor, else the most recently modified file under `content/posts/`. Read the whole post first — the haiku must reflect its actual content, not just the title.

## Workflow

Write a haiku (5-7-5 syllables) distilling the post's core theme or emotional arc. Prefer concrete images from the post over abstractions. Insert it immediately after the front matter, as a blockquote followed by a divider, matching this house style (note the two trailing spaces on each line for hard line breaks):

```markdown
> First line here, 
> second line goes here longer, 
> third line closes it. 
----
```

If the post already has a haiku in this position, ask before replacing it.

## Finish

Show the user the haiku. Do not commit or push unless asked.
