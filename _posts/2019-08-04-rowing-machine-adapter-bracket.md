---
layout: post
title: "Functional Print: Double entry"
banner:
category: technology
subcategory: 3d-printing
tags: rapid-prototyping 3d-printing CAD solidworks upcycling
assets: "post-assets/2019-08-04-rowing-machine-adapter-bracket"
published: true
---

Just another weekend dusting off the 3D printer! This time making an adapter bracket to fix a seat onto a rowing machine, and a tiny little wingnut thingy to help a friend who needed one for their easel.

## Rowing machine seat adapter
Some time ago I got a rowing machine off of freecycle.org, however as per usual freecycle shenanigans, the seat was missing. So it lived in my garage for the last couple of months whilst I figured out what to convert it to or how to reuse it.

Lo and behold I saw one of those sit-up trainers laying in the trash cycling home one day. I noticed that the headrest portion looked ideal for exactly that purpose! Long story short, made a two piece 3d printed adapter plate which adapts the hole pattern from one to the other, and now I have a functioning rowing machine!

{% assign img_array = "ad_headrest.jpg|ad_idea.jpg|ad_layers.png|ad_printing.jpg|ad_printed.jpg|ad_fitted.jpg|ad_inplace.jpg" | split: "|" %}

{% assign caption_array = "Ab crunch machine found in the trash|Looked roughly like it would be able to be mounted on the trolley|CAD of a two layer adapter plate|Printing away|Finished and glued|Worked first time|Seat/headrest fitted and working great!" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}


## Wingnut
My friend lost a wingnut that held together her easel, so whilst the 3D printer was still hot I made a small wingnut adapter thing which a nut can drop in. It kinda works, but obviously due to the layering and the shape of it its a bit fragile than I'd like and the wing broke whilst tightening... still works and it was a test for overhangs more than anything.

{% assign img_array2 ="wn_start.png|wn_finished.png|wn_printer.png|wn_printed.jpg|wn_inplace.jpg" | split: "|" %}
{% assign caption_array2 = "Solidworks to the rescue as always|Most aggressive overhangs I've printed so far|And away it goes!|Looks good, although those wings didnt print as rigidly as I wanted|And in the end one broke off, but it still did its job..." | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array2 caption=caption_array2 showindex=2%}
