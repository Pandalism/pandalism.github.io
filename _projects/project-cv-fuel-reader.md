---
layout: page
title: "Automated fuel use tracking"
category: motorcycles
assets: page-assets/projects/cv-fuel-reader
startdate:
enddate:
image: page-assets/projects/cv-fuel-reader/banner.png
published: true
---

Little known fact, I am somewhat obsessed with tracking many aspects of my life, including my fuel use and mileage in my multiple vehicles. This obviously means that there's is quite a bit of overhead in writing details down, taking pictures of the receipts, writing it up on an excel, etc. To fix this, I tried automating it!

{% include img.html assetsFolder=page.assets link='excel.png' caption="...some might consider this pathological" %}'

## Script
The goal here was to be able to send an image of my motorcycle/car dash, along with my fuel receipt to an email, then have a script pull the milleage, date, cost and litres filled from both, and add them to the excel.

For the both what the script was doing was edge and feature matching with template images and transforming the recieved images, then applying OCR in specific areas and trying to read the information of those.

{% include img.html assetsFolder=page.assets link='fuel-tracking.png' caption="Demonstration of how it looked like with the feature detection, transformation and OCR applied" %}'

It... actually worked really well and robustly for the motorcycle dash, and would reliably pull the mileage with no issue; night, day, rain or sunshine. The receipts on the other hand did not work so well, as the feature finding was getting confused and the edge finding was too reliant on the background being acceptably dark. I think it definitely needed revisiting, and using some maybe more modern techniques would help.

I also didn't get far along at the time to be able to automate the processing through received emails (twitter sharing was also a consideration) but it was working great just to do some simple batch processing with copy and pasting.


## Conclusion
Sadly, in the middle of all this, I lost all the scripts and work when I lost my laptop, and all that remained was the image above, (incidentally that's what led me to want to build a home network with redundant backups as a keystone feature). Nonetheless, I think the project still has legs and I will promptly get back to it once I find time, especially now that I have a dedicated VM/docker platform to be able to run these kinds of scripts in an automated manner.

### Technologies/Skills used
 - Matlab

{% if page.tag %}
### Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
