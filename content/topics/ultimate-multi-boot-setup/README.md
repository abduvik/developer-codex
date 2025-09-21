---
title: Ultimate Multi-Boot Setup
---

# Ultimate Multi-Boot Setup

This guide is to help installing a multi-boot setup of:

- Multiple Linux Distros
- Windows
- Hackintosh/MacOS

Steps:

- Create the following partitions using GParted:
  - EFI partition (FAT32) - 1GB
  - BIOS Boot partition (Unformatted) - 1GB
  - Separate Partition for each OS and make them unformatted
  - Separate between each OS with two empty 100 MB partitions as some OS might require more partitions and this will
    help when resizing and avoid messing partitions numbering

To Show GRUB Menu after installing a Linux distro:

- Edit `/etc/default/grub` and set `GRUB_TIMEOUT=5` and `GRUB_TIMEOUT_STYLE=menu`
