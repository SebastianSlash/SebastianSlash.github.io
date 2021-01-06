---
layout: post
blogtype: tech
title: "Dual Boot (Arch) Linux and Windows on a UEFI HP Machine with rEFInd"
date: 2021-01-06
author: Sebastian Bellitto
---
Whenever I tried to install Linux alongside Windows 10 on my HP Compaq Elite 83000 it would always boot into Windows.
Using a USB drive with rEFInd as first boot option allows to boot both operating systems.
It seems that it's hardcoded into the Firmware to always prefer Windows if available.
So in this Post I'll show how I use rEFInd as my boot manager to make stubborn HP's dual boot.

## Table of Contens
1. [Things Needed](#things-needed)
2. [Preparing the USB Drive](#preparing-the-usb-drive)
3. [Installing rEFInd](#installing-refind)
4. [Further Setup for Arch Linux and Microcode](#further-setup-for-arch-linux-and-microcode)

I created the USB drive with [rEFInd](https://www.rodsbooks.com/refind/) as my boot manager during the [Arch Linux installation](https://wiki.archlinux.org/index.php/installation_guide) process.
Doing it that way I did not install Grub, but let only rEFInd handle boot loading since it won't work without it anyways.
When doing this during an Arch Linux install this can be done when it comes to installing a boot loader.

If your Linux installation comes with Grub or you already installed it, it should work nonetheless.
You will probably be able to select the Windows boot loader or Grub through rEFInd.

## Things Needed
  - USB drive (100 MB should be enough)
  - (HP) computer
  - Free USB port (a bit tricky if its a Laptop)
  - Windows install
  - Linux install or during install

## Preparing the USB Drive

I had an old 4 GB USB drive laying around, so I just used this.
First we want to format the drive accordingly.
I used fdisk for that.

Either during your Arch Linux install or when booted into your Linux installation.

**NOTE**
The last time I tried to dual boot Windows and Linux, without a boot manager on the USB drive, it booted Linux fine after installing but stopped working after booting Windows the first time after the install.
If you can't boot Linux either select to boot the grub.efi manually or use a live environment.

(If you're not logged in as root you need to use sudo)
check your drive:
```bash
$ fdisk -l
```
I'm writing ``/dev/sdx`` as a symbolic disc, yours will most likely be different.

create new gpt partition table:
```bash
$ fdisk /dev/sdx
Command (m for help): g
```
create new partition (at least 100 MB) I just created one of 1 GB,  which is plenty:
```bash
Command (m for help): n
```
just accept all the defaults and write ``1G`` for end sector.
Then change the partition type to EFI (1) and write to disk:
```bash
Command (m for help): t
Partition number (1, default 1): 1
Partition type or alias (type L to list all): 1
Command (m for help): w
```
Now we need to format it to fat32, so:
```bash
$ mkfs.fat -F 32 /dev/sdx1
```
After that we mount the USB drive and create a EFI directory
```bash
$ mkdir /tmp/usbefi/
$ mount /dev/sdx1 /tmp/usbefi
$ mkdir /tmp/usbefi/EFI
```
unmount the usb drive
```bash
$ umount /dev/sdx1
```

## Installing rEFInd

The easiest way to install rEFInd is to use the [refind-install script](https://www.rodsbooks.com/refind/installing.html) which should be available through your Linux package manager.

On Arch Linux it works like this, after getting the script it should be the same for other distros as well.


Installing the rEFInd install script:
```bash
$ pacman -S refined-install
```

Then we install rEFInd on the USB drive with:
```bash
$ refind-install --usedefault /dev/sdx1
```
this should be good to go, at least for basic setup.

As described in the [manual](https://www.rodsbooks.com/refind/refind-install.html) the ``--usedefault`` option installs rEFInd as ``EFI/BOOT/bootx64.efi`` and is intended for creating bootable USB flash drives.

Now we reboot and go into UEFI-BIOS and set the USB drive first in the boot order.

## Further Setup for Arch Linux and Microcode

After installing [microcode](https://wiki.archlinux.org/index.php/microcode) you can add a boot option to rEFInd as explained [here](https://wiki.archlinux.org/index.php/microcode#rEFInd).

To create the ``refined_linux.conf`` use the command ``mkrlconf`` which automatically creates the file in ``/boot/``.

After that you should edit it to add the ucode option for the first entry as described in the link above.
Then as mentioned in the Arch wiki we need to change the ``refind.conf`` which is in the EFI partition, in this case on the USB drive.

We mount the USB drive
```bash
$ mkdir /tmp/usbefi/
$ mount /dev/sdx /tmp/usbefi/
```
and then open the ``EFI/BOOT/refind.conf`` and uncomment the ``extra_kernel_version_strings`` line as described in the [wiki](https://wiki.archlinux.org/index.php/REFInd#Configuration).

now it should boot.

If it breaks the boot process and goes into a emergency shell mount your root partition and delete the ``refined_linux.conf`` you created, reboot and it should be back to normal.
