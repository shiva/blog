---
title: 'Firefox upgrade!'
tags:
  - Tools
date: '2006-12-24'
description: 'Firefox upgrade!'
---

It is not just M$ that struggles with frequent patches for its products. Mozilla just released a whole host of bug fixes in a new release 2.0.0.1\. You can download it [here ][0]or use the direct links below.  
[  
][1]Http Direct Links to Oregon State University's Open Source Lab[  
Windows][1]  
[Linux  
][2][Mac][3]

**Ftp mirror**: ftp.osuosl.org  
**Firefox 2.0.0.1 home dir**: /pub/mozilla.org/firefox/releases/2.0.0.1/

**windows**: $home/win32/en-US/Firefox Setup 2.0.0.1.exe  
**linux**: $home/linux-i686/en-US/firefox-2.0.0.1.tar.gz  
**mac**: $home/mac/en-US/Firefox 2.0.0.1.dmg

There are some issues upon upgrading. Some plugins have trouble working, notably Google Accelerator. You might want to disable that for a while and wait around for an upgrade.

Also, the upgrade sometimes causes an infinite loop, when upgrading from Firefox 2.0 using the built-in auto-updater. Firefox restarts and starts to download the upgrade, and throws an error about lack of file permissions, the updater terminates and starts again. The only way to get out of that loop is to either log off from windows or terminate your network connection (don't try this at your workplace :) ).

I'm yet to confirm it as a bug, but just in case you are also facing the same, do let me know. For 2.0.0.1 upgrade, please use the download links to download the Firefox installer and upgrade offline. This I have found to be the safest route for now!


[0]: http://www.mozilla.com/en-US/firefox/
[1]: http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/win32/en-US/Firefox%20Setup%202.0.0.1.exe
[2]: http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/linux-i686/en-US/firefox-2.0.0.1.tar.gz
[3]: http://releases.mozilla.org/pub/mozilla.org/firefox/releases/2.0.0.1/mac/en-US/Firefox%202.0.0.1.dmg
