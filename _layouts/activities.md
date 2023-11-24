---
layout: default
---
<main class="container">
<div class="doc-container">
    <div class="doc-menu">
        <ul>
    <li class="category">
    {% if "/activities/" == page.url %}
        <a href="/activities/" class="active">活動紹介</a>
    {% else %}
        <a href="/activities/">活動紹介</a>
    {% endif %}
    </li>
        {% for item in site.activities %}
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
<small><a href="{{ site.url }}">トップページ</a>&nbsp;&gt;&nbsp;{% if "/activities/" != page.url %}<a href="/activities/">活動紹介</a>{% else %}活動紹介{% endif %}{% if "/activities/" == page.url %}{% else %}&nbsp;&gt;&nbsp;{{ page.title }}{% endif %}</small>
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
