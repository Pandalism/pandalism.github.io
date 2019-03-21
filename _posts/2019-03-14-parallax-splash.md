---
layout: post
title: "Making a Parallax splash page"
banner:
category: programming
sub-category: webdev
tags: webdev github-page blog parallax splash
assets: "post-assets/2019-03-14-parallax-splash"
published: false
---

[Side scrolling games have used parallax for many decades already](https://gamicus.gamepedia.com/Parallax_scrolling), giving a sensation of depth with very simple graphics. It took a while but shortly after the release of CSS3, websites started popping up with it too, bringing that depth into the internet, sometimes as a gimmick, sometimes [to great effect for interactive stories](http://www.sbs.com.au/theboat/). I always liked it and set out to have some sort of parallaxed aspect to the blog. Here's how I made the splash screen to the website.

## First attempt
I started with just creating three divs/layers with the ears, eyes and nose. Then using JavaScript to capture the mouse position and translate the layers up/down left/right over each other, with different amounts for the layers giving the usual parallax effect. However it felt flat, and you can tell it only works for very large scenes. Since the ears, eyes and nose can be approximated as parallel planes, by rotating an object the planes would appear squished. So to give a bit more depth, I added a scale effect based on mouse position. It kinda works:

![Image of the the about page]({{ site.url }}/{{ page.assets }}/first-attempt.gif)
*The effect looks respectable now*

In the end, it was looking kinda good, it clearly followed the mouse and had some semblance of depth. However I wasn't entirely pleased with it. For starters, it was messy, using three different transforms (`translate`, `scaleX`, `scaleY`); and secondly it...

## Second attempt
I originally stayed away from using 3D transforms directly, mostly because I incorrectly assumed it was still a relatively unsupported CSS3 feature. However, a quick check on [caniuse.com](https://caniuse.com/#feat=transforms3d) shows that actually 90% of current browsers fully support it already, with most desktop browsers being capable of doing it since ~2010 (except for IE, which took another 4 years as per usual). Since I was using animations and other weirder CSS elements then I thought might as well use the full potential of CSS3 transforms. Finding how to fall back smoothly for non css3 browsers was left for another day.


### Credit
