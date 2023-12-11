---
layout: default
---
<main class="container">
<article class="post">
    <header class="post-header">
<small><a href="{{ site.url }}">トップページ</a>&nbsp;&gt;&nbsp;<a href="/articles/">投稿記事</a>&nbsp;&gt;&nbsp;{{ page.title }}</small>
        <h1 itemprop="name headline">{{ page.title | escape }}</h1>
        <p class="meta">
            {{ page.date | date: "%Y年%-m月%-d日" }}投稿
            &nbsp;
            {{ page.last_modified_at | date: "%Y年%-m月%-d日" }}更新
            &nbsp;
            <i class="fa-pencil"></i>
            <a href="https://github.com/{{ site.repository }}/blob/master/{{ page.path }}">編集する</a>
        </p>
    </header>
<div class="post-content">
{{ content }}
</div>
</article>
<div id="back-to-top">
    <i class="fa-angle-up"></i>
</div>
</main>
<div id="push"></div>
</div>
{% include pagination.md %}
