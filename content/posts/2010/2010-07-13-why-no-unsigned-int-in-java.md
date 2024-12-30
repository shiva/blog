---
title: Why does Java not support unsigned int? - Part 1
tags:
  - coding
  - design
  - java
  - programming
  - unisigned int
date: '2010-07-13'
description: Why does Java not support unsigned int? - Part 1
---

An interesting thing for me, is that if I am active on twitter during daytime in India (now that I'm here on vacation), I get to have some interesting conversations about design and development. Today, I chanced to talk about the lack of unsigned values support in Java. 

  
> 1. [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)][0] 
> 
> [veechand][1] is there unsigned int in \#java support your answers [10 Jul 2010 ][2] from [TweetDeck][3] 
> 
> 2. [![Shivanand Velmurugan](/images/twitterProfilePhoto_normal.jpg)][4] 
> 
> [shiva][5] [@veechand][0] nope. but use char instead. If you really want a type, you can define your own class backed by char [12 Jul 2010 ][6] from [Twitter for iPhone][7] [in reply to veechand][2] 
> 
> 3. [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)][0] 
> 
> [veechand][1] [@shiva][4] [@surendrakumar][8] defining a own class for unsigned..let me think over it.. but my main question is y \#java didn't support unsigned ? [13 Jul 2010 ][9] from [TweetDeck][3] [in reply to shiva][6] 
> 
> 4. [![Shivanand Velmurugan](/images/twitterProfilePhoto_normal.jpg)][4] 
> 
> [shiva][5] [@veechand][0] [@surendrakumar][8] the question actually is, why do you need unsigned? [13 Jul 2010 ][10] from [Seesmic][11] [in reply to veechand][9] 
> 
> 5. [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)][0] 
> 
> [veechand][1] [@shiva][4] [@surendrakumar][8] my answer so that in given 32 bit I could store wide range of numbers (given my application wont go negative) [13 Jul 2010 ][12] from [TweetDeck][3] [in reply to shiva][10] 
> 
> 6. [![Surendra Kumar](/images/me_normal.PNG)][8] 
> 
> [surendrakumar][13] [@shiva][4] a lot of real life applications uses unsigned int. Example sales, money, hours, are all unsigned. [13 Jul 2010 ][14] from [TweetDeck][3] [in reply to shiva][10] 
> 
> 

-- [this quote][15] was brought to you by [quoteurl][16]   

Java is, by no means, a "new" language for anyone I know. However, we still try to write C/C++ like code using it. We approach it with all of the training of C/C++, and start micro-optimisation much before it is needed, and end up with hard to comprehend complex code.

I thought I will write a long-winded post about [why unsigned int is not available in Java][17], and [how to emulate it if you really need to][18], but I will leave that to more able hands.

The reason for lack of unsigned types in Java are:  
1\. The core of the Java language was designed to be simple. This meant leaving out anything that adds complexity that can be done without. unsigned types didn't make the cut  
2\. Someone got lazy and didn't bother to implement them, when the time came to make Oak into Java. (I wish leaving things out like this happen more in the industry).

Now, let's examine why one requires unsigned types:  
1\. Represent business case values like salary or percentile etc  
2\. Store bitsets -- each bit representing some state or option  
3\. provide the ability to store more value that one can in an signed, thereby requiring lesser in-memory size

Case 1 is a no brainer: As long as the value fits within the bounds of a 32-bit integer, you shouldn't care. Unless you need to store a value greater than 2,147,483,647, you shouldn't care if it is signed or unsigned.

Case 2 is a hack: This is a typical carry-over from the C world, where there are no true enum or bitset types. If you need this, consider using an Enum or BitSet (as the case be for the problem you are trying to address)

Case 3 is a delusion, and a sin: To a certain extent this is also something that was necessary and a good thing in C, and almost useless, and sometimes wrong to do in Java. The cost and the risk of implementing a type, particularly one that will require, new arithmetic semantics to be written, is never justified. The less new language syntax one invents, the simpler the code is. My rule of thumb is -- if I'm extending the language, I delete that class, and re-write it to use only existing semantics. If that means re-writing 5 other classes, so be it. In the long run, that yields a better, compact, and clean system.

Now contrast that, with using a signed int, where you expect the value to be unsigned. Unless you need to store a value greater than 2,147,483,647 there is no reason or benefit for implementing an unsigned int. Even in that case, unless you expect that to be marshalled to a system implemented in another language (like C/C++) via rpc, you should be using a long.

The next time you get the urge to extend the Java language, by defining a class that the language left out -- think twice if you really need it. If, after deliberation, you still think you need it, implement it, use it in your code, delete the implementation and re-write your code. Trust me, it won't have affected the application much, but your code will be cleaner and simpler to understand. 

That is worth every extra-line of non-resuable code that you write.

Peace.  
-Shiva


[0]: http://twitter.com/veechand
[1]: http://twitter.com/veechand "Veerabahu"
[2]: http://twitter.com/veechand/status/18214701290
[3]: http://www.tweetdeck.com
[4]: http://twitter.com/shiva
[5]: http://twitter.com/shiva "Shivanand Velmurugan"
[6]: http://twitter.com/shiva/status/18326785358
[7]: http://itunes.apple.com/app/twitter/id333903271?mt=8
[8]: http://twitter.com/surendrakumar
[9]: http://twitter.com/veechand/status/18418050957
[10]: http://twitter.com/shiva/status/18418774323
[11]: http://www.seesmic.com/
[12]: http://twitter.com/veechand/status/18418869318
[13]: http://twitter.com/surendrakumar "Surendra Kumar"
[14]: http://twitter.com/surendrakumar/status/18423069087
[15]: http://www.quoteurl.com/2bgmt
[16]: http://www.quoteurl.com
[17]: http://darksleep.com/player/JavaAndUnsignedTypes.html#why_no_unsigned_types
[18]: http://www.javamex.com/java_equivalents/unsigned.shtml