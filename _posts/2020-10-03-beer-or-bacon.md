---
layout: post
title: "Beercan or Bacon Classifier"
image: "post-assets/2020-10-03-beer-or-bacon/banner.jpg"
category: programming
tags: python fastai widgets binder classifier
assets: "post-assets/2020-10-03-beer-or-bacon"
updated: 2020-12-30
published: true
---

An experiment in using ipython widgets, fastai and binder to create a **highly practical and necessary** 'beercan or bacon' classifier, available through the internet!

## Introduction
One of the major issues I have with the **fastai** system and the initial tutorials is that they discourage setting it up on your computer, since it apparently can be nightmarish with all the cuda driver issues and what not. This however means most of the experiments and trials I run are hidden away in some Paperspace notepad, and I'm not particularly fond of that. However I did remember a mention a while back in their tutorials about using Binder.org to host a low performance classifier...So back I went to figure out how to put the Beercan or Bacon classifier up on the internet for all!

## Training and Hosting
**Fastai** really simplifies getting a cnn running and it shows, in this case I just used the bing api to pull image searches for both Beer cans and Bacon, loaded it into their weird data loader structure and fed that into a CNN learner object.

Limited to 150 images, I did have to be a bit more careful to pick out errant silly results, which in this case was 'beer can chicken' recipes and Francis and Kevin Bacon making appearances in the training and validation data.

To not go through it all manually I just tweaked the search terms a little and that was enough to stop all but one errant *Kevin Bacon* image, but I guess much like those god-awful EE adverts, I can put up with one.

```
search_terms = ['beer can -recipe -chicken',
                'bacon -kevin -francis -jam']
```

{% assign img_array = "1.png|2.png|3.png" | split: "|" %}

{% assign caption_array = "Francis and Kevin just getting in the way|Throughhttps://elc.github.io/posts/embed-interactive-notebooks/ this exercise I found some curious ways of cooking with beer cans|After cleaning up the search terms a bit, results were pretty good" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}

## Binder App
Without further ado, here is the jupyter notebook embedded below thanks to the magic of `nbinteract` and `Binder` (mind you if the image has been taken offline it can take a 10mins or so just to start up again, it is a free service after all...):


<iframe width="100%" height="450px" src="{{site.url}}/{{page.assets}}/iframe_beercan-or-bacon.html"></iframe>

<!--
<iframe width='100%' height='600px' src="https://mybinder.org/v2/gh/Pandalism/beercan_or_bacon/test?urlpath=voila%2Frender%2Finfer_beer_or_bacon.ipynb"></iframe> -->

If the above does not work or you'd like to look into the Binder page directly please use:

<a href="https://mybinder.org/v2/gh/Pandalism/beercan_or_bacon/main?urlpath=%2Fnotebooks%2Finfer_beer_or_bacon.ipynb" target="_blank">
<img src="https://mybinder.org/badge_logo.svg"
alt="Launch Binder" style="transform: scale(2);">
</a>

## Further work
Firstly I need to figure out how to embedded the binder in to the blog as an iframe. Im not sure what sort of anti cross-site protection i'm running into but I will have to investigate more later. Some posts make it seem like its [not possible at all](https://github.com/jupyterhub/binderhub/issues/1078), but then some users appear to be able to do it via [nbinteract instead of voila](https://elc.github.io/posts/embed-interactive-notebooks/). Regardless, needs more research!

Since binder is running the instance as a docker container itself, would be interesting to experiment with with hosting it myself, but I think the first thing is to create a dedicated linux machine with nvidia drivers and a cuda enviroment all set up.

## Conclusion
Truely the hardest part of all this was actually getting the learned model to open and play nice in **mybinder.org**, this was not the first time running into a **dependency nightmare**, but it was the first where there were 15min build times between attempts and the most lackluster error messages to help! I didn't want to just throw up the whole Paperspace conda enviroment into it because its seemed a bit excessive to have a 30gb docker container for a simple image classifier, so I tried to find the bare minimum needed, and that took a long time.

<!-- On top of that turns out Jupyter notebooks don't allow to be embedded in iframes on websites with different originating urls (good default behaviour tbh). So overcoming that hurdle was another massive nightmare, that took longer than both the training/testing in Paperspace AND navigating the requirement quagmire combined. -->

Nonetheless, its working now, probably could get optimized more but eh, maybe another day.


## Credit and links
- [fast.ai](https://www.fast.ai/)
- [mybinder.org](https://mybinder.org/)
