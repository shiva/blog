---
title: 'Bug Fix: Boast Machine 3.1'
tags:
  - coding
date: '2006-05-09'
description: 'Bug Fix: Boast Machine 3.1'
---

There is an issue with installing the latest version of boast machine v3.1\.

The message displayed during install is this  
`Error message : Invalid default value for 'author'`

The problem is due to the following code in install.php  
`author INT(10) NOT NULL default ' ',` 

This should be changed to  
`author INT(10) NOT NULL ,`

[install patch for Boast Machine 3.1  
][0]

_\*Note: Right-click and save target as / Save link as_


[0]: http://shvelmur.com/wpress/wp-admin/install.php "install patch for Boast Machine 3.1"
