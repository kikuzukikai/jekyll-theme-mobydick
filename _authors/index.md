---
layout: authors
title: 投稿者一覧
permalink: /authors/
pagination: 
  enabled: true
roster: true
unless: true
---
<div class="about-dl">
  {% for author in site.authors %}
  {% unless author.unless %}
  <ul>
    <li class="roster">
      <span class="meta">{{ author.position }}</span><br /><a href="{{ author.url }}">{{ author.title }}</a>
    </li>
  </ul>
  {% endunless %}
  {% endfor %}
</div>
