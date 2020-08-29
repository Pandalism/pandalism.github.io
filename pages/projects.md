---
layout: page
title: "Projects"
category: life
permalink: /projects/
assets: page-assets/projects
---

# Projects

A selection of various projects I was involved with or started over the years

{% for project in site.projects %}
  {{ project.title }}
  {{ project.img }}
  {{ project.excerpt}}
{% endfor %}
