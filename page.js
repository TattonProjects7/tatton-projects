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

  /* FAQ accordion (service pages) — first answer open so it never looks empty */
  var faqs = document.querySelectorAll('.faq-item');
  [].forEach.call(faqs, function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      [].forEach.call(faqs, function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });
  if (faqs.length) faqs[0].classList.add('open');

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
