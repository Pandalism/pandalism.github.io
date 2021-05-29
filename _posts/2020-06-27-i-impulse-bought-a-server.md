---
layout: post
title: "Bought a microserver on impulse"
image: "post-assets/2020-06-27-i-impulse-bought-a-server/banner.jpg"
category: technology
subcategory: electronics
tags:  microserver computer NAS
assets: "post-assets/2020-06-27-i-impulse-bought-a-server"
published: true
---

Its always been a minor goal of mine to run my own server. This week I finally cracked and bought one, probably for all the wrong reasons.

## The Trigger

Transferring files to my NAS (Network Attached Storage) drive for the umpteenth time in my life, I stared as the file transfer bar so slowly crept across the window, a measly 8MB/s at a time, mocking me as the estimated time to completion hovered around 5 hours, whilst the computer clock showed 11pm on a Tuesday night. No! I would not take this any longer. In a world of gigabit internet and cheap 10TB drives, I was done with this sub-par Synology box which stuttered if I even looked at it wrong, which failed to work as a proper plex box, and which now crawled through this file transfer at a laughable pace.

{% include img.html assetsFolder=page.assets link='transfer_speeds.jpg' caption="Not my screen cap, but my level of pain." %}

It was time to look into something better.

## A Classic

First thing I thought was of the classic HP microservers, they always seemed like good value, and it had been many years since I last looked at them. Surely the Gen10 releases would have gone down in price by now?

Well... No. Not really, they were still >£400, >£600 if you wanted anything powerful, and after more research turns out that HP majorly messed up with this generation of microservers as they weren't really user-servicable, the AMD processors appeared anaemic (Opteron X3216, X3418, X3421) and were soldered on, with little to no upgradeability. The Gen10 Plus was a much better option, back to socketed Intel processors and a slightly more compact, yet still familiar form factor. However, being just released they are pretty expensive, [~£730 for the xeon version](https://www.ebuyer.com/964560-hpe-proliant-microserver-gen10-plus-performance-ultra-micro-tower-xeon-p18584-421).

Well the old Gen8 would be dirt cheap then right? I remembered when ebuyer was practically giving them away with cashback that ended up being [£120 for the basic unit](/{{page.assets}}/gen8_was_cheap.png). But no, somehow, maybe due to the colossal let down that was Gen10, server hardware had actually **_appreciated_ in value**! Now looking more like £270 for the base price, and some units selling for £350. Insane.

{% include img.html assetsFolder=page.assets link='gen8_ebay.png' caption="Gen8 Microservers recently sold on Ebay" %}

After much reading and googling on the topic, my mind was set. I was going to buy the very server I had passed on 4 years ago, at pretty much the same price. To my surprise, I saw one going at an OK price (£170), and I just went for it.

## What am I really trying to do?

Buying 5 year old server equipment? Uff, it was a hard pill to swallow, and all because I was a bit miffed at my current NAS drive's capabilities.

... but what if it wasn't the NAS which led to slow transfer speeds? What if I'm an idiot?

> "What if I'm an idiot?" - Me during a rare moment of introspection

I quickly disconnected the powerline adapter and let my computer connect via wireless (2.5GHz). The transfer speeds fell to less than 1MB/s. Hmm. Not content, I ran and got the longest ethernet cable I had and wired it from my living room all the way to the other corner of the house, and boom, on direct copper, **I was now seeing 100MB/s transfer speeds**. Turns out I didn't need a new NAS, I needed to throw the powerline adapters out of the window.

{% include img.html assetsFolder=page.assets link='more_reasonable.png' caption="Suddenly it feels like 2020" %}

But alas the server was ordered, and it would be a fun new project, so I waited. Making time, I read up on virtualisation, pi-hole ad-blocking, automated download pipelines, running local domotics, etc. the whole spiel.   Many possibilities and new exciting corners to explore, maybe some offloading for Machine Learning tasks, or as a remote Matlab job handler? Yet, those small happy thoughts were dashed when the server finally arrived, wrapped in nothing else but a **Weetabix box**.

{% include img.html assetsFolder=page.assets link='but_why.jpg' caption="Who thinks this is even remotely reasonable?" %}

So clearly that had to be returned. **No way** was I accepting what was potentially a big bag of metal bits jumbled to high hell by the UPS centre...

{% include img.html assetsFolder=page.assets link='package.gif' caption="How I image most of my packages are treated" %}

A reasonable person would take this as a sign that maybe, **I don't need a server, and I should put these thoughts to sleep**.

## In for a penny, in for a pound

But that person is not me. It had gotten into my head that I needed to have my own server. Research had taught me I needed minute control over my NAS, to be able to tinker with it, set up OpenVPN, or a bitcoin node, to install what ever I wanted on it. I mean, I didn't **need** it, but I did *need* it.

Luckily, my eBay Saved Searches alerted me to a suspiciously cheap listing, **£104**, no bids, and I kept an eye on it; examining it for reasons as to why it would be so cheap compared to all the other listings. Alas, I think the only reason was because the seller forgot to add the "Gen8" qualifier to the title.

Long story short, after a successful bidding war against no one, its now sitting in my living room, waiting to be tinkered with! It, again, was improperly packaged and had a big old dent in it, but I'm keeping it, at that price I couldn't complain.

{% include img.html assetsFolder=page.assets link='gen8.jpg' caption="HAL 9000" %}

I immediately bought some 16GB ram and an E3-1260L to swap in for another £80. This brings it on par with the cpu in the Gen10 Plus (Base: G5420) and above the best you could get with Gen10 (X3421), at about half the price.
Also managed to get a proper steal on harddrives and have three 14TB drives incoming. I can't wait to get around to playing with FreeNAS, or Proxmox or whatever comes out of this!

{% include img.html assetsFolder=page.assets link='processor_comparison.png' caption="HAL 9000" %}

## Conclusions

 - Sometimes you just want something and you will justify it anyway you want, but really, you just have to admit there's no rational reason why you want it; and that is OK.
 - Optimise before looking to buy something better. I see this often in the automotive world where suppliers are more than happy to just add more processing power when really, they should be looking at optimising the code. (OEM pays so who cares, right?)
 - Ask online sellers to please wrap up a server with *more* than a **cereal box**.
