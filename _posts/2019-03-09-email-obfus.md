---
layout: post
title: "Hiding from spammers with JavaScript"
banner:
category: programming
subcategory: webdev
tags: webdev security javascript obfuscation cryptography github-page blog
published: true
---

Email spammers use bots to crawl the internet and make note of the mailto: links scattered around blogs, forums and websites to build their massive lists of potential phishing and spam victims. Having a plain text email anywhere on the net is bound to get caught sooner or later, so many have developed simple obfuscation techniques using javascript to minimize the exposure to spam, whilst still being convenient for users. Here's my attempt!

## Background

For more information [wikipedia](https://en.wikipedia.org/wiki/Email_spam), and a couple of other sites, can explain exactly how these bots work and what techniques work and which don't. But I didn't pay much attention to these other than a cursory glance, mostly because I kind of wanted to a) practice my javascript and b) try to figure it out myself.

I figured the key to hiding the email was a simple XOR encryption/encoding. XOR operations are one of the key parts of symmetric cryptography, and actually if the key is as long as the plaintext, XOR encryption is [apparently effectively unbreakable](http://www.cs.miami.edu/home/burt/learning/Csc609.051/notes/02.html). In this case its not really cryptography because everyone, including the spam bots, get both the 'key' and the 'ciphertext'. However I'd say almost all bots don't truly execute javascript (they certainly read it though), so giving them over both uncombined will almost certainly work.

The previous link is probably better at explaining it but what's great about XOR is that its super simple due to the following:

```
a xor b = c

c xor b = a

c xor a = b
```

So if I want to hide my secret email `a`, I can XOR it with a key of equal length `b`, and send the client the resulting `c` and it's key `b`, which then does exactly the same operation to find the original `a`. So I coded up something quick (please ignore how I butchered the javascript), to demonstrate converting back and forth, and it can be found below:

<p class="codepen" data-height="436" data-theme-id="0" data-default-tab="result" data-user="pandalism" data-slug-hash="vPJYmQ" data-preview="true" style="height: 436px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="text XOR in Javascript">
  <span>See the Pen <a href="https://codepen.io/pandalism/pen/vPJYmQ/">
  text XOR in Javascript</a> by felix (<a href="https://codepen.io/pandalism">@pandalism</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

![]({{ site.url }}/post-assets/2019-03-09-email-obfus/example.png)
*The non-ascii characters shown as boxes aren't too friendly to browsers, so better avoid using them by using the raw array instead*

I quickly realised the issue with using the output string with a bunch of non-ascii characters, since they didn't copy-paste well, and they could get sanitised when serving them in a website. So added a way of inputting number arrays into `A` and `B`, and also outputting the resulting array `C - Array`. This also meant I would likely have to use the key as an array of numbers in the javascript file to avoid any non-ascii character issues.

![]({{ site.url }}/post-assets/2019-03-09-email-obfus/switched.png)
*Swapping A, B and C around doesnt matter with XOR encoding*


## Executing the change on the website

So now I know how to convert a ciphered key and an array of numbers into the email. Both stored in the configuration file for the jekyll server, and inserted into the page and javascript file separately using liquid tags. Then given an event, it uses javascript to apply the key to the link, and replace it with the true email address.

![]({{ site.url }}/post-assets/2019-03-09-email-obfus/liquid-in-js.png)
*Using liquid one can insert jekyll variables into even javascript*


However I didn't want to do it on page load, since maybe some bots are smart enough to trigger some part of the page loading JavaScript. Instead I wanted it to be triggered by the user, mainly I thought about using the `.hover()` event since it would mean the mailto link would change only on hovering over the button itself. However, to help out mobile users, I also tied it to a click on the navigation menu icon used to toggle the menu in mobile view. This would mean only a user initiated move would make the text resolve to its unobfuscated view

![]({{ site.url }}/post-assets/2019-03-09-email-obfus/on-hover-and-click.png)
*User interacting with any of these, triggers the unobfuscation*

## Result

Well the result is now live so go ahead and look at code! You'll see that until the user interacts with the page, the email is actually hidden, and since we used XOR, you can set the ciphered text to anything you want, mine being a warning that you need javascript to see it!

![]({{ site.url }}/post-assets/2019-03-09-email-obfus/before-n-after.png)
*On mobile it works like a charm, and won't keep changing with each press*

### Credit
[EloquentJavascript.](https://eloquentjavascript.net/15_event.html)

And as always, [various](https://stackoverflow.com/questions/179713/how-to-change-the-href-for-a-hyperlink-using-jquery) [different](https://stackoverflow.com/questions/10003706/convert-string-array-representation-back-to-an-array) [stackoverflow](https://stackoverflow.com/questions/2098408/how-to-get-href-value-using-jquery) questions.
