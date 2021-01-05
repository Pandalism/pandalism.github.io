---
layout: post
title: "Pruned Monero Node in Docker"
image: "post-assets/2020-12-14-monero-docker/banner.png"
category: technology
subcategory: programming
tags:  microserver NAS docker monero
assets: "post-assets/2020-12-14-monero-docker"
published: true
updated: 2020-01-05
---

Finally had a practical reason to play with docker outside of tutorials! Taken a back by the blockchain size, I modified a docker container to run a Monero pruned node.



## Size of cryptocurrency nodes
I like to host cryptocurrency nodes for myself, but as the ever marching blockchains grow in size with each block, hosting multiple of them starts becoming a real burden on the hard drive. Current estimates stand at [64GB](https://bitinfocharts.com/monero/) and [370GB](https://bitinfocharts.com/bitcoin/) for Monero and Bitcoin respectively.

## Base dockerfile
For the Monero node, I pulled [kannix's monero-full-node](https://github.com/kannix/monero-full-node), attached the folder I wanted via bind and... it didn't work, spewing out permissions issues. Turns out it by default uses `puid` of 1000 as the user, so you need to change the owner of the folder attached to user 1000. Now on Synology's DSM, this user doesn't exist and thus you can't do it graphically. Nevertheless, SSH in, navigate to the folder above the one you need to change and throw a `sudo chown 1000 %folder_dir%` command at it.

Now once running, the synchronisation took a couple of days, but once finished, even knowing the previously mentioned size issues, I was shocked to see it took 93GB of space. This was frankly too much, and that would only grow over time.

## Modification
Time to run a _pruned_ node, now I won't act like i know exactly how the pruned node works in Monero, but the important part is that unlike other coins, it still retains all transactional data but discards some of the ring signatures, which make up a significant portion of the blockchain size.

Seeing the opportunity to actually have a reason to spin my own dockerfile for once (not just in tutorials), I forked the original github, threw in the `--prune-blockchain` argument, and uploaded it to dockerhub. Changed the image pulled on the NAS to `pandalism/monero-docker` and it all worked flawlessly. [Easy peasy and the results speak for themselves!](https://hub.docker.com/repository/docker/pandalism/monero-docker).

{% assign img_array = "before.png|after.png" | split: "|" %}

{% assign caption_array = "Before - 94GB|After - 30GB" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}


## Plans
__To be quite frank__ this didn't deserve its own post but as I mentioned, the blog is mostly for note keeping. In this particular case I'd really like to revisit this and just build a container based on the [linuxserver.io containers](https://github.com/linuxserver/docker-baseimage-ubuntu). The benefits being having the built in puid and guid translation from the external user into the container, bringing the format inline with the other containers, and breaking out the various options of the node as environmental variables. Alas, that for another day.

## Updated
After seeing there was some malicious attacks on the Monero network decided to update to the 0.17.1.8 version and activate the ip filter option, took the opportunity to practice with automated builds in dockerhub.io and tagging in github.

## Credit and Further links
- [pandalism/monero-docker](https://hub.docker.com/repository/docker/pandalism/monero-docker)
- [kannix's monero-full-node](https://github.com/kannix/monero-full-node)
- [linuxserver.io base image](https://github.com/linuxserver/docker-baseimage-ubuntu)
