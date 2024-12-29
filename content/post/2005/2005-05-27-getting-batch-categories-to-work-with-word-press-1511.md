---
title: getting batch categories to work with Word press 1.5.1.1
tags:
  - 'Tips & Tricks'
date: '2005-05-27'
description: getting batch categories to work with Word press 1.5.1.1
---

I simply love that plugin - Batch categories, like a myriad of other wordpress users. (A thousand thanks to Stephanie Booth wouldn't suffice ;) ), but I had problems getting it to work in 1.5.1

Lots of results out there, that explain how to fix it, but none that lets a newbie get it up quickly. I know this is a repetition, but it still took my more than a day to get it fixed (mebbe it's my dull head.. but then again)

If you are brand new to Word press, here it. As simple as it gets (or atleast I think so... do get back in case you have doubts)

1\. Download and install Batch-categories (0.9) from [here][0].  
2\. Installing implies, that you copy the batch-categories.php file to /wp-admin/  
3\. Edit /wp-admin/batch-categories.php and do the modifications as detailed below

**Change this:  
**

$title = \_\_('Batch Categories');  
$parent\_file = 'edit.php';  
require\_once('admin-header.php');

**to this:**

$title = \_\_('Batch Categories');  
$parent\_file = 'edit.php';  
**require\_once('admin.php');  
**require\_once('admin-header.php');

Save batch-categories.php. Now launching it in your browser directly, will give you the required functionality (batch editing categories ie )

4\. If you want to include it as part of your admin screen, then open ****/wp-admin/menu.php

**Below this:  
**

$submenu\['edit.php'\]\[30\] = array(\_\_('Files'), 8, 'templates.php');

**Add this:  
**

$submenu\['edit.php'\]\[40\] = array(\_\_('Batch Categories'), 1, 'batch-categories.php');

**5\. Edit /wp-admin/batch-categories.php and delete the following:  
**

< ul id="adminmenu2?\>  
< li\>< a href="edit.php"\>< /a\>< /li\>  
< li\>< a href="edit-comments.php"\>< ?php \_e('Comments') ?\>< /a\>< /li\>  
< li\>< a href="moderation.php"\>< ?php \_e('Awaiting Moderation') ?\>< /a\>< /li\>  
< li class="last"\>< a href="batch-categories.php" class="current"\>< ?php \_e('Batch Categories') ?\>< /a\>< /li\>  
< /ul\>

Well, I always beleive that if you want to learn, then you need to do things the hardest way possible. Then, the next time around you can eliminate that way and go on to more efficient ways. On that note, if you don't want to do all the editing yourself. You can find the files here. Just download them and put them in you wp-admin directory, and enjoy! Ofcourse, you better take all the backups required and don't spam me if something is screwed up in your database.

* [batch-categories.php][1]
* [menu.php][2]

_Note: 1\. Do not use left-click on the above link. Use right-click and "Save Link As.."/"Save Target As.." and rename the file to \*.php instead of \*.php.txt  
2\. The above files are valid for 1.5.1 Wordpress only. Please follow the manual procedure for later versions_

**Wishlist for batch categories(BC)**  
Since we are discussing BC here, I thought I'll jot down a couple things that would make BC really kewl

* Display categories already assigned
* Instead of a combo, use a multiple listbox
* report category names instead of IDs
* UI for options like number of posts,etc
* Paging - displays all posts, but on different pages.

Maybe I should get in touch with steph about this, but then before that I need start exploring php (I'm a total novice on that)


[0]: http://climbtothestars.org/archives/2004/07/13/batch-categories-09/
[1]: http://shvelmur.com/uploads/batch-categories.php.txt
[2]: http://shvelmur.com/uploads/menu.php.txt
