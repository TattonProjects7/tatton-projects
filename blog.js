/* ===========================================================
   TATTON PROJECTS — blog.js
   Renders posts.js. Nothing here can hide content.
   =========================================================== */

(function () {
  'use strict';

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function niceDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    var M = ['January','February','March','April','May','June',
             'July','August','September','October','November','December'];
    return d.getDate() + ' ' + M[d.getMonth()] + ' ' + d.getFullYear();
  }

  /* --- markdown-lite: ## heading, - bullet, > quote, [image:], [caption:] --- */
  function render(body) {
    var lines = String(body || '').split('\n');
    var out = [], list = null;

    function closeList() { if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; } }

    lines.forEach(function (raw) {
      var l = raw.trim();

      if (!l) { closeList(); return; }

      if (l.indexOf('## ') === 0) {
        closeList();
        out.push('<h2>' + inline(l.slice(3)) + '</h2>');
      } else if (l.indexOf('- ') === 0) {
        if (!list) list = [];
        list.push('<li>' + inline(l.slice(2)) + '</li>');
      } else if (l.indexOf('> ') === 0) {
        closeList();
        out.push('<blockquote>' + inline(l.slice(2)) + '</blockquote>');
      } else if (l.indexOf('[image:') === 0) {
        closeList();
        var f = l.slice(7).replace(']', '').trim();
        out.push('<figure class="post-img"><img src="images/' + esc(f) +
                 '" alt="" loading="lazy" onerror="var f=this.closest(\'figure\'); if(f) f.remove();"></figure>');
      } else if (l.indexOf('[caption:') === 0) {
        closeList();
        var c = l.slice(9).replace(']', '').trim();
        out.push('<p class="post-cap">' + esc(c) + '</p>');
      } else {
        closeList();
        out.push('<p>' + inline(l) + '</p>');
      }
    });
    closeList();
    return out.join('');
  }

  /* bold and italic only — deliberately minimal */
  function inline(t) {
    return esc(t)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  var list = (typeof POSTS !== 'undefined' && Array.isArray(POSTS)) ? POSTS : [];
  var wrap = document.getElementById('postList');

  if (wrap) {
    if (!list.length) {
      wrap.innerHTML = '<p class="loc" style="padding:40px">No posts yet.</p>';
    } else {
      wrap.innerHTML = list.map(function (p, i) {
        return '' +
        '<article class="post rise' + (i === 0 ? ' lead' : '') + '" data-post="' + esc(p.slug) + '">' +
          (p.image
            ? '<div class="post-shot"><img src="' + esc(p.image) + '" alt="' + esc(p.title) +
              '" loading="lazy" onerror="var d=this.closest(\'.post-shot\'); if(d) d.remove();"></div>'
            : '') +
          '<div class="post-body">' +
            '<p class="post-meta">' +
              '<span class="cat">' + esc(p.category || 'Note') + '</span>' +
              '<time datetime="' + esc(p.date) + '">' + niceDate(p.date) + '</time>' +
              (p.readTime ? '<span>' + esc(p.readTime) + ' read</span>' : '') +
            '</p>' +
            '<h2>' + esc(p.title) + '</h2>' +
            '<p class="post-sum">' + esc(p.summary) + '</p>' +
            '<span class="post-more">Read it →</span>' +
          '</div>' +
        '</article>';
      }).join('');
    }
  }

  /* ---------- open a post ---------- */
  var art = document.getElementById('article');
  var artBody = document.getElementById('artBody');
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');

  function open(slug) {
    var p = null;
    for (var i = 0; i < list.length; i++) { if (list[i].slug === slug) { p = list[i]; break; } }
    if (!p || !art) return;

    var others = list.filter(function (x) { return x.slug !== slug; }).slice(0, 2);

    artBody.innerHTML = '' +
      '<article class="art">' +
        '<header class="art-head">' +
          '<p class="post-meta">' +
            '<span class="cat">' + esc(p.category || 'Note') + '</span>' +
            '<time datetime="' + esc(p.date) + '">' + niceDate(p.date) + '</time>' +
            (p.readTime ? '<span>' + esc(p.readTime) + ' read</span>' : '') +
          '</p>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<p class="art-sum">' + esc(p.summary) + '</p>' +
          '<p class="art-by">By ' + esc(p.author || 'Dave Groom') + ' · Tatton Projects</p>' +
        '</header>' +
        (p.image
          ? '<div class="art-hero"><img src="' + esc(p.image) + '" alt="' + esc(p.title) +
            '" onerror="var d=this.closest(\'.art-hero\'); if(d) d.remove();"></div>'
          : '') +
        '<div class="art-body">' + render(p.body) + '</div>' +
        '<div class="art-cta">' +
          '<h2>Got a project like this?</h2>' +
          '<p class="lede" style="margin:0 auto 26px">Feasibility, cost plan, or a straight answer on whether a building is worth taking.</p>' +
          '<a href="index.html#enquire" class="btn btn-solid">Send an enquiry →</a>' +
        '</div>' +
        (others.length
          ? '<div class="art-next">' + others.map(function (o) {
              return '<button data-post="' + esc(o.slug) + '">' +
                     '<span class="cat">' + esc(o.category || 'Note') + '</span>' +
                     '<h4>' + esc(o.title) + '</h4>' +
                     '<p class="loc">' + niceDate(o.date) + '</p></button>';
            }).join('') + '</div>'
          : '') +
      '</article>';

    art.classList.add('open');
    art.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
    art.scrollTop = 0;
    if (history.replaceState) history.replaceState(null, '', '#' + p.slug);

    [].forEach.call(artBody.querySelectorAll('.post-img img'), function (im) {
      im.style.cursor = 'zoom-in';
      im.addEventListener('click', function () {
        lbImg.src = im.src; lbCap.textContent = ''; lb.classList.add('on');
      });
    });
  }

  function close() {
    if (!art) return;
    art.classList.remove('open');
    art.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-post]') : null;
    if (t) { e.preventDefault(); open(t.dataset.post); }
  });

  var cb = document.getElementById('artClose');
  if (cb) cb.addEventListener('click', close);
  if (lb) lb.addEventListener('click', function () { lb.classList.remove('on'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (lb) lb.classList.remove('on'); close(); }
  });

  /* deep link: blog.html#slug opens that post */
  if (location.hash.length > 1) open(location.hash.slice(1));

  /* ---------- reveals ---------- */
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
  setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.rise'), function (el) { el.classList.add('in'); });
  }, 2500);

  /* ---------- nav ---------- */
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
