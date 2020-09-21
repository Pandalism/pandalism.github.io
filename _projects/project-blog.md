---
layout: post
title: "Jekyll-based Blog"
category: life
assets: page-assets/projects/blog
startdate: 2018-08-25
enddate: none
image: page-assets/projects/blog/splash.gif
tag: blog
published: True
---

Probably one of my first projects, ever! I started thinking of making one back in 2006, always interested in starting from very scratch...but then went nowhere with it, revived the idea again in 2010ish and 2013ish, even buying domain names and hosting...but again barely made any progress. Then finally I fully committed in late 2018, and after some tutorials and a lot of stubbing my toes on issues, the first version was released in early 2019.

## Evolution
I think its particularly interesting that looking back at the previous attempts, I was clearly guided by the technology at the time, showing how web development has just changed **so much**. The first attempt used *CSS tables* to organise the frontend, simple in theory, but nightmareish in practice and ugly to boot. Even using *iframes* to separate the article side and navigation bar *shudders*.

The other attempts dipped their toes into flash websites (remember those?) and even looking at scratch built php backends, or php based solutions like wordpress, but honestly most of the time they weren't what I was looking for and I would quickly get distracted by real life.


{% assign img_array = "01-iframes.png|2-wireframing.png|3-wireframing.png|4-palettes.png" | split: "|" %}
{% assign caption_array = "Very first attempt with iframes|Most of the other restarts involved lots of wireframing in Red Boxes|I usually just got stuck thinking about layouts|Still, once or twice I had ventured into looking a color palettes and other aspects of design and content management" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array %}

## Jekyll implementation
This latest blog is based on Jekyll, [a static website generator](), which basically means it uses some variables, sets of rules and basic scripting language to take raw posts and build a static website. This merges some of the benefits of managing content on dynamic websites with the simplicity of not having databases and server-side scripting. You generate the website once every update and upload it to a simple host. Simple, lightweight and fit for purpose in a blog like enviroment. A real positive factor was that github-pages allows for jekyll publishing for free too, integrating version control, webpage hosting and jekyll site generation all in one!

{% include img.html assetsFolder=page.assets link='5-base.png' caption='With the aspects of the content management and static generation handled by Jekyll, I actually focused on making an acceptable front-end' %}

## Stubornness be damned
Obviously part of the reason I wanted to make my own blog was always the challenge and learning that the journey would take. Understanding web development and front end would always be useful for *webscraping* and building GUI's using **electron.js**... Actually in reality was I just wanted a solid challenge, and that it was! Unconvinced with using a template, every single line of code in this repo was painstakingly written by yours truly after much research and tutorials consumed.

{% assign img_array = "6-code.png|7-splash.gif|8-social.png|9-slideshow.png|10-comments.png" | split: "|" %}
{% assign caption_array = "Coding the website was a mix of HTML, SCSS, liquid and a little JavaScript|Gaining some inertia I started getting fancy including an interactive splash page|Pretty icons and social media buttons|Slideshows| and even a !omment section (for literally nobody but thats another subject)!" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

This, of course, meant it took way too long, and there are tiny little bugs, with some serious spaghetti CSS... but it was **very rewarding**, and gave me new found appreciation for anyone who can navigate the waters between browser compatibility and trends in web2.0, as its quite frankly nightmarish.

## Current situation
As it stands the blog serves its purpose fantastically, it's a playground for git methodologies, blogging, web development and showcasing work. If I find something I fancy trying I will attempt it on the private server, and if it works integrate it. Sometimes a bit rough, and not exactly the hall mark of fantastic graphic design, but by gosh the Project page has a fancy responsive gallery with hover animations, and of that I am very proud.

For future projects/improvements:
- Refactor and streamline the CSS portions
- Add more projects
- Maybe go through a minor redesign
- Do some JavaScript based exercises, interactive projects, etc.


## Technologies Used
- HTML, CSS and JavaScript
- Jekyll static site generation and liquid scripting
- Git

## Credits
Credit goes out there to the wonderful online communities putting out tutorials, documentation and tips and tricks. More specifically there are usually credits in the individual posts when I roll out something new in the update posts.


{% if page.tag %}
## Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
