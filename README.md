# Source for shiv.me

Hugo-based site serving [shiv.me][1] — homepage, static pages (CV, photos, projects), and the blog (Reflections). I am Shiva, ex-programmer, current product manager at AWS. The theme is [hugo-duality][2], a git submodule, built from a Claude Design system with light/dark modes and a PM/Hacker persona toggle.

Pushes to `master` trigger a GitHub Action ([hugo.yml][3]) that builds the site and deploys it to GitHub Pages.

## Run locally

```bash
# one-time: clone with the theme submodule
git clone --recurse-submodules git@github.com:shiva/blog.git
# or, in an existing checkout:
git submodule update --init --recursive

# serve with live reload (requires the extended edition)
hugo server -D
```

Open http://localhost:1313. `-D` includes draft posts; drop it to see only what production would publish. `hugo server` rebuilds on file save.

To verify the production build without serving:

```bash
hugo --gc --minify
```

Output lands in `public/`.

## Requirements

- [Hugo][4] **extended** edition, ≥ 0.163 (`brew install hugo`)
- Theme submodule checked out (`themes/hugo-duality` must not be empty)

[1]: https://shiv.me
[2]: https://github.com/shiva/hugo-duality
[3]: .github/workflows/hugo.yml
[4]: https://gohugo.io/
