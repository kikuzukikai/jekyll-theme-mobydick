---
layout: rules
title: 各種規程
permalink: /rules/
pagination: 
  enabled: true
unless: true
---
<section>
  <ul class="list">
  {% for item in site.rules %}
  {% unless item.unless %}
    <li>
      <h2>
        <a class="link" href="{{ item.url | relative_url }}" role="link">{{ item.title | escape }}</a>
      </h2>
      <p class="meta">
        {{ item.content | markdownify | strip_html | escape | truncate: 80 }}
      </p>
    </li>
  {% endunless %}
  {% endfor %}
  </ul>
    
  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo;</a>
    {% else %}
      <span>&laquo;</span>
    {% endif %}
    
    {% for page in (1..paginator.total_pages) %}
      {% if page == paginator.page %}
        <span>{{ page }}</span>
      {% elsif page == 1 %}
        <a href="/rules/">{{ page }}</a>
      {% else %}
        <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
      {% endif %}
    {% endfor %}
      
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">&raquo;</a>
    {% else %}
      <span>&raquo;</span>
    {% endif %}
  </div>
  {% endif %}
</section>
