---
layout: default
---
<main class="container">
<article class="post">
    <header class="post-header">
<small><a href="{{ site.url }}">トップページ</a>&nbsp;&gt;&nbsp;<a href="/press/">報道発表</a>&nbsp;&gt;&nbsp;{{ page.title }}</small>
        <h1 itemprop="name headline">{{ page.title | escape }}</h1>
        <p class="meta">
            {{ page.headline }}
            &nbsp;
            {{ page.date | date: "%Y年%-m月%-d日" }}発表
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
