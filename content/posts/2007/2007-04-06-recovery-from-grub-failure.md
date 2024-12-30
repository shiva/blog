---
title: Recovery from GRUB Failure
tags:
  - 'Tips & Tricks'
date: '2007-04-06'
description: Recovery from GRUB Failure
---

I have a dual-boot PC at home, which boots to OpenSUSE and Windows. After a very tiring 7 hour journey, I came home to a GRUB failure. After searching for help all over the web, I found some help [here][0], [here][1], [here][2], [here][3], [here][4] and [here][5]. :)

It turns out, that GRUB stage 2 was not being loaded. So here's what I did.

1\. set the root partition

2\. run GRUB setup on the MBR.

3\. load the os using chainloader.

To set a partition as root, it is required to know the device where the root partition resides. This can be found using the following command

`grub> find /boot/grub/stage1  
grub> root (hd0,0)  
grub> setup (hd0,0)  
grub>chainloader +1`

This got my system back to normal. I'm wondering where I can get some more information about GRUB, I don't understand GRUB much and would like to change that. Links to tutorials anyone?!

Update: Since there is hardly any audience that read my blog, it's only fair that I stop asking questions.. :) So here are some links that I found

\[tags\]boot problem, GRUB failure, GRUB, GRUB corrupted\[/tags\]


[0]: http://orgs.man.ac.uk/documentation/grub/grub_3.html
[1]: http://orgs.man.ac.uk/documentation/grub/grub_12.html#SEC38
[2]: http://orgs.man.ac.uk/documentation/grub/grub_4.html#SEC12
[3]: http://orgs.man.ac.uk/documentation/grub/grub_13.html#SEC78
[4]: http://www.troubleshooters.com/linux/grub/grub.htm
[5]: http://www.geocities.com/epark/linux/grub-w2k-HOWTO.html