---
layout: post
title: 'Bug Fix: Boast Machine 3.1'
categories: []
tags:
- coding
published: true
meta:
  tags: ''
  _utw_tags_0: s:104:"a:2:{i:0;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}i:1;O:8:"stdClass":1:{s:3:"tag";s:6:"Others";}}";
  aktt_notify_twitter: 'no'
  _aktt_hash_meta: ''
  dsq_thread_id: '3180002'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

There is an issue with installing the latest version of boast machine v3.1.

<span class="postbody">The message displayed during install is this  

</span>`Error message : Invalid default value for 'author'`

The problem is due to the following code in install.php  

`author INT(10) NOT NULL default ' ',`<span class="postbody"> </span>

This should be changed to  

`author INT(10) NOT NULL ,`

<span class="postbody">[install patch for Boast Machine 3.1  

](http://shvelmur.com/wpress/wp-admin/install.php "install patch for Boast Machine 3.1")</span>

_*Note:  Right-click and save target as / Save link as_