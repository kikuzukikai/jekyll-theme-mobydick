<div id="wrap">
<header class="header">
<nav class="navigation">
    <ul>
        <li><a href="{{ '/' | relative_url }}" class="logo">{% include_cached svg/title.svg %}</a></li>
    </ul>
</nav>
<div id="hamburger-button">
    <i class="fa-bars"></i>
</div>
</header>
<div id="hamburger-overlay"></div>
<nav id="hamburger-menu">
  <br />
  <div id="autocomplete"></div>
  <hr />
  <div class="doc-nav">
    <ul class="menu">
      <li><a href="/articles/">投稿記事</a>
      </li>
      <li><details><summary>会則及び規程</summary>
        <ul>
          {% for item in site.rules %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul></details>
      </li>
      <li><details><summary>活動紹介</summary>
        <ul>
          {% for item in site.activities %}
          {% unless item.unless %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endunless %}
          {% endfor %}
        </ul></details>
      </li>
      <li><a href="/links/">関連リンク</a>
      </li>
    </ul>
  </div>
</nav>
