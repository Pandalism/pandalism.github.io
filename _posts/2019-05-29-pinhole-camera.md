---
layout: post
title: "Pinhole camera mini-project"
image: "post-assets/2019-05-29-pinhole-camera/7.jpg"
category: creativity
subcategory: photography
letterhead-icon: post-assets/2019-05-29-pinhole-camera
tags: photography mini-project
assets: "post-assets/2019-05-29-pinhole-camera"
published: true
---

Photography in general is a fascinating subject, the science behind it all is pretty crazy, so when I came across an [article on how to turn your DSLR into a pinhole camera](http://neiloseman.com/making-a-pinhole-attachment-for-an-slr/), I naturally obliged.

### Pinhole Photography

The principle of using a pinhole as a lens is quite old, often associated with the old lensless [_Camera Obscuras_](https://en.wikipedia.org/wiki/Camera_obscura) (clear origin of calling cameras...well, cameras) throughout antiquity. More recently, however, its seen a small blip of resurgence amongst the artsy. I'm not gonna go deep into how it works, as [Wikipedia](https://en.wikipedia.org/wiki/Pinhole_camera) does a good job of starting that, however the main 'components' of a pinhole camera are:
- A minute aperture
- Blacked out interior box interior.
- Film/sensor/translucent paper on which the image is projected.

The 'features' on the other hand are:
- super long apertures, due to the tiny aperture letting in very little light
- an extremely large depth of focus
- A characteristic softness and vignetting.

{% include imgext.html img='https://axiswebmedia.blob.core.windows.net/www/usermedia/108409/Events/0/39vapuqqkkesewiy4tje3g_large.jpg' caption="Example of a photo with a pinhole camera" link=1 %}

Notice the long exposure, and thus the dynamic blurring, overall softness, but that the objects in the foreground as in focus as the background.

### First attempt

Following the article, I dented a piece of thin steel I had, sanded down until I had a tiny hole, and done! Stuck it to the outside of a spare body cap in which I had drilled a hole and started shooting.

{% assign img_array = "1.jpg|2.jpg" | split: "|" %}

{% assign caption_array = "Ignore the griminess|Inside of the lens cap" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}


The first pictures were quite a lot more zoomed in than I expected and a hell of a lot blurrier, even after reading all about how blurry it was going to be. But even in the dark messiness I was pleased.

{% assign img_array = "3.jpg|6.jpg|5.jpg" | split: "|" %}

{% assign caption_array = "Even 5 second exposures weren't enough|Seriously long exposures at relatively high ISO|Dialing in the exposure was a lot of trial and error" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

### Second attempt
I figured that most of the blurriness was coming from the misshaped pinhole (since the smash and sand method didn't seem the most precise) and the size of the pinhole itself. So I tried to make a smaller, yet rounder, hole. Luckily I found a 0.45mm drill bit and used that to finish another pinhole I made.

{% assign img_array = "8.jpg|9.jpg|10.jpg|11.jpg" | split: "|" %}

{% assign caption_array = "Second attempt to the left, ~0.5mm. The first is around ~0.7mm|This time I attached it to the inside of the cap|Still pretty blurry|But notice how both the car and the box are equally in focus!" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=3 %}

### Third attempt
Even though by now I had read more about the importance of the hole precision, the inner box reflections and all the other aspects of proper positioning and diffraction, I was aiming to achieve the 0.3mm hole which in theory was the ideal for a camera with 44mm flange distance and APS-C sized sensor (according to [Mr.Pinhole](http://mrpinhole.com/wiz.php)). This time I went back to the dent and sand method.


{% assign img_array = "12.jpg|13.jpg|14.jpg" | split: "|" %}

{% assign caption_array = "Barely notice the difference, but it is slightly smaller|Still quite blurry, but somewhat interesting artefacting going on|To be honest at this point this feels like macro photography" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=4 %}






### After thoughts
So, if you read a [lot](https://en.wikipedia.org/wiki/Pinhole_camera#Selection_of_pinhole_size) [more](https://www.cambridgeincolour.com/tutorials/diffraction-photography.htm), it turns out smaller pinholes aren't going to be more in focus either. So if I were to continue with this in the future I think I'd focus on going out and trying to take my time and build a film box, like in this [instructable](https://www.instructables.com/id/Design-and-Build-your-own-Pinhole-Camera/). And/Or 3D print an adapter to hold shims, all painted black and taking great care in making the holes in the shim precise and offset to the correct positions. I think I could achieve much nicer photos like that.

However already this was meant to be a 20min project which spiralled a little out of control, and primarily I should just go outside and try it out in the field, so i'll just have to do as they say:

> Embrace the blurriness

### Credit
[Original tutorial](http://neiloseman.com/making-a-pinhole-attachment-for-an-slr/)

[Mr. pinhole guides](http://mrpinhole.com/wiz.php)


[f/256: Tips for Digital Pinhole Photographs](https://www.bhphotovideo.com/explora/photography/tips-and-solutions/f256-tips-for-digital-pinhole-photographs)

[How to make a film pinhole camera](https://www.instructables.com/id/Design-and-Build-your-own-Pinhole-Camera/)
