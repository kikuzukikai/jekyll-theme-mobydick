---
layout: links
title: サイトマップ
---
<ul>
  <li><a href="{{ site.url }}">トップページ</a>
    <ul>
      <li><a href="/articles/">投稿記事</a>
        <ul>
          {% for item in site.posts %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
      <li><a href="/rules/">会則及び規程</a>
        <ul>
          {% for item in site.rules %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
      <li><a href="/activities/">活動紹介</a>
        <ul>
          {% for item in site.activities %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
      <li><a href="/links/">関連リンク</a>
        <ul>
          {% for item in site.data.links.toc %}
            <li><a href="/links/#{{ item.title }}">{{ item.title }}</a>
              <ul>
                {% for entry in item.items %}
                  <li><a href="{{ entry.protocol }}://{{ entry.url }}" target="_blank" rel="noopener">{{ entry.page }}</a></li>
                {% endfor %}
              </ul>
            </li>
          {% endfor %}
          {% for item in site.data.accounts.toc %}
            <li><a href="/links/#{{ item.title }}">{{ item.title }}</a>
              <ul>
                {% for entry in item.items %}
                  <li><a href="https://{{ entry.url }}">{{ entry.name }} (@{{ entry.id }}) - {{ entry.service }}</a></li>
                {% endfor %}
              </ul>
            </li>
          {% endfor %}
        </ul>
      </li>
    </ul>
  </li>
</ul>
