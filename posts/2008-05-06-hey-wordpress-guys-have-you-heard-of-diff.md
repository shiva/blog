---
layout: post
title: Hey wordpress guys, have you heard of diff?!
categories: []
tags:
- Ideas
- install
- plugin
- upgrade
- wordpress
published: true
meta:
  aktt_notify_twitter: 'no'
  _aktt_hash_meta: ''
  aktt_tweeted: '1'
  _edit_last: '1'
  dsq_thread_id: '3089323'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

I hate having to upgrade software. I truly do. I release a version every 3 months, and it try to make the upgrade as painless as possible. For an application like wordpress, that has been around for such a long, I would expect that they would do something to make it a little easier to upgrade.

Ok. Sorry about the rant, but here is my problem: the download for wordpress 2.5.1 is around 1 MB, but what has really changed is only a few lines. However, according to wordpress, you have to go through a time-consuming process to get your blog up to date.

The only reason why the wordpress team would want to do this, is coz they do not want to write an upgrade document everytime. What they really need to do, is stop bothering their blog users with such small updates and allow such updates from within wordpress itself. This is precisely the kinda thing that should by now, be atleast a plugin, if not part of the system.

The famous[ 5-minute, 3-step upgrade](http://codex.wordpress.org/Upgrading_WordPress) says:

> 0. Take a Backup
> 
> 0.5 Disable plugins
> 
> 1. Actually it's three steps in this one step
> 
> 1.  Get the [latest WordPress](http://wordpress.org/download/ "http://wordpress.org/download/"). Either download and extract it to your computer or download it directly to the server.
> 2.  Delete your old `wp-includes` and `wp-admin` directories.
> 3.  Copy the new WordPress files to your server, overwriting old files in the root. You may use FTP or shell commands to do so. Note that this means *all* the files, including all the files in the root directory as well. If you use the default or classic theme and have customized it, then you can skip that theme.
> 
> 2. Upgrade by calling the upgrade script
> 
> 3. Turn back all your plugins on.

I grew sick of wordpress' lazy-ass upgrade steps, and decided about a year back that I would only run the upgrade their way, if it really requires taking down my website, and started doing these simple steps instead. (Ofcourse, I have a script that does this for me :) )

1. Download wordpress to a temp dir on your server

`[shvelmur@web24 wordpress]$ curl -o wp.tar.gz http://wordpress.org/latest.tar.gz  

% TotalÂ Â Â  % Received % XferdÂ  Average SpeedÂ Â  TimeÂ Â Â  TimeÂ Â Â Â  TimeÂ  Current  

DloadÂ  UploadÂ Â  TotalÂ Â  SpentÂ Â Â  LeftÂ  Speed  

100 1154kÂ Â Â  0 1154kÂ Â Â  0Â Â Â Â  0Â  5390kÂ Â Â Â Â  0 --:--:-- --:--:-- --:--:-- 10.8M`

2. Extract the downloaded zipped-tar file to a new dir, called "wp".

`[shvelmur@web24 wordpress]$ gtar -zxvf wp.tar.gz  

`  

3. Do a diff between the two directories to see what's changed.

`[shvelmur@web24 wordpress]$ diff <current wordpress dir> <new dir>  

`  

In my installation this is the difference between wordpress 2.5 and wordpress 2.5.1

`diff ../../wpress/wp-config-sample.php ./wordpress/wp-config-sample.php  

11,12c11,12  

< // so make it long and complicated.Â  You can visit https://www.grc.com/passwords.htm  

< // to get a phrase generated for you, or just make something up.  

---  

> // so make it long and complicated.Â  You can visit http://api.wordpress.org/secret-key/1.0/  

> // to get a secret key generated for you, or just make something up.  

Common subdirectories: ../../wpress/wp-content and ./wordpress/wp-content  

Common subdirectories: ../../wpress/wp-includes and ./wordpress/wp-includes  

diff ../../wpress/wp-login.php ./wordpress/wp-login.php  

93c93  

< Â Â Â  $key = $wpdb->get_var("SELECT user_activation_key FROM $wpdb->users WHERE user_login = '$user_login'");  

---  

> Â Â Â  $key = $wpdb->get_var($wpdb->prepare("SELECT user_activation_key FROM $wpdb->users WHERE user_login = %s", $user_login));  

99c99  

< Â Â Â  Â Â Â  $wpdb->query("UPDATE $wpdb->users SET user_activation_key = '$key' WHERE user_login = '$user_login'");  

---  

> Â Â Â  Â Â Â  $wpdb->query($wpdb->prepare("UPDATE $wpdb->users SET user_activation_key = %s WHERE user_login = %s", $key, $user_login));  

121c121  

< Â Â Â  $user = $wpdb->get_row("SELECT * FROM $wpdb->users WHERE user_activation_key = '$key'");  

---  

> Â Â Â  $user = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->users WHERE user_activation_key = %s", $key));  

diff ../../wpress/wp-settings.php ./wordpress/wp-settings.php  

72,75c72,77  

< Â Â Â  Â Â Â  if ( $_SERVER['PATH_INFO'] == $_SERVER['SCRIPT_NAME'] )  

< Â Â Â  Â Â Â  Â Â Â  $_SERVER['REQUEST_URI'] = $_SERVER['PATH_INFO'];  

< Â Â Â  Â Â Â  else  

< Â Â Â  Â Â Â  Â Â Â  $_SERVER['REQUEST_URI'] = $_SERVER['SCRIPT_NAME'] . $_SERVER['PATH_INFO'];  

---  

> Â Â Â  Â Â Â  if ( isset($_SERVER['PATH_INFO']) ) {  

> Â Â Â  Â Â Â  Â Â Â  if ( $_SERVER['PATH_INFO'] == $_SERVER['SCRIPT_NAME'] )  

> Â Â Â  Â Â Â  Â Â Â  Â Â Â  $_SERVER['REQUEST_URI'] = $_SERVER['PATH_INFO'];  

> Â Â Â  Â Â Â  Â Â Â  else  

> Â Â Â  Â Â Â  Â Â Â  Â Â Â  $_SERVER['REQUEST_URI'] = $_SERVER['SCRIPT_NAME'] . $_SERVER['PATH_INFO'];  

> Â Â Â  Â Â Â  }  

332a335,342  

>  

> /**  

>Â  * It is possible to define this in wp-config.php  

>Â  * @since 2.5.0  

>Â  */  

> if ( !defined( 'AUTOSAVE_INTERVAL' ) )  

> Â Â Â  define( 'AUTOSAVE_INTERVAL', 60 );  

>  

`  

As you can see, the only change is in wp-login.php. <span style="text-decoration: line-through;">Just copy the wp-login.php from the new directory to the installed directory.</span> Update: Copy the changed file, wp-login.php and also copy version.php in &lt;new wpress dir&gt;/wp-includes, to the same directory in your installed dir.

4. Just run the upgrade.php (it updates the DB, and makes the dashboard stop complaining about the version).

If all of this sounds very complex to you, it is not. All we are doing here is finding out which files changed between two versions, and copying files that matter instead of re-write the whole application, which requires bringing your blog down.

**P.S:** If you are by any chance involved with wordpress, please get an auto-installer done and built into wordpress, atleast for just minor changes, which can be easily done using some script on the server.