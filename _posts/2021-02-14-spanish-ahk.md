---
layout: post
title: "Spanishisation by Script: Adding Ñ and other letters to unsupported keyboards"
image: "post-assets/2021-02-14-spanish-ahk/banner.png"
category: programming
tags: utilities autohotkey
assets: "post-assets/2021-02-14-spanish-ahk"
published: true
---

Common issue when typing in non-english languages is that not all the letters are easily accessible. Whilst porting over some of my utility scripts I thought I might as well publish this Autohotkey snippet which lets me use ñ, á, é, í, ó, ú and ü in a very quick and intuitive way with a British keyboard.

## Autohotkey Script
[As previously mentioned]({% post_url 2016-03-08-page-turner %}), AHK is a rather old event driven scripting language, a little rough around the edges, and sometimes severely abused into [being used for programs where maybe something else would be better](https://www.autohotkey.com/boards/viewtopic.php?t=1694). However, as the name implies it does hotkeys and hotstrings incredibly well, and it has no rival for it. On to the script!

```
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

; following two hotstrings will replace nhx into ñ, in caps too.
; n ñ Ñ
:C?*:nhx::
	Send {U+00F1}
  ToolTip, ñ
	Return

:C?*:NHX::
	Send {U+00D1}
  ToolTip, Ñ
	Return

; these hotstrings will make vowels with ' spanish accents or "
; a á Á
:C?*:a'x::
	send {U+00E1}
  ToolTip, á
	SetTimer, RemoveToolTip, -1000
	Return

:C?*:A'X::
	send {U+00C1}
  ToolTip, Á
	SetTimer, RemoveToolTip, -1000
	Return

; ...cut out for compactness ...

:C?*:u"x::
	Send {U+00FC}
    ToolTip, ü
	SetTimer, RemoveToolTip, -1000
	Return

:C?*:U"X::
	Send {U+00DC}
    ToolTip, Ü
	SetTimer, RemoveToolTip, -1000
	Return

RemoveToolTip:
ToolTip
Return
```

### Breakdown
Breaking down what is happening, a hotkey subroutine takes the following format:

```
:C?*:U"X::
	Send {U+00DC}
    ToolTip, Ü
	SetTimer, RemoveToolTip, -1000
	Return
```

Where `:C?*:U"X::` contains the hotstring trigger, this case being typing U " X all together.
Autohotkey gives us some control over how to interpret the hotstring, in this case by inserting `C?*` we are telling AHK to be case sensitie (`C`), to trigger even as part of a word (`?`) and to trigger without an ending character such as space or newline(`*`).

The `Send {U+00DC}` is the method used to send Ü, as a unicode character.

`Tooltip, Ü` sends a tooltip, and then we use the `SetTimer, RemoveToolTip, -1000` to set a timer with the `RemoveToolTip` function which just clears the tooltip by setting it to an empty string. A minor detail is that for the tooltip to display correctly, the script needs to be saved using __UTF-8 with BOM__ encoding.

Overall, pretty simple and easy to replicate but makes life just that little bit easier. I use it mainly for the __ñ__ character, using _nhx_ as a hotstring, and the __ü__ for which I use _u"x_. Theres some trial and error in finding the right hotstring for you but it is trivial to modify the script to make it work.

## Download
Downloads for the script and a precompiled exe:

{% include download.html link="https://1drv.ms/u/s!Amgx-OdgW8vIioYwDIvpZImf4Le0Vw?e=p0y646" filetype="ahk" name="spanishisms.ahk"%}

{% include download.html link="https://1drv.ms/u/s!Amgx-OdgW8vIioYuVW7QpQcGPtQ99w?e=ECfSPS" filetype="exe" name="spanishisms.exe"%}


## Other utilities
Autohotkey will always have a special place in my heart as one of the first programming/scripting languages I ever used, back in 2008 using it for gaming. It's still one of my goto's for simple desktop automation. I have actually uploaded some of the scripts I use up to [github](https://github.com/Pandalism/autohotkey-scripts) to show what it can be used for. At the moment most functionality is combined in one script that runs on opening:
- Automatic GPU overclock profile switching when I open ethereum mining software
- Spanish hotstrings
- Monitor profile rotation on windows+g key (decativating the main monitor to allow the laptop to control it for example)
- RSI alleviating functionality when you need to hold down the mouse key
- etc.

### Credit
- [Autohotkey](https://www.autohotkey.com/), for making these sorts of things so easy to do.
