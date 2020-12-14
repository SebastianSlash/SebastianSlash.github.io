---
layout: post
blogtype: tech
title: "Installing Alfaview on Arch Linux"
date: 2020-03-28
last_updated: 2020-07-09
author: Sebastian Bellitto
---
Since the whole Corona-Virus self isolation and such, many schools and universities have
set up to hold their lectures online.<br>
One Platform to do such a thing is [Alfaview](http://alfaview.com), which was chosen by my university for the task.<br>

I'm mostly working on Linux and am currently running Arch Linux and very fortunately Alfaview just
released a Linux client for their service! It's a Debian package though and needs some adjustment for it
to run on Arch. <br>

**UPDATE**<br>
A AUR (Arch user repository) [package](https://aur.archlinux.org/packages/alfaview/) has been made. Now it is possible to simply install it using a package manager such as [yay](https://github.com/Jguer/yay).

Here is our checklist:<br>

  1.  [Tool for converting .deb packages](#step-one)
  2.  [Making Arch package and adjust dependencies](#step-two)
  3.  [Updates](#step-three)

<br>

<h2 id="step-one">Tool for converting .deb packages</h2>
A tool called debtap makes it super simple to convert .deb packages in packages you can simply Install
with pacman. It's not in the official repositories so you can get it from the AUR [here](https://aur.archlinux.org/packages/debtap/).<br>
To initialize it you need to run this command in your Terminal:
```bash
$ debtap -u
```
<h2 id="step-two">Making Arch package and adjust dependencies</h2>
If you use debtap to convert the package it will tell you that it couldn't translate one dependencie,
which is: *fonts-roboto-hinted* it's just a google font package which is aviable in arch as *ttf-roboto*<br>
Knowing this it's time to convert the Package.<br>
to convert simply run:
```bash
$ debtap alfaview_version.deb
```
inside the directory of the .deb package.<br>
At some point it will ask you if you want to edit the `.PKGINFO` and `.INSTALL` files, at this point you need
to select a commandline editor and edit the `.PKGINFO` file, there is a line for the *fonts-roboto-hinted*
dependency. Here, all you got to do is replace *fonts-roboto-hinted* with *ttf-roboto* after that save and colse the file. It will open the `.INSTALL` file as well but we don't need to edit it, just close it.<br>
After editing it will finish up and you'll have a new `.pkg.tar.xz` package in the directory. Install it by running:
```bash
$ sudo pacman -U packagename.pkg.tar.xz
```
<h2 id="step-three">Updates</h2>
Shortly after installing Alfaview on my Arch system there was an update aviable, the package you could download from ther page was still the old version though.<br>
It seems like they just need a little bit of time to update their download link.<br>
So for the ones of you that can not wait, heres what to do:<br>
Since Arch is not Debian based you can't just update it, but when it asks you if you want to go ahead and klick on update.<br>
it will open a archiving tool and show you the contents of the new .deb package. All you got to do from there is go to file and save the package in a location of your chioice. After you saved it just remove the old Alfaview install:
```bash
$ sudo pacman -R alfaview
```
and then do [step two](#step-two) again with the package of the new version.
