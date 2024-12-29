---
title: 'Working with rpms (extract, list contents)'
tags:
  - extract rpm
  - list contents
  - list contents of rpm
  - rpm
  - unix
  - unix commands
date: '2013-02-17'
description: 'Working with rpms (extract, list contents)'
---

Unix. I love thee!

Extract an rpm without installing in to the current directory (really, the rpm command should support this):

`  
$ rpm2cpio myrpmfile.rpm | cpio -idmv`

\*i: Restore archive

\*d: Create leading directories where needed

\*m: Retain previous file modification times when creating files

\*v: Verbose i.e. display progress  

List contents of an rpm:

`  
$ rpm -qlp myrpmfile.rpm  
`

[source][0]


[0]: http://www.cyberciti.biz/tips/how-to-extract-an-rpm-package-without-installing-it.html