---
layout: post
title: "Snippets: Adding Anaconda Prompt to your context menu"
image: "post-assets/2021-01-18-add-conda-shell/context.png"
category: programming
tags: batch utilities
assets: "post-assets/2021-01-18-add-conda-shell"
published: true
---

Quick batch file to add the "Anaconda Prompt" as an options on right click in windows. Opening the prompt directly into the directory you need. This should work for windows 10.

## Use and download
Simply open the `.bat` file and change the `set conda_location=` variable to the root folder of your anaconda installation. As you may understand from the script, in my case its a portable installation of Miniconda. For most it will be under `%%USERPROFILE%%\Anaconda3`, but just set it to whatever you need and run as admin. Note this is only checked that it works with windows 10, and is taken from a stackoverflow snippet with some minor edits to run properly.

{% include download.html link="https://1drv.ms/u/s!Amgx-OdgW8vIif8z9upXU-2g4X7IUw?e=PtDOyo" filetype="bat" name="Add_Conda_to_Shell"%}

{% include download.html link="https://1drv.ms/u/s!Amgx-OdgW8vIif8018_TGl32geiubA?e=NyILY4" filetype="bat" name="Undo_Add_Conda_to_Shell"%}

{% include img.html assetsFolder=page.assets link='context.png' caption="Added to the context menu" %}

### Credit
- [stackoverflow snippet](https://stackoverflow.com/questions/46662881/adding-open-anaconda-prompt-here-to-context-menu-windows/51282840#51282840)
