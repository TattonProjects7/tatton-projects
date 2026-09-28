/* ===========================================================
   build-pages.js
   -----------------------------------------------------------
   Reads projects.js and writes a real, indexable HTML page for
   every project into /work, plus a /work.html index.

   YOU DO NOT NORMALLY NEED TO RUN THIS.
   Vercel runs it automatically every time you commit.

   To run it by hand:   node build-pages.js
   =========================================================== */

const fs = require('fs');
const path = require('path');

const SITE = 'https://www.tatton-projects.co.uk';

/* ---------- load projects.js without a module system ---------- */
const src = fs.readFileSync(path.join(__dirname, 'projects.js'), 'utf8');
const PROJECTS = new Function(src + '; return PROJECTS;')();

/* ---------- load posts.js the same way ---------- */
const postsSrc = fs.readFileSync(path.join(__dirname, 'posts.js'), 'utf8');
const POSTS = new Function(postsSrc + '; return POSTS;')();

/* ---------- and services.js ---------- */
const servicesSrc = fs.readFileSync(path.join(__dirname, 'services.js'), 'utf8');
const SERVICES = new Function(servicesSrc + '; return SERVICES;')();

/* ---------- helpers ---------- */
const esc = (t) => String(t == null ? '' : t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const plain = (t) => String(t == null ? '' : t)
  .replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

const paras = (t) => String(t || '').split('\n').filter(Boolean)
  .map((p) => `<p>${esc(p)}</p>`).join('\n            ');

const clip = (t, n) => {
  const s = plain(t);
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
};

/* ---------- shared chrome ---------- */
const nav = (depth, active) => {
  const up = depth ? '../' : '';
  const on = (k) => (k === active ? ' class="active"' : '');
  return `<nav id="nav" aria-label="Main navigation">
  <a href="${up}index.html" class="brand">
    <img src="${up}images/logo-horizontal-light-type.png" alt="Tatton Projects"
         onerror="this.outerHTML='<span>Tatton Projects</span>'">
  </a>
  <div class="nav-links">
    <a href="${up}services.html"${on('services')}>Services</a>
    <a href="${up}work.html"${on('work')}>Work</a>
    <a href="${up}costs.html">Costs</a>
    <a href="${up}blog.html">Insight</a>
    <a href="${up}index.html#land">Land</a>
    <a href="${up}invest.html">Partner</a>
    <a href="tel:01617062907" class="nav-call">0161 706 2907</a>
  </div>
</nav>`;
};

const footer = (depth) => {
  const up = depth ? '../' : '';
  return `<footer>
  <div class="foot-grid">
    <div class="rise">
      <h3>Let's talk about the site.</h3>
      <div class="cta-row" style="margin-top:26px">
        <a href="tel:01617062907" class="btn btn-solid">Call 0161 706 2907</a>
        <a href="${up}index.html#enquire" class="btn btn-ghost">Send an enquiry</a>
      </div>
    </div>
    <div class="rise">
      <p class="foot-lbl">Contact</p>
      <a href="tel:01617062907">0161 706 2907</a>
      <a href="mailto:info@tattonprojects.co.uk">info@tattonprojects.co.uk</a>
      <address>Tatton Projects<br>Suite 15, Peel House<br>30 The Downs<br>Altrincham WA14 2PX</address>
    </div>
    <div class="rise">
      <p class="foot-lbl">More</p>
      <a href="${up}services.html">Construction services</a>
      <a href="${up}work.html">Selected work</a>
      <a href="${up}costs.html">What things cost</a>
      <a href="${up}blog.html">Insight</a>
      <a href="https://www.silopod.co.uk" rel="noopener">SiloPod — acoustic pods</a>
      <a href="https://www.esti-mate.app" rel="noopener">EstiMate — quoting &amp; contracts app</a>
      <a href="https://www.apex-carnivore.com" rel="noopener">APEX — carnivore recipes &amp; training app</a>
      <a href="${up}invest.html">Investors</a>
    </div>
  </div>
  <div class="foot-btm">
    <span>© 2026 Tatton Project Management Ltd · Company no. 14163724 · <b>A Tatton Holdings company</b></span>
    <span>New builds · Developments · Fit-out</span>
  </div>
</footer>`;
};

const head = ({ title, desc, canonical, image, depth, extraSchema, ogType = 'article', active }) => {
  const up = depth ? '../' : '';
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0C0C0D">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large">

<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Tatton Projects">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${image}">

<link rel="icon" href="${up}images/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="${up}images/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Archivo:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}styles.css">
${extraSchema}
</head>
<body>
<script>document.documentElement.className += ' js';</script>

<a class="skip" href="#main">Skip to content</a>
<div id="prog"></div>

${nav(depth, active)}
`;
};

/* ---------- one project page ---------- */
function projectPage(p, i, all) {
  const url = `${SITE}/work/${p.id}`;
  const img = p.hero ? `${SITE}/${p.hero}` : `${SITE}/images/vanguard-01-breakout.jpg`;

  const bits = [p.type, p.location, p.value].filter(Boolean).join(' · ');
  const title = `${p.name} — ${bits} | Tatton Projects`;
  const desc = clip(p.blurb, 155);

  const others = all.filter((x) => x.id !== p.id).slice(0, 3);

  const facts = Object.keys(p.facts || {})
    .filter((k) => p.facts[k])
    .map((k) => `<li><span>${esc(k)}</span> <b>${esc(p.facts[k])}</b></li>`)
    .join('\n            ');

  const gallery = (p.gallery || []).map((g) =>
    `<figure data-src="../${esc(g.src)}" data-cap="${esc(g.cap)}">
        <img src="../${esc(g.src)}" alt="${esc(g.cap)}" loading="lazy"
             onerror="var f=this.closest('figure'); if(f) f.remove();">
        <figcaption>${esc(g.cap)}</figcaption>
      </figure>`).join('\n      ');

  /* --- schema: Article + Breadcrumb + images --- */
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${p.name} — ${p.type}${p.location ? ', ' + p.location : ''}`,
    description: plain(p.blurb),
    articleBody: plain(p.overview),
    datePublished: (p.year && /^\d{4}$/.test(p.year)) ? `${p.year}-01-01` : '2026-01-01',
    author: { '@type': 'Person', name: 'Dave Groom' },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE}/#organisation`,
      name: 'Tatton Projects',
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo-horizontal-light-type.png` }
    },
    image: [img].concat((p.gallery || []).slice(0, 4).map((g) => `${SITE}/${g.src}`)),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: [
      { '@type': 'Thing', name: p.type },
      { '@type': 'Place', name: p.location }
    ]
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE}/work` },
      { '@type': 'ListItem', position: 3, name: p.name, item: url }
    ]
  };

  const schema = [article, crumbs]
    .map((d) => `<script type="application/ld+json">\n${JSON.stringify(d, null, 2)}\n</script>`)
    .join('\n');

  return head({ title, desc, canonical: url, image: img, depth: 1, extraSchema: schema }) + `
<main id="main">

<article>

  <div class="crumb">
    <a href="../index.html">Home</a> <span>/</span>
    <a href="../work.html">Work</a> <span>/</span>
    <b>${esc(p.name)}</b>
  </div>

  <header class="cs-hero">
    ${p.hero
      ? `<div class="bg"><img src="../${esc(p.hero)}" alt="${esc(p.name)}"
           onerror="this.parentNode.className='noimg'; this.remove();"></div>`
      : `<div class="noimg"></div>`}
    <div class="cs-in">
      <p class="eyebrow">${esc(p.type)}${p.year ? ' · ' + esc(p.year) : ''}</p>
      <h1>${esc(p.name)}</h1>
      <div class="cs-meta">
        ${p.value ? `<span>Value <b>${esc(p.value)}</b></span>` : ''}
        <span>Location <b>${esc(p.location)}</b></span>
        ${p.client ? `<span>Client <b>${esc(p.client)}</b></span>` : ''}
      </div>
      ${p.attribution ? `<p class="attrib">${esc(p.attribution)}</p>` : ''}
    </div>
  </header>

  <section>
    <div class="cs-two">
      <div class="cs-ov">
        ${paras(p.overview)}
      </div>
      ${facts ? `<div>
        <p class="eyebrow" style="margin-bottom:18px">Project facts</p>
        <ul class="facts">
            ${facts}
        </ul>
      </div>` : '<div></div>'}
    </div>
  </section>

  ${(p.scope || []).length ? `<section class="scope-sec">
    <p class="eyebrow">What we did</p>
    <h2>Scope of <em>works.</em></h2>
    <ul class="scope">
      ${p.scope.map((s) => `<li>${esc(s)}</li>`).join('\n      ')}
    </ul>
  </section>` : ''}

  ${(p.challenge || p.outcome) ? `<section>
    <div class="co">
      ${p.challenge ? `<div><p class="eyebrow">The challenge</p><h3>What made it hard.</h3><p>${esc(p.challenge)}</p></div>` : ''}
      ${p.outcome ? `<div><p class="eyebrow">The outcome</p><h3>How it finished.</h3><p>${esc(p.outcome)}</p></div>` : ''}
    </div>
  </section>` : ''}

  ${gallery ? `<div class="gal">
      ${gallery}
  </div>` : ''}

  <section style="text-align:center">
    <h2 style="font-family:var(--serif);font-weight:400;font-size:clamp(28px,3.6vw,46px);line-height:1.08;margin-bottom:16px">Got something <em style="font-style:italic;color:var(--gold)">similar?</em></h2>
    <p class="lede" style="margin:0 auto 28px">Send us the floor, the plot or the drawing. You'll get a written cost plan from the person who'd run the job.</p>
    <div class="cta-row" style="justify-content:center">
      <a href="../index.html#enquire" class="btn btn-solid">Start a conversation →</a>
      <a href="tel:01617062907" class="btn btn-ghost">0161 706 2907</a>
    </div>
  </section>

</article>

<div class="cs-next">
  ${others.map((o) => `<a href="${esc(o.id)}.html">
    ${o.value ? `<div class="v">${esc(o.value)}</div>` : ''}
    <h4>${esc(o.name)}</h4>
    <p class="loc">${esc(o.location)}</p>
  </a>`).join('\n  ')}
</div>

</main>

${footer(1)}

<div id="lb"><img id="lbImg" alt=""><span class="cap" id="lbCap"></span></div>

<script src="../page.js"></script>
<script>
/* gallery lightbox */
(function () {
  var lb = document.getElementById('lb'),
      im = document.getElementById('lbImg'),
      cp = document.getElementById('lbCap');
  [].forEach.call(document.querySelectorAll('.gal figure'), function (f) {
    f.addEventListener('click', function () {
      im.src = f.dataset.src; cp.textContent = f.dataset.cap; lb.classList.add('on');
    });
  });
  if (lb) lb.addEventListener('click', function () { lb.classList.remove('on'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb) lb.classList.remove('on');
  });
})();
</script>
</body>
</html>
`;
}

/* ---------- the /work index ---------- */
function workIndex(all) {
  const schema = [{
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Selected work — Tatton Projects',
    description: 'Completed new build homes, housing developments and commercial fit-out projects across Manchester and Cheshire.',
    url: `${SITE}/work`,
    hasPart: all.map((p) => ({
      '@type': 'Article',
      headline: p.name,
      description: plain(p.blurb),
      url: `${SITE}/work/${p.id}`
    }))
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE}/work` }
    ]
  }].map((d) => `<script type="application/ld+json">\n${JSON.stringify(d, null, 2)}\n</script>`).join('\n');

  const cards = all.map((p) => `
    <a class="proj${p.live ? ' live' : ''}" href="work/${esc(p.id)}.html" data-t="${esc(p.sector)}">
      <div class="shot">
        ${p.card
          ? `<img src="${esc(p.card)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">`
          : `<span class="noimg">Photograph<br>${esc(p.name)}</span>`}
        ${p.year ? `<span class="yr">${esc(p.year)}</span>` : ''}
      </div>
      <div class="pbody">
        <div>
          ${p.value ? `<div class="val">${esc(p.value)}</div>` : ''}
          <h4>${esc(p.name)}</h4>
          <p class="loc">${esc(p.location)}</p>
          <p class="desc">${esc(p.blurb)}</p>
          ${p.attribution ? `<span class="pre">Pre-Tatton · Dave Groom</span>` : ''}
        </div>
        <span class="type">${esc(p.type)}</span>
      </div>
    </a>`).join('\n');

  return head({
    title: 'Selected Work | Office Fit-Out, New Builds & Refurbishment — Tatton Projects',
    desc: 'Completed projects across Manchester and Cheshire — £2M Cat B office fit-out, new build homes, live-building refurbishment and retail shopfits.',
    canonical: `${SITE}/work`,
    image: `${SITE}/images/vanguard-01-breakout.jpg`,
    depth: 0,
    extraSchema: schema
  }) + `
<main id="main">

<header class="page-head">
  <div class="hero-inner">
    <div class="crumb" style="margin-bottom:20px">
      <a href="index.html">Home</a> <span>/</span> <b>Work</b>
    </div>
    <p class="eyebrow ln"><span style="animation-delay:.3s">Selected work</span></p>
    <h1>
      <span class="ln"><span style="animation-delay:.45s">A hundred and ten projects delivered.</span></span>
      <span class="ln"><span style="animation-delay:.58s"><em>${all.length} we can show you.</em></span></span>
    </h1>
    <div class="ln"><p class="lede" style="animation-delay:.75s">Over 110 completed since 2020. Most clients would rather we didn't publish theirs — these are the ones we can. Every project below has its own page.</p></div>
  </div>
</header>

<section>
  <div class="filters rise">
    <button class="filter on" data-f="all">All</button>
    <button class="filter" data-f="fitout">Fit-out</button>
    <button class="filter" data-f="resi">New build &amp; homes</button>
    <button class="filter" data-f="retail">Retail</button>
    <button class="filter" data-f="hosp">Hospitality</button>
  </div>

  <div class="projects">${cards}
  </div>
</section>

</main>

${footer(0)}

<script src="page.js"></script>
<script>
(function () {
  var cards = [].slice.call(document.querySelectorAll('.proj'));
  [].forEach.call(document.querySelectorAll('.filter'), function (b) {
    b.addEventListener('click', function () {
      [].forEach.call(document.querySelectorAll('.filter'), function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      var f = b.dataset.f;
      cards.forEach(function (c) { c.classList.toggle('hide', f !== 'all' && c.dataset.t !== f); });
    });
  });
})();
</script>
</body>
</html>
`;
}

/* ---------- blog posts: markdown-lite renderer (server port of blog.js) ---------- */
const inlineMd = (t) => esc(t)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>');

function renderPostBody(body) {
  const lines = String(body || '').split('\n');
  const out = [];
  let list = null;
  const closeList = () => { if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; } };

  lines.forEach((raw) => {
    const l = raw.trim();
    if (!l) { closeList(); return; }
    if (l.indexOf('## ') === 0) {
      closeList(); out.push('<h2>' + inlineMd(l.slice(3)) + '</h2>');
    } else if (l.indexOf('- ') === 0) {
      if (!list) list = [];
      list.push('<li>' + inlineMd(l.slice(2)) + '</li>');
    } else if (l.indexOf('> ') === 0) {
      closeList(); out.push('<blockquote>' + inlineMd(l.slice(2)) + '</blockquote>');
    } else if (l.indexOf('[image:') === 0) {
      closeList();
      const f = l.slice(7).replace(']', '').trim();
      out.push('<figure class="post-img"><img src="../images/' + esc(f) +
               '" alt="" loading="lazy" onerror="var g=this.closest(\'figure\'); if(g) g.remove();"></figure>');
    } else if (l.indexOf('[caption:') === 0) {
      closeList();
      const c = l.slice(9).replace(']', '').trim();
      out.push('<p class="post-cap">' + esc(c) + '</p>');
    } else {
      closeList(); out.push('<p>' + inlineMd(l) + '</p>');
    }
  });
  closeList();
  return out.join('\n      ');
}

/* ---------- one static blog post page (so each post can rank on its own) ---------- */
function blogPostPage(p, all) {
  const url = `${SITE}/blog/${p.slug}`;
  const img = p.image ? `${SITE}/${p.image}` : `${SITE}/images/vanguard-01-breakout.jpg`;
  const title = `${p.title} | Tatton Projects`;
  const desc = clip(p.summary, 155);
  const others = all.filter((x) => x.slug !== p.slug).slice(0, 2);

  const posting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: plain(p.summary),
    datePublished: p.date,
    dateModified: p.date,
    author: { '@type': 'Person', name: p.author || 'Dave Groom' },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE}/#organisation`,
      name: 'Tatton Projects',
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo-horizontal-light-type.png` }
    },
    image: img,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Insight', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: p.title, item: url }
    ]
  };

  const schema = [posting, crumbs]
    .map((d) => `<script type="application/ld+json">\n${JSON.stringify(d, null, 2)}\n</script>`)
    .join('\n');

  return head({ title, desc, canonical: url, image: img, depth: 1, extraSchema: schema }) + `
<style>
/* Standalone page version of the blog reader's headline style */
.art h1 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(30px, 4.4vw, 54px); line-height: 1.08;
  letter-spacing: -.015em; margin: 6px 0 20px; color: var(--stone);
}
.art { padding-bottom: 40px; }
</style>
<main id="main">

<article class="art">
  <div class="crumb" style="margin-bottom:26px">
    <a href="../index.html">Home</a> <span>/</span>
    <a href="../blog.html">Insight</a> <span>/</span>
    <b>${esc(p.title)}</b>
  </div>

  <header class="art-head">
    <p class="post-meta">
      <span class="cat">${esc(p.category || 'Note')}</span>
      <time datetime="${esc(p.date)}">${esc(p.date)}</time>
      ${p.readTime ? `<span>${esc(p.readTime)} read</span>` : ''}
    </p>
    <h1>${esc(p.title)}</h1>
    <p class="art-sum">${esc(p.summary)}</p>
    <p class="art-by">By ${esc(p.author || 'Dave Groom')} · Tatton Projects</p>
  </header>
  ${p.image ? `<div class="art-hero"><img src="../${esc(p.image)}" alt="${esc(p.title)}"
      onerror="var d=this.closest('.art-hero'); if(d) d.remove();"></div>` : ''}
  <div class="art-body">
      ${renderPostBody(p.body)}
  </div>

  <div class="art-cta">
    <h2>Got a project like this?</h2>
    <p class="lede" style="margin:0 auto 26px">Feasibility, cost plan, or a straight answer on whether a building is worth taking.</p>
    <div class="cta-row" style="justify-content:center">
      <a href="../index.html#enquire" class="btn btn-solid">Send an enquiry →</a>
      <a href="tel:01617062907" class="btn btn-ghost">0161 706 2907</a>
    </div>
  </div>

  ${others.length ? `<div class="art-next">
    ${others.map((o) => `<a href="${esc(o.slug)}.html" style="display:block;color:inherit;text-decoration:none;padding:30px;background:var(--ink)">
      <span class="cat">${esc(o.category || 'Note')}</span>
      <h4 style="margin-top:10px">${esc(o.title)}</h4>
      <p class="loc">${esc(o.date)}</p>
    </a>`).join('\n    ')}
  </div>` : ''}
</article>

</main>

${footer(1)}

<script src="../page.js"></script>
</body>
</html>
`;
}

/* ---------- service pages (from services.js) ---------- */
/* "*words*" in a heading show in gold italics */
const gold = (t) => esc(t).replace(/\*(.+?)\*/g, '<em>$1</em>');

const ldScripts = (docs) => docs
  .map((d) => `<script type="application/ld+json">\n${JSON.stringify(d, null, 2)}\n</script>`)
  .join('\n');

const projectCard = (p) => `<a class="proj" href="work/${esc(p.id)}.html">
      <div class="shot">
        ${p.card
          ? `<img src="${esc(p.card)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">`
          : `<span class="noimg">Photograph<br>${esc(p.name)}</span>`}
        ${p.year ? `<span class="yr">${esc(p.year)}</span>` : ''}
      </div>
      <div class="pbody">
        <div>
          ${p.value ? `<div class="val">${esc(p.value)}</div>` : ''}
          <h4>${esc(p.name)}</h4>
          <p class="loc">${esc(p.location)}</p>
          <p class="desc">${esc(p.blurb)}</p>
          ${p.attribution ? `<span class="pre">Pre-Tatton · Dave Groom</span>` : ''}
        </div>
        <span class="type">${esc(p.type)}</span>
      </div>
    </a>`;

const callButtons = (label, center) => `<div class="cta-row"${center ? ' style="justify-content:center"' : ''}>
        <a href="index.html#enquire" class="btn btn-solid">${esc(label)}</a>
        <a href="tel:01617062907" class="btn btn-ghost">0161 706 2907</a>
      </div>`;

function servicePage(s, all) {
  const url = `${SITE}/${s.id}`;
  const img = `${SITE}/${s.hero}`;
  const others = all.filter((x) => x.id !== s.id);
  const work = (s.projects || []).map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const faqs = s.faqs || [];

  const schema = ldScripts([{
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: s.name,
    description: s.description,
    url,
    image: img,
    provider: { '@id': `${SITE}/#organisation` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' }
    ],
    serviceType: s.serviceType
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      { '@type': 'ListItem', position: 3, name: s.name, item: url }
    ]
  }].concat(faqs.length ? [{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  }] : []));

  return head({ title: s.title, desc: s.description, canonical: url, image: img, depth: 0, extraSchema: schema, ogType: 'website', active: 'services' }) + `
<!-- Built by build-pages.js from services.js. Edit services.js, not this file. -->
<main id="main" class="svc">

<header class="svc-hero">
  <div class="svc-hero-in">
    <div class="svc-copy">
      <div class="crumb">
        <a href="index.html">Home</a> <span>/</span>
        <a href="services.html">Services</a> <span>/</span>
        <b>${esc(s.short)}</b>
      </div>
      <p class="eyebrow">${esc(s.eyebrow)}</p>
      <h1>${gold(s.h1)}</h1>
      <p class="lede">${esc(s.lede)}</p>
      ${callButtons(s.ctaButton)}
      <div class="hero-meta">
        ${(s.heroFacts || []).map(([k, v]) => `<span>${esc(k)} <b>${esc(v)}</b></span>`).join('\n        ')}
      </div>
    </div>
    <figure class="svc-shot">
      <img src="${esc(s.hero)}" alt="${esc(s.heroCaption)}"
           onerror="var f=this.closest('figure'); if(f) f.remove();">
      <figcaption>${esc(s.heroCaption)}</figcaption>
    </figure>
  </div>
</header>

<section>
  <div class="cs-two">
    <div class="svc-ov rise">
      <p class="eyebrow">${esc(s.introEyebrow)}</p>
      <h2 class="svc-h2">${gold(s.introHeading)}</h2>
      ${(s.intro || []).map((t, i) => `<p${i === 0 ? ' class="big"' : ''}>${esc(t)}</p>`).join('\n      ')}
    </div>
    <aside class="rise">
      <p class="eyebrow" style="margin-bottom:18px">${esc(s.factsTitle)}</p>
      <ul class="facts">
        ${(s.facts || []).map(([k, v]) => `<li><span>${esc(k)}</span> <b>${esc(v)}</b></li>`).join('\n        ')}
      </ul>
      ${s.factsNote ? `<p class="svc-note">${esc(s.factsNote)} <a href="costs.html">Full cost guide →</a></p>` : ''}
    </aside>
  </div>
</section>

<section class="svc-what">
  <div class="sec-head rise">
    <p class="eyebrow">What we do</p>
    <h2>${gold(s.cardsHeading)}</h2>
  </div>
  <div class="cav-grid">
    ${(s.cards || []).map(([h, p], i) => `<div class="cav rise">
      <span class="cav-n">${String(i + 1).padStart(2, '0')}</span>
      <h3>${esc(h)}</h3>
      <p>${esc(p)}</p>
    </div>`).join('\n    ')}
  </div>
</section>

${(s.scope || []).length ? `<section class="scope-sec">
  <p class="eyebrow">Scope</p>
  <h2>What's <em>included.</em></h2>
  <ul class="scope">
    ${s.scope.map((x) => `<li>${esc(x)}</li>`).join('\n    ')}
  </ul>
</section>` : ''}

${work.length ? `<section>
  <div class="svc-head rise">
    <div>
      <p class="eyebrow">Recent work</p>
      <h2 class="svc-h2">Projects like this, <em>delivered.</em></h2>
      ${s.projectsNote ? `<p class="svc-note">${esc(s.projectsNote)}</p>` : ''}
    </div>
    <a class="svc-more" href="work.html">All work →</a>
  </div>
  <div class="projects">
    ${work.map(projectCard).join('\n    ')}
  </div>
</section>` : ''}

${faqs.length ? `<section class="faq">
  <div class="sec-head rise">
    <p class="eyebrow">Straight answers</p>
    <h2>Questions we get <em>asked.</em></h2>
  </div>
  <div class="faq-list rise">
    ${faqs.map(([q, a]) => `<div class="faq-item">
      <button class="faq-q" type="button">${esc(q)}<i></i></button>
      <div class="faq-a"><p>${esc(a)}</p></div>
    </div>`).join('\n    ')}
  </div>
</section>` : ''}

<section class="svc-others">
  <div class="sec-head rise">
    <p class="eyebrow">Also from Tatton</p>
    <h2>Other <em>services.</em></h2>
  </div>
  <div class="sectors">
    ${others.map((o) => `<a class="sector" href="${esc(o.id)}.html">
      <span class="k">${esc(o.sector)}</span>
      <h4>${esc(o.short)}</h4>
      <p>${esc(o.summary)}</p>
    </a>`).join('\n    ')}
  </div>
</section>

<section class="svc-cta">
  <h2 class="svc-h2">${gold(s.ctaHeading)}</h2>
  <p class="lede">${esc(s.ctaText)}</p>
  ${callButtons(s.ctaButton, true)}
</section>

</main>

${footer(0)}

<script src="page.js"></script>
</body>
</html>
`;
}

/* ---------- the /services index ---------- */
function servicesIndex(all) {
  const url = `${SITE}/services`;
  const groups = [
    ['Commercial', 'Fit-out and refurbishment'],
    ['Residential', 'Homes and development']
  ];

  const schema = ldScripts([{
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Construction & fit-out services — Tatton Projects',
    url,
    hasPart: all.map((s) => ({ '@type': 'Service', '@id': `${SITE}/${s.id}#service`, name: s.name, url: `${SITE}/${s.id}` }))
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: url }
    ]
  }]);

  return head({
    title: 'Construction & Fit-Out Services Manchester | Tatton Projects',
    desc: 'Tatton Projects delivers office fit-out, shopfitting, commercial refurbishment, major extensions and new-build homes across Manchester and Cheshire.',
    canonical: url,
    image: `${SITE}/images/vanguard-01-breakout.jpg`,
    depth: 0,
    extraSchema: schema,
    ogType: 'website',
    active: 'services'
  }) + `
<!-- Built by build-pages.js from services.js. Edit services.js, not this file. -->
<main id="main">

<header class="page-head">
  <div class="hero-inner">
    <div class="crumb" style="margin-bottom:20px">
      <a href="index.html">Home</a> <span>/</span> <b>Services</b>
    </div>
    <p class="eyebrow ln"><span style="animation-delay:.3s">Construction · Fit-out · Residential</span></p>
    <h1><span class="ln"><span style="animation-delay:.45s">What we <em>build.</em></span></span></h1>
    <div class="ln"><p class="lede" style="animation-delay:.6s">Commercial fit-out and refurbishment across Manchester and selected UK locations, alongside substantial residential construction across Greater Manchester and Cheshire.</p></div>
  </div>
</header>

<section>
  ${groups.map(([sector, label]) => `<div class="svc-group">
    <p class="eyebrow">${esc(label)}</p>
    <div class="svc-list">
      ${all.filter((s) => s.sector === sector).map((s) => `<a class="proj" href="${esc(s.id)}.html">
        <div class="shot">
          <img src="${esc(s.card || s.hero)}" alt="${esc(s.short)}" loading="lazy" onerror="this.remove()">
        </div>
        <div class="pbody">
          <div>
            <p class="loc">${esc(s.eyebrow.split('·').pop().trim())}</p>
            <h4>${esc(s.short)}</h4>
            <p class="desc">${esc(s.summary)}</p>
          </div>
          <span class="type">Explore →</span>
        </div>
      </a>`).join('\n      ')}
    </div>
  </div>`).join('\n  ')}
</section>

<div class="band">
  <div><div class="num">£8m+</div><div class="lbl">Turnover since 2020</div></div>
  <div><div class="num">110+</div><div class="lbl">Projects completed</div></div>
  <div><div class="num">20+</div><div class="lbl">Years on site — founder</div></div>
  <div><div class="num">2020</div><div class="lbl">Company founded</div></div>
</div>

<section class="svc-cta">
  <h2 class="svc-h2">Not sure which fits? <em>Ask.</em></h2>
  <p class="lede">Send us the floor, the plot or the drawing. You'll get a straight answer from the person who'd run the job — and a written cost plan if it's right for us.</p>
  ${callButtons('Start a conversation →', true)}
</section>

</main>

${footer(0)}

<script src="page.js"></script>
</body>
</html>
`;
}

/* ---------- write everything ---------- */
try {
  const dir = path.join(__dirname, 'work');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  PROJECTS.forEach((p, i) => {
    fs.writeFileSync(path.join(dir, p.id + '.html'), projectPage(p, i, PROJECTS));
  });
  fs.writeFileSync(path.join(__dirname, 'work.html'), workIndex(PROJECTS));

  /* ---------- blog post pages ---------- */
  const bdir = path.join(__dirname, 'blog');
  if (!fs.existsSync(bdir)) fs.mkdirSync(bdir);
  POSTS.forEach((p) => {
    fs.writeFileSync(path.join(bdir, p.slug + '.html'), blogPostPage(p, POSTS));
  });

  /* ---------- service pages + /services ---------- */
  SERVICES.forEach((s) => {
    fs.writeFileSync(path.join(__dirname, s.id + '.html'), servicePage(s, SERVICES));
  });
  fs.writeFileSync(path.join(__dirname, 'services.html'), servicesIndex(SERVICES));

  /* ---------- sitemap ---------- */
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE}/`, pri: '1.0', freq: 'monthly' },
    { loc: `${SITE}/work`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/costs`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/blog`, pri: '0.8', freq: 'weekly' },
    { loc: `${SITE}/invest`, pri: '0.7', freq: 'monthly' },
    { loc: `${SITE}/services`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/office-fit-out-manchester`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/shopfitting-manchester`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/commercial-refurbishment-manchester`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/extension-builders-altrincham`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/extension-builders-hale`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/new-build-homes-cheshire`, pri: '0.9', freq: 'monthly' },
    { loc: `${SITE}/housing-developments-cheshire`, pri: '0.9', freq: 'monthly' }
  ].concat(PROJECTS.map((p) => ({ loc: `${SITE}/work/${p.id}`, pri: '0.8', freq: 'yearly' })))
   .concat(POSTS.map((p) => ({ loc: `${SITE}/blog/${p.slug}`, pri: '0.7', freq: 'yearly' })));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => {
    const proj = PROJECTS.find((p) => u.loc.endsWith('/' + p.id));
    const imgs = proj
      ? [proj.hero].concat((proj.gallery || []).map((g) => g.src)).filter(Boolean)
          .map((s) => `    <image:image><image:loc>${SITE}/${s}</image:loc></image:image>`).join('\n')
      : '';
    return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
${imgs}
  </url>`;
  }).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);

  console.log(`✓ ${PROJECTS.length} project pages written to /work`);
  console.log(`✓ ${POSTS.length} blog post pages written to /blog`);
  console.log(`✓ ${SERVICES.length} service pages and services.html written`);
  console.log('✓ work.html index written');
  console.log(`✓ sitemap.xml written — ${urls.length} URLs`);
} catch (err) {
  /* Never let a build error take the live site down.
     If this fails, the previously generated pages stay in place. */
  console.error('build-pages.js failed, keeping existing pages:', err.message);
  process.exit(0);
}
