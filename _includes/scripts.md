<script>
function toggleNav() {
  const body = document.body;
  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerOverlay = document.getElementById("hamburger-overlay");
  hamburgerButton.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  hamburgerOverlay.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}
toggleNav();
</script>
<script>
{% include_cached js/elevator.min.js %}

window.onload = function(){
  var elevator = new Elevator({
  element: document.querySelector('#back-to-top'), duration: 1000
  });
};
</script>
<script src="https://cdn.jsdelivr.net/npm/anchor-js/anchor.min.js"></script>
<script>
anchors.add('.documentation h2, .documentation h3, .documentation h4, .documentation h5, .documentation h6');
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
<script type="text/javascript">
  algoliasearchNetlify({
    appId: 'XT9SX840Q9',
    apiKey: '4917724eda03a7c19ad806d811338cae',
    siteId: '0248a673-b24b-4b2a-9dc7-815f7e9c22d3',
    branch: 'master',
    selector: 'div#autocomplete',
    detached: false,
  });
</script>
<script src="/assets/scripts/env.ts"></script>
<script src="/assets/scripts/app.tsx"></script>
