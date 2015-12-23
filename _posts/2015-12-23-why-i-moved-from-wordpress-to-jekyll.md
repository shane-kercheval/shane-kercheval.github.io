---
title:  "Why I Moved From WordPress to Jekyll"
date:   2015-12-22 12:00:00 -0800
categories: jekyll blogging
excerpt: There are pros and cons to both tools, but I have no regrets in my move to Jekyll.
keywords: jekyll, blogging, wordpress
#thumbnail: /
---
#tl;dr

- using Jekyll is easier/faster
  - customizing text format using markdown is significantly better
  - customizing the look/feel/functionality of the site is a lot easier
  - Jekyll is well documented
  - no need for plugins to do simple/stupid stuff
- Jekyll is lightweight
  - WordPress is slow
  - ever try to move your WordPress site?
- hosting a Jekyll site is free with GitHub Pages!!

<br />
[Jekyll](http://jekyllrb.com/) is a tool that is used to build static, custom websites and blogs. Unlike WordPress, which is a content management system, Jekyll is more of an engine or generator that takes your markdown files, templates, etc., and generates the necessarily html/css for you.

> [{% include icon-twitter.svg %}  There are pros and cons to each tool, but I have no regrets in my move to Jekyll.]( https://twitter.com/intent/tweet?text=There%20are%20pros%20and%20cons%20to%20each%20tool%2C%20but%20I%20have%20no%20regrets%20in%20my%20move%20to%20Jekyll.%20{{ site.url }}{{ page.url }}){:target="\_blank"}


I first learned about Jekyll from browsing courses on [TreeHouse](https://teamtreehouse.com/). They have few Jekyll intro courses (below) which I took out of curiosity. I immediately realized that Jekyll would be a great alternative to WordPress.

- [https://teamtreehouse.com/library/build-a-blog-with-jekyll-and-github-pages](https://teamtreehouse.com/library/build-a-blog-with-jekyll-and-github-pages)
- [https://teamtreehouse.com/library/create-a-jekyll-site-on-github](https://teamtreehouse.com/library/create-a-jekyll-site-on-github)
- [https://teamtreehouse.com/library/jekyll-data-files](https://teamtreehouse.com/library/jekyll-data-files)

**So why make the move from Wordpress?**

#Using Jekyll is Easier/Faster

Writing in markdown is way better than using the WordPress's editor. Sure there is some [markdown syntax to learn](http://assemble.io/docs/Cheatsheet-Markdown.html), but it is pretty straightforward and there are plenty of editors out there.[^1] I constantly ran into issues doing trivial things in WordPress (like creating a simple table).


{::comment}
  customizing the look/feel/functionality of the site is a lot easier
{:/comment}

I’ve also never really found a WordPress theme that fit *exactly* what I wanted. But Anyone with some basic HTML/CSS/JavaScript skills can expand their website as much as they want. Even with these skills, though, customizing WordPress themes is not intuitive (at least not to me).

Jekyll will give you

Some companies with simple static WordPress websites outsource the their development, not because they don’t have the web skills, but because they don’t have WordPress knowledge needed (and/or because it is a pain).
I’ve spent considerable time trying to figure out how to do various things in WordPress, only to give up.

I will say, however, that Jekyll is probably most useful if you learn a little HTML, CSS, JavaScript, which you can do over at TreeHouse, but it isn’t required. You can get a nice, minimum blog setup and hosted for free fairly easily and can customize basic things trivially


  - no need for plugins to do simple/stupid stuff

If you want to do anything, you need a plugin. And sometimes the plugin doesn’t do exactly what you want, doesn’t work.
  I needed plugins for disqus comment system
  google tag manager
  twitter cards
  SEO
  avatar
  all of which I did (just as easy, if not easier in some cases, with code)


#Jekyll is Lightweight
  - WordPress is slow

The Theme I was using was slow
   yes, I could get another theme, but it was the best match for what I’m looking for (but, again, couldn’t customize it much)


  - ever try to move your WordPress site?


#Hosting a Jekyll Site is Free with GitHub Pages!!

- Hosting is free and easy
    Hosting with GitHub Pages is free and easy and, of course, TreeHouse has a course for getting set up. GitHub also has documentation.
 Updating Jekyll via GitHub Pages requires Git, which isn’t difficult to learn, but isn’t going to be as easy as logging on to WordPress

[^1]: I use [Atom](https://atom.io) on OS X. You can preview what the markdown will look like. You can even put it in a pane and see the preview as you type.
