---
title: The undone made possible
draft: false
categories:
  - technology
tags:
  - AI
  - productivity
  - possibilities
  - GTD
description: "How AI helped a chronic procrastinator complete two decade-old projects"
date: '2025-06-07T14:30:00-08:00'
---

![Cover Photo](/images/undone-made-possible-cover.webp)

> Code waits patient,  
> Dreams gather digital dust—  
> Until machines learn.  
---

We all have them—that long list of projects, ideas, and tasks that are left incomplete. Like a cluttered kitchen drawer ignored until you wedge the oversized scissors between the back and the roof of the cabinet, we leave piles of neglected items in the wake of our busy lives. There is a special kind of mental malaise that comes from carrying around ideas and tasks, relegating them to purgatory. That app concept left unfinished just after you figured out how to add 1,700 dependencies to your React app and spent eight hours learning the nuances of MVVM. The data analysis you *meant* to complete to dispel misinformation spouted by Elon about who did meaningful work based on the number of lines of code committed. The project around the house you need to do every year, but can’t be done because you don’t have the time to do the required research. These orphaned possibilities accumulate over the years. And I have a very long list.

In the past month, I tackled two of them:

1. I actually levelled my lawn. I used ChatGPT to do all the planning. More importantly, I used it for the deep research required to indulge my obsession with the minutiae of sand types (it’s river sand) and lawn dressing (I gave it the four available options that mygardenbag.com carries, and it chose the best one based on my lawn’s current state!).
2. I cleaned up some of the broken links in this blog—going all the way back to 2004.

These clearly don’t matter much in the grand scheme of things. You may ask, “What value did any of this add to the world?” In my own life, finishing these projects generates joy, a sense of relief, and a little calm before the dread of other unfinished things sets in. It connects me to all that is good about living, and I am so grateful for that feeling.

I could have hired someone to do it for me. I just need to learn to delegate, as Tim Ferriss suggests in [*The 4-Hour Work Week*][1].

Well, I did.

It just happens to be a $20/month AI (ChatGPT), and the free GitHub Copilot plugin in my VS Code editor.

## AI – the enabler

There remains an incredible amount of hype around AI—it’s going to replace developers, it’s going to steal jobs, it’s just not good enough, it doesn’t work for deterministic tasks, only stochastic ones. For all the naysaying, what AI enables is the ability to overcome procrastination. It reduces friction and encourages us to get things done. I am the ultimate procrastinator—all I need is a glimmer of an excuse to drop the boring thing in front of me and latch on to the cool, detail-oriented, inconsequential thing that needs to be done before I do the task at hand.

## The Lawn Project

I had a ton of questions about my lawn. I have someone helping me do the major maintenance work for it. I needed to figure out how I could get the most out of the paid services by doing some of the work myself (and save some of the cost). I wasn’t sure what to do after applying lime. I needed to know how to use Grub B Gon safely (those pesky bugs, grubs) and if I could use the seed spreader for it. I had umpteen questions on how to level the lawn properly, the type and amount of topdressing I needed, how to mix it with river sand, and when to overseed. ChatGPT answered all my questions—patiently, of course—and also helped me find various vendors that offered the products I needed. I chose [mygardenbag.com][2]—they’re a local small business I wouldn’t have found on Google, but ChatGPT found that they offered one-yard bags with a mix-and-match option that perfectly fit my needs. (FYI—search is so done!)

Then, it planned my schedule. The plan was detailed— prepping, products I need, raking, topdressing, overseeding, and suggested that I ask my gardeners to move their fertilizing schedule. (Oh, BTW, apps and websites are so done!) So, here is the plan I am now executing:

### Timeline

#### ✅ June 1 (Sunday)
- Applied **14-4-8 Moss Control Fertilizer** with iron

#### ✅ June 3 (Tuesday)
- **Rake out dead moss**
- **Mow lawn** to 1.5–2 inches

#### ✅ June 4 (Wednesday)
- Apply **topdressing mix + river sand** (3:1 ratio)
- **Level the lawn** with a landscape rake
- **Overseed** entire lawn with Scotts Supreme Seed
- **Do not apply** Turf Builder with corn gluten (prevents seed germination)

#### 🗓️ June 4–18
- **Water 2× daily** (morning & evening)
- Keep seedbed consistently moist

#### 🗓️ June 20–22
- Apply **Vigoro Lawn Fertilizer** (starter feed)
- Begin **mowing** once new grass reaches ~3 inches

#### 🗓️ September 1
- Apply **Scotts Turf Builder (Corn Gluten)** *only if not overseeding again in fall*

It isn't just about getting things done—it’s about leaving reasons to not do something in the dust. It is about reclaiming agency over your life, with AI as your own, personalized, idealized Commander Data. Forever urging you to just be better.

## The Dead Link Extermination Initiative 

I have written this blog since 2004. It was first started on blogger, then exported to wordpress (self-hosted), and has gone through various blog hosting methods. I currently use Hugo to generate the output. Through the years, I have migrated the text content, but the links and images weren't always migrated correctly. ChatGPT estimates 1300+ posts, across 21 years of semi-continuous updates (Although it missed that I haven't posted here between 2016 and 2025), with over 5K links.  There is no reality where I would find the time or inclination to address this. Yet, today, before I wrote this post, that is exactly what I did. It took me less time to fix 40+ incorrect URIs across 17 blog posts than it took to write this post.

Here is the summary of changes GitHub Copilot made to my blog posts, to remove old links that are now defunct. 

```
Summary of Broken Link Fixes Completed
I've successfully identified and fixed numerous broken links across your blog website. Here's a comprehensive breakdown of the work completed:

Fixed Link Categories:
1. shvelmur.com Image Links (19 links fixed)

Replaced broken image references with local equivalents where available
Added graceful fallback text for missing images
Files affected: meeting-old-friends.md, windows-live-writer-growing-pains-2.md, got-my-hand-back-finally-3.md, hell-via-sify-broadband.md, new-phone-nokia-n73.md, thats-what-i-call-a-search.md, xml-validator.md, who-wants-to-be-the-president.md, mono-and-sharpdevelop-a-baby-step.md

2. shvelmur.com Download Links (6 links fixed)

XML Validator download → "download no longer available"
Bangalore Hangouts files → "download files no longer available"
Batch Categories PHP files → "downloads no longer available"

3. posterous.com Links (3 files fixed)

Converted broken image links to use local images
Added service deprecation notices
Files: map-of-the-internet-circa-2006.md, im-getting-an-os-upgrade-for-10-bucks.md

4. zooomr.com Links (3 files fixed)

Fixed broken image references using local images
Added service deprecation notices
Files: unix-how-to-check-system-configuration-on-solaris.md, loving-my-canon-40d.md

5. static.flickr.com Links (2 files fixed)

Converted to use local images
Files: vancouver-2010.md, one-cat-and-lots-of-code.md

Graceful Degradation Strategy:

Used descriptive fallback text for missing images: *[Description - image no longer available]*
Preserved content context while acknowledging missing resources
Maintained blog post readability without broken links

Git Commits Created:

4 detailed commits with comprehensive change descriptions
Total files modified: 17 blog post files
Total broken links fixed: 40+ across various categories

Remaining Work:

20 shvelmur.com links remaining (mostly non-image links)
28 posterous.com links remaining
9 zooomr.com links remaining

The major image broken links and high-impact download links have been successfully resolved. The blog should now display properly without broken image placeholders, and users will see helpful messages instead of 404 errors.
```

It's not productivity increase that is the revolution, it's not the reduced opex—the real revolution is personal; __*AI spurs individual action*.__ It's the art of the possible times infinity. So go forth, ignore the naysayers, and make things. 

## Oldest undone thing first

I'd suggest a simple exercise: identify your oldest undone project or idea. The one that's been sitting in your mental backlog for years. The idea you've explained to friends but never pursued. The solution you've wanted to build for a problem you actually experience. 

Start there.

Not because it's the most important project you could work on, but because completing something that has remained undone for years breaks a psychological barrier. It transforms you. Don’t let your ideas gather dust in the drawer or drift in Trishanku’s limbo[^1]—bring them to earth. Finish what you started.

*All em-dashes in this post were added by a discerning human, who is learning the proper use of punctuation from a printed copy of the Chicago Manual of Style, despite having access to four different AI agents.*

** The post is also [available on my substack][3] if you prefer to read there. **

---
[1]: https://fourhourworkweek.com/
[2]: https://mygardenbag.com/
[3]: https://shivan.substack.com/p/the-undone-made-possible
[4]: https://en.wikipedia.org/wiki/Trishanku

[^1]: *In Hindu mythology, Trishanku was a king caught between heaven and earth—too elevated for the mortal realm, yet unable to ascend to the divine. Our undone projects occupy a similar liminal space: too important to discard, too challenging to complete. Spoiler alert, much like ChatGPT coming to our rescue, Trishanku eventually ascends to the heavens with the help of Vishvamitra. For a somewhat questionable, but passable interpretation, visit [the Wikipedia page for Trishanku][4]*
