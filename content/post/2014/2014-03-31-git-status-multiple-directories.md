---
title: Getting git status on multiple directories
tags:
  - bash
  - git
  - unix
  - unix commands
date: '2014-03-31'
description: Getting git status on multiple directories
---
At any given time, I have a handful of git repositories that I work on. While typing in the command-line is great, it getting tiring when you have a several directories that you have to manually change to and check. The "git status" command can take the git repo and the working directory as input. That, and a little bash programming to the rescue.
The following command, executes git status in every subdirectory that is a git repository.

``` bash
for d in `find . -name ".git"`; do 
echo "processing $d ..."; 
git --git-dir=$d --work-tree=$d/.. status; 
done
```

