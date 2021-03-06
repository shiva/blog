---
layout: post
title: Somethings should be obvious, but are not, obviously
categories: []
tags:
- code
- dev
- invewrapper
- pew
- pip
- pkg_resources.DistributionNotFound
- programming
- python
- setuptools
- virtualenv
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _wp_old_slug: somethings-obvious-but-not
  _wpas_skip_2634709: '1'
  _wpas_skip_2634712: '1'
  _wpas_skip_5689512: '1'
  _wpcom_is_markdown: '1'
  _post_restored_from: a:3:{s:20:"restored_revision_id";i:13850;s:16:"restored_by_user";i:1;s:13:"restored_time";i:1397032736;}
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

_Update: Apparently, I had accidentally hit a minor bug in pew. This has now been [fixed](https://github.com/berdario/invewrapper/issues/21)._

Every so often, we spend several hours battling an issue, fighting linux or python or people or thoughts. The solution, often, leaps out when there has been a respite in the constant search for the solution. It's the "duh" moment, that all of us feel. There is a little self-loathing, and relief at having arrived at solution. It is a moment of great pleasure, that I have learned to relish.

I am currently on a bit of [MongoDB](http://www.mongodb.org/) binge, and I was setting up a dev environment, using [Crunchbang](http://crunchbang.org/) on [Virtualbox](https://www.virtualbox.org/). Since it is a clean install, I wanted to bootstrap using only [pew](https://github.com/berdario/invewrapper) and [pip](http://www.pip-installer.org/en/latest/), which have recently become my favourite part of working in a pure python environment (no more sudo == yay!!)

I followed the [instructions to install pew](https://github.com/berdario/invewrapper#installation) (which is quite straight-forward). All one should need is

    pip install pew

However, when I tried the same, the install worked, but I couldn't run pew. It couldn't find all the libraries it needed to load (virtualenv, in this case)

    shiva@crunchbang-2:~$ sudo pip install pew
    Downloading/unpacking pew
    Downloading pew-0.1.9.tar.gz
    Running setup.py (path:/tmp/pip_build_root/pew/setup.py) egg_info for package pew
    ...
    Successfully installed pew virtualenv
    Cleaning up...

    shiva@crunchbang-2:~$ pew ls
    Traceback (most recent call last):
    File "/usr/local/bin/pew", line 5, in
    from pkg_resources import load_entry_point
    File "/usr/lib/python2.7/dist-packages/pkg_resources.py", line 2707, in
    working_set.require(__requires__)
    File "/usr/lib/python2.7/dist-packages/pkg_resources.py", line 686, in require
    needed = self.resolve(parse_requirements(requirements))
    File "/usr/lib/python2.7/dist-packages/pkg_resources.py", line 584, in resolve
    raise DistributionNotFound(req)
    pkg_resources.DistributionNotFound: virtualenv

After trying several things, including looking a lot of code in pew, the fix was quite simple.

The version of setup-tools that comes default with python2.7 and crunchbang seems flawed.

    shiva@crunchbang-2:~$ sudo pip install -U setuptools
    Downloading/unpacking setuptools from https://pypi.python.org/packages/3.4/s/setuptools/setuptools-2.2-py2.py3-none-any.whl#md5=3b7d84f496aed8c07b91efba4aa197a4
    Downloading setuptools-2.2-py2.py3-none-any.whl (540kB): 540kB downloaded
    Installing collected packages: setuptools
    Found existing installation: distribute 0.6.24dev-r0
    Uninstalling distribute:
    Successfully uninstalled distribute
    Successfully installed setuptools
    Cleaning up...

    shiva@crunchbang-2:~$ pew ls

    shiva@crunchbang-2:~$ pew new test
    New python executable in test/bin/python
    Installing setuptools, pip...done.
    Launching subshell in virtual environment. Type 'exit' or 'Ctrl+D' to return.
    /home/shiva/.local/share/virtualenvs/test/bin:/home/shiva/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
    