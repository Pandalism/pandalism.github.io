---
layout: page
title: "Electro-Thermal 1D simulation of a Battery Contactor Module"
category: motorcycles
assets: page-assets/projects/electro-therm
startdate: 2019-08-08
enddate: 2019-10-01
image: page-assets/projects/electro-therm/fda_3.png
published: true
---

Within the Jaguar Landrover Graduate Scheme, I rotated into the Advanced Battery Powertrain team which mostly involved modifying models and running simulations focused on the battery pack in the current and upcoming Battery Electric Vehicles (BEV). Here I saw there was a gap in the modelling capabilities particularly regarding the the module with all the fuses and contactors and set about trying to fix it with Simulink, Simscape and 1D modelling.

## Simulation Platform
Without going into too much detail, the section housing the main battery fuses, ammeters and contactors, internally referred to as the Battery Energy Management (BEM) module, was poorly understood within the company. There were no models for it and the company was paying the supplier large sums of money for FEA analysis' which were not well explained and missing many assumptions.

{% include img.html assetsFolder=page.assets link='fda_2.png' caption='The simulation reports tended to look like a series of pictures like this, with no more detail nor well defined assumptions.' %}

This was not sufficient detail for the engineers, particularly considering certain scenarios such as performing demanding driving cycles and immediately fast-charging. The temperature probes positioning and thermal throttling logic was not the best so understanding how the unmeasured parts of the module behaved was quite important. As a sort of miniproject, I decided to try to simulate the electrical and thermal properties of the different components using a network of simple 1-dimensional components. This would allow engineers to use their own parameters and assumptions, play with the drive cycles, etc.


## The model
Brainstorming at the beginning, I decided to:
- Use Simscape, the acausal, 1d physical modelling portion of Matlab, as I personally wanted to try it out as I hadn't had the opportunity before.
- Use libraries to try to help with reusing the code in the future, something I hadn't tried before either.
- Try to make it as neat and well documented so a complete beginner could follow in my footsteps and build models for other car lines.

The model itself was simple but tedious to make once the sub-components were created, with many many parameters (although most of them coupled), but it ended up being quite reasonable and matching the FEA analysis reasonably well even using just broad geometric references to find parameters at the beginning. The inputs and outputs were designed to replace a black box model within the larger battery simulation programs.

{% assign img_array = "overall_model.png|libraries.png|model_positive.png|model_negative.png|logging.png|parameters.png" | split: "|" %}

{% assign caption_array = "The model consisted of the components themselves, their environment, and conversion blocks to connect to the broader battery models used.|I created libraries of sub-components to model individual sections such as busbars, fuses, switches, etc.|These subcomponents were assembled following the electrical diagrams, and with extra connections to cover the thermal couplings...|...for both the negative and positive sides, which connected to the central cooling plate via various heatsinks.|There was obviously an extensive network of variables logged.|Parameters governing the behaviour of the components, and enviromental heatsinks and constants, were broken out to easily accessible .m files" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}

## Conclusion
I was quite pleased with the end result, it looked fantastic, and I got to try out multiple new little features of Matlab, Simscape, libraries and more. The documentation of how I the simulation and libraries were created was extensive, as I knew an apprentice with little Matlab knowledge was going to pick it up after I rotated out of the team. The neatness of the layout was also much better than the previous Simulink models I had done in University.

The next steps after would have been to validate on a physical module kitted with test probes, as well as identifying the magnitude of the component-air-component thermal couplings; which I would have liked to have done, alas the project had reached its natural breakpoint and I had to go back to my main department. It was now in other's hands.

### Technologies/Skills used
 - Matlab, Simulink and Simscape

{% if page.tag %}
### Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
