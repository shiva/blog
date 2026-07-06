---
title: One from two
categories:
 - technology
tags:
 - hugo
 - claude
 - workflow
 - Fable
 - leverage
description: How Claude with Fable let me redesign, rebuild, and merge two sites into one — from the couch, on my phone, during the World Cup.
date: '2026-07-04T15:30:00-0700'
draft: false
---

> Two places, one home,  
> trodden paths that never break  
> Built with AI, phone.  
----

![Cover Photo](/images/ivoprod-vkQgb1lZZPQ-unsplash.jpg)
Photo by <a href="https://unsplash.com/@ivoprod?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivars Utināns</a> on <a href="https://unsplash.com/photos/aerial-view-of-green-trees-and-river-during-daytime-vkQgb1lZZPQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

For years, my blog was hosted in a different subdomain than my website/landing page. I always wanted a decently designed website that was implemented as a [Hugo][1] theme which I can then use to manage the website, the blog, and a few other tools I wanted to build for myself. I have never had the inclination for the amount of work this takes. It was one of those things to do that never make it to the top pile. Now, with access to [Fable][2] for a few days, and I needed a problem that was small enough where I could eval the result, but large enough to have some inherent complexity to test the bounds of what Fable can do. This seemed decent enough. 

## The problem

I had a few requirements in mind:

 - One Hugo-based repo to serve static content, pages, and my blog.
 - A theme that works based on Claude design system generated for my brand.
 - Ability to toggle between PM and Hacker persona.
 - Validate before committing changes.
 - Operate remotely so that I can do this while going about the weekend.
 - Limit privilege escalation.
 - Generate understandable output that I can still review manually.
 - Have a way to revert back.
 - Handle the DNS changes that will be required to merge my blog subdomain into the base site.
 - Leave my blog workflow unaffected.

## The setup

I wrote a short [`PROMPT.md`][3] and launched claude from the command line, with the ability for remote access from my mobile phone, with Fable enabled. It asked me a few questions to clarify intent and scope. A few weeks ago, I'd built the homepage design with [Claude Design][4], which left behind a design system — color tokens, type scale, spacing, editorial primitives. When doing so, I made it created *five* skins (Reading Room, Quink, Porcelain, Periwinkle Day, Midnight), but when I shipped my static site, I had narrowed it down to two. 

Here is the entire prompt I used for this build:
{{< gist shiva d6e3f9e9e59e5b8714e39da6fe92a9e7 PROMPT.md >}}

## The build

**Discovery & scoping.** Claude explored both repos first — found the blog was Hugo with 4 stale theme submodules, and shiv.me was a hand-rolled static site. It asked scoping questions and logged the answers into `PROMPT.md` as locked decisions.

**Design system.** I had mentioned that the shiv.me homepage used a design system from Claude Design. Claude Code pulled it via a `DesignSync` tool, identified that I had previously created 5 variants, but the website only shipped two of those. It asked which direction I wanted to sync -- keep the design choices, or implement all 5. When I confirmed that I had already made my choices, it round-tripped that choice to cleanup the design system! There is a clear upleveling in terms of decision-making that new in [Mythos-class models][2].[^mythos] It's frighteningly close to a thinking and self-actualized "team mate", and quality of responses make you want to provide to more autonomy. 

**Theming.** It extracted a brand-new, reusable Hugo theme:  [hugo-duality][5] from 118-line CSS file built from the design system. I would have never bothered to make this portable enough to publish, but it's now available for anyone else to use: light/dark modes plus product/hacker persona flip. Then it retired my existing theme, PaperMod + 3 other submodules from the blog repo, wired in `hugo-duality`, and migrated all of my static pages (CV, photos, projects, keybase, Google verification) into Hugo content at identical paths to avoid impacts to other integrations with my website like [Keybase][6], google analytics, etc. All of this happened in [git worktrees][7], so both repos and their assets were not impacted until I had a chance to review the output.

**YOLO.** At this point, I had to leave. I was running Claude on my mac mini using named sessions. Turns out this is handy: I converted it to remote mode, and switched the session over to my mobile. I was driving over to my in-laws' to catch the soccer game and wanted to see how well Fable could do without me to coax it. I set permissions to YOLO[^yolo], unless it needed any privilege escalation. There was a real chance of my disk getting wiped; it's amazing how much we readily give up for some async convenience.

While I was driving, it churned over the problem for about an hour, executed multiple steps. By the time I was on a couch, beer in hand, watching France remain goal-less at half-time[^worldcup], Claude with Fable had fully re-configured my repo, built a (mostly) reusable Hugo Theme, identified that I needed DNS [301 redirects][8][^301], and found out that I was using Cloudflare to manage DNS! From my couch:
- I asked it to render self-contained HTML previews (CSS/JS inlined) of the various pages
- Addressed my usability comments
- Fixed my concern with broken links, and provided instructions to configure Cloudflare. 

## The deployment and cutover

Still on the phone, I asked it to get itself enough privilege to complete the changes, push it to the repos (which should trigger the CI/CD for publishing the site), and have it re-wire the DNS. It was able to get itself sufficient privilege via [device-flow][9][^deviceflow] (I was shocked that it limited its scope to just read-write on the repos in question), created and published the theme repo, pushed changes, updated the custom domain `shiv.me` from the old to the new repo, and generated instructions so that I could configure [Cloudflare rules][10] to keep the old links alive. Total downtime ~2 minutes. 

Notably, the agent's own guardrails **refused** three actions outright (creating a public repo, clearing the live custom domain, force-pushing) until I explicitly did those actions via the GitHub UI.

## The stack

- **[Hugo][1]** 0.163 (extended) — static site generator
- **[hugo-duality][5]** — my theme, now a public submodule
- **[Claude Code][11]** (Fable 5) — pair programmer, with remote control from the iOS app
- **[Claude Design][4]** — design system source, read via its sync tooling
- **[git worktrees][7] + [submodules][12]** — isolation until cutover
- **[gh CLI][13]** — repo creation, Actions, Pages API, device-flow auth
- **[GitHub Pages][14] + [Actions][15]** — hosting and deploys
- **[Cloudflare Redirect Rules][10]** — the 301s that made URL preservation free

The site you're reading this on is the result. Finally, I got something annoying in my life fixed with zero toil. As humans, we are tool builders. AI along with some incredible tools, services, and abstractions that we have spent the last 20 years on as a community is making that process seamless. There is incredible power and value in that. I hope we learn enough wisdom to wield it wisely. I hope we then use it to make it possible for the next generation to build large powerful abstractions and edifices of their own.

[1]: https://gohugo.io/
[2]: https://www.anthropic.com/news/claude-fable-5-mythos-5
[3]: https://gist.github.com/shiva/d6e3f9e9e59e5b8714e39da6fe92a9e7
[4]: https://claude.com/product/design
[5]: https://github.com/shiva/hugo-duality
[6]: https://keybase.io
[7]: https://git-scm.com/docs/git-worktree
[8]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301
[9]: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow
[10]: https://developers.cloudflare.com/rules/url-forwarding/
[11]: https://claude.com/claude-code
[12]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[13]: https://cli.github.com/
[14]: https://pages.github.com/
[15]: https://github.com/features/actions
[16]: https://datatracker.ietf.org/doc/html/rfc8628

[^mythos]: Anthropic's Mythos-class tier sits above Opus; Fable 5 is the generally available variant, Mythos 5 the unrestricted one for approved orgs.
[^yolo]: Claude Code's `--dangerously-skip-permissions` mode: every tool call is auto-approved without prompting. The name is apt.
[^worldcup]: 2026 FIFA World Cup Round of 16, played in Philadelphia on July 4th. France squeaked by 1–0 on a second-half Mbappé penalty, awarded after a VAR review.
[^301]: A 301 tells browsers and search engines the move is permanent, so old bookmarks keep working and search ranking transfers to the new URLs.
[^deviceflow]: OAuth 2.0 device authorization grant ([RFC 8628][16]): the agent displays a one-time code, you approve it — and its exact scopes — on github.com from another device. The credential never passes through the agent's hands unscoped.
