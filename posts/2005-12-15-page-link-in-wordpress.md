---
layout: post
title: Page link in wordpress
categories: []
tags:
- Tips &amp; Tricks
published: true
meta:
  tags: wordpress falbum k2
  _utw_tags_0: s:364:"a:7:{i:0;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}i:1;O:8:"stdClass":1:{s:3:"tag";s:6:"Others";}i:2;O:8:"stdClass":1:{s:3:"tag";s:18:"page-link-to-theme";}i:3;O:8:"stdClass":1:{s:3:"tag";s:13:"Tips-n-Tricks";}i:4;O:8:"stdClass":1:{s:3:"tag";s:9:"Tutorials";}i:5;O:8:"stdClass":1:{s:3:"tag";s:9:"webdesign";}i:6;O:8:"stdClass":1:{s:3:"tag";s:9:"wordpress";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

I have been wondering for sometime now, how K2, added an entry in pages, but the content was controlled from the one of the php files in the theme directory.

It turns out that is is very simple (yet elegant ... hat's off to wordpress guys). I used this to integrate FAlbum into K2.

Okay, let's get on with the tutorial:  

*WARNING*: Take a backup of your database before you proceed with the following

**Step 1** : Open the wordpress database in phpMyAdmin  

**Step 2** : Add an entry in the "wp_posts" table, ensuring that the "guid_id" field is empty.

<div class="code">INSERT INTO `wp_posts` VALUES (  

                                                                                123,  

                                                                                1,  

                                                                                '2005-11-16 15:27:21',  

                                                                                '2005-11-16 10:27:21',  

                                                                                'Do not edit this page',  

                                                                                'Photos',  

                                                                                0,  

                                                                                '',  

                                                                                'static',  

                                                                                'open',  

                                                                                'open',  

                                                                                '',  

                                                                                'photos',  

                                                                                '',  

                                                                                '',  

                                                                                '2005-12-15 02:29:33',  

                                                                                '2005-12-14 21:29:33',  

                                                                                '',  

                                                                                0,  

                                                                                '',  

                                                                                0);
</div>

**Step 3** : Now create a php template file in your theme's directory.

This is easily acheived by adding the following at the begining of the new php file

<div class="code">< ?php /*  

	Template Name: Archives (Do Not Use Manually)  

*/ ?></div>

**Step 4** : Add code to display whatever content when the page link is clicked.  

**Step 5** : Go to Manage>Pages, and edit the page entry for the newly added page.  

**Step 6** : Change the page template to the newly created template.

**Thing to note:**  

Ensure that the entry for the page link in the database does not have the "guid" field filled. This would cause the page to load the content of the page entry in the final output.