---
layout: post
title: Firefox upgrade!
categories: []
tags:
- Tools
published: true
meta:
  tags: ''
  _utw_tags_0: s:101:"a:2:{i:0;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}i:1;O:8:"stdClass":1:{s:3:"tag";s:3:"Web";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '3252128'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

It is not just M$ that struggles with frequent patches for its products. Mozilla just released a whole host of bug fixes in a new release 2.0.0.1. You can download it [here ](http://www.mozilla.com/en-US/firefox/)or use the direct links below.  

[  

](http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/win32/en-US/Firefox%20Setup%202.0.0.1.exe)Http Direct Links to Oregon State University's Open Source Lab[  

Windows](http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/win32/en-US/Firefox%20Setup%202.0.0.1.exe)  

[Linux  

](http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/linux-i686/en-US/firefox-2.0.0.1.tar.gz)[Mac](http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/mac/en-US/Firefox%202.0.0.1.dmg)

**Ftp mirror**: ftp.osuosl.org  

**Firefox 2.0.0.1 home dir**: /pub/mozilla.org/firefox/releases/2.0.0.1/

**windows**: $home/win32/en-US/Firefox Setup 2.0.0.1.exe  

**linux**: $home/linux-i686/en-US/firefox-2.0.0.1.tar.gz  

**mac**: $home/mac/en-US/Firefox 2.0.0.1.dmg

There are some issues upon upgrading.  Some plugins have trouble working, notably Google Accelerator. You might want to disable that for a while and wait around for an upgrade.

Also, the upgrade sometimes causes an infinite loop, when upgrading from Firefox 2.0 using the built-in auto-updater. Firefox restarts and starts to download the upgrade, and throws an error about lack of file permissions, the updater terminates and starts again. The only way to get out of that loop is to either log off from windows or terminate your network connection (don't try this at your workplace :) ).

I'm yet to confirm it as a bug, but just in case you are also facing the same, do let me know. For 2.0.0.1 upgrade, please use the download links to download the Firefox installer and upgrade offline. This I have found to be the safest route for now!