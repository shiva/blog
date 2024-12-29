---
title: An hour with HAML and Stasis
tags:
  - HAML
  - ruby
  - site
  - site-gen
  - Stasis
date: '2012-05-20'
description: An hour with HAML and Stasis
---

I have been meaning to get into the exciting world of static site-gen. Why, you ask? Well, I will tell you why?! Actually, I'm too lazy, and it's late on a Sunday night -- instead, [Mick Gardner][0], can inform you on the [virtues of static site-generation][1].

After an hour of mucking around with several site-generators, I chose [Stasis][2], which is a good compromise to the blog-oriented [Jekyll][3], and options-insanity that is [nanoc][4]. With my new-found fascination for Ruby, I wanted to stay away from [Hyde][5] (which is Python based -- it's time to try the dark-side, a little)

[HAML][6], is an interesting markup language. Although it cleanups some of the clutter of html, there are still things that are annoying. For example:

HTML:  

HAML:  

Although, the HTML version has intrusive tags, it is easier on the eyes. It is a relief, not have to code, the end tag for every HTML element. It is much faster to type HAML by hand (especially in vim). In the end, it was a quick, painless process to convert the raw HTML code, to HAML, and generate the same html using stasis.

Life's good. I'm still learning a few new tricks. What more can one ask for?


[0]: http://mickgardner.com/
[1]: http://mickgardner.com/2011/04/27/An-Introduction-To-Static-Site-Generators.html
[2]: http://stasis.me/
[3]: http://jekyllrb.com/
[4]: http://nanoc.stoneship.org/
[5]: http://ringce.com/hyde
[6]: http://haml.info/