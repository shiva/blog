---
layout: post
title: Trouble with Sony Ericsson W800i - Phone not detected.
categories: []
tags:
- Tips &amp; Tricks
published: true
meta:
  tags: ''
  _utw_tags_0: s:347:"a:6:{i:0;O:8:"stdClass":1:{s:3:"tag";s:28:"mobile-phone-pc-connectivity";}i:1;O:8:"stdClass":1:{s:3:"tag";s:8:"SE-W800i";}i:2;O:8:"stdClass":1:{s:3:"tag";s:19:"Sony-Ericsson-W800i";}i:3;O:8:"stdClass":1:{s:3:"tag";s:10:"Technology";}i:4;O:8:"stdClass":1:{s:3:"tag";s:18:"Tips-&#038;-Tricks";}i:5;O:8:"stdClass":1:{s:3:"tag";s:13:"Tips-n-Tricks";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '3252134'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Trying to get the Sony Ericsson W800i has been by far the most traumatic experience of my life. I tried everything possible, but still was unable to get it recognised on my home PC!

So, finally I decided to resort to the most reliable way to get anything to work with a PC. Do a google search!!!

Found a wonderful link, (on a forum that solved the issue). Here is the fix suggested, (I have organised in to be more of a step-by-step guide.

The following involves tampering with the Windows Registry. Kindly take a BACKUP of your registry using regedit before attempting any changes. Oh yeah.. you are on your own in case you screw up something.

EXPORT ALL THE KEYS MENTIONED BELOW BEFORE DELETING THEM! ALWAYS BEST TO HAVE A BACKUP

*   Make sure your phone is NOT connected to your computer.
*   Run Regedit.
*   Browse to "My ComputerHKEY_LOCAL_MACHINESYSTEMCurrentControlSetEnumUSB"
*   Delete all key that start with "Vis_0fce&amp;Pid_d028".
*   You should be back to a stage where no w800 is installed on your machine.
*   Download the drivers (Approved ones) from SE's website under Support.
*   Run the EXE file and let it install.
*   Connect your phone through the USB cable.

Link to the orginal post can be found [here](http://www.expansys.com/ft.aspx?i=125173&amp;thread=827).

[tags]SE W800i, Sony Ericsson W800i, mobile phone pc connectivity, tips n tricks[/tags]