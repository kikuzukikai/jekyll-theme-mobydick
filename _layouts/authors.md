---
layout: default
---
<main class="container">
<div class="doc-container">
    <div class="doc-menu">
        <ul>
<li class="category">
    {% if "/authors/" == page.url %}
        <a href="/authors/" class="active">投稿者一覧</a>
    {% else %}
        <a href="/authors/">投稿者一覧</a>
    {% endif %}
</li>
        {% for item in site.authors %}
        {% unless item.unless %}
            <li>
            {% if item.url == page.url %}
                <a href="{{ item.url | relative_url }}" class="active doc-link">  {{ item.title }} </a>
            {% else %}
                <a href="{{ item.url | relative_url }}" class="doc-link">  {{ item.title }} </a>
            {% endif %}
            </li>
        {% endunless %}
        {% endfor %}
        </ul>
    </div>
    <article class="documentation">
        <header class="doc-header">
<small><a href="{{ site.url }}">トップページ</a>&nbsp;&gt;&nbsp;{% if "/authors/" != page.url %}<a href="/authors/">投稿者一覧</a>{% else %}投稿者一覧{% endif %}{% if "/authors/" == page.url %}{% else %}&nbsp;&gt;&nbsp;{{ page.title }}{% endif %}</small>
{% if "/authors/" != page.url %}<p class="author-position">{{ page.position | escape }} / {{ page.position_en | escape }}</p>
<h1 class="author-title">{% else %}<h1>{% endif %}{{ page.title | escape }}{% if "/authors/" != page.url %}&nbsp;<small class="meta">({{ page.ruby | escape }})</small>{% endif %}</h1>
<p class="meta">
{{ page.last_modified_at | date: "%Y年%-m月%-d日" }}更新
&nbsp;
<i class="fa-pencil"></i>
<a href="https://github.com/{{ site.repository }}/blob/master/{{ page.path }}">編集する</a>
</p>
        </header>
            {{ content }}

{% if page.roster %}
{% else %}
<h2>投稿した記事</h2>
<ul>
  {% assign filtered_posts = site.posts | where: 'author', page.title %}
  {% for post in filtered_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endif %}
            
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
        <a href="/authors/">{{ page }}</a>
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
  </article>
</div>
<div id="back-to-top">
    <i class="fa-angle-up"></i>
</div>
</main>
<div id="push"></div>
</div>
