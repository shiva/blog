---
layout: post
title: 'Git: beautiful git logs and listing files in a commit'
categories: []
tags:
- alias
- files in a commit
- git
- git log
- git show
published: true
meta:
  _edit_last: '1'
  _wpcom_is_markdown: '1'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Working with git is fun. However, it is easy to get tired of the log list of parameters one has to use to very often. Git aliases are a great way to deal with this.

<script src="https://gist.github.com/3791502.js?file=git-config-alias"></script>

For instance, the standard git log, it pretty much useless in any large project, where there are several hundred commits in a day. Most often, the commit you are looking for in probably several pages deep.

The following is from the latest [linux.git](https://github.com/torvalds/linux "linux by Linus")  

<script src="https://gist.github.com/3791502.js?file=git-log-output-for-linux"></script>

Fortunately, git log has options one can use, that make the output look like this:  

<script src="https://gist.github.com/3791502.js?file=git-lg-output-for-linux"></script>

Another useful command is git show, with the --name-only option. It displays the list of files in a particular commit.  

<script src="https://gist.github.com/3791502.js?file=git-show-name-only"></script>