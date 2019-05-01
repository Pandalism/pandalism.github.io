---
layout: post
title: "Functional Print: SDCard Holder"
banner: post-assets/2019-05-02-sdcard-holder/banner.jpg
category: technology
subcategory: 3d-printing
tags: rapid-prototyping 3d-printing sdcard CAD solidworks
assets: "post-assets/2019-05-02-sdcard-holder"
published: true
---

Whilst cleaning up my room I quickly got distracted with the fact that my microSD flash cards were in disarray and loosely placed here and there. Clearly, organising my room had to take a break whilst I sorted this out.

## Studies
So first was to figure out the general gist of the holder. So I put some microSD and normal cards on a standard credit card, and figured it looked quite good! If thin, could fit in a wallet, would be easy to stash with camera equipment and would hold ~6 microSD cards. Sounded pretty good.

![laid out]({{ site.url }}/{{ page.assets }}/draft_landscape.jpg)*General layout I wanted*

Using some trusty vernier calipers and some googling, I used Solidworks to CAD up the basic microSD card shape, and also looked at the dimensions of the larger SDcards for what I figure might be needed for a pressfit.

![laid out]({{ site.url }}/{{ page.assets }}/sd_cad.png)*Simple SDCard outline*

I already decided it would require two pieces stuck together to achieve the sort of reliable hold I was seeking, but I still wanted to print a smaller test piece to check the fit and amend accordingly before I spent a good hour printing the final pieces.

![test print]({{ site.url }}/{{ page.assets }}/testcad.png)*Test print*
![Initial print]({{ site.url }}/{{ page.assets }}/init_print.jpg)*Printed out. note the warping from removing the piece from the 3dprinter base*
![MicroSD fit]({{ site.url }}/{{ page.assets }}/init_fit.jpg)*MicroSD slots turned out to be a smidge too narrow*
![SD thickness]({{ site.url }}/{{ page.assets }}/init_pressfit.jpg)*The sandwhich between two layers would create the pressfit on the larger cards, but here it was clear the layer needed to be a thicker*

## Final print

After incorporating the changes to the slot and thickness of the gaps using what I learned in the study print, I finished off the top and bottom pieces in solidworks and made sure it looked like it fit properly. I wanted to glue them together and knowing how difficult that would be I added stubs to align both pieces together and provide a better grip for the glue.

![Final CAD]({{ site.url }}/{{ page.assets }}/finishedCAD.png)*How the final CAD looked like mocked up*

And all that was left is to send to the printer! Of course, I never had time to set up my printer properly nor tune the parameters so the prints aren't of the best quality. You can easily see some dodgy layer here, and the much thinner upper piece ended up with a warped corner.

![Printing]({{ site.url }}/{{ page.assets }}/printing.jpg)*Printing!*

![Lid]({{ site.url }}/{{ page.assets }}/redo_lid.jpg)*Upper piece had to be reprinted*

In the end though I was well pleased with the result. It looked fine and held on to the cards perfectly well. Strong enough that the cards wouldn't fall out with rigorous shaking, but still really easy to pull out. Can't complain

![Finished Product]({{ site.url }}/{{ page.assets }}/finished.png)*Finished Product!*

Could I have just taken one from thingiverse? Yeah probably, but what's the fun in that?

## Result
It works pretty darn good!

![Holding fast]({{ site.url }}/{{ page.assets }}/shake.gif)*Holding fast*

Only things I would change are:
 - Add my logo somewhere. I put effort into it and like it quite a lot, might as well use it on the things I make. Would be interesting to experiment with putting logos on the first layer of a print.
 - Increase the height of the lip which holds the microSD cards in place a tad bit more, just so it is level with the upper portion.
 - Made a hole in the middle to save some minor amount of PLA, just good practice really...

## Credit

[Ezgif](https://ezgif.com), for the video to GIF conversion.
