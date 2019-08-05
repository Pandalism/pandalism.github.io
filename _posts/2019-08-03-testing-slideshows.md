---
layout: post
title: "Slideshow test page"
banner:
category: sustainability
subcategory: co2
tags: sustainability footprint impact
assets: "post-assets/2019-04-22-co2-tracking"
published: false
---

Testing page for slideshow include features


## single image

{% include img.html assetsFolder=page.assets link='excelsheet.png' caption="The excel with 2019 partially filled out" %}

## slideshow
Apparently the mess below is the only way of actually making an array:

{% assign img_array = "excelsheet.png" | split: "|" %}

Then the array is passed on to the include
{% include img_slide.html assetsFolder=page.assets link=img_array caption='Test!' %}
