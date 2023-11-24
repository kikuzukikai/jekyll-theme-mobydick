---
layout: default
permalink: /
---
<main class="container">
<article class="home">
  <section class="card">
  <fieldset>
    <legend>
      <h2>私たちについて</h2>
    </legend>
    <p>{{ site.description }}</p>
  </fieldset>
  <br />
  <fieldset>
    <legend>
      <h2>Who We Are</h2>
    </legend>
    <p>The <strong>Destroyer Kikuzuki Association</strong> is a World War II reunion organized by the former crew members of the Japanese destroyer Kikuzuki, their families, and volunteers.
       More than 80 years after her sinking, we kept in touch and maintained a close fellowship.
       Also, the main focus is on honoring her, not taking part in any ideology, carrying out memorials to the former crew members who died, sharing information, conducting research, and collecting materials related to her.</p>
  </fieldset>
  <br />
  <p>お問い合わせはこちらへどうぞ: contact@{{ site.domain }}</p>
  </section>
  <section class="card">
  {% include_cached bulletin.md %}
  </section>
</article>
<div id="back-to-top">
    <i class="fa-angle-up"></i>
</div>
</main>
