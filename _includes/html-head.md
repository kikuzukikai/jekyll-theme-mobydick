<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{{ site.google_analytics }}');
    </script>
    <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}{% if page.title %}{% else %} | {{ site.tagline }}{% endif %}</title>
    <meta name="description" content="{% if page.description %}{{ page.description }}{% elsif page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | escape | normalize_whitespace | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
    <link rel="canonical" href="{{ page.url }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=0.8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="color-scheme" content="light dark">
    <!-- favicon -->
    <link rel="icon" href="/assets/svg/favicon.svg" type="image/svg+xml">
    <!-- rss -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="/feed.xml">
    <!-- stylesheet -->
    {% capture main %}
    {% include_cached css/main.scss %}
    {% endcapture %}
    <style>
    {{ main | scssify }}
    </style>
</head>
