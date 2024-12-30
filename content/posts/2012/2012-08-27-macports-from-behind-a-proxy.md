---
title: Macports from behind a proxy
date: '2012-08-27'
description: Macports from behind a proxy
---

I've been using my MBP as the main computer at work for a couple of weeks now. It is not officially "supported", and I'm left to my own devices to figure out any issues that arise.

Configuring proxies on the mac for all GUI applications is quite simple. However, most of the \*nix tools have trouble with it. Macports, which I love to hate, should read it from the environment's $http\_proxy and $rsync\_proxy, but for some reason doesn't really do so. The simplest fix, is to override system env variables, and use the macport configuration file to provide the proxy. It works like a charm (one of reason to like macports, I suppose)

Edit $HOME/macports/etc/macports/macports.conf, and add the following.  
(I prefer installing macports in its own directory .. if it ever gets too big, I can delete the directory, and go back to using standard tools that come with the mac)