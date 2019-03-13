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

[Side scrolling games have used parallax for many decades already](https://gamicus.gamepedia.com/Parallax_scrolling), giving a sensation of depth with very simple graphics. It took a while but shortly after the release of CSS3, websites started popping up with it too, bringing that depth into the internet, sometimes as a gimmick, sometimes [to great effect for interactive stories](http://www.sbs.com.au/theboat/). I always liked it and set out to have some sort of parallaxed aspect to the blog. Here's how I started making

## First attempt

In the end, it was looking kinda good, it clearly followed the mouse and had some semblance of depth. However I wasn't entirely pleased with it. For starters, it was messy, using three different transforms (`translate`, `scaleX`, `scaleY`); and secondly it

## Second attempt
I originally stayed away from using 3D transforms directly, mostly because I incorrectly assumed it was still a relatively unsupported CSS3 feature. However, a quick check on [caniuse.com](https://caniuse.com/#feat=transforms3d) shows that actually 90% of current browsers fully support it already, with most desktop browsers being capable of doing it since ~2010 (except for IE, which took another 4 years as per usual).

### Credit
Comy long list...
