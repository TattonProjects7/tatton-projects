/* ===========================================================
   TATTON PROJECTS — page.js
   Shared behaviour for the sub-pages. Deliberately tiny.
   =========================================================== */
(function () {
  'use strict';

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        setTimeout(function () { e.target.classList.add('in'); }, i * 70);
        io.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
    [].forEach.call(document.querySelectorAll('.rise'), function (el) { io.observe(el); });
  }

  /* nothing is ever allowed to stay invisible */
  setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.rise'), function (el) { el.classList.add('in'); });
  }, 2500);

  var nav = document.getElementById('nav');
  var prog = document.getElementById('prog');
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (nav) nav.classList.toggle('stuck', y > 40);
    if (prog) {
      var max = document.body.scrollHeight - window.innerHeight;
      prog.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
  }, { passive: true });
})();
