---
layout: post
title: "I might have impulse bought a microserver"
image: "post-assets/2019-11-06-parametric-involute-gears/printed-gears.jpg"
category: technology
subcategory: 3d-printing
tags:  3d-printing CAD solidworks download
assets: "post-assets/2020-06-27-i-impulse-bought-a-server"
published: false
---

Its always been a minor goal of mine to run my own server. This week I finally cracked and bought one, probably for all the wrong reasons.

## The Trigger

Transferring files to my NAS drive for the umpteenth time in my life, I stared as the file transfer bar so slowly crept across the window, a measly 8MB/s at a time, mocking me as the estimated time to completion hovered around 5 hours, whilst the computer clock showed 11pm on a Tuesday night. No! I would not take this any longer. In a world of gigabit internet and cheap 10tb drives, I was done with this crappy Synology box which stuttered if I even looked at it wrong, which failed to work as a proper plex server, and which now dragged through this file transfer at a laughable pace.

insert picture of sloooow transfer

It was time to look into something better.

## A Classic

First thing I thought was of the HP microservers, they always seemed like good bang for buck, and it had been many years since I last looked at them, surely the Gen10 releases would have gone down in price by now?

Well... No. Not really, they were still +£400, +£600 if you wanted anything powerful, and after more research turns out that HP majorly messed up with this generation of microservers as they weren't really user-servicable, the AMD processors appeared anaemic (Opteron X3216, X3418, X3421) and were soldered on, with little to no upgradeability. The Gen10 Plus was a much better option, back to socketed intel processors and a slightly more compact, yet still familiar form factor. Nevertheless, being just released they are pretty expensive, [~£730 for the xeon version](https://www.ebuyer.com/964560-hpe-proliant-microserver-gen10-plus-performance-ultra-micro-tower-xeon-p18584-421).

Well the old Gen8 would be dirt cheap then right? I remembered when ebuyer was practically giving them away with HPE cashback that ended up being (£120 for the basic unit)[post-assets/2020-06-27-i-impulse-bought-a-server/gen8_was_cheap.png]. But no, somehow, maybe due to the colossal let down that was gen10, server hardware had somehow APPRECIATED IN VALUE! Now looking more like £270 for the base price, and some units selling for £350. Insane.

{% include img.html assetsFolder=page.assets link='gen8_ebay.png' caption="Gen8 Microservers recently sold on Ebay" %}

Well after much reading and googling on the topic, I was convinced, I was going to buy the very server I had passed on 4 years ago. To my surprise saw one going reasonably cheap (£170), and I just went for it.

## What am I really doing

Buying 5 year old server equipment? Uff, it was a hard pill to swallow, and all because I was a bit miffed at my current NAS drive's capabilities.

... but what if it wasn't the NAS which led to slow transfer speeds? What if I'm an idiot?

> "What if I'm an idiot?" - My dumb dumb self

I quickly disconnected the powerline adapter and let my computer connect via wireless (2.5ghz). But the transfer speeds fell to less than 1MB/s. Hmm, not content I ran and got the longest ethernet cable I had and wired it from my living room all the way to the other corner of the house, and boom, on direct copper, **I was now seeing 100MB/s transfer speeds**. I didn't need a new NAS, I needed to throw the powerline adapters out of the window.

{% include img.html assetsFolder=page.assets link='gen8_ebay.png' caption="Proof of my silliness." %}

But alas the server was ordered, and it would be a fun new project so I waited, excited at the thought of tinkering with my network again after so many years, excited at the possibilities of virtualisation on the server, maybe some offloading for Machine Learning tasks, or as a remote Matlab job handler? Nonetheless those small happy thoughts were dashed when it finally arrived, wrapped in nothing else but a Weetabix box.

{% include img.html assetsFolder=page.assets link='but_why.jpg' caption="Who thinks this is even remotely reasonable?" %}

So clearly that had to be returned. No way was I accepting what was potentially a big bag of metal bits jumbled to high hell by the UPS centre...


A reasonable person would take this as a sign that maybe, I don't need a server and maybe I should put these thoughts to sleep.

## Screw it buying it anyways

But that person is not me. My eBay Saved Searches alerted me to a suspiciously cheap listing, £104, no bids, and I kept an eye on it; examining it for reasons as to why it would be so cheap compared to all the other listings. Alas, I think the only reason was because the seller forgot to add the "Gen8" qualifier to the title, and thus it received no attention. After a successful bidding war against no one, its now sitting in my living room, waiting to be tinkered with!



{% include download.html link="https://1drv.ms/u/s!Amgx-OdgW8vIiNB691RvYYWjZLcf8g?e=tKCVzA" filetype="cad" name="Parametric_Gear_Export.SLDPRT" %}

Bought some 16gb RAM, bought 3x14TB drives, and a E3-1260L CPU..



## Conclusions

 - Sometimes you just want something and you will justify it anyway you want, but really, you just have to admit theres no rational reason why you want it; and thats OK.
 - Optimise before looking to buy something better. I see this often in the automotive world where suppliers are more than happy to just add more processing power when really, they should be looking at optimising the code. (OEM pays so who cares, right?)
 - Ask online sellers to please wrap up a server with more than a cereal box.

Alas, Felix out.
