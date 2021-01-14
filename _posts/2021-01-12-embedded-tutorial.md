---
layout: post
title: "Tutorial: Embedding Fast.ai into your website through binder and nbinteract"
image: #"post-assets/2021-01-12-embedded-tutorial"
category: programming
tags:  python Jupyter binder webdev tutorial
assets: "post-assets/2021-01-12-embedded-tutorial"
published: true
---

Some time ago, as I was working through the fast.ai course, one of the mini-projects ended with a suggestion to serve the classifier to the general public.
The suggested route, being hosted on binder.org and serving the `jupyter` notebook directly or through `voila`, was quite good, and easy to do. Voila particularly made the page quite elegant and presentable.
However, the method did __not play nice__ when embedding it in your own website. After pulling my hair out for a bit I finally got it working with `nbinteract` and thought I'd share the steps as a short tutorial for the rest of the world.


## The issue with directly embedding
Assuming you have been following the fast.ai course. You now have a model, hosted on binder.org. Naively you might think that you can just embedded that output into an `iframe` tag and call it a day, however if we try that right here you can see the website is not displayed, whilst going directly to the website works totally fine:



The issue here is Cross-Origin protection mechanisms within both `Jupyter` and `voila`. The page service itself does not like to be serving for a given domain, but be displayed through another domain, in this case the fact that the Jupyter notebook is hosted and serving at `https://binder.org` is at odds with it then being also displayed within a page hosted at `https://felixdmr.com`. There's some __good__ security reasons for this but I will leave that to experts to explain. These security features are easily removed if you have full configuration control over [Jupyter](https://testnb.readthedocs.io/en/stable/config.html#options) or [voila](https://github.com/voila-dashboards/voila/issues/609), however even though binder.org allows some configuration to your hosted notebook, it seems to ignore these options. The following text saved as `jupyter_config.json` in the root folder worked fine for example:

```
{
  "VoilaConfiguration": {
    "theme": "dark"
  }
}
```

The easiest way around this is to just host your own Jupyter server on the same network/device as your website, but I use the built-in `Jekyll` functionality from Github, so no dice.

## nbinteract to the rescue
So Jupyter refuses to be embedded...this is where `nbinteract` comes in. Jupyter is really a webserver that serves a interactive webpage, the notebook, which it then connects to an interactive python kernel that it spawns and hosts. `nbinteract` is a pre-made static website with some JavaScript that connects to the interactive python kernel spawned and hosted on another server/service. The python kernel itself is connected via websockets and thus does not care what domain/server it is hosted on.

In practical terms, with a given notebook on a github repo, the `nbinteract` conversion process creates a binder.org hosted Jupyter instance, and static website which has the right widgets and display. When the website is loaded, the JavaScript will automatically trigger the Jupyter instance to load, and connect to the kernel it spawns, bypassing the usual Jupyter frontend.

The downside to this process is that its not a true notebook, any interactive processes need to be exposed by the JavaScript, and for now that is limited to `ipywidget` functionality. The upside is that that covers almost all your interactive needs and now you can serve the page from wherever you want, whilst binder.org hosts the instance.

{% assign img_array = "1.png|2.png|3.png" | split: "|" %}

{% assign caption_array = "As intended, if you click on the binder link, it takes you to the Jupyter notebook within the binder domain.|By passing the webpage as a `iframe` Jupyter sees the mismatch in domain and refuses the connection|nbinteract simply bypasses the Jupyter service and connects to the python kernel it spawned." | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}

Please excuse the terrible drawings.

## Converting notebooks
For a generalised tutorial of how to use `nbinteract` I recommend [this blog post](https://elc.github.io/posts/embed-interactive-notebooks/), for the specific steps I did for the fast.ai app, keep reading.

I assume you have just [finished the section on "deploying your app" in Chapter 2](https://github.com/fastai/fastbook/blob/master/02_production.ipynb)(or 30mins into the [video lesson 3](https://course.fast.ai/videos/?lesson=3)), you've gone through the challenges of getting the dependencies right and now have a working app on binder. Now the best way is to perform the conversion directly in

1. Install nbinteract

## How to make it work with Fast.ai
Now you might be able to host and embed simple notebooks


## Supply? What Supply?


## It finally (mostly) arrived!


## Credit and links
- binder
- tutorial chap
