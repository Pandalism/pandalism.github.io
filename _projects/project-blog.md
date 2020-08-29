---
layout: post
title: "Blog"
category: life
assets: page-assets/projects/blog
startdate:
enddate: none
img: page-assets/projects/blog/header.jpg
tag: blog
---

## Introduction
hello intro
## Details
good by Introduction

## Credits
blah


{% if page.tag %}
## Posts
{% include taggedposts.html tag=page.tag %}

{% endif %}
