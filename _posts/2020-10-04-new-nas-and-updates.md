---
layout: post
title: "Redesign of the Network and new NAS drive - Part 1"
image: "post-assets/2020-10-04-new-nas-and-updates/banner.jpg"
category: technology
subcategory: electronics
tags:  microserver computer NAS docker network
assets: "post-assets/2020-10-04-new-nas-and-updates"
published: false
---

So with much careful deliberation over my previous adventures, I decided to stop screwing around and just build the network/homelab as I wanted. This involved removing old devices and cleaning cables, new NAS drive, new dedicated Virtual Machine box, and moving different services around!

## Overall concept
My reigning goals for the network/homelab situation was as follows:
 - minimize energy usage
 - simplify management
 - reduce amount of devices and clutter
 - keep mission critical components clear of the parts for messing around
 - keep overall foot print small enough to fit under the lack table.

These points clearly are contradictory but I decided to try to split the network into three+one subcomponents:
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


## Printer change, cable management and Pi Heatsinks

Before, I had just thrown in almost all the devices under an Ikea LACK table with cables all over the place and the old trusty LaserJet. It didn't exactly fit in the footprint of the table and the nest behind was quite embarrassing...
Additionally I had just bought a switch, new smart plug extension and a new device, and it was all going to take up more space so it was time for a clearing out.

Having found that my second laser printer, a Brother HL-1110, was pretty much unused in my bedroom, I set out testing it with the NAS as a print server. It seemed to work, so I swapped the HP Laserjet 1022 for its more energy efficient and sleeker Brother.

With that out of the way, I set about trying to tackled the cables. Figured a piece of raised wood to act as a shelf behind the printer and NAS meant I could keep the switch, router and sockets on top, with the bundle of power adapters stashed underneath. Its not like it was extensively thought out but with the end result painted and labelled, it definitely felt much nicer on the eyes. Worst part of all of this was sawing the wood with a Victorinox mutlti-tool saw; **trust me**, it didn't do my RSI any good.

## New NAS



## New Virtual Machine box and switch



## Conclusion
Don't get me wrong, this setup is still over-complicated and over-kill, and honestly I could trim some fat and merge parts, but it would also be less fun. Overall I'm pretty pleased with how it stands and it's been good practice to play around with all the portions. I'll continue removing random devices I have littered around the house which don't do anything and just focusing on keeping this central core part running just as I like it, possibly changing parts here and there, but will see. For now its not going to be changing any time soon...

## Credit and Further links
- [Install **Portainer** on your docker-capable synology NAS drive](https://nashosted.com/setup-and-install-portainer-on-synology-nas/?utm_source=rss&utm_medium=rss&utm_campaign=setup-and-install-portainer-on-synology-nas)

https://lejimmy.com/setting-up-transmission-bittorrent-with-openvpn-on-a-synology-nas-and-docker/

https://haugene.github.io/docker-transmission-openvpn/synology-nas/
