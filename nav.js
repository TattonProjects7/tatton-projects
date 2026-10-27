/* ===========================================================
   TATTON PROJECTS — nav.js
   Phone-width menu. Only does anything at 1000px and below;
   the desktop header is untouched.
   =========================================================== */
(function () {
  'use strict';
  var nav = document.getElementById('nav');
  var links = nav && nav.querySelector('.nav-links');
  if (!nav || !links || nav.querySelector('.nav-toggle')) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'nav-menu');
  btn.innerHTML = '<span></span><span></span><span></span><span class="sr">Menu</span>';

  var menu = document.createElement('div');
  menu.id = 'nav-menu';
  menu.className = 'nav-menu';
  [].forEach.call(links.querySelectorAll('a'), function (a) { menu.appendChild(a.cloneNode(true)); });

  nav.appendChild(btn);
  nav.appendChild(menu);

  function setTop() { menu.style.top = Math.max(0, nav.getBoundingClientRect().bottom) + 'px'; }
  function open(o) {
    nav.classList.toggle('menu-open', o);
    document.body.classList.toggle('menu-open', o);
    btn.setAttribute('aria-expanded', o ? 'true' : 'false');
    if (o) setTop();
  }
  btn.addEventListener('click', function () { open(!nav.classList.contains('menu-open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) open(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') open(false); });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) open(false);
    else if (nav.classList.contains('menu-open')) setTop();
  });
})();
