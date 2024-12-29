---
title: Exporting XDisplay
tags:
  - how-to
  - 'Tips & Tricks'
  - unix
  - X Display
  - xhost
date: '2011-06-21'
description: Exporting XDisplay
---

In \*nix systems, you can make the display, the GUI of an application, appear on another machine.  This if often required, when the machine you want to run the application on is in a lab, and you have access through a desktop machine that has a monitor.

You can do this, by running an XServer on the desktop machine and configuring the client (the one where you run your app) with the XServer details. By default, the XServer instance on your desktop disallows communication from all machines except localhost. Thus, you will need to add the host in the allowed list using the xhost command.

**On your machine**,  to disable security checks:

`$ xhost +`

To allow connections from a single  host:

`$ xhost +<hostname/ip>`

**On the client machine** where the application is run, set the X Server to display to (for bash shell):

`$ export DISPLAY=<hostname>:<displaynumber>.<screennumber>`

If you haven't changed the display-number or screen-number :

`$ export DISPLAY=<hostname>:0.0`

For a more detailed description of the

[How to export your X Display][0].


[0]: http://www.hungry.com/~jamie/xexport.html