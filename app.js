/* ===========================================================
   TATTON PROJECTS — app.js
   Small, defensive. Nothing here can hide content.
   =========================================================== */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function paras(t) {
    return String(t || '').split('\n').filter(Boolean)
      .map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  }

  var list = (typeof PROJECTS !== 'undefined' && Array.isArray(PROJECTS)) ? PROJECTS : [];

  /* ---------- project cards ---------- */
  var grid = document.getElementById('projects');
  if (grid) {
    if (!list.length) {
      grid.innerHTML = '<p class="loc" style="grid-column:1/-1;padding:40px">' +
        'Projects unavailable — projects.js must sit in the same folder as this page.</p>';
    } else {
      grid.innerHTML = list.map(function (p) {
        return '' +
          '<a class="proj' + (p.live ? ' live' : '') + '" href="work/' + esc(p.id) + '.html" data-t="' + esc(p.sector) + '">' +
            '<div class="shot">' +
              (p.card
                ? '<img src="' + esc(p.card) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.remove()">'
                : '<span class="noimg">Photograph<br>' + esc(p.name) + '</span>') +
              (p.year ? '<span class="yr">' + esc(p.year) + '</span>' : '') +
            '</div>' +
            '<div class="pbody">' +
              '<div>' +
                (p.value ? '<div class="val">' + esc(p.value) + '</div>' : '') +
                '<h4>' + esc(p.name) + '</h4>' +
                '<p class="loc">' + esc(p.location) + '</p>' +
                '<p class="desc">' + esc(p.blurb) + '</p>' +
                (p.attribution ? '<span class="pre">Pre-Tatton · Dave Groom</span>' : '') +
              '</div>' +
              '<span class="type">' + esc(p.type) + '</span>' +
            '</div>' +
          '</a>';
      }).join('');
    }
  }

  /* ---------- filters ---------- */
  var cards = [].slice.call(document.querySelectorAll('.proj'));
  [].forEach.call(document.querySelectorAll('.filter'), function (btn) {
    btn.addEventListener('click', function () {
      [].forEach.call(document.querySelectorAll('.filter'), function (b) { b.classList.remove('on'); });
      btn.classList.add('on');
      var f = btn.dataset.f;
      cards.forEach(function (c) {
        c.classList.toggle('hide', f !== 'all' && c.dataset.t !== f);
      });
    });
  });

  /* ---------- case study overlay ---------- */
  var cs = document.getElementById('cs');
  var csBody = document.getElementById('csBody');
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');

  function openCase(id) {
    var p = null;
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) { p = list[i]; break; } }
    if (!p || !cs) return;

    var others = list.filter(function (x) { return x.id !== id; }).slice(0, 3);

    var facts = Object.keys(p.facts || {}).filter(function (k) { return p.facts[k]; })
      .map(function (k) { return '<li><span>' + esc(k) + '</span> <b>' + esc(p.facts[k]) + '</b></li>'; }).join('');

    var gal = (p.gallery || []).map(function (g) {
      return '<figure data-src="' + esc(g.src) + '" data-cap="' + esc(g.cap) + '">' +
             '<img src="' + esc(g.src) + '" alt="' + esc(g.cap) + '" loading="lazy" ' +
             'onerror="var f=this.closest(\'figure\'); if(f) f.remove();">' +
             '<figcaption>' + esc(g.cap) + '</figcaption></figure>';
    }).join('');

    csBody.innerHTML = '' +
      '<div class="cs-hero">' +
        (p.hero
          ? '<div class="bg"><img src="' + esc(p.hero) + '" alt="' + esc(p.name) + '" ' +
            'onerror="this.parentNode.className=\'noimg\'; this.remove();"></div>'
          : '<div class="noimg"></div>') +
        '<div class="cs-in">' +
          '<p class="eyebrow">' + esc(p.type) + (p.year ? ' · ' + esc(p.year) : '') + '</p>' +
          '<h1>' + esc(p.name) + '</h1>' +
          '<div class="cs-meta">' +
            (p.value ? '<span>Value <b>' + esc(p.value) + '</b></span>' : '') +
            '<span>Location <b>' + esc(p.location) + '</b></span>' +
            (p.client ? '<span>Client <b>' + esc(p.client) + '</b></span>' : '') +
          '</div>' +
          (p.attribution ? '<p class="attrib">' + esc(p.attribution) + '</p>' : '') +
        '</div>' +
      '</div>' +

      '<section><div class="cs-two">' +
        '<div class="cs-ov">' + paras(p.overview) + '</div>' +
        (facts
          ? '<div><p class="eyebrow" style="margin-bottom:18px">Project facts</p><ul class="facts">' + facts + '</ul></div>'
          : '<div></div>') +
      '</div></section>' +

      ((p.scope || []).length
        ? '<section class="scope-sec"><p class="eyebrow">What we did</p>' +
          '<h2>Scope of <em>works.</em></h2><ul class="scope">' +
          p.scope.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
          '</ul></section>'
        : '') +

      ((p.challenge || p.outcome)
        ? '<section><div class="co">' +
          (p.challenge ? '<div><p class="eyebrow">The challenge</p><h3>What made it hard.</h3><p>' + esc(p.challenge) + '</p></div>' : '') +
          (p.outcome   ? '<div><p class="eyebrow">The outcome</p><h3>How it finished.</h3><p>' + esc(p.outcome) + '</p></div>' : '') +
          '</div></section>'
        : '') +

      (gal ? '<div class="gal">' + gal + '</div>' : '') +

      '<section style="text-align:center">' +
        '<h2>Got something <em>similar?</em></h2>' +
        '<a href="mailto:info@tattonprojects.co.uk?subject=Project%20enquiry" class="btn btn-solid">Start a conversation →</a>' +
      '</section>' +

      '<div class="cs-next">' +
        others.map(function (o) {
          return '<button data-open="' + esc(o.id) + '">' +
                 (o.value ? '<div class="v">' + esc(o.value) + '</div>' : '') +
                 '<h4>' + esc(o.name) + '</h4>' +
                 '<p class="loc">' + esc(o.location) + '</p></button>';
        }).join('') +
      '</div>';

    cs.classList.add('open');
    cs.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
    cs.scrollTop = 0;

    [].forEach.call(csBody.querySelectorAll('.gal figure'), function (f) {
      f.addEventListener('click', function () {
        lbImg.src = f.dataset.src;
        lbCap.textContent = f.dataset.cap;
        lb.classList.add('on');
      });
    });
  }

  function closeCase() {
    if (!cs) return;
    cs.classList.remove('open');
    cs.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-open]') : null;
    if (t) { e.preventDefault(); openCase(t.dataset.open); }
  });

  var closeBtn = document.getElementById('csClose');
  if (closeBtn) closeBtn.addEventListener('click', closeCase);
  if (lb) lb.addEventListener('click', function () { lb.classList.remove('on'); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (lb) lb.classList.remove('on'); closeCase(); }
  });

  /* ---------- reveals + counters ---------- */
  function count(el) {
    var target = parseFloat(el.dataset.count);
    var pre = el.dataset.prefix || '';
    var suf = el.dataset.suffix || '';
    var dec = parseInt(el.dataset.dec || 0, 10);
    var comma = el.dataset.comma;
    function fmt(v) { return comma ? Math.round(v).toLocaleString('en-GB') : v.toFixed(dec); }

    if (reduce) { el.textContent = pre + fmt(target) + suf; return; }
    var t0 = performance.now();
    (function tick(now) {
      var p = Math.min((now - t0) / 1400, 1);
      el.textContent = pre + fmt(target * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        setTimeout(function () { e.target.classList.add('in'); }, i * 60);
        io.unobserve(e.target);
        var n = e.target.querySelector('[data-count]') ||
                (e.target.matches('[data-count]') ? e.target : null);
        if (n) count(n);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    [].forEach.call(document.querySelectorAll('.rise, .step, #struck, .sec-head'), function (el) { io.observe(el); });
    [].forEach.call(document.querySelectorAll('.floor-num'), function (el) {
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { count(el); o.disconnect(); } });
      }, { threshold: 0.4 });
      o.observe(el);
    });
  }

  /* Failsafe: nothing is ever allowed to stay invisible. */
  setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.rise, .step, #struck, .sec-head'), function (el) {
      el.classList.add('in');
    });
    [].forEach.call(document.querySelectorAll('[data-count]'), function (el) {
      if (el.textContent === '0' || el.textContent === '£0') count(el);
    });
  }, 2500);

  /* ---------- THE BUILDS: drawing constructs, then dissolves into the photo ----------
     NOTE: <svg>.className is a read-only SVGAnimatedString — assigning to it
     silently fails. Always setAttribute('class', ...). That bug cost us once.  */

  function makeBuild(svgId, stageSel, prefix, labelId, labels) {
    var svg    = document.getElementById(svgId);
    var stages = [].slice.call(document.querySelectorAll(stageSel));
    var label  = document.getElementById(labelId);
    if (!svg || !stages.length) return;

    var stack = svg.closest ? svg.closest('.stack') : svg.parentNode;
    var last  = stages.length;
    var current = 0;

    function set(n) {
      if (n === current) return;
      current = n;
      svg.setAttribute('class', svg.getAttribute('class').split(' ')[0] + ' ' + prefix + n);
      if (label) label.textContent = labels[n - 1];
      stages.forEach(function (st, i) {
        st.classList.toggle('done', i < n - 1);
        st.classList.toggle('on',   i === n - 1);
      });
      if (stack) stack.classList.toggle('done', n === last);
    }

    function pick() {
      var best = null, bestDist = Infinity;
      stages.forEach(function (st) {
        var r = st.getBoundingClientRect();
        var d = Math.abs((r.top + r.height / 2) - window.innerHeight / 2);
        if (r.bottom > 0 && r.top < window.innerHeight && d < bestDist) { bestDist = d; best = st; }
      });
      if (best) set(parseInt(best.dataset.s || best.dataset.o, 10));
    }

    set(1);

    if ('IntersectionObserver' in window) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { ticking = false; pick(); });
      }, { passive: true });
      pick();
    } else {
      set(last);
    }
  }

  makeBuild('house',  '.stg[data-s]', 's', 'buildLabel', [
    'Stage 01 — Appraise', 'Stage 02 — Cost plan', 'Stage 03 — Consent',
    'Stage 04 — Build',    'Stage 05 — Hand over'
  ]);

  makeBuild('office', '.stg[data-o]', 'f', 'officeLabel', [
    'Stage 01 — Strip out & survey', 'Stage 02 — Services first fix',
    'Stage 03 — Partitions & glazing', 'Stage 04 — Ceilings & lighting',
    'Stage 05 — Finishes & handover'
  ]);

  /* ---------- FAQ accordion ---------- */
  [].forEach.call(document.querySelectorAll('.faq-q'), function (q) {
    q.addEventListener('click', function () {
      var item = q.parentNode;
      var wasOpen = item.classList.contains('open');
      [].forEach.call(document.querySelectorAll('.faq-item'), function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });
  // open the first one so the section never looks like a dead list
  var firstFaq = document.querySelector('.faq-item');
  if (firstFaq) firstFaq.classList.add('open');

  /* ---------- form: sends in-page, confirms, and never hangs on failure ---------- */
  var form = document.querySelector('.enq-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn  = form.querySelector('button[type=submit]');
      var note = form.querySelector('.form-note');
      if (!note) {
        note = document.createElement('p');
        note.className = 'form-note';
        form.appendChild(note);
      }
      note.textContent = '';

      /* form not wired up yet — fail honestly instead of hanging */
      if (form.action.indexOf('PASTE-YOUR') !== -1) {
        note.textContent = "The form isn't connected yet — please call 0161 706 2907 or email info@tattonprojects.co.uk.";
        return;
      }

      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (r) {
        if (!r.ok) throw new Error('send failed');
        form.innerHTML = '<p class="form-done"><strong>Thanks — got it.</strong><br>We reply within one working day. If it’s urgent, call 0161 706 2907.</p>';
      }).catch(function () {
        note.textContent = "That didn't send. Please try again — or call 0161 706 2907 / email info@tattonprojects.co.uk.";
        if (btn) { btn.textContent = 'Send it over →'; btn.disabled = false; }
      });
    });
  }

  /* ---------- client ticker: duplicate so the loop is seamless ---------- */
  var track = document.getElementById('track');
  if (track) track.innerHTML += track.innerHTML;

  /* ---------- active section in the nav ---------- */
  var navLinks = [].slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var navTargets = navLinks.map(function (a) {
    return document.getElementById(a.getAttribute('href').slice(1));
  });
  function spy() {
    var idx = -1;
    navTargets.forEach(function (t, i) {
      if (t && t.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
    });
    navLinks.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  /* ---------- sticky nav + scroll progress ---------- */
  var nav  = document.getElementById('nav');
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
