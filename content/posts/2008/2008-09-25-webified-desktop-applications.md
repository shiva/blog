---
title: Webified desktop applications
tags:
  - AIR-based apps
  - flaws
  - flickr uploader
  - uploader v3
  - web-technology based app
  - webified desktop applications
date: '2008-09-25'
description: Webified desktop applications
---

You know something is seriously out of whack, when you download a 12 MB application that is just a step above an ftp application. I know, a rant at such an ungodly hour! Yup! I have been up 2 hours past bed-time trying to upload a few high-resolution photos.

I found these shots of fireworks that I captured about two months back, and finally managed to sneak in some time to process these shots. I started my attempt at putting [these][0] on my [flickr account][1], and [the pitiful uploader V3][2], has been failing for the last 2 hours! I doesn't seem to be the servers, since the 2.5 version works fine. Although, I must confess, I'm uploading files that are more than 5MB, and it's really just timeout issues.

[![Mirage of a once bright expression of light](/images/2887342372_76fa1b7ecc.jpg)][3]

What is with this craze for making all desktop applications suck, by re-writing the simplest of desktop apps in  javascript and its ilk I'm looking at you, AIR)? It's fine to use these heavy-weight stacks as a stop-gap solution. But, to turn a prefectly [good app into mush][4], in the name of multi-platform support is a crime--no less.

If you want to write multi-platform applications--use Java or some library like Boost. It also, helps to remember the main functionality, and ensure that works well--really well. An uploader, should never fail, when "uploading" stuff, an email client--should have reliable email dispatch, etc.

I wonder where this will lead us? Maybe 10 years from now, we will end up with a calculator application that will use 100 MB disk spave, and we wouldn't worry about it, coz our computers will have 10 GB of RAM and several  PetaHz processing power or some such crap. I'm not really looking forward to a future like that. Maybe, I should start that open source project for a native flick app after all.

Update: They are finally up...phew! Here's the fireworks collection:

[![So what if the Hadron Collidor is down?!](/images/2886495217_9ecd37176b_s.jpg)][5] [![The big bang (s)](/images/2887337666_7e2ced36dd_s.jpg)][6] [![Celebration of Light 2008 - US - #1](/images/2886444569_ded215b944_s.jpg)][7] [![A tree in the sky](/images/2887300174_5ce8258758_s.jpg)][8] [![Celebration of Light 2008 - China - #4](/images/2887314148_7468e98e26_s.jpg)][9]


[0]: http://flickr.com/photos/shvelmur/sets/72157607481830420/
[1]: http://flickr.com/photos/shvelmur/
[2]: http://www.stevey.com/2008/01/12/the-new-flickr-uploader/
[3]: http://www.flickr.com/photos/shvelmur/2887342372/
[4]: http://techiteasy.org/2007/12/20/bloatware-the-case-of-flickr-uploadr-3/
[5]: http://www.flickr.com/photos/shvelmur/2886495217/
[6]: http://www.flickr.com/photos/shvelmur/2887337666/
[7]: http://www.flickr.com/photos/shvelmur/2886444569/
[8]: http://www.flickr.com/photos/shvelmur/2887300174/
[9]: http://www.flickr.com/photos/shvelmur/2887314148/