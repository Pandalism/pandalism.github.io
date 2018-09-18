---
layout: post
title: Turning pages by touch [Archives]
category: Programming
tags: archives programming autohotkey utilities
todo: add-banner-foto
---
I always love the laptop-tablet hybrids, although admittedly I don't use the tablet functionality half as much as I'd like. Sometimes its just because mouse and keyboard are far superior and make sense, and sometimes its because touch functionality and UX is just not where it should be. For example, the surface book is a great device to read comics, the colours are nice, the tablet is the right format  but my favourite comic reader, [YACReader](http://www.yacreader.com/) just doesn't take touch input.

This kinda annoyed me, so I decided to use [autohotkey](https://autohotkey.com/) to fix the situation. Now if you don't know what autohotkey is, [it's a simple, relatively old, event driven scripting language](https://en.wikipedia.org/wiki/AutoHotkey). It is known for being pretty flexible and having been used to make pretty silly apps but its primary usage is making context aware macros or scripts, attached to hotkeys and it does this ~~extremely~~ well. Its pretty weird, clunky and at this point has a bit of a dead community, but it does its task so well it was a piece of cake to implement what I wanted.

So here is the script (apologies for no syntax highlighting but its an obscurish language):

```
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; ===============================================
; YACReader touch screen page turner
; ===============================================
#IfWinActive ahk_exe YACReader.exe
	;Forces following to code to only work when win is active
	~LButton::
		MouseGetPos, MouseX, MouseY ; Get mouse position
		WinGetPos, , ,Width, , A  ; Get active client window width and heigth
		FQuarter := (Width/4) ; find left hand quarter size
		LQuarter := (Width - FQuarter) ; find right hand quarter size
		if (MouseX < FQuarter) ; if in the left hand side
		{
			send {Left} ; send left key
		}
		else if (MouseX > LQuarter) ; if in the right hand side
		{
			send {Right} ; send right key
		}
		Return

```

The only bits that might need clarifying are:
```
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
```
This is just usual preamble at the top of the script. `;` is the start of a comment.
```
#IfWinActive ahk_exe YACReader.exe
```
This means the following code only works when the window which belongs to YACReader.exe is in the forefront.

```
	~LButton::
```
This is the goto when the left mouse button gets pressed (normal touch gets registered as a left button click). The rest is quite simple, it checks the size of the window, divides it into quarters and if its on the left quarter it moves a page back by sending the left key, and ditto for the right to move a page forward.

Its so simple but works great. I used that snippet and put it within my usual default script which I run on start up, which has a bunch of other snippets to make my life easier and implement my macros and what not. Nonetheless AHK also lets you compile it so that anyone can run it, even without installing it. Some anti-virus don't like it because the key-hooks can be abused to make keyloggers but if you want you can download either here:

[![YACPageTurn.ahk]({{ "/assets/posts/2016-03-08-Page-Turner/AutoHotkey-Script-Icon.png" | absolute_url}})]({{ "/assets/posts/2016-03-08-Page-Turner/YACPageTurn.ahk" | absolute_url}})

or

[![YACPageTurn.exe]({{ "/assets/posts/2016-03-08-Page-Turner/AutoHotkey-Logo-Icon.png" | absolute_url}})]({{ "/assets/posts/2016-03-08-Page-Turner/YACPageTurn.exe" | absolute_url}})
