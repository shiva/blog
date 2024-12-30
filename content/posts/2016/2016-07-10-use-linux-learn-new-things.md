---
title: Use Linux, learn new things
tags:
  - linux
  - learning
  - Arch Linux
  - KDE
  - Tips & Tricks
  - How To
date: '2016-07-10'
description: Use Linux. It encourages learning new things, and new ways to do old things
slug: use-linux-learn-new-things
---

After 12+ years, I built a [workstation from scratch][0]. Hardware has come such a long way, but that is a post unto itself. Having always worked with Ubuntu and other debian variants it was time to venture into a more lean distro. I picked [Arch Linux][4], on the recommendation of several colleagues. It's been fun. [Pacman][1] and [Yaourt][2] are great package managers, and the [rolling release][3] model ensures access to the bleeding edge all the time.

Working in linux always makes you learn something new. Today, I found out a simple way to shutdown KDE gracefully.

``` bash
# qdbus org.kde.ksmserver /KSMServer logout 0 0 0
```

[0]: https://ca.pcpartpicker.com/b/j6Cypg
[1]: https://wiki.archlinux.org/index.php/pacman
[2]: https://archlinux.fr/yaourt-en
[3]: https://en.wikipedia.org/wiki/Rolling_release
[4]: https://wiki.archlinux.org/index.php/arch_compared_to_other_distributions

