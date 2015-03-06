---
layout: post
title: getting batch categories to work with Word press 1.5.1.1
categories: []
tags:
- Tips &amp; Tricks
published: true
meta:
  tags: ''
  _utw_tags_0: s:65:"a:1:{i:0;O:8:"stdClass":1:{s:3:"tag";s:18:"Tips-&#038;-Tricks";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
  dsq_thread_id: '3191671'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

I simply love that plugin - Batch categories, like a myriad of other wordpress users. (A thousand thanks to Stephanie Booth wouldn't suffice ;) ), but I had problems getting it to work in 1.5.1

Lots of results out there, that explain how to fix it, but none that lets a newbie get it up quickly. I know this is a repetition, but it still took my more than a day to get it fixed (mebbe it's my dull head.. but then again)

If you are brand new to Word press, here it. As simple as it gets (or atleast I think so... do get back in case you have doubts)

1. Download and install Batch-categories (0.9) from [here](http://climbtothestars.org/archives/2004/07/13/batch-categories-09/).  

2. Installing implies, that you copy the batch-categories.php file to <wpress -install-directory>/wp-admin/  

3. Edit </wpress><wpress -install-directory>/wp-admin/batch-categories.php and do the modifications as detailed below</wpress>

**Change this:  

**

<div class="code">
$title = __('Batch Categories');  

$parent_file = 'edit.php';  

require_once('admin-header.php');
</div></p>

**to this:**

<div class="code">

$title = __('Batch Categories');  

$parent_file = 'edit.php';  

**require_once('admin.php');  

**require_once('admin-header.php');

</div>

Save batch-categories.php. Now launching it in your browser directly, will give you the required functionality (batch editing categories ie )

4. If you want to include it as part of your admin screen, then open <wpress -install-directory>/wp-admin/menu.php</wpress>

**Below this:  

**

<div class="code">
$submenu['edit.php'][30] = array(__('Files'), 8, 'templates.php');
</div></p>

**Add this:  

**

<div class="code">
$submenu['edit.php'][40] = array(__('Batch Categories'), 1, 'batch-categories.php');
</div></p>

**5. Edit <wpress -install-directory>/wp-admin/batch-categories.php and delete the following:  

</wpress>**

<div class="code">

< ul id="adminmenu2?>  

< li>< a href="edit.php">< /a>< /li>  

< li>< a href="edit-comments.php">< ?php _e('Comments') ?>< /a>< /li>  

< li>< a href="moderation.php">< ?php _e('Awaiting Moderation') ?>< /a>< /li>  

< li class="last">< a href="batch-categories.php" class="current">< ?php _e('Batch Categories') ?>< /a>< /li>  

< /ul>

</div>

Well, I always beleive that if you want to learn, then you need to do things the hardest way possible. Then, the next time around you can eliminate that way and go on to more efficient ways. On that note, if you don't want to do all the editing yourself. You can find the files here. Just download them and put them in you wp-admin directory, and enjoy! Ofcourse, you better take all the backups required and don't spam me if something is screwed up in your database.

*   [batch-categories.php](http://shvelmur.com/uploads/batch-categories.php.txt)
*   [menu.php](http://shvelmur.com/uploads/menu.php.txt)

_Note: 1. Do not use left-click on the above link. Use right-click and "Save Link As.."/"Save Target As.." and rename the file to *.php instead of *.php.txt  

2.  The above files are valid for 1.5.1 Wordpress only. Please follow the manual procedure for later versions_

**Wishlist for batch categories(BC)**  

Since we are discussing BC here, I thought I'll jot down a couple things that would make BC really kewl

*   Display categories already assigned
*   Instead of a combo, use a multiple listbox
*   report category names instead of IDs
*   UI for options like number of posts,etc
*   Paging - displays all posts, but on different pages.

Maybe I should get in touch with steph about this, but then before that I need start exploring php (I'm a total novice on that)