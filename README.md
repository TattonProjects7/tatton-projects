# Tatton Projects — website

Static site. Open `index.html` in a browser and it runs.

**→ `GO-LIVE.md` has the setup steps.**

## Pages

    index.html          home
    work.html           all projects
    work/<project>.html one page per project — auto-generated
    costs.html          the cost guide (best SEO page)
    blog.html           blog

## The two files you edit

    projects.js   ← add a project
    posts.js      ← write a blog post

Everything else can be left alone.

## Adding a project — what happens automatically

1. Edit `projects.js` on GitHub, commit
2. Vercel runs `build-pages.js`
3. It writes a new page at `work/<your-id>.html`, rebuilds `work.html`,
   and regenerates `sitemap.xml`
4. Live in about 30 seconds

**You never edit the project pages by hand — they'd be overwritten.**
`projects.js` is the single source of truth.

If you ever want to run it yourself: `node build-pages.js`

## Why each project has its own page

Google indexes pages, not pop-ups. Nine projects with nine addresses is
nine chances to rank instead of one. It also means you can send someone a
direct link to a single job:

    tatton-projects.co.uk/work/vanguard

That's a much better thing to put in an email to an agent than a link to
your homepage.

## Other files

    styles.css       all styling, every page
    app.js           home page behaviour
    blog.js          blog rendering
    page.js          shared sub-page behaviour
    build-pages.js   generates the project pages (don't edit unless you mean it)
    package.json     tells Vercel to run the generator
    vercel.json      caching + security headers
    images/          all photography
    robots.txt · sitemap.xml

## Built-in SEO

- A separate indexable page per project, each with Article + Breadcrumb schema
- FAQPage schema on home and costs → eligible for expanded Google results
- GeneralContractor + Service schema → local pack eligibility
- Blog schema, generated from posts.js so it can't drift
- Image sitemap covering every project photo
- 19 service areas named in copy and schema
- Semantic HTML, skip links, aria labels, alt text throughout

## Things that must not be broken

`styles.css` has a background safety net — every section paints its own
background and the dark theme is locked with `color-scheme: dark`.
Without it, some browsers force light mode and the page renders as light
text on white.

All content is visible by default. Animations only hide things once
JavaScript confirms it's running, with a 2.5-second failsafe.
A script error cannot blank this site.
