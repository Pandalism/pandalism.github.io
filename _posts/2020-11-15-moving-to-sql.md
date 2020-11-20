---
layout: post
title: "Starting to move my trackers into SQL"
image: "post-assets/2020-11-15-moving-to-sql/tables_rethink_2.png"
category: technology
subcategory: domotics
tags:  nas sqlite mariadb sql
assets: "post-assets/2020-11-15-moving-to-sql"
published: true
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

{% assign img_array = "tables_rethink_2.png|working_1.png|working_2.png" | split: "|" %}

{% assign caption_array = "Adding more tables and connections|Building it quickly in SQLite|Making sure it was working correctly" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

## Setting up MariaDB on the NAS
Now I have to say I wasn't particularly leaning on any SQL flavour, but my initial choice would have been PostgreSQL just because it was what I used in the Applied Data Science Course. Nonetheless, playing with the Synology NAS drive I noticed that there was a native app in the Synology App store, and for once I decided to not spin up some docker container, and instead use that. Not sure why I thought it would be easier...

On initial install, the window pops up and makes you write the root password (with some pretty high security requirements to boot) and the port and then... that's it. Its running, in theory.
But alas, even after getting the official MariaDB python connector, every attempt to connect through my local python notebook was being outright rejected. Luckily, per chance I was also SSH'd into the NAS at the same time, and there I tried running a simple python connection and outputting the result to the bash shell, and surprisingly, it worked.

Well clearly it was a permissions issue, and it was only allowing localhost connections. I was a bit stumped here as I hadn't ever delt with managing SQL server permissions before without a GUI, but then it clicked that considering the usual software available in Synology, this was likely meant to be a database for a local website/wordpress; sure enough, I installed PHPmyadmin from the app store, and it asked me for the MariaDB login details, and I could easily add a new user without the localhost restriction.

{% assign img_array = "mariadb.png|mariadb2.png|error.png" | split: "|" %}

{% assign caption_array = "In the app store|Once running|Recreation of the error message I was getting (just with root as user)" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=3 %}

At this stage I started recreating the tables, with the required changes from SQLite to MariaDB, and also making use of some of the extra features like datatypes and what not. Here I hit another snag with the foreign key assignement. Quite frankly the error message was pretty useless and the MariaDB documentation wasn't great in solving it until I found a [dedicated page](mariadb.org/mariadb-innodb-foreign-key-constraint-errors) which recommended querying the underlying engine for latest errors using `SHOW ENGINE INNODB STATUS`. Following the usual pattern, this command failed when executed via the python interface, but did work through the PHPmyadmin website. Finding the issue in inconsistent application of `UNSIGNED` across tables, it was easy to resolve, I had just gotten a bit ambitious trying out features.

{% include img.html assetsFolder=page.assets link='error_2.png' caption="I'm not particularly happy having to ask the underlying engine what the problem was..." %}

## Uploading initial tables
By this stage I have to admit I wasn't particularly impressed and had already decided I was going to experiment more with other database setups (even if MariaDB, just from within a docker) so I didn't upload all the data. Just a couple of rows from some different excels to check the constraints worked reasonably well and that's all. It did make me realise that some of the excels have evolved over time with new vehicles and are ever so slightly different, alas.

{% assign img_array = "mariadb_create.png|confirmation.png|mariadb_pulling.png" | split: "|" %}

{% assign caption_array = "Creating the tables|The good thing about having PHPmyadmin available was confirming the changes executed in a visual manner|Simple exercise to upload and pull data from the database, making sure it was all working and proper errors were thrown if bad data was fed" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=4 %}

## Conclusion
Whilst I'm happy with this first step, there is still much work to do before I start migrating to using the database entirely. Nonetheless, I am already getting ahead of myself thinking up of the projects which will make use of it:
 - Automated uploading images to extract fuel receipt information and vehicle dashboard
 - Grafana integration alongside the NAS/Network information (post still in the works for that)
 - Automated maintenance alerts (something I will still use Excel to track for now)
 - Automated "costs of life" outputs extracting the costs of maintaining, fueling, and purchasing vehicles per mile and in total
 - Automated input into CO2 output estimation
 - Telegram Bot to interact with all of this (I'm particularly excited about this!)

 Really the next step is to try to move it into docker, which I should have done since the beginning, but that is for next weekend I suppose.
