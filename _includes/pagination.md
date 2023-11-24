<div class="pagination">
{% if page.previous %}
<a href="{{ page.previous.url | relative_url }}" title="{{ page.previous.title }}">&laquo; 前の記事</a>
{% else %}
<span>&laquo; 前の記事</span>
{% endif %}
<span>&nbsp;&bull;&nbsp;</span>
{% if page.next %}
<a href="{{ page.next.url | relative_url }}" title="{{ page.next.title }}">次の記事 &raquo;</a>
{% else %}
<span>次の記事 &raquo;</span>
{% endif %}
</div>
