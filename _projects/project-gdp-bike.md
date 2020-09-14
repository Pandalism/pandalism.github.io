---
layout: post
title: "Group Design Project: Range Extended Electric Motorcycle"
category: motorcycles
assets: page-assets/projects/gdp-bike
startdate: 2014-10-01
enddate: 2015-07-01
img: page-assets/projects/gdp-bike/header.jpg
---

This was my Group Design Project to finish the **MEng Mechanical Engineering degree** in Southampton, back in 2015. It was a great project, where we took a small off-road bike and replaced the motor with a 11kW electric powertrain. The project was to build an electric motorcycle, and then create a modular simulation platform to mimic it, capable of being extended with hybrid logic.

## Simulation Platform
The task of making the simulation framework and most of the modules fell upon me, and for this I decided to use **Simulink**, even though I had never used it before, just because I felt somewhat inspired by the **Dymola** based lap-time simulation that I saw during my time in **Redbull Racing**. The idea was to make the simulation modular via 'Variant Models' which would load on startup, present them in a simple GUI, so the user could select the models to be used, and then run the simulation.

The results would be a set of 'channels' representing similar channel outputs of a datalogger as if it were wired to a real motorcycle, so that a comparison between real and simulation would allow model validation and hopefully an accurate baseline motorcycle on which hybrid design options would be tested. There were scripts to plot these channels in various forms.

To validate the model we tested the motorcycle in a wind tunnel and a rolling road, as well as in the end some brief, on the road tests. It ran quite well! I am pretty pleased with how it ended looking, the autoloading of models was a bit hack-y because at the time Simulink didn't let you load them programmatically, the larger model was also a bit of a mess of wires, and there are multiple algebraic loops which really needed fixing, but considering the experience I had at the time I can't be anything but proud with the outcome.

{% assign img_array = "|" | split: "|" %}
{% assign caption_array = "testing1|testing2" | split: "|" %}
{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}

## Motorcycle
My familiarity with R/C vehicles and drones meant I was in charge of the electrical powertrain design too, but in this regards, it just mean sourcing hobby-grade lithium cells and wiring them up to the controller in a semi-safe way. We would have never had time to build a Battery Management System, but it would have been the natural next step. Performance was ok, with a top speed of about 35mph (predicted by the model and our tests) with a bit anaemic 5 min full throttle run time predicted. Surprisingly even though we had to both make the bike and a simulation framework, the bike actually outperformed compared to another team which was tasked with making an electric bike only. Overall it was a great fun project, not everyone gets to say they rode their final project in university!

{% assign img_array = "|" | split: "|" %}
{% assign caption_array = "testing1|testing2" | split: "|" %}
{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}

## Technologies/Skills used
 - Matlab/Simulink
 - Subversion
 - Model creation, verification and validation

## Credits
blah

{% if page.tag %}
## Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
