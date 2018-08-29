---
layout: post
title: Setting up a headless Raspberry Pi with Teamviewer.
category: domotics
tags: raspberry-pi remote-desktop headless teamviewer guide
published: false
---

I might be projecting, but I believe a large portion of raspberry pi's out there will be currently sitting in their owner's drawers, not doing much at all since the hype around the device has settled down. I thought it would be a great little thing to use as a server for domotics, local websites and what not, so why not put it in a dark little corner and run it headless? And while we are at it, why not have a remote desktop?

Whilst linux allows us unlimited control using just a simple SSH, its sometimes nice to have a remote desktop just to manage files and directorys, and for the rare occasions we might get lost in the terminal. First thing is first, and after looking at the possible solutions, I chose to go with [TeamViewer](https://www.teamviewer.com/en/) for the remote desktop. Alternatives would have been any of the VNC flavours, which are particularly attactive in the face of the hacking, and subsequent mishandling of the situation, which TeamViewer suffered [last year](INSERTLINK). Nonetheless, Teamviewer's ease of setup for remote access from the internet and my general use with it day to day, makes it win here since i'm not too fussed about security at the moment. I hope they are a little more careful now (INSERT EMOTICON). Using VNC is just a little more complicated but you can find out how to set it up [here](insertlink).

### Requirements:
#### Hardware
1. Raspberry Pi (I used a RPi 3 Model B for this).
2. SD card (16gb more than enough space, but higher access speeds are always appeciated in a boot SD card).
3. Power cable and Ethernet cable for the RPi.
4. A normal desktop/laptop, running your usual OS.

#### Software
1. USB boot drive creator, I use [Rufus](https://rufus.akeo.ie/) in windows.
2. Telnet/ssh application, such as [PuTTY](https://www.putty.org/) or [KiTTY](http://www.9bis.net/kitty/).
3. [Teamviewer already installed in your desktop/laptop.](https://www.teamviewer.com/en/)


### Steps
#### Step 1: Create the boot SD card
Download the latest image from ::, then use your usual boot drive creator as usual to load the image on to the SD card and make it bootable. I personally love [Rufus](https://rufus.akeo.ie/) due to its simplicity, portability and speed; alternatives can be [UNetbootin](https://unetbootin.github.io/) and [Universal USB Installer](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/).

#### Step 2: Make sure SSH will run on startup
The main reason for these first steps is to not forget this vital part. The RPi by default will not have SSH running, and we require SSH to be able to access the RPi terminal without using a monitor/keyboard/mouse plugged in. To activate SSH, navigate to your freshly made SD card and place an empty file in the root folder (that's D: in my case), named 'ssh'. The easiest way to do this, in windows anyways, is to make a text file and change the name, making sure to delete the '.txt' at the end. If you can't access the file extension, just go to 'view' in the top bar and make sure 'show known extensions' is ticked.

#### Step 3:
Now just plug in the SD card, power and ethernet cables and watch the lights blink!

#### Step 4:
So xxx kitty xxx,
username: pi
password: raspberry


#### Step 4:
Run the RPi's inbuilt configurator with 'sudo raspi-config', then use option 1 to change pi's password. Even if not directly exposed to the outside internet, keeping the default password is a recipe for disaster.

#### Step 5:
Still in the raspi-config, run '8 Update' the upgrade option to make sure the whole distro is up to date. This is similar to using 'sudo apt-get dist-upgrade' from the comandline

#### Step 6:
Then under '7 Advanced Options', select 'A1 Expand Filesystem'. This will make sure you use up all the space available in the SD card, and not just the 4gb or so that the original boot image had.

#### Step 7:
A kind of mistery step needed here is to set the screen to a large size before going forward. This might have an effect on how it is displayed on physical screens when you have them plugged in so keep it in mind that you might want to revert it in the future. In '7 Advanced Options' again, go to 'A5 Resolution' and select the largest size you'd like to fit in your client's monitors, for me it was 1080p as my screen is larger and i wanted to make the most of the realestate, but the choice is up to you. Then exit the config and let it restart.

#### Step 8:
Hopefully your SSH client will resync after the reboot, if not, just open up the SSH channel like before. Now we download the teamviewer package for Arm devices, such as the RPi, for that we use:

wget -P /home/pi/Downloads https://download.teamviewer.com/download/linux/teamviewer-host_armhf.deb

and then use the dpgk to install the package as such:

sudo apt install /home/pi/Downloads/teamviewer-host_armhf.deb

#### Step 9:
Whilst teamviewer is installed, it still won't run if you simply type teamviewer, as it will rely on the x server to show a GUI and will fail when it realises theres no graphical display.


Initially one could use 'sudo teamviewer setup', log in with your credentials and it would work, however this seems to be bugged in the recent releases thus you need to add the computer manually with the password workaround.
To do this, first find out the teamviewer ID from the installation using:

teamviewer info

Make a note of it. Then set a desired password with:

sudo teamviewer passwd YOUR_PASSWORD

Now in your desktop/laptop, add a remote computer, and use the 'Add remote computer' and fill in the prior details.

#### Step 10:

Now if all went well, you can open up the remote desktop from your teamviewer client!

#### Optional Step 11:

Since we used the ID and password method to setup the remote access, some options such as wake-on-lan won't be available to use until you have fully assigned the RPi to your teamviewer account. To do this simply use the remote desktop to open the teamviewer options inside the RPi and add your details under 'Account Assignment' in the General Settings.

#### note:
Setting up the Raspberry Pi to use WiFi off the bat whilst headless is a little more involved, as you need to specifically change the Raspberry Pi's wpa_supplicant.conf before installing the SD card. An example of this is can be found [here](https://styxit.com/2017/03/14/headless-raspberry-setup.html). I didnt need to do this as the device is going to reside next to the router and ethernet was simply easier for me.


### Credits
 * [Setting up SSH](https://hackernoon.com/raspberry-pi-headless-install-462ccabd75d0) by [James Mackenzie](https://hackernoon.com/@jamesfmackenzie)
 * [ID + Password Method](https://community.teamviewer.com/t5/Linux/TeamViewer-13-for-Ubuntu-16-04-4-LTS-connectivity-problems/td-p/32006) by Digicrat
