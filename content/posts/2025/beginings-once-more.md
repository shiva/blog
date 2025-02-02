+++
date = '2025-02-01T22:05:10-0800'
title = 'Beginings, once more'
+++

> New dawn softly breaks,  
> hope blooms with every heartbeat,  
> new life starts anew.  
----

Ahh linux. The frustrations and the joy. After a hiatus of 9 years, I have decided to resurrect this blog. Of course, before I wrote anything meaningful it was time for some clearnup. Hugo, the static site generator that I use for this blog, uses the filename as part of the url. The last time I ported the [blog from Jekyl to Hugo][1] I made the terrible choice of encoding dates into the file name. Well, as a result, I have a few hundred files with a date prefix thus making the posts immovable. 

Rarely do I write a post in one sitting anymore, and ability to move/update the publish dates is now critical. I could use a slug to customize the url, but then each file will have additional metadata that I will need maintain going forward. So, my simple solution (at the potential loss of references from other websites), is to simply bulk rename the files by stripping out the date prefix.

Here is the sed incantation that saves the day.

```bash {lineNos=false}
for  f in *.md; do                                  
 mv $f "`echo $f | sed --regexp-extended "s/[0-9]+\-[0-9]+\-[0-9]+\-//g"`";
done
```

It took me several minutes to figure it out. :anguished: It is painful to realize that 9 years of not programming on a daily basis has made me a lot slower. 

On that note, this blog is now official back up -- write I shall, henceforth. Also, I plan to cross-post this to new [substack][2].

[1]: https://blog.shiv.me/posts/2016/battle-of-the-static-site-generators-1/
[2]: https://shivan.substack.com/
