---
title: OPML Editor as a wordpress editor
tags:
  - OPML
  - OPML Editor
  - review
  - Tools
  - Wordpress editor
date: '2010-03-24'
description: OPML Editor as a wordpress editor
---

This is a test post to see if [Dave Winer][0]'s [][1][OPML editor][1] works with a [][2][][2][self-hosted wordpress blog][2]. There is something geeky about seeing crappy fonts on a screen, that makes one want to use a tool more. 

I've known of the OPML editor for a few years now, and have tried several times to find a neat use-case for it in my workflow, and it never had a compelling enough reason for me to stick with it. I'm hoping that this new wordpress editor tool will make me want to use this more.

This is the first post that I'm writing using OPMLEditor, and here are some of the impressions in the first 30 minutes of use. This is by no means a thorough analysis, and is mostly off the top of my head.

Some cool things:

* Very simple elegant interface, that let's you focus on writing content
* Updating an existing post, is as simple as opening a window, and starting to type. This also allows for micro-updates. As I typed this post, I save atleast 3 times. Since my blog has RSSCLoud and PubSubHubBub (sucky name), every time I hit save, you happen to be online, you will receive an update.

Some annoyances:

* HTML markup when you decide to mark up your page. Since I'm a geek, I guess I don't mind this, although I would like to be able to use my favourite markup syntax, like Markdown.
* Non-standard menu layout =\> I need to search for stuff. This is pain, until I learnt the ropes a bit (all of 15 mins), and I figured out how to use it. 
* I don't like to take my hands of the keyboard very often, and I tend to shy away from tools that make me do it. Unfortunately, there are no default shortcuts for the simple functionality like adding a link or making something bold, etc. On the one hand, this means, that I will complete writing all that I want to write and then make it pretty. Although, I might get used to working this way, I would still be able to do most of the annotation using just the keyboard. I hope that there is someway to acheive this. I might be wrong about this, so don't stone me over this. ;)
* Another really annoying thing, every time I press enter, it OPMLEditor starts a new outline, which is great for outlining, but when I try to create a list of items, it sucks -- big time. For instance, see how it is horrible to view this list in the editor. If need to change one element, I will need to look at much more of the text, just to figure out where to change it.

![Screenshot of OPMLEditor](/images/user.wordPress.workspace.png)
* This can be solved by allowing multiple lines in the editor (using shift+enter), and ignoring those when converting to HTML.
* Images have to handle independant of the post creation. I so, wish that the OPML, can also publish the img with the post, but I think Wordpress doesn't provide XMLRPC API for such upload. I posted the image on this post on dropbox, which to a certain extent mitigates this issue, since all you have to do, is use something Skitch to take a screenshot and move it a public dropbox folder. Right-click the image, and you can copy the public link of that image, in finder. Another Cmd-tab, brings you back to the editing context, and few more clicks later, you have placed your image in the post. It's a pain, but it is better than waiting for the image to upload, etc..
* It creates tables for every item in an outline!! This is going to be a very big problem for me, since this means mixing presentation with data so much, that it will be impossible for me to parse this out later, if I just need to get the data. I don't understand, why what is being done using tables, can't be done using paragraphs instead?! This would also allow, the theme on the site to layout the data in whatever way it deems fit. I wonder if I can change this myself?



[0]: http://www.scripting.com/stories/2007/02/21/daveWinerBio.html
[1]: http://editor.opml.org/
[2]: http://wordpressroot.wordpress.com/2008/08/09/writing-for-wordpress-in-the-opml-editor/