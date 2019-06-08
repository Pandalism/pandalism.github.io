---
layout: post
title: "ALFie - Angry Little Flier"
banner: "post-assets/2019-05-23-alfie-drone/tiny.jpg"
category: technology
subcategory: drones
tags: quadcopter drones rapid-prototyping 3d-printing solidworks
assets: "post-assets/2019-05-23-alfie-drone"
published: true
---

As mentioned previously, [after the loss of Skippy]({{site.url}}/2019/04/06/drone-skippy/), I was set back but not undetermined to continue along this path to fast flying mini chainsaws with tiny little cameras on them. This time I took a short cut and bought a tiny little Plug-n-Play (PNP) quad with 3 inch props, [the GT-M3](https://www.unmannedtechshop.co.uk/product/diatone-2018-gt-m3-fpv-racing-quadcopter-pnp/).

## The quad
Its so tiny! I dare say it even looks cute, until you arm it and the tiny little 3 inch props start whirring in menacing anticipation. Its quite well put together with a 'flight stack' consisting of a 4-in-1 ESC, F4 Flight controller, and team blacksheep VTX (which sadly uses a miniature whip antenna instead of a micro pagoda, but I might change that soon).
The frame looks a lot like the previous Diatone GT-M200 frame which Skippy was made of, but its much smaller. Its a tight fit with the camera, but still somewhat user-serviceable (which came in handy).

{% include img.html assetsFolder=page.assets link='tiny.jpg' caption="It's tiny!" %}

## Making an antenna holder
Since the kit was a Plug N' Play, it lacked a radio receiver. I had also ordered the diminutive Frsky R-XSR reciever, but realised that there was no real slot to tie/hold it down on to the frame.

{% include img.html assetsFolder=page.assets link='cad.png' caption="Had to partially CAD the frame to see how to mount the platform" %}

Using Solidworks and my 3d-printer, I made a little antenna-guide/platform which latches into the top of the longitudinal members of the frame using a open box cross-section. It actually worked better than expected after two test prints, and managed to make it hold quite well with a satisfying click and easily removable, which was a clear requirement to be able to stow away easily and without tools. To attach the receiver itself to the platform I just used tape, no need to get complicated.

{% include img.html assetsFolder=page.assets link='antenna.jpg' caption="The final printed antenna platform" %}

{% include img.html assetsFolder=page.assets link='antenna-mounted.jpg' caption="Solidly snap mounted" %}

## Carrying case
With such a small quad, finding a carrying case was a piece of cake, just had to do a couple of cuts and you end up with a wonderfully compact carrying case making your set up that much cleaner and easier to transport, another pro for the 3in Quad format!


{% include img.html assetsFolder=page.assets link='box.jpg' caption="Micro case for a micro quad" %}

{% include img.html assetsFolder=page.assets link='portable.jpg' caption="Much more portable setup" %}

## First Flights
So I have gone out and flown it twice now, one in the football fields down by the house which went swimmingly until I tried to bail out of a backflip and it went straight into the ground (cracking both the base plates but not the arms, surprisingly). The second time was uneventful but good practice overall. Repairing the frame was a bit of a pain because of how fiddly the flight stack and frame join together but it was only a matter of time and some new bolts + plates, all quite cheap. Overall, flying was a joy, and its clear the simulator helped me handle the power much better, but the quad is still a beast which is hard to handle. Meanwhile the only issue I have with it is that every now and then it loses the 'horizon', and the FPV display starts showing the horizon being quite off from the real horizon. Obviously when this happens, in horizon mode the quad starts drifting quite badly.

![flip and roll]({{ site.url }}/{{ page.assets }}/flip.gif)*Flip and roll?*

{% include img.html assetsFolder=page.assets link='broken.jpg' caption="First hard crash broke the base plate" %}

{% include img.html assetsFolder=page.assets link='horizon.png' caption="Horizon can drift off as seen here" %}

Minor issues aside, I'm well pleased. I guess I'll call it Alfie...
