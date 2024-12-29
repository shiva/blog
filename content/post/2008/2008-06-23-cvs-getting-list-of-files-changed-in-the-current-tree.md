---
title: cvs - Getting list of files changed in the current tree
tags:
  - code
  - coding
  - CVS
  - Development
  - 'Tips & Tricks'
  - unix
date: '2008-06-23'
description: cvs - Getting list of files changed in the current tree
---

The simple way to retreive the list of changed files would be to update the tree, which would then list the files updated.

`#cvs update . > filelist.dat`

The problem with this, is that if there have been changes to other files after your last update, you will have to manually glean the files that you have changed. I tend face this, particularly during the last couple of weeks before a release, since you don't want to risk updating your tree everyday, but still have to make 2/3 checkins. I did some googling today, and found how to find the list of files changed without updating your tree.

`#cvs -n update . > filelist.dat`

Thanks [Jonnay][0] for this. I should used man before I googled, but hey, I'm lazy today :)


[0]: http://blog.jonnay.net/archives/181-Getting-a-list-of-changed-files-in-CVS-without-updating.html