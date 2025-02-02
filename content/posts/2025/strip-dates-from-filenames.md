+++
date = '2025-02-01T22:05:10-0800'
title = 'Strip Dates From Filenames'
+++

Ahh linux. The frustrations and the joy. After a hiatus of 9 years, and failing to rekindle the desire to write, I have decided it is worth my time to resurrect this blog. In the past, I had encoded publish dates in the filename. Don't ask. Well, as a result, I have a few hundred files with a date prefix which have been indexed permanently by Google. Hugo, the static site generator that I use for this blog, uses the filename as part of the url. I could use a slug to customize the url, but then each file will have additional metadata. So, my simple solution (at the potential loss of references from other websites), is to simply bulk rename the files by stripping out the date prefix.

Here is the sed incantation that saves the day.

```
for  f in *.md; do                                  
 mv $f "`echo $f | sed --regexp-extended "s/[0-9]+\-[0-9]+\-[0-9]+\-//g"`";
done
```

It took me a whole hour to figure it out. :anguished:

On that note, this blog is now official back up -- write I shall, henceforth.


