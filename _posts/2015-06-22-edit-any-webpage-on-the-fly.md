---
title:  "Edit Any Webpage on the Fly"
date:   2015-06-22 06:13:00+0000
categories: hacks
excerpt: Sometimes I just want to click on some text on a website and start editing away. So I do. For example, when I'm with a client and I want to demonstrate how they can improve the copy on their website, rather than just telling them, I can show them by editing their website on the fly. It always grabs their attention, even though it is a very simple trick.
keywords: edit website page dynamically
---

Sometimes I just want to click on some text on a website and start editing away. So I do. For example, when I'm with a client and I want to demonstrate how they can improve the copy on their website, rather than just telling them, I can show them by editing their website on the fly. It always grabs their attention, even though it is a very simple trick. [GoDirect Foods](http://godirectfoods.com) (which is a great new startup) previously ha "Welcome to GoDirect Foods" on their landing page which isn't adding much value to the customer and is taking up valuable real estate.

![first]({{ site.url }}/img/blog/edit_webpage_1.png)

If I want demonstrate my point on the fly and show them a better way, then with the following technique, I can simply click on the text and change it. No access to their code or code changes required. Just click and type.

![second]({{ site.url }}/img/blog/edit_webpage_2.png)

In order for you to do this, simply follow these steps:

================================

##Update

The following steps still work, but I have since found a [Chrome extension (PageEdit)](https://chrome.google.com/webstore/detail/pageedit/ebkclgoaabaibghklgknnjdemknjaeic){:target="\_blank"} that provides this functionality and more.

================================

1.  add the following bookmark to your web browser of choice (without quotes):

~~~ javascript
"javascript:document.body.contentEditable='true'; document.designMode=�'on'; void 0"
~~~

2.  go to the webpage you want to edit
3.  click the bookmark you added
4.  click on any text on the site and start typing

Of course, any edits on the website are only local changes and will not be saved to the server, so hitting refresh erases all of your edits.

But this technique is great for offering feedback on sites, collaborating on website copy, etc. Alternatively, you can open the developer tools and edit the HTML directly which gives you the ability to change far more than just text. For example, on Chrome (Mac), using the keybord shortcut Cmd+Shift+C allows you to view and edit the HTML.
