---
layout: disclosure
title: 記録文書
---
<h2>PDFファイル</h2>
{% for item in site.data.assets.toc %}
{% for file in item.items %}
  <li><a href="{{ file.url }}">{{ file.page }}</a></li>
{% endfor %}
{% endfor %}
