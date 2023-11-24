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
      <li><a href="/press/">報道発表</a>
        <ul>
          {% assign sorted = site.press | reverse %}
          {% for item in sorted %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
      <li><a href="/disclosure/">情報公開</a>
        <ul>
          {% for item in site.disclosure %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
      <li><a href="/documents/">団体紹介資料</a>
        <ul>
          {% for item in site.documents %}
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
      <li><a href="/authors/">投稿者一覧</a>
        <ul>
          {% for item in site.authors %}
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
      <li><a href="/forms/">各種フォーム</a>
        <ul>
          {% for item in site.forms %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul>
      </li>
    </ul>
  </li>
</ul>
