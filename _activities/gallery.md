---
layout: activities
title: フォトギャラリー
---
当会の会員が撮影した写真を掲載していきます。

原則転載不可としますが、[著作権法の権利制限規定](https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/gaiyo/chosakubutsu_jiyu.html)の対象となる場合に限り、ご自由にお使いください。

## ソロモン諸島の風景

<style>
{% include_cached css/lightbox.min.css %}

  .gallery {
    overflow: auto;
  }
  .image {
    margin: 3px 0;
    border-radius: .3rem;
  }
</style>

<div class="gallery">
  {% for image in site.static_files %}
  {% if image.path contains 'assets/photos/solomon' %}
  {% assign filenameparts = image.path | split: "/" %}
  {% assign filename = filenameparts | last | replace: image.extname,"" %}
  <a href="//images.weserv.nl/?url={{ site.url | replace: 'http://','' | replace: 'https://','' }}{{ image.path | relative_url }}&w=900&h=900&t=outside" data-lightbox="solomon" data-title="{{ filename }}">
    <img class="image" src="//images.weserv.nl/?url={{ site.url | replace: 'http://','' | replace: 'https://','' }}{{ image.path | relative_url }}&w=180&h=180&t=cover" />
  </a>
  {% endif %}
  {% endfor %}
</div>
<br />

## 陸奥鉄鍛え倣い元帥刀(号 青海波)

作刀を後援しました。
- [Seigaiha.com](https://www.seigaiha.com)

<div class="gallery">
  {% for image in site.static_files %}
  {% if image.path contains 'assets/photos/seigaiha' %}
  {% assign filenameparts = image.path | split: "/" %}
  {% assign filename = filenameparts | last | replace: image.extname,"" %}
  <a href="//images.weserv.nl/?url={{ site.url | replace: 'http://','' | replace: 'https://','' }}{{ image.path | relative_url }}&w=900&h=900&t=outside&output=webp" data-lightbox="seigaiha">
    <img class="image" src="//images.weserv.nl/?url={{ site.url | replace: 'http://','' | replace: 'https://','' }}{{ image.path | relative_url }}&w=180&h=180&t=cover&output=webp" />
  </a>
  {% endif %}
  {% endfor %}
</div>

<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script>
{% include_cached js/lightbox.min.js %}

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "%1 / %2",
  'fitImagesInViewport': true,
  'wrapAround': true
})
</script>
