---
layout: page
title: Contact
permalink: /contact/
include_in_nav: true
---
{% assign siteInfo = site.data.contacts['site'] %}

<div id="contact_page">
  <div id="primary-column"> <!-- sections break up a page into logical groupings of information -->
    <h3>General Information</h3>
    <!-- <img src="{{ site.url }}{{ siteInfo.image }}" alt="{{ siteInfo.image_alt }}" class="profile-photo"> -->

    {% assign sentences = site.data.contacts['shanekercheval'].bio | split:'.' %}
    {% for sentence in sentences %}
      <p>{{ sentence }}.</p>
    {% endfor %}

  </div>
  <div id="secondary-column">
    <h3>Contact Details</h3>
    <ul class="contact-info">
    <!--<li class="phone"><a href="tel:646.543.9259">646.543.9259</a></li>-->
    <li class="mail"><a href="mailto:{{ siteInfo.email }}">{{ siteInfo.email }}</a></li>
    <li class="twitter">
    <a href="http://twitter.com/intent/tweet?screen_name={{ siteInfo.twitter_username }}"
    target="_blank">@{{ siteInfo.twitter_username }}</a>
    </li>
    <li style="font-style:italic">
    (or use the message box below!)
    </li>
    </ul>
    <p>Click <a href="{{ site.url }}/Shane%20Kercheval%20-%20resume.pdf" target="_blank">here</a> for my resume.</p>
  </div>
</div>
{% include contact-form.html %}
