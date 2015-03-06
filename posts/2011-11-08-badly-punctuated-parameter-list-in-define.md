---
layout: post
title: 'Badly punctuated parameter list in #define'
categories: []
tags:
- '#define'
- badly punctuated parameter list
- c++
- code
- compiler issues
- Development
- gcc
- programming
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

Sometimes working with an old c compiler brings up painful, yet fun-filled days of making it speak the same language as you, and sometimes you just go "*$&amp;%*$#&amp;% you piece of sh** compiler"

I had one such moment today, and after I had returned to Zen (some soul-searching and some google searching), I realized it quite simple.

`  

$ gmake  

...  

...  

some_file.h:42: badly punctuated parameter list in `#define'  

some_file.h:64: badly punctuated parameter list in `#define'  

Failed to compile  

$  

`

This was caused by the following:

`  

file: some_file.h  

-----------------  

...  

...  

#define LOG(...) { printf (##__VA_ARGS__);  

}  

...  

...  

`

This works in most modern C compilers. However, if you happen to use one from the 80s (I exaggerate a little - not by much), it throws the error as above. You can fix this as follows:

`  

file: some_file.h  

-----------------  

...  

...  

#define LOG(ARGS...) { printf (##ARGS);  

}  

...  

...  

`

Source :[ http://nixscripts.blogspot.com/2010/09/badly-punctuated-parameter-list.html]( http://nixscripts.blogspot.com/2010/09/badly-punctuated-parameter-list.html)