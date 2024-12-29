---
title: 'Badly punctuated parameter list in #define'
tags:
  - pre-processor
  - badly punctuated parameter list
  - code
  - compiler issues
  - Development
  - gcc
  - programming
date: '2011-11-08'
description: 'Badly punctuated parameter list in #define'
slug: badly-punctuated-parameter-list
---

Sometimes working with an old c compiler brings up painful, yet fun-filled days of making it speak the same language as you, and sometimes you just go "\*$&%\*$\#&% you piece of sh\*\* compiler"

I had one such moment today, and after I had returned to Zen (some soul-searching and some google searching), I realized it quite simple.

``` bash
$ gmake  
...  
...  
some_file.h:42: badly punctuated parameter list in \`#define'  
some_file.h:64: badly punctuated parameter list in \`#define'  
Failed to compile  
$  
```

This was caused by the following:

``` c 
...  
...  
#define LOG(...) { printf (##__VA_ARGS__); }  
...  
...  
```

This works in most modern C compilers. However, if you happen to use one from the 80s (I exaggerate a little - not by much), it throws the error as above. You can fix this as follows:

 ``` c
...  
...  
#define LOG(ARGS...) { printf (##ARGS); }  
...  
...  
```

[source][0]


[0]:  http://nixscripts.blogspot.com/2010/09/badly-punctuated-parameter-list.html
