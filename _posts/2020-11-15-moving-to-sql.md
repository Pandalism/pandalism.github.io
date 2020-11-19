---
layout: post
title: "Starting to move my trackers into SQL"
image: "post-assets/2020-11-15-moving-to-sql/tables_rethink_2.png"
category: technology
subcategory: domotics
tags:  nas sqlite mariadb sql
assets: "post-assets/2020-11-15-moving-to-sql"
published: false
---

I track quite a lot of weird, trivial metrics in my life. This includes some personal aspects (mood, sleeping hours, weight, etc) and also general CO2 related energy usage and vehicle use. At first I was storing the data in a simple excel, but it started becoming unwieldy and I split it up into different files, with some interconnects as needed. Now its become again an unwieldy beast and difficult to interact with, so I've decided to stop running from the fact it should just have been in a proper database from the get go. I've decided to try and migrate it all to a SQL server, although as per usual, this is just a general idea and I'll see where we end up!

## Vehicle fuel tracking
To start with I thought of moving across the couple of excels related to my vehicles and fuel receipts!
Since there is a lockdown on-going, the data isnt actually going to get updated often and so I can play with it whilst I figure out how this whole project is going to look.

The great part about this data, is that I have quite a bit of historic data from multiple vehicles, as well as images of receipts and odometers, and it ties in nicely with my current CO2 tracking which I do manually copy and pasting information.

{% assign img_array = "example_1.png|example_2.png|example_3.png" | split: "|" %}

{% assign caption_array = "I am not joking when I say I like to keep stats on my vehicles|Lots of fuel receipt data already uploaded|and pictures for when I get around to using computer vision for automating data collection" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}



## SQLite experiments
To get into the flow, I just started playing with a local SQLite instance, I felt this was easier than going straight into the MariaDB since at first I was already getting issues just connecting.
I also used dbdiagram.io to map the tables as I was working on them, it might seem silly for something so simple, but I thought it was a good habit for when the complexity inevitably arises integrating with other tables.

{% include img.html assetsFolder=page.assets link='init_tables.png' caption="Simple tables" %}

At first I thought I could get away with just having two tables, one for receipts, one for vehicles. But then the input checks were starting to look unwieldy and figured it might be better to use extra tables for vehicle_status, and fuel_type. The latter plays well with later adding CO2 impact as an extra column. A couple of things I did avoid at this stage was doing input checks on Dates, Reg plate and vehicle type, although I might revisit that later.

{% include img.html assetsFolder=page.assets link='tables_rethink_2.png' caption="Adding more tables and connections" %}

{% assign img_array = "tables_rethink_2.png|working_1.png|working_2.png" | split: "|" %}

{% assign caption_array = "Adding more tables and connections|Building it quickly in SQLite|Making sure it was working correctly" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

## Setting up MariaDB on the NAS

## Uploading initial tables

## Conclusion
Whilst I'm happy with this first step, there is still much work to do before I start migrating to using the database entirely. Nonetheless, I am already getting ahead of myself thinking up of the projects which will make use of it:
 - Automated uploading images to extract fuel receipt information and vehicle dashboard
 - Grafana integration alongside the NAS/Network information (post still in the works for that)
 - Automated maintenance alerts (something I will still use Excel to track for now)
 - Automated "costs of life" outputs extracting the costs of maintaining, fueling, and purchasing vehicles per mile and in total
 - Automated input into CO2 output estimation
 -

## Credit and Further links
