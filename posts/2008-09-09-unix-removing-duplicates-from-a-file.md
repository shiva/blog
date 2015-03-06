---
layout: post
title: 'Unix: removing duplicates from a file'
categories: []
tags:
- coding
- unix
- unix commands
published: true
meta:
  _edit_last: '1'
  _aioseop_description: "Unix commands for: \n- removing duplicates from a file\n-
    Lines that not matching condition\n- Copy two files to one\n- Append output to
    a file"
  _aioseop_keywords: unix, commands, removing duplicates from a file, merge two files,
    append command output to a file, list lines not matching condition
  _aioseop_title: 'Unix: removing duplicates from a file'
  aktt_notify_twitter: 'no'
  _aktt_hash_meta: ''
  dsq_thread_id: '4364300'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Over the last few months, I have re-discovered some unix commands (it's been such a long time)

*   _Eliminate duplicate lines from a file_
> `#sort -u filename > filename.new`

*   _List all lines that do not match a condition_
> `#grep -v ajsk filename`

*   _ Copy contents of two files to one_
> `#cat file1 file2 > file3`

*   _Append output of a command to a file_
> `#cat file1 >> file2`