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

After the other month's adventures in just buying the damn thing, this is the collection of adventures in getting it all working, and giving my network a much  needed overhaul.

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

 I admit I wanted to like FreeNAS, when I played with the installation which had been shipped on the server, I could see its benefits






## ZFS on Open Media Vault


## Conclusions

## Credit




Updating different firmwares

updated ilo -> found issue with SD card reader

more info ->

  Controller firmware revision 2.09.00 Embedded media manager encountered SL_AbortHandler during init

## Installing the os
Looking at all the options of what OS to install, I concluded that really there was only a couple of ways to go about this:
- FreeNAS + ZFS data
- Open Media Vault + SnapraidFS and MergerFS
- Open Media Vault + ZFS
- Proxmox hypervisor + ZFS data drives



what a nightmare, I admit to have wasted much more time than neccesary just trying to install FreeNAS. The unit arrived with FreeNAS 11.2 but it was already out of date.

lack of clear docker/virtualisation support, the freebsd base, and a very elitist community (for real! show examples) topped it off and meant I gave up trying to install it.

Instead I switched over to Openmediavault. In testing I saw that I could easily boot and install ubuntu server, so OMV installed in a breeze. Once in I tried out both snapraidfs and mergerfs and to be honest I'm still not sure what is preferable. I think ZFS is clearly superior for a well set up server, but it definitely carries more issues for a 4-bay small homeserver, although I can see why it has benefits.

I think I will operate with both for a while anweeet





## Conclusions

 - Sometimes you just want something and you will justify it anyway you want, but really, you just have to admit there's no rational reason why you want it; and that is OK.
 - Optimise before looking to buy something better. I see this often in the automotive world where suppliers are more than happy to just add more processing power when really, they should be looking at optimising the code. (OEM pays so who cares, right?)
 - Ask online sellers to please wrap up a server with *more* than a **cereal box**.
