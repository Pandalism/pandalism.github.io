---
layout: post
title: "Starting project bloodhound"
image: "post-assets/2020-11-22-starting-project-bloodhound/bot_baby_steps.png"
category: technology
subcategory: domotics
tags:  NAS SQL telegram bloodhound
assets: "post-assets/2020-11-22-starting-project-bloodhound"
published: true
---

Last weekend, I started thinking and playing with the idea of moving some of the metric trackers I use into SQL. Whilst in the process, my mind started getting ahead of myself as per usual and the idea kind of evolved into just making the actual tracking itself easier, maybe through something that we use every day... like a phone messenger app! Thus the birth of Bloodhound, my metric tracking project interfaced via a Telegram Bot.

## What?
Roughly speaking there are two independent groups of metrics I keep track of religiously, metrics relating to my personal health, and metrics relating to my vehicle and CO2 output.
Personal metrics include weight, hours slept, routines completed, etc. Vehicle and CO2 is mostly metrics on fuel usage per vehicle and Utilities consumption. All in all, it can take a bit of time to make sure its all annotated and if I am in a rush in the morning I can quickly forget, leaving gaps in the data.

Thus I think facilitating this tracking via a personalised messenger bot would help greatly in reducing time spent in managing the metrics, and be quite a good practice opportunity. There is also the psychological aspect of being reminded to do routines when asked by a third party, which I hope means I will stick to them better and finally start doing those morning push ups I so happily ignore.

{% assign img_array = "co2_tables.png|health_tables.png" | split: "|" %}

{% assign caption_array = "Example of the current status of my CO2 tracking tables|Current status of my health tracking tables, mind you I haven't really gone through any of the recommended normalisation steps as this is work in progress" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}

## The general concept
In summary, I envision a chatbot which asks me for my weight every morning and if I did my morning exercise, noting it and uploading it to the right SQL table, at the same time my interaction with the bot will trigger an API call to fitbit and try to pull my sleep hours, including bed time and wake up time, prompting me to confirm the results seem correct or not. From there there will be various other prompts listed throughout the day to ask about other metrics to follow, all being saved into the correct table in the SQL server.

Independently after refueling I want to be able to take a picture of the vehicle dashboard and fuel receipt and share it with the bot, triggering a lightweight classifier to categorise what image it is, and store it in the correct file structure. In the same action or possibly later It'll extracting the mileage from the vehicle dashboard, and fuel bought and price from the subsequent receipt. This was already a project I started doing many ages ago in matlab which would extract such data, just the receipts never worked well as I was sort of brute forcing OCR on to it and estimating what looked like the right portions. The receipt reading will certainly be a challenge. On a similar note I'd like to be able to upload images of my utilities and get the information extracted automatically, but as that is a rare occurrence its not that important.

The final step in all of this would be to be able to use the chat bot to create visualisations and present them on demand to me, as well as letting me edit and correct the sql entries. Nonetheless I'm getting ahead of myself here.

## Getting a working Telegram bot
Getting a "Hello world" telegram bot working was quite trivial using the python API, and I have to commend Telegram and the maintainers of telegram-python-api on the simplicity of it all. Once running some experimentation with the system showed me a couple of points:
- The bot will only capture messages/commands if the handlers are set up for it (there is a wildcard handler however)
- The bot will only function whilst the python connection is open, if closed it will not respond nor save messages for later for when the system is up again. It is not hosted on the telegram API servers, it merely inserts the hooks and handler prompts.
- The methods need to be loaded every time a connection is made after closing it, however you don't have to do that if the conneciton is maintained but the polling is stopped.

{% include img.html assetsFolder=page.assets link='bot_baby_steps.png' caption="Baby steps" %}

I then set up a dummy Good morning! prompt asking for weight and passed that on into a dummy sqlite table, which...didn't work. Turns out SQLite doesn't like being called from a different thread from where the connection was established, but after turning off thread safety with `check_same_thread=False` it worked just fine. I'll have to see if that will be an issue later on with different SQL flavours...

{% include img.html assetsFolder=page.assets link='sql_works.png' caption="Making sure that it was capturing non-valid inputs and properly inserting into the sql table." %}


## Working with the images
Next step was to experiment with loading images, saving/manipulating them and sending them back, to better understand the formatting and compression applied, if any. For this I just implemented a image flip echo, and tested with images done in the moment and saved photos being shared.

{% include img.html assetsFolder=page.assets link='image_flip.png' caption="Testing with receiveing and sending images" %}

Images sent through the app ended up being 720 pixels by 1280 pixels and about 150kb in size, regardless of the origin of the image, additionally the EXIF data was scrubbed. That's not great quality so I am a bit worried if this can affect higher levels of information extraction later on. Will have to see.

## Next steps
Overall a good start, but there's still much further to go:
- Set up python/docker environment on NAS to test actual deployment of any apps
- Set up real sql server to use from now on
- Experiment more with scheduled messages and conversation flows
- Start making a simple classifier and testing it on the images I already have
- Try to find ways for the bot to react to the user going online
- Lock the bot to only respond to my personal user
- Figure out if there are any api server limitations which force me to deploy my own API server
- Upload a general diagram of api-telegram-sql interactions to the blog

And just keep progressing!


## Credit and Further links
- https://github.com/Gondolav/catify-my-face-bot/
- https://core.telegram.org/bots/api#using-a-local-bot-api-server
