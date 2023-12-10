{% assign docs_by_category = site.documentation | group_by: "category" %}
<div id="footer" class="footer">
    <div class="navigation">
        <ul class="horizontal-list">
            <li class="item">
                <ul>
                    {% for item in site.reg %}
                    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
                    {% endfor %}
                </ul>
            </li>
        </ul>
    </div>
    <div class="socials">
        <ul>
            <li><a href="https://www.youtube.com/c/{{ site.youtube }}" target="_blank" rel="noopener"><i class="fa-youtube fa-2x"></i></a></li>
            <li><a href="https://x.com/{{ site.x-twitter }}" target="_blank" rel="noopener"><i class="fa-x-twitter fa-2x"></i></a></li>
            <li><a href="https://www.facebook.com/{{ site.facebook }}" target="_blank" rel="noopener"><i class="fa-facebook fa-2x"></i></a></li>
            <li><a href="https://www.instagram.com/{{ site.instagram }}" target="_blank" rel="noopener"><i class="fa-instagram fa-2x"></i></a></li>
            <li><a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener"><i class="fa-github fa-2x"></i></a></li>
        </ul>
    </div>
    <div class="copyright">
        <div class="left">&copy;&nbsp;{{ 'now' | date: "%Y" }}&nbsp;<a href="{{ site.url }}">{{ site.title }}</a></div>
        <div class="right">
            法人番号&nbsp;<a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo={{ site.corporate_number }}" target="_blank" rel="noopener">{{ site.corporate_number }}</a>
        </div>
    </div>
</div>
