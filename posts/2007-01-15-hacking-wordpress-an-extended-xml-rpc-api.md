---
layout: post
title: Hacking Wordpress - An extended XML-RPC API
categories: []
tags:
- Tips &amp; Tricks
published: true
meta:
  tags: ''
  _utw_tags_0: s:605:"a:12:{i:0;O:8:"stdClass":1:{s:3:"tag";s:8:"blog-API";}i:1;O:8:"stdClass":1:{s:3:"tag";s:11:"blog-client";}i:2;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}i:3;O:8:"stdClass":1:{s:3:"tag";s:4:"Java";}i:4;O:8:"stdClass":1:{s:3:"tag";s:6:"Others";}i:5;O:8:"stdClass":1:{s:3:"tag";s:15:"Random-Thoughts";}i:6;O:8:"stdClass":1:{s:3:"tag";s:13:"Tips-n-Tricks";}i:7;O:8:"stdClass":1:{s:3:"tag";s:3:"Web";}i:8;O:8:"stdClass":1:{s:3:"tag";s:9:"wordpress";}i:9;O:8:"stdClass":1:{s:3:"tag";s:17:"wordpress-plugins";}i:10;O:8:"stdClass":1:{s:3:"tag";s:7:"WPexAPI";}i:11;O:8:"stdClass":1:{s:3:"tag";s:7:"xml_rpc";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '3156037'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Having broken my elbow, I have spent the last two weeks typing away with a single hand. With nothing much to do, I went about looking at ways to improve the capabilities of blog editors. I use BlogDesk for my blogging needs. It is a wonderful editor, that let you do all operations provided by MetaWeblog API. However I wanted to do more than what was provided there. I wanted to add some features for plugins that I used.

The following is a propopsed list of extensions:

*   <div>Create/edit posts

    - define post passwords (_Thanks to [<span class="gmail_quote"></span><span class="gmail_sendername">Johannes Oppermann</span>](http://www.blogdesk.org/en/index.htm)<span class="gmail_quote"></span><span class="gmail_sendername">, </span><span class="gmail_quote"></span><span class="gmail_sendername">developer of the wonderful blog client, BlogDesk</span>_[<span class="gmail_quote"></span><span class="gmail_sendername">)</span>](http://www.blogdesk.org/en/index.htm)
    - image insert from different services (flickr)
    - tagging support
    - Similar to [QuickTags](http://redalt.com/wiki/Comment+Quicktags) plugin
    - Support for [Ultimate Tag Warrior's ](http://www.neato.co.nz/ultimate-tag-warrior/) features
    - Adsense integration</div>

*   <div>Admin Support

    - display a dasboard
    - Spam Karma comment moderation
    - Adsense data</div>

In my search I found some interesting links.  

[Tutorial on hacking XMLRPC](http://blog.circlesixdesign.com/2006/10/01/hacking-xmlrpc-wordpress-and-textmate/)

Links for writing XML-RPC clients  

[http://ws.apache.org/xmlrpc/client.html](http://ws.apache.org/xmlrpc/client.html)  

[http://www.ibiblio.org/xml/books/xmljava/chapters/ch03s04.html](http://www.ibiblio.org/xml/books/xmljava/chapters/ch03s04.html)  

[http://www.wordtracker.com/docs/api/ch03s02.html](http://www.wordtracker.com/docs/api/ch03s02.html)  

[JBlogEditor svn trunk](http://jblogeditor.svn.sourceforge.net/viewvc/jblogeditor/trunk/main/src/com/chimshaw/jblogeditor/metaweblog/MetaWeblogBlog.java?revision=4&view=markup)

Well, the end result, here's the pre-Alpha version of [WPexAPI](http://shvelmur.com/downloads/code/WPexAPI/xmlrpc.php.txt).