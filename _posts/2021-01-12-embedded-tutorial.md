---
layout: post
title: "Tutorial: Embedding Fast.ai into your website through binder and nbinteract"
image: #"post-assets/2021-01-12-embedded-tutorial"
category: programming
tags:  python jupyter binder webdev tutorial
assets: "post-assets/2021-01-12-embedded-tutorial"
published: true
---

Some time ago, as I was working through the fast.ai course, one of the mini-projects ended with a suggestion to serve the classifier to the general public.
The suggested route, being hosted on binder.org and serving the jupyter notebook directly or through `voila`, was quite good, and easy to do. `voila` particularly made the page quite elegant and presentable.
However, the method did __not play nice__ when embedding it in your own website. After pulling my hair out for a bit I finally got it working with `nbinteract` and thought I'd share the steps as a short tutorial for the rest of the world.


## The issue with directly embedding
Assuming you have been following the fast.ai course. You now have a model, hosted on binder.org. Naively you might think that you can just embedded that output into an `iframe` tag and call it a day, however if we try that right here you can see the website is not displayed, whilst going directly to the website works totally fine:



The issue here is Cross-Site protection mechanisms within both `jupyter` and `voila`. The page service itself does not like to be serving for a given domain, but be displayed through another domain, in this case the fact that the jupyter notebook is hosted and serving at `https://binder.org` is at odds with it then being also displayed within a page hosted at `https://felixdmr.com`. There's some __good__ security reasons for this but I will leave that to experts to explain. These security features are easily removed if you have full configuration control over jupyter or voila, however even though binder.org allows some configuration to your hosted notebook, it seems to ignore these options.

The easiest way around this is to just host your own jupyter server on the same network/device as your website, but I use the built-in `Jekyll` functionality from Github, so no dice.

## nbinteract to the rescue
So Jupyter refuses to be embedded, and this is where `nbinteract` comes in. Jupyter is really a webserver that serves a interactive webpage, the notebook, which it then connects to an interactive python kernel that it spawns and hosts. `nbinteract` is a pre-made static website with some JavaScript that connects to the interactive python kernel spawned and hosted on another server/service. The python kernel itself is connected via websockets and thus does not care what domain/server it is hosted on.

In practical terms, with a given notebook on a github repo, the `nbinteract` conversion process creates a binder.org hosted jupyter instance, and static website which has the right widgets and display. When the website is loaded, the JavaScript will automatically trigger the jupyter instance to load, and connect to the kernel it spawns, bypassing the usual jupyter frontend.

The downside to this process is that its not a true notebook, any interactive processes need to be exposed by the JavaScript, and for now that is limited to `ipywidget` functionality. The upside is that that covers almost all your interactive needs and now you can serve the page from wherever you want, whilst binder.org hosts the instance.





##

## How to make it work with Fast.ai
Now you might be able to host and embed simple notebooks


## Supply? What Supply?


## It finally (mostly) arrived!


## Credit and links
- binder
- tutorial chap
