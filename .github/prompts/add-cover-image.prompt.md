---
mode: agent
description: Add an Unsplash cover image to a blog post — downloaded, checked into the repo, and credited.
---

# Add a cover image to a blog post

## Input

The post: the path given as an argument, else the post currently open in the editor, else the most recently modified file under `content/posts/`. Read the whole post first — the image choice must reflect its actual content, not just the title.

## Workflow

1. **Find a photo.** Search unsplash.com (via web search, or fetching `https://unsplash.com/s/photos/<query>`) using 2-3 search terms drawn from the post's theme. Pick a photo that works as a wide banner and matches the post's tone. From the photo page URL (`https://unsplash.com/photos/<slug>-<photoId>`) extract:
   - `photoId` — the trailing ID (e.g. `bTMTggEt5s4`)
   - photographer's display name and `@username`
   - the full photo page slug (for the attribution link)

2. **Download into the repo** (run from the repo root):

   ```bash
   curl -L "https://unsplash.com/photos/<photoId>/download?force=true&w=1920" \
     -o static/images/<username>-<photoId>-unsplash.jpg
   ```

   Verify the file is a real image (`file static/images/...` reports JPEG, size > 20KB). If the download fails or returns HTML, pick a different photo.

3. **Check it in:** `git add static/images/<username>-<photoId>-unsplash.jpg`. Commit only if the user asked for a commit.

4. **Insert into the post**, directly after the haiku's `----` divider if the post has one, otherwise immediately after the front matter, in exactly this format:

   ```markdown
   ![Cover Photo](/images/<username>-<photoId>-unsplash.jpg)
   Photo by <a href="https://unsplash.com/@<username>?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><Photographer Name></a> on <a href="https://unsplash.com/photos/<slug>-<photoId>?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   ```

## Finish

Show the user the chosen photo (photographer + link) and where the file landed. Do not commit or push unless asked.
