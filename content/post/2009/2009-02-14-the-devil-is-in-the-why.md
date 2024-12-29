---
title: The devil is in the why?
tags:
  - coding
  - design
  - programming
  - writing code
date: '2009-02-14'
description: The devil is in the why?
---

Recently I got asked, what the best way to do a join between two large lists,  into another list was? I always tend to answer that question with: it depends. 

Just like any other algorithm, there is no silver bullet. It is a trade off  between CPU and memory utilisation. Sometimes, we do have to think about these  things (this is code in c++ on a device with scarce resources, to say the  least).

Of course, the simplest solution for this would be to use multiple for loops:

`**// merge - version 1**  
function List<C> merge(List<A> l1, List<B> l2) {`

` `

`  // oh god! I shouldn't be doing this  
  for(A a: l1) {  
    C c = new C(a);  
    for(B b: l2) {  
      if (c.foo == b.foo) {  
        c.add(b);  
      }  
    }  
  }  
}  
`

As is obvious any half-decent programmer would shudder at the thought of writing something like this, particularly let it run on a device with limited resources. A simple way to refactor this would be to create an index for one of the lists and iterate through other. 

`**// merge - version 2**  
function List<C> merge(List<A> l1, List<B> l2) {`

`  // create the index  
  HashMap<Foo, Bar> map = new HashMap();  `

`  for (B b: l2) {  
    map.put (b.foo, b);  
  }`

`  for(A a: l1) {  
    C c = new C(a);  
    c.add(map.get(a.foo));  
  }  
}  
`  
Conventional wisdom says, that version 2 is much better than version 1\. Right? Well, what if you have 128 MB of shared memory across your system, but a dedicated processor for your subsystem?! Won't you want to pick version 1 in that case? What if both the lists can have millions of entries? That would render both these cases useless.

Sometimes, before trying to find a technical solution to the problem at hand, it might help to ask why? What is the need for this requirement? The key is to ask why until you reach a specific use-case. I tend to ask this all the way until I reach either a SOAP request, or a specific component in the GUI that requires this piece of data. Most of the time, we can get by without writing a potentially inefficient solution. 

[![Lord of his city](/images/3262859586_5caf14c1fb_m.jpg)][0]

In this case, after several "why"s, I discovered that this requirement came about, since one of the products in our suite (yeah we have a bunch of products that build on each other), need to display a list of names of object C, as the user searches for a specific one to add items to. If we had decided to write either v1 or v2, every time the user opened that GUI component, we would transport, a possible 10000 records from the device all the way to the GUI (which in our case is several layers above), when we only need a list of names based on a specific criteria.

The "how" of your design depends the "why". The only limiting factor is the willingness to ask why, until you can find an alternate solution, or, are absolutely convinced that there is no other way to acheive a specific requirement without writing some inefficient code --- then defend rigorously against doing it. well, atleast you have to get a some kind of limits in place. 

Sometimes you have to [stand up to your product manager][0], and sometimes you have to take a [sip of warm wine][1], and go write that "piece of crap" code. 

Happy coding!


[0]: http://flickr.com/photos/shvelmur/3262859586/
[1]: http://blog.shiv.me/2009/01/28/i-recommend-drinking-vin-chaude-when-youre-in-strasbourg-france/