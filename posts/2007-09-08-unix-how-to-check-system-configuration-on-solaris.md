---
layout: post
title: 'Unix: how to check system configuration on solaris'
categories: []
tags:
- coding
- solaris
- unix
published: true
meta:
  tags: ''
  _utw_tags_0: s:58:"a:1:{i:0;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}}";
  _edit_last: '1'
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '3066054'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

I had to compare machine hardware today, and found information on that [here](http://esofthub.blogspot.com/2006/10/view-processor-speed-and-ram-size.html).

**#prtdiag -v - **Gives hardware information about FSB, Sparc Model, CPU speed, RAM, Harddisks, USB drives (ie. PCI and networking slots) etc.

Click on the image below, for a detailed overview of prtdiag's output

[![](/images/3177597_b6727fa7f6_m.jpg)](http://static.zooomr.com/images/3177597_653fa457f3_o.png)

**#psrinfo -p** - lists number of physical processors .

**#psrinfo -p -v** - list number of virtual processors (cores) per physical processor.

**#psrinfo -v** - detailed information for each virtual processor.

**#prtconf | grep Memory **- displays total amount of RAM.

Technorati Tags: [unix commands](http://technorati.com/tags/unix%20commands), [solaris commands](http://technorati.com/tags/solaris%20commands), [system configuration](http://technorati.com/tags/system%20configuration)