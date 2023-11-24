---
layout: compress
---
<!DOCTYPE html>
<html lang="ja">
{% include html-head.md %}
<body class="body">
    {% include_cached header.md %}
    {{ content }}
    {% include_cached call-to-action.md %}
    {% include_cached footer.md %}
{% include_cached scripts.md %}
</body>
</html>
