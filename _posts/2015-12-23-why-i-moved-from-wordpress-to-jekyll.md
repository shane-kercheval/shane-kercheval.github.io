---
title:  "Why I Moved From WordPress to Jekyll"
date:   2015-12-22 12:00:00 -0800
categories: jekyll blogging
excerpt: There are pros and cons to both tools, but I have no regrets in my move to Jekyll.
keywords: jekyll, blogging, wordpress
---
#tl;dr

- using Jekyll is easier/faster
  - customizing text format using markdown is significantly better
  - customizing the look/feel/functionality of the site is a lot easier
  - Jekyll is well-documented
- Jekyll is lightweight
  - WordPress is slow
  - ever try to move your WordPress site?
- hosting a Jekyll site is free with GitHub Pages!!

<br />
[Jekyll](http://jekyllrb.com/){:target="\_blank"} is a tool used to build static, custom websites and blogs. Unlike WordPress, which is a content management system, Jekyll is more of an engine or generator that takes your markdown files, templates, etc., and generates the necessarily HTML/CSS for you.

> [{% include icon-twitter.svg %}  There are pros and cons to each tool, but I have no regrets in my move to Jekyll.]( https://twitter.com/intent/tweet?text=There%20are%20pros%20and%20cons%20to%20each%20tool%2C%20but%20I%20have%20no%20regrets%20in%20my%20move%20to%20Jekyll.%20{{ site.url }}{{ page.url }}){:target="\_blank"}


I first learned about Jekyll from browsing courses on [TreeHouse](https://teamtreehouse.com/){:target="\_blank"}. They have few Jekyll intro courses (below) which I took out of curiosity. I immediately realized that Jekyll would be a great alternative to WordPress.

- [https://teamtreehouse.com/library/build-a-blog-with-jekyll-and-github-pages](https://teamtreehouse.com/library/build-a-blog-with-jekyll-and-github-pages){:target="\_blank"}
- [https://teamtreehouse.com/library/create-a-jekyll-site-on-github](https://teamtreehouse.com/library/create-a-jekyll-site-on-github){:target="\_blank"}
- [https://teamtreehouse.com/library/jekyll-data-files](https://teamtreehouse.com/library/jekyll-data-files){:target="\_blank"}

**So why make the move from Wordpress?**

#Using Jekyll is Easier/Faster

Writing in markdown is way better than using the WordPress's editor. Sure there is some [markdown syntax to learn](http://assemble.io/docs/Cheatsheet-Markdown.html){:target="\_blank"}, but it is pretty straightforward and there are plenty of editors out there.[^1] I constantly ran into issues doing trivial things in WordPress (like creating a simple table).

{::comment}
  customizing the look/feel/functionality of the site is a lot easier
{:/comment}

I’ve also never found a WordPress theme that fit exactly what I wanted.

Alternatively, Jekyll gives you a nice, minimal site to start. Anyone with some basic HTML/CSS/JavaScript skills can expand their website as much as they want. Also, Jekyll is very well [documented](http://jekyllrb.com/docs/home/){:target="\_blank"}.

Even with these skills, though, customizing WordPress themes is not intuitive. Some companies with simple static WordPress websites outsource their development, not because they don’t have the web skills, but because they don’t have the WordPress knowledge needed (and because it is a pain).

I’ve spent considerable time trying to figure out how to do simple things in WordPress, only to give up in frustration.

I will say, however, that Jekyll is probably most useful if you learn a little HTML, CSS, JavaScript, which you can do over at TreeHouse. But it isn’t required.

#Jekyll is Lightweight

WordPress is slow... slow to load, slow to add content, slow to change.

Also, ever try to move your WordPress site? WordPress uses [databases](https://codex.wordpress.org/Database_Description){:target="\_blank"} to store info, Jekyll uses a simple file structure.

#Hosting a Jekyll Site is Free with GitHub Pages!!

Hosting with GitHub Pages is free and easy and, of course, [TreeHouse has a course](https://teamtreehouse.com/library/build-a-blog-with-jekyll-and-github-pages){:target="\_blank"} for getting it set up. GitHub also has [good documentation](https://pages.github.com){:target="\_blank"}.

Updating Jekyll via GitHub Pages requires Git, which isn’t difficult to learn, but isn’t as easy as logging on to WordPress. That said, the pros far outweigh the cons.

[^1]: I use [Atom](https://atom.io){:target="\_blank"} on OS X. You can preview what the markdown will look like. You can even put it in a pane and see the preview as you type.
