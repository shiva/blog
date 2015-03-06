---
layout: post
title: Convert byte[] to long in Java
categories: []
tags:
- coding
published: true
meta:
  tags: ''
  _utw_tags_0: s:148:"a:3:{i:0;O:8:"stdClass":1:{s:3:"tag";s:6:"coding";}i:1;O:8:"stdClass":1:{s:3:"tag";s:11:"Development";}i:2;O:8:"stdClass":1:{s:3:"tag";s:4:"Java";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '2592356'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

One more little thing that is painfully difficult to do in Java. (I love Java though ;) )  

There are two ways of getting it done.

a. Cryptic but sweet! bring on the bit manipulators!  

`  

private long getLong(byte[] mbytes) {  

long lValue =0;  

for (int i :  mbytes.length) {  

lValue = (lValue< <8) | (mbytes[i] & 0xff);  

}  

return lValue;  

}  

`

b. painfully slow and created a gazzillon objects (sooo typically Java)  

write byte array to DataOutputStream, and read from corresponding input stream using readLong()