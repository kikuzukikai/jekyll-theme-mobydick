---
layout: default
---
<main class="container">
<div class="doc-container">
    <div class="doc-menu">
        <ul>
    <li class="category">
    {% if "/documents/" == page.url %}
        <a href="/documents/" class="active">団体紹介資料</a>
    {% else %}
        <a href="/documents/">団体紹介資料</a>
    {% endif %}
    </li>
        {% for item in site.documents %}
        {% unless item.unless %}
            <li>
            {% if item.url == page.url %}
                <a href="{{ item.url | relative_url }}" class="active doc-link">{{ item.title }}</a>
            {% else %}
                <a href="{{ item.url | relative_url }}" class="doc-link">{{ item.title }}</a>
            {% endif %}
            </li>
        {% endunless %}
        {% endfor %}
        </ul>
    </div>
    <article class="documentation">
        <header class="doc-header">
<small><a href="{{ site.url }}">トップページ</a>&nbsp;&gt;&nbsp;{% if "/documents/" != page.url %}<a href="/documents/">団体紹介資料</a>{% else %}団体紹介資料{% endif %}{% if "/documents/" == page.url %}{% else %}&nbsp;&gt;&nbsp;{{ page.title }}{% endif %}</small>
            <h1>{{ page.title | escape }}</h1>
<p class="meta">
{{ page.last_modified_at | date: "%Y年%-m月%-d日" }}更新
&nbsp;
<i class="fa-pencil"></i>
<a href="https://github.com/{{ site.repository }}/blob/master/{{ page.path }}">編集する</a>
</p>
        </header>
            {{ content }}
    </article>
</div>
<div id="back-to-top">
    <i class="fa-angle-up"></i>
</div>
</main>
