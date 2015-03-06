---
layout: post
title: Why does Java not support unsigned int? - Part 1
categories: []
tags:
- coding
- design
- java
- programming
- unisigned int
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
  dsq_thread_id: '117427611'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

An interesting thing for me, is that if I am active on twitter during daytime in India (now that I'm here on vacation), I get to have some interesting conversations about design and development. Today, I chanced to talk about the lack of unsigned values support in Java. 

<!-- QuoteURL styled embed start -->  

> 1.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)](http://twitter.com/veechand) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [veechand](http://twitter.com/veechand "Veerabahu") <span class="entry-content" style="font-style:normal">is there unsigned int in #java support your answers</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-10 18:33:16" class="published">10 Jul 2010</span> ](http://twitter.com/veechand/status/18214701290) <span>from [TweetDeck](http://www.tweetdeck.com)</span> </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
> 
> 2.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Shivanand Velmurugan](/images/twitterProfilePhoto_normal.jpg)](http://twitter.com/shiva) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [shiva](http://twitter.com/shiva "Shivanand Velmurugan") <span class="entry-content" style="font-style:normal">[@veechand](http://twitter.com/veechand) nope. but use char instead. If you really want a type, you can define your own class backed by char</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-12 03:48:02" class="published">12 Jul 2010</span> ](http://twitter.com/shiva/status/18326785358) <span>from [Twitter for iPhone](http://itunes.apple.com/app/twitter/id333903271?mt=8)</span> [in reply to veechand](http://twitter.com/veechand/status/18214701290) </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
> 
> 3.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)](http://twitter.com/veechand) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [veechand](http://twitter.com/veechand "Veerabahu") <span class="entry-content" style="font-style:normal">[@shiva](http://twitter.com/shiva) [@surendrakumar](http://twitter.com/surendrakumar) defining a own class for unsigned..let me think over it.. but my main question is y #java didn't support unsigned ?</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-13 06:50:59" class="published">13 Jul 2010</span> ](http://twitter.com/veechand/status/18418050957) <span>from [TweetDeck](http://www.tweetdeck.com)</span> [in reply to shiva](http://twitter.com/shiva/status/18326785358) </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
> 
> 4.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Shivanand Velmurugan](/images/twitterProfilePhoto_normal.jpg)](http://twitter.com/shiva) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [shiva](http://twitter.com/shiva "Shivanand Velmurugan") <span class="entry-content" style="font-style:normal">[@veechand](http://twitter.com/veechand) [@surendrakumar](http://twitter.com/surendrakumar) the question actually is, why do you need unsigned?</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-13 07:07:43" class="published">13 Jul 2010</span> ](http://twitter.com/shiva/status/18418774323) <span>from [Seesmic](http://www.seesmic.com/)</span> [in reply to veechand](http://twitter.com/veechand/status/18418050957) </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
> 
> 5.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Veerabahu](/images/twitterProfilePhoto_normal.jpg)](http://twitter.com/veechand) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [veechand](http://twitter.com/veechand "Veerabahu") <span class="entry-content" style="font-style:normal">[@shiva](http://twitter.com/shiva) [@surendrakumar](http://twitter.com/surendrakumar) my answer so that in given 32 bit I could store wide range of numbers (given my application wont go negative)</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-13 07:09:49" class="published">13 Jul 2010</span> ](http://twitter.com/veechand/status/18418869318) <span>from [TweetDeck](http://www.tweetdeck.com)</span> [in reply to shiva](http://twitter.com/shiva/status/18418774323) </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
> 
> 6.  <div class="thumb vcard author" style="float:left;margin-right:1em;margin-left:.5em;"> [![Surendra Kumar](/images/me_normal.PNG)](http://twitter.com/surendrakumar) </div>
> <div class="status-body" style="margin-right:30px;padding-right:1em;"> [surendrakumar](http://twitter.com/surendrakumar "Surendra Kumar") <span class="entry-content" style="font-style:normal">[@shiva](http://twitter.com/shiva) a lot of real life applications uses unsigned int. Example sales, money, hours, are all unsigned.</span> <span class="meta entry-meta" style="color:#888;font-family:georgia;font-size:0.8em;font-style:italic;"> [ <span title="2010-07-13 08:52:28" class="published">13 Jul 2010</span> ](http://twitter.com/surendrakumar/status/18423069087) <span>from [TweetDeck](http://www.tweetdeck.com)</span> [in reply to shiva](http://twitter.com/shiva/status/18418774323) </span> </div>
> <div class="actions" style="position:relative;clear:both;"></div>
<p><small class="quoteurl-cite" style="float:right;"> -- [this quote](http://www.quoteurl.com/2bgmt) was brought to you by [quoteurl](http://www.quoteurl.com)</small>   
 <!-- QuoteURL embed end -->

Java is, by no means, a "new" language for anyone I know. However, we still try to write C/C++ like code using it. We approach it with all of the training of C/C++, and start micro-optimisation much before it is needed, and end up with hard to comprehend complex code.

I thought I will write a long-winded post about [why unsigned int is not available in Java](http://darksleep.com/player/JavaAndUnsignedTypes.html#why_no_unsigned_types), and [how to emulate it if you really need to](http://www.javamex.com/java_equivalents/unsigned.shtml), but I will leave that to more able hands.

The reason for lack of unsigned types in Java are:  

1. The core of the Java language was designed to be simple. This meant leaving out anything that adds complexity that can be done without. unsigned types didn't make the cut  

2. Someone got lazy and didn't bother to implement them, when the time came to make Oak into Java. (I wish leaving things out like this happen more in the industry).

Now, let's examine why one requires unsigned types:  

1. Represent business case values like salary or percentile etc  

2. Store bitsets -- each bit representing some state or option  

3. provide the ability to store more value that one can in an signed, thereby requiring lesser in-memory size

Case 1 is a no brainer: As long as the value fits within the bounds of a 32-bit integer, you shouldn't care. Unless you need to store a value greater than 2,147,483,647, you shouldn't care if it is signed or unsigned.

Case 2 is a hack: This is a typical carry-over from the C world, where there are no true enum or bitset types. If you need this, consider using an Enum or BitSet (as the case be for the problem you are trying to address)

Case 3 is a delusion, and a sin: To a certain extent this is also something that was necessary and a good thing in C, and almost useless, and sometimes wrong to do in Java. The cost and the risk of implementing a type, particularly one that will require, new arithmetic semantics to be written, is never justified. The less new language syntax one invents, the simpler the code is. My rule of thumb is -- if I'm extending the language, I delete that class, and re-write it to use only existing semantics. If that means re-writing 5 other classes, so be it. In the long run, that yields a better, compact, and clean system.

Now contrast that, with using a signed int, where you expect the value to be unsigned. Unless you need to store a value greater than 2,147,483,647 there is no reason or benefit for implementing an unsigned int. Even in that case, unless you expect that to be marshalled to a system implemented in another language (like C/C++) via rpc, you should be using a long.

The next time you get the urge to extend the Java language, by defining a class that the language left out -- think twice if you really need it. If, after deliberation, you still think you need it, implement it, use it in your code, delete the implementation and re-write your code. Trust me, it won't have affected the application much, but your code will be cleaner and simpler to understand. 

That is worth every extra-line of non-resuable code that you write.

Peace.  

-Shiva