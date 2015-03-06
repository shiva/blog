---
layout: post
title: An hour with HAML and Stasis
categories: []
tags:
- HAML
- ruby
- site
- site-gen
- Stasis
published: true
meta:
  _edit_last: '1'
  aktt_notify_twitter: 'no'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

I have been meaning to get into the exciting world of static site-gen. Why, you ask? Well, I will tell you why?! Actually, I'm too lazy, and it's late on a Sunday night -- instead, [Mick Gardner](http://mickgardner.com/), can inform you on the [virtues of static site-generation](http://mickgardner.com/2011/04/27/An-Introduction-To-Static-Site-Generators.html).

After an hour of mucking around with several site-generators, I chose [Stasis](http://stasis.me/), which is a good compromise to the blog-oriented [Jekyll](http://jekyllrb.com/), and options-insanity that is [nanoc](http://nanoc.stoneship.org/). With my new-found fascination for Ruby, I wanted to stay away from [Hyde](http://ringce.com/hyde) (which is Python based -- it's time to try the dark-side, a little)

[HAML](http://haml.info/), is an interesting markup language. Although it cleanups some of the clutter of html, there are still things that are annoying. For example:

HTML:  

<script type="text/javascript" src="https://gist.github.com/2760742.js?file=sample.html"></script>

HAML:  

<script type="text/javascript" src="https://gist.github.com/2760742.js?file=sample.haml"></script>

Although, the HTML version has intrusive tags, it is easier on the eyes. It is a relief, not have to code, the end tag for every HTML element. It is much faster to type HAML by hand (especially in vim). In the end, it was a quick, painless process to convert the raw HTML code, to HAML, and generate the same html using stasis.

Life's good. I'm still learning a few new tricks. What more can one ask for?