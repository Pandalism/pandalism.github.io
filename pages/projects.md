---
layout: page
title: "Projects"
category: life
permalink: /projects/
assets: page-assets/projects
---

A selection of various projects I was involved with or started over the years.

{% for project in site.projects %}
### [{{ project.title }}]({{site.url}}{{ project.url }})
{{project.excerpt}}
<!-- {{project.image | absolute_url}} -->
{% endfor %}
