+++
title = "Working with large C codebases"
categories = [
"programming"
]
tags = [
  "bash",
  "aliases",
  "cscope",
  "ctags",
  "git",
  "vim"
]
date = "2016-12-29"
slug = "working-with-large-c-codebases"
description = "Time saving bash aliases for a C developer"
+++

### Searching for symbols

The product that I work on, has over 22 million lines of source -- most of it a nightmare. I use vim as my editor of choice [^1]. Both cscope and ctags (integrated into vim), allow me to quickly move between files and lookup definitions of symbols, and help in understanding the challenge-du-jour. 

Throw in fuzzy find capabilities of the most awesome [Ctrl+p plugin][1], and vim becomes the best 'IDE' out there!

However, large code bases result in very large indexes. A fully indexed ctags file for the product I work is several gigabytes. At this scale, searching for a symbols slows vim down substantially. It is vital to isolate and index a portion of the source -- the part that I am interested in on a given day.

I use the following aliases to build tags files and cscope databases as I need.

<script src="https://gist.github.com/shiva/89240cdece79f84867f0feeb9d73f1f5.js"></script>

### Dealing with whitespace

I like to strip trailing whitespace. Trailing whitespace, results in confusing diffs between two versions of a file. It increases the congnitive dissonance when reading git-diffs and patches -- it is quite tiresome when reviewing 20-30 commits a day. 

The following aliases help strip trailing whitespace given a file and keep commits deltas devoid of un-necessary whitespace changes.

<script src="https://gist.github.com/shiva/7f5ab9dbc7ed5bea59a4ce03aa2c9fb8.js"></script>

[1]: https://github.com/kien/ctrlp.vim

[^1]: Don't even think of using eclipse or another IDE. A code-base this size, is simply too large for anything except simple text-based tools
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU2NDY4OTQ4MSwxODgyNTI1MTk4XX0=
-->
