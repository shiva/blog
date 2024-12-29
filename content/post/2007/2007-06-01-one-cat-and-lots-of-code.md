---
title: One cat and lots of code
date: '2007-06-01'
description: One cat and lots of code
---

[![12052007282](/images/2707311301_b6f984beba_m.jpg)][0]Rich Skrenta elucidates the [power of less code][1].

> I ask you, grasshopper, which is better: flexible code or tiny code?  
> "Ah," you exclaim, "Learned master, it is a trick question: code which is tiny yet flexible is best!"  
> WRONG! Tiny code is always best. Now you must carry water up the hill for the rest of the day.

For sure, he can't think up of good stories. Just Kidding! Every time we, developers, make a change or fix a bug, we decide the fate of that particular code flow. We take a call on how the module or component is going to behave for the rest of the life of that application.

While I agree that writing reams of code for something expressed much more simply, is evil, is it really the amount of code that you put in a file/class/function that influences the manageability of code. I personally am convinced that number of conditional branching clauses (more simply put if..then..else) that you use is evil(er). The lesser if..then clauses you have in your code, the lesser bugs you will produce.

He then, goes on about something that is totally a different beast. Abstraction in the name of flexibility:

> When most people learn objective languages, the first thing they do is go ape. I mean, they create superclasses that have one method, which is stubbed out, and twenty children classes, each of which varies by one line of code. They fall so in love with objects that they think everything needs to be its OWN TYPE of object.  
> Often this is done in the name of flexibility. "Look, I have this abstract superclass which currently does the drawing for all my buttons, but you could subclass it to, say, draw 3D text!"

This is something, that I just couldn't believe is a real problem. Why? Well, I have, in my last 6+ years of development in both, service and product companies, never ever had to stay awake because of too much abstraction.

Most of the time, I find the converse is true. Apparently anyone (who write code for money: (Ohh.. by the way, the word apparently is a very convenient word, it lets me state something, without having to really prove it with some hard facts :) - I learned this from [Douglas - we miss ye][2])), seems uninterested in abstracting code, care less for code re-use.

Let us just step back and think, why do most people want to be **this evil! **Human tendency is to achieve a goal, with the least amount of effort possible. (I can bet my head on this: Say we find someway to automate the ability to ingest food, and excrete it, most will gladly adopt it! )

Well, it is always much easier to write a function yourself, to achieve that day's goal to fix X number of bugs or getting a feature Y done and commit the code, than to go hunting for abstractions and re-factor **already tested** code.

Trust me, Rich, I have **never ever **found an unwanted abstraction, or even class hierarchies that run more than a few classes deep. Do I wish, what you were stating is true in the industry? I most truly will be the happiest application programmer, if my library developers actually remembered that they develop libraries, and if my colleagues remembered that someday, they will have to fix bugs in their own code, because of the million functional flows they created and the lack of any code reuse that they have ensured.

However, one thing that I really subscribe to is:

> Don't make your code more flexible until after you have a plan for what your app.

I would like to add one more clause of wisdom to that:

"Re-factor you code, at every single opportunity you get, even if it means that you need to bite your manager's head off!"

If you did read upto here, then I must say : boy you need to get a life!! (Sorry, couldn't resist that). Thanks anyway, and if you are still wondering, why I put a kitten's picture up there and what it has to do with developing code - well - Nothing! No really - Nothing at all!! I read somewhere that putting pictures was an important part of writing a blog - something to do with eye-tracking and better design and all the other things that I don't really care about. Ok, I now need to shut up - not another word!

Technorati tags: [coding][3], [development][4]


[0]: http://farm4.static.flickr.com/3084/2567730043_da7faab448_m.jpg
[1]: http://www.skrenta.com/2007/05/code_is_our_enemy.html
[2]: http://www.douglasadams.com/
[3]: http://technorati.com/tags/coding
[4]: http://technorati.com/tags/development
