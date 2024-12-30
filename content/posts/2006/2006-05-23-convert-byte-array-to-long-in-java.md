---
title: "Convert byte\\[\\] to long in Java"
tags:
  - coding
date: '2006-05-23'
description: "Convert byte\\[\\] to long in Java"
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
