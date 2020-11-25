---
layout: post
title: "Starting project bloodhound"
image: "post-assets/2020-11-22-starting-project-bloodhound/banner.jpg"
category: technology
subcategory: domotics
tags:  NAS SQL telegram bloodhound
assets: "post-assets/2020-11-22-starting-project-bloodhound"
published: false
---

Last weekend, I started thinking what

## General jist of it


## Getting a working Telegram bot
Getting a "Hello world" telegram bot working was quite trivial using the python API, its probably one of the easiest I've seen so far actually. Once running some experimentation with the system showed me a couple of points:
- The bot will only capture messages/commands if the handlers are set up for it (there is a wildcard handler however)
- The bot will only function whilst the python connection is open, if closed it will not respond nor save messages for later for when the system is up again.
- The methods need to be loaded every time a connection is made after closing it, however you dont have to do that if the conneciton is maintained but the polling is stopped.

{% include img.html assetsFolder=page.assets link='bot_baby_steps.png' caption="Baby steps" %}

next step pulling images and saving them locally.

## Working with the images



## Next steps



## Credit and Further links
- https://docs.anaconda.com/anaconda/user-guide/tasks/pycharm
