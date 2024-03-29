---
layout: page
title: "Group Design Project: Range Extended Electric
 Motorcycle"
category: motorcycles
assets: page-assets/projects/gdp-bike
startdate: 2014-10-01
enddate: 2015-07-01
image: page-assets/projects/gdp-bike/banner.jpg
published: true
---

This was my Group Design Project to finish the **MEng Mechanical Engineering degree** in Southampton, back in 2015. It was a great project, where we took a small off-road bike and replaced the motor with a 11kW electric powertrain. The project was to **build an electric motorcycle**, and then create a **modular simulation platform** to model it, with the added capability of being extended to include hybrid **powertrains**.


## Simulation Platform

The task of making the simulation framework and most of the modules fell upon me, and for this I decided to use **Simulink**, even though I had never used it before, just because I felt somewhat inspired by the **Dymola** based lap-time simulation that I saw during my time in **Redbull Racing**. The idea was to make the simulation modular via 'Variant Models' which would load on startup, present them in a simple GUI, so the user could select the models to be used, and then run the simulation.

The results would be a set of 'channels' representing similar channel outputs of a datalogger as if it were wired to a real motorcycle, so that a comparison between real and simulation would allow model validation and hopefully an accurate baseline motorcycle on which hybrid design options would be tested. There were scripts to plot these channels in various forms.

To validate the model we tested the motorcycle in a wind tunnel and a rolling road, as well as in the end some brief, on the road tests. It ran quite well!

I am pretty pleased with how it ended looking, the autoloading of models was a bit hack-y because at the time Simulink didn't let you load them programmatically, the larger model was also a bit of a mess of wires, and there are multiple algebraic loops which really needed fixing, but considering the experience I had at the time I can't be anything but proud with the outcome.

{% assign img_array = "variant_find.png|gui.png|overall_model.png|bike_model.png|fuelcell_model.png|motor_model.png|plots.png" | split: "|" %}

{% assign caption_array = "As the gui starts up, it looks for the different models placed in the folders|Image of the GUI with populated dropdown boxes to select the models, driver model, test path and various other aspects|The overall simulation framework looks as follows, with bike, driver, road and kinematics subsections|Inside the motorcycle block, it was split into variant models for the subsystems like wheels, motors, controllers, etc.|The models were simple to start off with, usually based on theoretical physical models, experimentally found models or...|...datasheet based models|If you noticed there were many output channels throughout the project, all outputting to the save file and easily plotted by post-processing scripts" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}


## Motorcycle
My familiarity with R/C vehicles and drones meant I was in charge of the electrical powertrain design too, but in this regards, it just mean sourcing hobby-grade lithium cells and wiring them up to the controller in a semi-safe way. We would have never had time to build a Battery Management System, but it would have been the natural next step. Performance was ok, with a top speed of about 35mph (predicted by the model and our tests) with a bit anaemic 5 min full throttle run time predicted. Surprisingly even though we had to both make the bike and a simulation framework, the bike actually outperformed compared to another team which was tasked with making an electric bike only. Overall it was a great fun project, not everyone gets to say they rode their final project in university!

{% assign img_array = "banner.jpg|dyno-test.gif|windtunnel.jpg|onroad_testing.jpg|onroad_testing.gif|5_dashboard.jpg" | split: "|" %}

{% assign caption_array = "Finished e-motorcycle|Testing on the rolling road|Testing in the wind tunnel|Testing on the actual road|Testing on the actual road, stunt driving by yours truly|We would always breakout the laser cutter or 3D printer at the drop of a hat" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2%}

## Things I would have done differently
I believe sections of the models could have been done in **Simscape** which is for acausal physical modelling. Nonetheless at the time Simscape was a bit poorly supported particularly for logging.

The only other aspect is that the GUI and framework were done kinda haphazardly, with only a semblance of direction from the beginning, in hindsight I'd have saved a lot of time jumping straight into what we needed and focusing on that, letting other sections and models become more developed.

### Technologies/Skills used
 - Matlab and Simulink
 - Subversion version control
 - Model creation, verification and validation
 - Basic Electronics



### Credits
Most sincere gratitude to the University for the opportunity and my good friend Fran Infante for being my right hand man and helping me so much during the project even when I was starting to feature-creep.

{% if page.tag %}
### Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
