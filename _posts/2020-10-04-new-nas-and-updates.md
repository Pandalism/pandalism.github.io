---
layout: post
title: "New NAS and cleaner network corner!"
image: "post-assets/2020-10-04-new-nas-and-updates/banner.jpg"
category: technology
subcategory: electronics
tags:  microserver computer NAS docker network raspberrypi
assets: "post-assets/2020-10-04-new-nas-and-updates"
published: true
---

So with much careful deliberation over my previous adventures, I decided to stop screwing around and just build the network/homelab as I wanted. This involved removing old devices and cleaning cables, new NAS drive, new dedicated Virtual Machine box, and moving different services around!

## Overall concept
My reigning goals for the network/homelab situation was as follows:
 - ~~minimize energy usage~~
 - ~~simplify management~~
 - ~~reduce amount of devices and clutter~~
 - ~~keep mission critical components clear of the sections for messing around~~
 - keep overall foot print small enough to fit under the LACK table.

> Strikethroughs show where I failed miserably, but at least it now fits under a LACK table

These points clearly are contradictory but I decided to try to split the network into three local subcomponents and some offsite silliness:
- **100% availability portion**
  - Mission critical aspects like the DHCP server, Ad-blocking DNS, dynamicDNS updating, domotics and VPN entry into the network.
  - Services hosted in the **Raspi Model 3B**, but also includes router, and network switch.
- **60% availability portion**
  - The daily use, general purpose, download and backup services, which would only really be used whilst I'm awake. Setup once with appropriate logging and forget about it.
  - NAS with docker capabilities (**DS715+**) to host some services, and the **Nvidia Shield** as a plex server/general media device by the TV.
- **10% availability portion**
  - The part of network to fool around with and test new systems, run processing scripts and generally anything else which might break other parts or slow down the NAS.
  - This would be a dedicated box for virtual machines and other conterised services, capable of running inferences and other aspect. At the moment it's a **Lenovo M72e Tiny** which I managed to get rather cheaply (£70) running Proxmox, but I'm not married with the idea either.
- **Offsite backups**
  - Using external harddrives, cloud storage (onedrive) and my old NAS installed remotely, I plan on making a housefire-ransomware-global-company-collapsing resistant backup setup. Basically should deal with anything but a nuclear EMP.

{% include img.html assetsFolder=page.assets link='net_diagram.png' caption="welp, well this is the network's current state..." %}'

## Pi Heatsinks
First thing was first, the Raspberry Pi was not fairing well, from the moment it turned on it was hitting a constant **60degrees C**, and would sometimes chug hard when the download services were accessed, even crashing and taking my whole DHCP service down too. The location wasn't great, jumbled in between a nest of cables, but also just the fact there was no airflow and no heatsink didn't help.

Nothing some spare thermal paste, a crappy heatsink and some good old glue can't fix. With a bit of repositioning too the temps now dropped to **sub 40 degrees**. *Resounding success* even considering how ropey it seemed to just glue things to the board.

{% assign img_array = "rasp_1.jpg|rasp_2.jpg|rasp_3.png" | split: "|" %}

{% assign caption_array = "Thermal paste, metal and glue|It felt quite ropey...|...the results, however, were fantastic" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}

## Cable management and general reorganisation
That aforementioned *nest of cables* finally got to me. Until now, I had just thrown in almost all the devices under an Ikea LACK table, dangling cables all over the place and just pushing in an old trusty printer from the front until it didn't stick out. Which meant it just fell out the back, and there was no rhyme or reason how it all went together, honestly a bit embarrassing...

As I was adding new devices and would have had to get a switch sooner or later, I decided to tackle the issue, also buying a smart plug with USB ports to power what I could, and ability to remotely switch off parts of the network.

With a bit of wood I found laying around, some screws, black spray paint and a whole lot of time (way more than what I wanted to give but I got carried away) it is now slightly better.

{% assign img_array = "idea_1.jpg|idea_2.jpg|idea_3.jpg|idea_4.jpg|idea_5.jpg|cable_2.jpg|cable_3.jpg|idea_6.jpg|idea_7.jpg" | split: "|" %}

{% assign caption_array = "Started off by figuring out how to rough cut it|General layout with the new switch (TP-Link 4 port) and the smart socket extension (TP-Link too)|Sawed with a Victorinox and holes drilled|Painted black to hide it a little|Used screws to hold in the sockets and switch|Decided to also make my own USB power cable for the switch|Can see the bulky power adapter it replaces behind, freeing a whole socket|Put it up on some legs in the back of the LACK and plugged it all in! Labelling it all, and the Raspberry Pi now directly behind the NAS exhaust for even better cooling|Still a bit messy but its hard to explain how bad it was before" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

Now its still not perfect, but using a piece of wood to raise a small shelf and put the power cables underneath made a **massive** difference, the raspberry pi is much better positioned too and almost all of it is quite reachable. Black paint also helped disguise it in, even if it was a shoddy job.

Its still a bit of a bundle of wires, and two shelves would have helped, but considering I sawed that board with a Victorinox knife, **I was getting close to awaking some RSI or carpel tunnel syndrome or other**. I'll leave it for another weekend in a couple of months time.

{% include img.html assetsFolder=page.assets link='end.jpg' caption="End result! Can spot the eHDD and new virtual machine box hidden away" %}'

## The New DS716+ NAS box
Old NAS was a DS214play, a solid 2-bay NAS drive from Synology with transcoding capabilities. It served me well for 6 years, *however* the transcoding was only for Synology applications (not Plex), it had a 32-bit intel cpu (so no docker) and no support for BtrFS (so no snapshots and bitrot protection). Thus, out with the old in with the (not so) new with a DS716+ nabbed off ebay, which had docker support and BtrFS support.

This meant I now took **the full download stack** (VPN, Transmission, Sonarr, Radarr, Bazarr and jacket) off the *poor Raspi 3B* and into the NAS drive. Now the docker management isn't perfect here and Synology screws around with the containers so I [installed portainer](https://nashosted.com/setup-and-install-portainer-on-synology-nas/?utm_source=rss&utm_medium=rss&utm_campaign=setup-and-install-portainer-on-synology-nas) and then did a mix of [haugene's guide to create a tunnel device](https://haugene.github.io/docker-transmission-openvpn/synology-nas/
) as well as [technodadlife's portainer stack](https://www.technodadlife.com/2020/07/easy-automated-home-media-server-vpn.html) but modifying it for my applications and running it for the first time from a SSH session using *docker-compose* instead to kick start the service (portainer was **not** behaving for some reason). There was some fighting in there with the permissions of various containers and creating a user for docker, but overall it just took time and some googling.

{% assign img_array = "nas.jpg|containers.png|folders.jpg|login.png" | split: "|" %}

{% assign caption_array = "Same size, but much more useful|Running ALL the containers|Reorganisation of folders and users|Even took the time to cuzomise the login!" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=3 %}

Now I also created a new volume, redid some of the folder structures, and now have proper back up with a weekly External USB drive back up and a remote back up into the old NAS.

Overall quite happy with the move:
- The Pi isn't dying anymore if I accessed to many services at the same time
- Seperation of Pihole and the DHCP and NoIP services from a device I can shut down.
- Torrent speed not limited by Pi's slowwww adapter
- Have fancy new BtrFS volume instead of Ext4
- Remote backups to my brother place for most important data

## But wait there's more!
Welp! there's the struggles with changing out the printer and the new virtual box machine I bought to run silly things in, but its the end of the weekend already and better leave it for another post!

## Conclusion
Don't get me wrong, this setup is still over-complicated and over-kill, and honestly I could trim some fat and merge parts, but it would also be less fun. Overall I'm pretty pleased with how it stands and it's been good practice to play around with all the portions. I'll continue removing random devices I have littered around the house which don't do anything and just focusing on keeping this central core part running just as I like it, possibly changing parts here and there, but will see. For now its not going to be changing any time soon...

## Credit and Further links
- [Install **Portainer** on your docker-capable synology NAS drive](https://nashosted.com/setup-and-install-portainer-on-synology-nas/?utm_source=rss&utm_medium=rss&utm_campaign=setup-and-install-portainer-on-synology-nas)
- [technodadlife's portainer stack](https://www.technodadlife.com/2020/07/easy-automated-home-media-server-vpn.html)
- [haugene's amazing VPN + transmission docker container](https://haugene.github.io/docker-transmission-openvpn/)
- [linuxserver.io for their fantastic docker containers](https://docs.linuxserver.io/)

https://lejimmy.com/setting-up-transmission-bittorrent-with-openvpn-on-a-synology-nas-and-docker/
