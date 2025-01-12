---
title: Power of 2
tags:
  - algorithm
  - c++
  - code
  - power of 2
  - programming
  - puzzles
date: '2010-11-03'
description: Power of 2
---

It's been a while since I've done anything except write code -- lots of it. The last 20 days have been insane, and ofcourse to a take a break from writing code, I like to read code that others write. (You DO know that I'm crazy, right?!). In one of my futile attempts at clearing my google-reader reading list, I chanced upon a post by [Veerabahu][0], on finding if a number is a power of 2 (or not).

As he writes, there is the simpleton O(n) solution ([you will have to click-through for that][1]), and the most elegant (yet) bitwise solution:

    
    /*
     */
    bool
    is_power_of_2(int n) {
       return ((n & -n) == n);
    }

The bitwise way to calculate the power of 2 is probably the most efficient in c like languages. Ofcourse for that, your language of choice needs to support it and should be more efficient that common math functions. The other way is to use some simple math.

Let's say N, is the value, and you need to check if it is a power of two. Compute n = log N / log 2\. If floor(n) == n, then N was a power of 2\.

    
    /*
     */
    bool
    is_power_of_2_pure_math_baby(int n) {
        /* address -ve numbers */
        if (n < 0)
            n = -n;
    
        double i = log(n)/log(2);      /* i = power of 2 */
        return (lower(i) == i);        /* check if perfect power of 2 */
    }

This is obviously, a less efficient way of checking if a number is a power of 2, than using the bitwise method. However, it has a few advantages:

1. It works exactly the same way for all values of n.
2. It works exactly the same way for all integers (ie, n can be int8/16/32/64, long, signed or unsigned, and the same logic would work
3. It is O(1) like the bitwise solution
4. It is less cryptic (ie just basic understanding of math is reqd for grokking this solution)
5. Finally, it can be extended in future to calculate if n is a power of \*any value\*, not just 2

Of course, t[he point Josh Bloch was making ][2]in interviewing engineers, was that he is interested in knowing the **WHY** of a solution. It does not matter if the algorithm is marginally less optimal or different. If you are an interviewer in your organisation, and you catch yourself asking a question like this, remember that if an engineer can reduce O(n) to O(1), stop with similar micro-skills test. Find out why she coded it the way she did. It will tell you a lot more about her skills than some algorithms/tricks that can be picked up in a[couple a days][3], if not [overnight][4].


[0]: http://veechand.wordpress.com/about/
[1]: http://veechand.wordpress.com/2009/12/19/is-a-number-power-of-two/
[2]: http://www.artima.com/wbc/interprogP.html
[3]: http://www.amazon.com/gp/product/047012167X?ie=UTF8&tag=shivanand-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=047012167X
[4]: http://wiki.allegro.cc/index.php?title=Bitwise_operator#Power_of_two_check