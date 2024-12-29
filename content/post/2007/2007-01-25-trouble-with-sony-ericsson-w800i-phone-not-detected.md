---
title: Trouble with Sony Ericsson W800i - Phone not detected.
tags:
  - SE
  - W800i
  - Sony
  - Ericsson
  - W800i
  - mobile
  - phone
  - pc
  - connectivity
  - tips
  - 'n'
  - tricks
date: '2007-01-25'
description: Trouble with Sony Ericsson W800i - Phone not detected.
---

Trying to get the Sony Ericsson W800i has been by far the most traumatic experience of my life. I tried everything possible, but still was unable to get it recognised on my home PC!

So, finally I decided to resort to the most reliable way to get anything to work with a PC. Do a google search!!!

Found a wonderful link, (on a forum that solved the issue). Here is the fix suggested, (I have organised in to be more of a step-by-step guide.

The following involves tampering with the Windows Registry. Kindly take a BACKUP of your registry using regedit before attempting any changes. Oh yeah.. you are on your own in case you screw up something.

EXPORT ALL THE KEYS MENTIONED BELOW BEFORE DELETING THEM! ALWAYS BEST TO HAVE A BACKUP

* Make sure your phone is NOT connected to your computer.
* Run Regedit.
* Browse to "My ComputerHKEY\_LOCAL\_MACHINESYSTEMCurrentControlSetEnumUSB"
* Delete all key that start with "Vis\_0fce&Pid\_d028".
* You should be back to a stage where no w800 is installed on your machine.
* Download the drivers (Approved ones) from SE's website under Support.
* Run the EXE file and let it install.
* Connect your phone through the USB cable.

Link to the orginal post can be found [here][0].



[0]: http://www.expansys.com/ft.aspx?i=125173&thread=827
