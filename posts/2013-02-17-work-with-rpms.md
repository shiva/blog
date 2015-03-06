---
layout: post
title: Working with rpms (extract, list contents)
categories: []
tags:
- extract rpm
- list contents
- list contents of rpm
- rpm
- unix
- unix commands
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _wp_old_slug: extract-rpm-without-installing
  _wpas_skip_2634709: '1'
  _wpas_skip_2634712: '1'
  _wpcom_is_markdown: '1'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Unix. I love thee!

Extract an rpm without installing in to the current directory (really, the rpm command should support this):

`  

$ rpm2cpio myrpmfile.rpm | cpio -idmv

*i: Restore archive

*d: Create leading directories where needed

*m: Retain previous file modification times when creating files

*v: Verbose i.e. display progress  

`

List contents of an rpm:

`  

$ rpm -qlp myrpmfile.rpm  

`

[source](http://www.cyberciti.biz/tips/how-to-extract-an-rpm-package-without-installing-it.html)