---
layout: post
title: "Experiments in setting up a Server"
image: "post-assets/2020-07-19-microserver-setup/banner.jpg"
category: technology
subcategory: electronics
tags:  microserver computer NAS
assets: "post-assets/2020-07-19-microserver-setup"
published: false
---

After the other month's adventures in just buying the cursed microserver, this is the collection of adventures in getting it all working, and giving my network a much  needed overhaul.

## Naming and turning the microserver on

Most important part of getting server is finding the right name for it. I happen to follow the very simple rule of naming devices after Matrix characters, sticking to 'human' characters for my personal devices, and 'program' characters for the server/automated program type devices. So clearly the iLo (embedded server management) + Microserver combination meant I was going to call them Seraph and Oracle, respectively. The former acting as a gatekeeper for the latter!

Other naming conventions I had toyed with was famous AI in movies, such as Jarvis, Friday (iron man), skynet, HAL9000, CASE & TARS, and such. Nonetheless the naming convention that came a close second is characters from the classic *Ghost in the Shell*, with its fantastic movies and tv shows.

## It starts off great...

First step as always, is updating firmware and a fresh install, which led to the first issue. iLO, the embedded server management software allows you to connect to the server even when powered off, and boot it, control it via a virtual monitor, give health warnings, etc. Updating it made sense, and as soon as I did it became extremely sluggish and gave an ominous warning:

 > Controller Firmware Revision 2.10.00: Embedded media manager failed initialisation

{% include img.html assetsFolder=page.assets link='ilo_error.jpg' caption="Sadly I didnt get a chance to grab my own screen caps, but I was presented with this" %}

The issue here was the iLO hadn't been updated in some time, meaning it had a bug that slowly was filling up the dedicated NAND memory. I admit it took much longer to figure out than it should have, and my googlefu failed me a couple of times but turns out the [HP advisory helps walk you right through](https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-a00048622en_us) how to clear out the NAND on iLO 4 v2.6 and above. Done!

## The OS
What OS to run is a serious decision; it carries with it a measure of investment, and you don't want to turn around 6 months down the line and regret not having chosen X when Y is running almost perfectly and hosts all your network! Alas a decision had to be made, and I narrowed down to three options:
 - **FreeNAS**, a FreeBSD distribution dedicated to providing solid NAS (Network Attached Storage) capabilities, with ZFS baked right in.
 - **OpenMediaVault**, a Debian based Linux distribution dedicated to providing simple NAS setup, but since its based on Debian, is highly extensible.
 - **Proxmox**, a Debian based Linux distribution dedicated to providing a solid *hypervisor*, with ZFS baked in.

 I admit I wanted to like **FreeNAS**, when I played with the installation which had been shipped on the server, I could see its benefits and it's ease of use, but the installation process was just much more of a pain than i'd like to admit. Using the virtual media through the iLO (mounting an ISO remotely) didn't work, and then it was extremely fussy with the flash drive. As I started looking through the forums, I realised how the community was not the most friendly, seeing responses that tended to be a bit more snarky than I would hope . Additionally I slowly realised that whilst it had a similar system for dockers and virtual machines, it wasn't quite the same as what I was used to in Linux.

 This left me no alternative but to install **OpenMediaVault** instead. **Proxmox** looked quite [interesting](https://b3n.org/proxmox-vs-esxi/), but realistically, I'm no server administer, I just wanted a NAS with some minor docker and virtualisation capabilities, ands Proxmox feels like exactly the the other way around.

The installation itself went smoothly, on to a 120gb SSD I had just bought (£17! Crazy prices when you think what I paid 3 years ago). The only hiccup here was the fact the SSD was connected to the "5th sata port" in the Microserver. This is usually used for the DVD drive, and when you have the embedded RAID card set to AHCI mode, it won't boot from the 5th sata port. The solution was simple, I installed Ubuntu to a USB drive attached to the internal USB slot in the server, and with it, GRUB was installed. I then went in and edited the GRUB to boot into the SSD by default.

Probably just installing GRUB on a drive and using that would have sufficed, but It just seamed easier to do it all from a micro installation of Ubuntu. There is a small issue with how the drives get enumerated meaning adding or removing harddrives will require tweaks to the GRUB config, although I think i can set it by device UUID or serial number instead... [In the mean time this guide gets me through.](https://www.linux.com/training-tutorials/how-rescue-non-booting-grub-2-linux/)

## OpenMediaVault setup

First thing to do was install the [omv-extras plugin](https://omv-extras.org/), this gives access to various things from the community including the **ZFS** plugin and the **snapraidfs** and **mergerfs** plugins, which are vital to the next step, setting up the data drives!

To play around with ZFS first, I tried to install it, however I believe a dependency mismatch somewhere in the plugin was causing it to fail, as can be seen below.

Reading through the forums, I installed the Proxmox Kernel first (found under the OMV-Extras entry), had to tweak my GRUB configuration to ensure it booted into the proxmox kernel (its the one that ends in -pve) and then installed the ZFS via the command line, following [this guide](https://inlinuxveritas.com/Sk68PBb1U), or also [this guide](https://blog.linuxserver.io/2019/05/14/getting-started-with-zfs-on-linux/). Once that was done the plugin installed fine, and it appeared to work great on the sidebar.

mergerfs and snapraidfs were simple to install, just go to the plugins and select them (mind you the mergerfs plugin we want is the *OpenMediaVault-unionfilesystems*)

## docker

Pi-hole
plex

downloader + sonarr + lidarr

OpenVPN


## Conclusions

https://blog.linuxserver.io/2019/07/16/perfect-media-server-2019/


## Credit

 - [How to fix your GRUB if it doesn't boot into linux]([In the mean time this guide gets me through.](https://www.linux.com/training-tutorials/how-rescue-non-booting-grub-2-linux/)

 - [List of Awesome selfhosted software](https://github.com/awesome-selfhosted/awesome-selfhosted)

 - [/r/homelab's wiki with many helpful tips and ideas](https://www.reddit.com/r/homelab/wiki/software#wiki_homelab_software)

 - [/r/homelab's "start here" post](https://www.reddit.com/r/homelab/comments/5gz4yp/stumbled_into_rhomelab_start_here/)

what a nightmare, I admit to have wasted much more time than neccesary just trying to install FreeNAS. The unit arrived with FreeNAS 11.2 but it was already out of date.

lack of clear docker/virtualisation support, the freebsd base, and a very elitist community (for real! show examples) topped it off and meant I gave up trying to install it.

Instead I switched over to Openmediavault. In testing I saw that I could easily boot and install ubuntu server, so OMV installed in a breeze. Once in I tried out both snapraidfs and mergerfs and to be honest I'm still not sure what is preferable. I think ZFS is clearly superior for a well set up server, but it definitely carries more issues for a 4-bay small homeserver, although I can see why it has benefits.

I think I will operate with both for a while anweeet





## Conclusions

 - Sometimes you just want something and you will justify it anyway you want, but really, you just have to admit there's no rational reason why you want it; and that is OK.
 - Optimise before looking to buy something better. I see this often in the automotive world where suppliers are more than happy to just add more processing power when really, they should be looking at optimising the code. (OEM pays so who cares, right?)
 - Ask online sellers to please wrap up a server with *more* than a **cereal box**.
