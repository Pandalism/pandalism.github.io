---
layout: post
title: "Independent Slideshows in Jekyll - Tutorial"
image:
category: programming
subcategory: webdev
tags: webdev github-page blog jekyll html slideshows tutorial guide
assets: "post-assets/2019-09-15-slideshow-tut"
published: false
---


As part of my [rolling upgrades to the website](), I had decided to implement a method to easily add image slideshows to any post or page as I type, using the usual ```{% raw %}{% include %}{% endraw %}``` Jekyll command. Im quite happy with the result, so here's how I did it! I admit I am no expert on web development or Jekyll or anything of the sort, but I couldn't find any tutorial when I was making it so here I present my guide. If you see any issues, or minor mistakes, please comment, I am always learning!

## Requirements
Basic requirements were:
- Can insert multiple slideshows in one post
- The page change of one of the slideshows must not affect another
- Minimal amount of Javascript
- Has to be insertable in the blog as a Jekyll include

This meant that the include had to leverage the Liquid language to create independently assigned containers, with a javascript function that could act on multiple containers and keep track of which page it is displaying.

## Include section
The following is the full include section as written:

{% raw %}
```{% assign ind = include.showindex | default: 1 %}


<div class="slideshow-container" id="slide-ind{{ind}}">

  {% for img in include.link %}
    <div class="slideshow-page fade">


      <a href="{{site.url}}/{{include.assetsFolder}}/{{img}}" target="_blank">
        <img src="{{site.url}}/{{include.assetsFolder}}/{{img | replace: '.', '_thumb.'}}"
         alt="{{include.caption}}"
         onerror="if (this.src != '{{site.url}}/{{include.assetsFolder}}/{{include.link}}') this.src = '{{site.url}}/{{include.assetsFolder}}/{{img}}'">


        <em>{{include.caption[forloop.index0]}}</em>


      </a>
    </div>
  {% endfor %}
  <a class="prev" onclick="plusSlides(-1, {{ind}})">&#10094;</a>
  <a class="next" onclick="plusSlides(1, {{ind}})">&#10095;</a>

</div>

<script>
// set initial index
var slideShow{{ind}}Ind = 0;

// collect slideshow-pages within slideshow container
var slideShow{{ind}}Elements = Array.from(document.getElementById('slide-ind{{ind}}').children);
// remove the references to the previous and next arrows
slideShow{{ind}}Elements.pop();
slideShow{{ind}}Elements.pop();

// get overall length
var slideShow{{ind}}Length = slideShow{{ind}}Elements.length;
// set first slide to visible
changeSlideShowPage(0, {{ind}})

</script> ```
{% endraw %}

It assumes
