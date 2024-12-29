---
title: Battle of the static site generators
tags:
  - static site generator
  - hexo
  - hugo
  - jekyll
  - reviews
date: '2016-02-10'
description: Battle of the static site generators - 1. Bye bye, Jekyll. Hello, Hugo!
slug: battle-of-the-static-site-generators-1
---

I set myself a goal to write more this year - in fact, I attempted to do so once every week. This required me to look at my blog, which led to the inevitable: small changes in what it looked like, led to general dis-satisfcation with the current solution I have to publish my blog, which quickly ballooned into a whole host of activities.

Let me step back a bit. 

## Jekyll is really Hyde

I host my blog on github, using a static site generator - Jekyll. It is written in ruby, has some cool features. Overall, it is a decent solution, but I was never satisfied with options it provided. I have hesistated to hack at it, since ruby isn't my language-du-jour, and most of the changes have been quite minimal. It is also extremely slow[^1].

As any self-respecting programmer is wont to do, instead of writing more posts, and meeting my goal, I delved right into fixing "bike-shed" -- in this case, research and use a new static-site generator. Why, you ask? To you, non-existent, ever-questioning inquisitive you, I say -- Why not?! 

As with any successful hunt, one *must* make a list: One that shall help determine settle the battle of the generators.

   - Must be *fast* -- I mean blazing.
   - Must be in one of the languages I currently hack in: go, nim, c, c++, javascript, python, rust, erlang
   - Should have good defaults -- shouldn't need plugins to perform basic features: syntax highlighting, responsive images, theming, 
     permalinks and good markdown support.
   - Should have a few good themes
   - Good community support and/or documents

## The contenders

Scouring the corners of the internet, I narrowed down on two final choices: [Hexo](https://hexo.io/) and [Hugo](https://gohugo.io/). 

## New shiny, shiny

They 
   - are faster at generating 300+ pages.
   - are opinionated and hence have good defaults.
   - support most of features I am looking for except responsive images.
   - provide extended markdown support by default.
   - hosted by an active community.

## Hugo FTW! 

Both Hugo and Hexo are pretty good. They are fast enough for my use, and are implemented in modern languages that I am actively learning. 

Hugo edged out Hexo: It has a few features that look promising and is a bit more fun to hack. It is written in go and this make it ideal. I am switching to Go as a primary language for my hacking needs. A lot of issues, and about 3000 forks is a good opportunity to contribute to a larg-ish project in go!

The choice is made. Now to move the herd. I have the daunting task of migrating 300+ posts that were originally posted on different blog engines of the past: blogger, wordpress, and octopress and finally jekyll. 

[^1]: Slow is relative. I have about 300+ posts, and rendering them into HTML using jekyll, takes a few minutes. 

