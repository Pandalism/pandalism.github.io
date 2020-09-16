---
layout: post
title: "Blog"
category: life
assets: page-assets/projects/blog
startdate:
enddate: none
image: page-assets/projects/gdp-bike/banner.jpg
tag: blog
---

Probably one of my first projects, ever! I started thinking of making one back in 2006, always interested in starting from very scratch...but then went nowhere with it, revived the idea again in 2010ish and 2013ish, even buying domain names and hosting...but again barely made any progress. Then finally I fully committed in late 2018, and after some tutorials and a lot of stubbing my toes on issues, the first version was released in early 2019.

## Evolution
I think its particularly interesting that looking back at the previous attempts, I was clearly guided by the technology at the time, showing how web development has just changed **so much**. The first attempt used *CSS tables* to organise the frontend, simple in theory, but nightmareish in practice and ugly to boot. Even using *iframes* to separate the article side and navigation bar *shudders*.

The other attempts dipped their toes into flash websites (remember those?) and even looking at scratch built php backends, or php based solutions like wordpress, but honestly most of the time they weren't what I was looking for and I would quickly get distracted by real life.

## Jekyll implementation
This latest blog is based on Jekyll, [a static website generator](), which basically means it uses some variables, sets of rules and basic scripting language to take raw posts and build a static website. This merges some of the benefits of managing content on dynamic websites with the simplicity of not having databases and server-side scripting. You generate the website once every update and upload it to a simple host. Simple, lightweight and fit for purpose in a blog like enviroment. A real positive factor was that github-pages allows for jekyll publishing for free too, integrating version control, webpage hosting and jekyll site generation all in one!

## Stubornness be damned
Obviously part of the reason I wanted to make my own blog was always the challenge and learning that the journey would take. Understanding web development

## Technologies Used
- HTML, CSS and JavaScript
- Jekyll and liquid
- Git



## Credits
blah


{% if page.tag %}
## Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
