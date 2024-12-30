---
title: A lightweight VM with dev-tools using Alpine Linux
draft: true
tags:
  - alpine linux
  - development rig
date: '2016-03-08'
description: A lightweight VM with dev-tools using Alpine Linux
---

Alpine linux is a fast and secure linux distribution built using musl libc and busybox, which is a fancy way of saying, that it is quite small (like linux used to be), and delightfully fast. This is ideal for building a development image for running in VMs. 

Being a very minimal distribution, it comes with almost nothing. The following list of addition make a usuable distribution for developers.

setup-alpine
setup-xorg-base
apk add spectrwm lxdm
apk add xf86-video-vmware
rc-update add acpid

The following are made available as Virtual box image:
