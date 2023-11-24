---
layout: links
title: 関連リンク
permalink: /links/
unless: true
---
<ul id="markdown-toc">
  {% for item in site.data.links.toc %}
    <li><a href="#{{ item.title }}" id="markdown-toc-{{ item.title }}">{{ item.title }}</a></li>
  {% endfor %}
  {% for item in site.data.accounts.toc %}
    <li><a href="#{{ item.title }}" id="markdown-toc-{{ item.title }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>
  
{% for item in site.data.links.toc %}
<section class="blog">
  <h3>{{ item.title }}</h3>
    <ul class="list">
      {% for entry in item.items %}
        <li>
          <h2><a href="{{ entry.protocol }}://{{ entry.url }}">{{ entry.page }}</a></h2>
          <p class="meta">{{ entry.url | truncate: 40 }}</p>
        </li>
      {% endfor %}
    </ul>
</section>
{% endfor %}

{% for item in site.data.accounts.toc %}
<section class="blog">
  <h3>{{ item.title }}</h3>
    <ul class="list">
      {% for entry in item.items %}
        <li>
          <h2><a href="https://{{ entry.url }}">{{ entry.name }} (@{{ entry.id }})</a> - {{ entry.service }}</h2>
          <p class="meta">{{ entry.url }}</p>
        </li>
      {% endfor %}
    </ul>
</section>
{% endfor %}
