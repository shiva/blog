+++
date = '2025-01-11T21:28:11-08:00'
draft = true
title = 'Strip Dates From Filenames'
+++

Ahh linux. The frustrations and the joy. I am revamping this website. In the past, I had encoded publish dates in the filename. Don't ask. Well, I have a few hundred files with a date prefix. Hugo, the static site generator that I use for this blog, uses the filename as part of the url. I could use a slug to customize the url, but then each file will have additional metadata. So, my simple solution (at the potential loss of references from other websites), is to simply bulk rename the files by stripping out the date prefix.

Well, there a few approaches:

1. using the rename command

2. using a small bash script

```
for  f in *.md; do                                  
 mv $f "`echo $f | sed --regexp-extended "s/[0-9]+\-[0-9]+\-[0-9]+\-//g"`";
done
```


