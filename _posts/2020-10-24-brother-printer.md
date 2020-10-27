---
layout: post
title: "Adding an unsupported Brother printer to Synology"
image: "post-assets/2020-10-24-brother-printer/IMG_8821.JPG"
category: technology
subcategory: domotics
tags:  microserver NAS docker  
assets: "post-assets/2020-10-24-brother-printer"
published: true
---

In overhauling the network I decided to give away an old HP 1022 laserjet and install a newer Brother HL-1110 that I had hanging around, but whilst the HP 1022 worked fine with DSM's printer integration, Synology had dropped support for the whole feature some time ago and the newer printer was not supported. In addition the printer would only print once and then stop printing.
This is how I resolved it using Docker and a container with CUPS.

### Script
{% assign img_array = "printer.jpg|IMG_8821.JPG" | split: "|" %}

{% assign caption_array = "Old bulky beige printer|Newer HL-1110 in the network corner" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=1 %}

For us to run our own CUPS server we need to stop Synology's own implementation of it, find where the printer is connected, pass it into a docker container running CUPS and sharing out the printer, and then setting it up.

The basic premise of all this comes from [theghostbit's post on his similar struggles back in 2016](http://www.theghostbit.com/2016/10/setting-up-cups-server-with-docker-on.html). Now sadly in these 4 years various things have changed so here is my start up script now:

```bash
!/bin/sh

# Stop CUPSD if it is running
echo "Stopping cupsd on Synology..."
synoservicecfg --hard-stop cupsd
synoservicecfg --hard-stop cups-lpd

# Get Printer location
echo "Getting printer info..."
LOC=$(lsusb|grep Brother|awk '{print $1}')
PRINTER="/dev/bus/usb/00${LOC:3:1}/00$((${LOC:5:1}))"
echo $PRINTER

# Wait a bit until docker is up and running
sleep 10s

# Stop Container
echo "Stopping current container..."
docker kill cups-server
docker rm cups-server

# Run Docker
echo "Running container..."
containerID=$(docker run -d -p 631:631 --name cups-server --net=host \
  --device=$PRINTER -v /volume1/docker/cups/:/etc/cups olbat/cupsd)
echo $containerID

echo "Done!"

exit 0
```

The deviations from the aforementioned post were:
- Updated to a [newer container](registry.hub.docker.com/r/olbat/cupsd) made by the same person, _olbat_.
- Getting rid of the absolute paths for executables (the docker one no longer worked for example).
- Also stopping cups-lpd service, which I just added whilst debugging but seemed to not break anything.
- Rewrite the logic in pulling the printer address, since now `lsusb` was outputting quite a different format.
- Add a sleep timer, which might seem silly but for whatever reason stopped all the issues with docker starting up.
- removed the logic to start any script to install drivers, why? Because olbat's new container had some community drivers already included!

### Configuration and persistence
Now this script was correctly finding the printer but wouldn't start without removing the volume binding to the `/etc/cups` folder. It seemed like the docker didn't like to initialise the folder if it was empty. At the same time without said binding, every reset it was forgetting the configuration and I would have to go and manually setup the printer. Seemed like the container didn't like to be persistent

I was about to go through the pain of setting up a similar startup script to what _theghostbit_ had, but found the lovely `docker cp` command which lets you copy files in and out of container boundaries!

With that, I initiated the container the first time with no volume binding and then used:
```bash
sudo docker cp containerID:/etc/cups/ /volume1/docker
```
Then stopped the container, set the volume bindings as above, and it worked great on every startup, through multiple resets. After that it was just getting the printer page address (in my case `localip:631/printers/HL-1110`), and passing that to the windows printer setup location, selected the drivers, and it all worked easily.

{% assign img_array = "printer-config1.png|printer-config2.png|printer-config3.png|save-config.png" | split: "|" %}

{% assign caption_array = "On first run just need to add the printer|Select the right drivers|Setup!|Now copy the configuration out of the container to the folder you want to use for persistence" | split: "|" %}

{% include img_slide.html assetsFolder=page.assets link=img_array caption=caption_array showindex=2 %}

### Working but ... not really
There was still a very curious thing, which is that the printer would only print once or twice, after startup, and then not print again until I would press the power button on the device itself. In addition the printer would then fall out of `lsusb` as if disconnected or turned off. Now the only reason I wanted to add the printer to the NAS is so I wouldnt have to deal with cables, plugging in and and turning things on and off and this was clearly ruining that.

Embarrassingly long story short, it was. After much googling and searching and dissecting forums about community drivers and what not, turns out the auto-power off wasn't a unique linux feature, it just happens that by default the printer would properly turn off after 2 hours of inactivity. This couldn't be changed via normal configuration options and instead needed a special program jokingly called [Remote Printer Console](https://support.brother.com/g/b/downloadlist.aspx?c=eu_ot&lang=en&prod=hl1110_us_eu_as&os=93&dlid=dlf004873_000&type3=62), which neither worked remotely nor looked like any console or anything. So installed on the windows laptop and hooked up directly to the printer, I pulled the settings, changed the auto-power off and saved the settings.

{% include img.html assetsFolder=page.assets link='printer.png' caption="Silly option which was ruining my weekend" %}

### Conclusion
Et Voila! It works perfectly now, starts up everytime, let's me do duplex printing with ease, is a much more discrete black, and consumes a measly 0.2W in idle (vs the 4W the HP 1022 was siphoning, ~£7 a year).

### Credit
- [theghostbit's post on his similar struggles back in 2016](http://www.theghostbit.com/2016/10/setting-up-cups-server-with-docker-on.html)
- [olbat's new cupsd container](registry.hub.docker.com/r/olbat/cupsd)
