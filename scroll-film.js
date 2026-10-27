/* ===========================================================
   TATTON PROJECTS — scroll-film.js
   A pinned cinematic clip the visitor scrubs with their scroll.
   The film is fetched once as a blob so seeking is instant, held
   at a frame when they pause, and played backwards on the way up.
   Reduced motion: the chapters simply stack over the poster and
   no video is fetched.
   =========================================================== */
(function () {
  'use strict';
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var smooth = function (v) { var x = clamp(v, 0, 1); return x * x * (3 - 2 * x); };

  function init(root) {
    var media = root.querySelector('.sf__media');
    var chapters = [].slice.call(root.querySelectorAll('.sf__chapter'));
    var steps = [].slice.call(root.querySelectorAll('.sf__steps button'));
    if (!media || !chapters.length) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 860px)');
    var n = chapters.length;
    var rootTop = 0, total = 1, current = 0, target = 0, dirty = true, destroyed = false;
    var video = null, ready = false, loading = false, activeIndex = -1;

    function layout() {
      rootTop = root.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      total = Math.max(root.offsetHeight - window.innerHeight, 1);
      dirty = true;
    }
    function load() {
      if (reduce || loading || ready || destroyed) return;
      loading = true;
      var src = mobile.matches && root.getAttribute('data-mobile-clip') ? root.getAttribute('data-mobile-clip') : root.getAttribute('data-clip');
      if (!src) return;
      fetch(src).then(function (r) { if (!r.ok) throw new Error(r.status); return r.blob(); }).then(function (blob) {
        if (destroyed) return;
        var v = document.createElement('video');
        v.muted = true; v.playsInline = true; v.preload = 'auto';
        v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
        v.src = URL.createObjectURL(blob);
        v.addEventListener('loadedmetadata', function () { ready = true; dirty = true; }, { once: true });
        v.addEventListener('seeked', function () { media.setAttribute('data-painted', 'true'); }, { once: true });
        v.addEventListener('error', function () { v.remove(); ready = false; }, { once: true });
        media.appendChild(v);
        video = v;
      }).catch(function () { loading = false; });
    }
    function read() {
      var pageY = window.scrollY || window.pageYOffset;
      var y = clamp(pageY - rootTop, 0, total);
      target = y / total;
      root.style.setProperty('--sf-progress', String(target));
      var idx = Math.min(n - 1, Math.floor(target * n));
      chapters.forEach(function (el, i) {
        var local = target * n - i, o = 0;
        if (local >= 0 && local <= 1) o = (i === n - 1 && local > 0.8) ? 1 : Math.min(i === 0 ? 1 : smooth(local / 0.3), smooth((1 - local) / 0.2));
        if (i === 0 && local < 0) o = 1;
        el.style.opacity = String(o);
        var copy = el.firstElementChild;
        if (copy) copy.style.transform = 'translateY(' + ((1 - o) * 24) + 'px)';
        el.classList.toggle('is-active', i === idx);
      });
      if (idx !== activeIndex) {
        activeIndex = idx;
        steps.forEach(function (b, i) { if (i === idx) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
      }
      if (pageY + window.innerHeight * 1.5 > rootTop) load();
    }
    function tick() {
      if (destroyed) return;
      if (dirty) { dirty = false; read(); }
      if (video && ready && !video.seeking) {
        current += (target - current) * 0.18;
        var t = clamp(current, 0, 0.999) * (video.duration || 1);
        if (Math.abs(video.currentTime - t) > (mobile.matches ? 0.02 : 0.006)) { try { video.currentTime = t; } catch (e) { /* keep frame */ } }
      }
      window.requestAnimationFrame(tick);
    }
    steps.forEach(function (b, i) {
      b.addEventListener('click', function () {
        var top = root.getBoundingClientRect().top + window.scrollY;
        var tot = Math.max(root.offsetHeight - window.innerHeight, 1);
        window.scrollTo({ top: top + tot * (i + 0.35) / n, behavior: reduce ? 'auto' : 'smooth' });
      });
    });
    window.addEventListener('scroll', function () { dirty = true; }, { passive: true });
    window.addEventListener('resize', layout);
    window.addEventListener('touchstart', function () { if (video && mobile.matches) { var p = video.play(); if (p && p.then) p.then(function () { video.pause(); }).catch(function () {}); } }, { once: true, passive: true });
    layout();
    window.requestAnimationFrame(tick);
  }

  [].forEach.call(document.querySelectorAll('.sf[data-clip]'), init);
})();
