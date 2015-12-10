---
layout: page
title: Blog
permalink: /blog/
include_in_nav: true
---
<div class="home">

    <section id="blogs">
        <h1 class="page-heading">Posts</h1>   
        <ul class="post-list">
            {% for post in site.posts %}
                <li categories="{{ post.categories | join: ' ' }}">
                    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
                    <h2>
                        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                    </h2>
                    {{ post.excerpt }}
                    <a class="read-more" href="{{ post.url | prepend: site.baseurl }}">Read more</a>
                </li>
            {% endfor %}
        </ul>
    </section>

    <section id="blog-info">
        <h1 class="page-heading">Categories</h1>
        <!--http://stackoverflow.com/questions/20945944/jekyll-liquid-output-category-list-with-post-count-->
        <ul class="category-list">
            {% assign tags_list = site.categories %}  
            {% if tags_list.first[0] == null %}
                {% for tag in tags_list %}
                    <li><a href="">{{ tag | capitalize }} <span>({{ site.tags[tag].size }})</span></a></li>
                {% endfor %}
            {% else %}
                {% for tag in tags_list %}
                    <li><a href="">{{ tag[0] | capitalize }} <span>({{ tag[1].size }})</span></a></li>
                {% endfor %}
            {% endif %}
            {% assign tags_list = nil %}
            
            <li id="show-all"><a href="" style="font-style:italic">Show All</a></li>
        </ul>


        <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
    </section>
            <!-- didn't need this code, but would like to keep it: http://stackoverflow.com/questions/20945944/jekyll-liquid-output-category-list-with-post-count
        {% for tag in site.categories %}
            <h2 id="{{ tag[0] }}" style="display: none">{{ tag[0] | capitalize }}</h2>
            <ul class="post-by-category {{ tag[0] }}" style="display: none">
                {% assign pages_list = tag[1] %}  
                {% for post in pages_list %}
                    {% if post.title != null %}
                        {% if group == null or group == post.group %}
                            <li><a href="{{ site.url }}/blog">{{ post.title }}</a></li>
                        <!--<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}<span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span></a>
                            </li>
                        {% endif %}
                    {% endif %}
                {% endfor %}
                {% assign pages_list = nil %}
                {% assign group = nil %}
            </ul>
        {% endfor %}
        -->
</div>
