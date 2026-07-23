# Tatton Projects — website

Static site. No build step, no framework, no dependencies.
Open `index.html` in a browser and it runs.

**→ Read `GO-LIVE.md` for the full step-by-step to get this online.**

## Files

    index.html     home
    costs.html     the cost guide  (your best SEO page)
    blog.html      blog listing
    styles.css     all styling, all three pages

    projects.js    ← EDIT THIS to add project work
    posts.js       ← EDIT THIS to blog

    app.js         home page behaviour
    blog.js        blog rendering
    page.js        shared sub-page behaviour

    images/        all photography
    robots.txt · sitemap.xml

## The two files you edit

**`projects.js`** — add a project. Copy a block, paste at the top, fill in.
**`posts.js`** — write a post. Same idea. Formatting guide is in the file.

Everything else can be left alone.

## Republishing after an edit

Drag the whole folder back onto Netlify. That's it — no build, no deploy
command, no waiting.

## Built-in SEO

- FAQPage schema on home and costs → eligible for expanded Google results
- GeneralContractor + Service schema → local pack eligibility
- Blog schema, generated from posts.js so it can't drift
- Article schema on the cost guide
- Image sitemap
- 19 areas named in copy and schema
- Semantic HTML, skip links, aria labels, alt text throughout

## Things that must not be broken

`styles.css` contains a background safety net — every section paints its
own background, and the dark theme is locked with `color-scheme: dark`.
Without it, some browsers force light mode and the page renders as light
text on white.

All content is visible by default. Animations only hide things once
JavaScript confirms it is running, and there is a 2.5-second failsafe.
A script error cannot blank this site.
