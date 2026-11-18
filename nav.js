/* ===========================================================
   TATTON PROJECTS — nav.js
   The hamburger menu. styles.css decides when the button shows
   ("hamburger navigation": 1000px and below on every page,
   1279px and below on the home page, whose <nav> has class
   "nav-long"). This file never repeats those widths — it asks
   whether the button is showing — so the two can't drift apart.
   Wider than that, the desktop header is untouched.
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
  /* is the button on screen? (styles.css hides it above the breakpoint) */
  function folded() { return window.getComputedStyle(btn).display !== 'none'; }
  window.addEventListener('resize', function () {
    if (!folded()) open(false);
    else if (nav.classList.contains('menu-open')) setTop();
  });
})();
