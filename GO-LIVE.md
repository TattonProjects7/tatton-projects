# Tatton Projects — your site, going forward
### GitHub + Vercel setup. Do this once, then editing is easy forever.

You're setting this up as your real site — one you'll keep editing and
adding to. That's why we're using GitHub and Vercel instead of just
dragging files onto a host. Once it's done, the loop is:

    edit a file  →  save  →  it's live in 20 seconds.

No FTP, no re-uploading, no "which version was live again."

Total time: about an hour. Steps 1-4 put the site live. Take it one step at a time — none
of it is hard, there's just a few accounts to make.

---

## WHAT EACH TOOL IS FOR (30 seconds, so it's not a mystery)

- **GitHub** — the master copy of your site. The single source of truth.
- **Vercel** — watches GitHub and publishes the site. Free, fast, automatic.
- **Formspree** — makes the enquiry form email you. Free.
- **Supabase** — a database. You don't need one yet. Ignore it for now.
- **AI** — good for *drafting blog text*. NOT for fake photos or video of
  work you didn't build — a developer spots it instantly and stops
  trusting the whole site. Your real photos are the asset. Use them.

---

## STEP 1 — Make the enquiry form work (10 min)

Your form needs a free Formspree account so submissions email you.

1. Go to **formspree.io** → sign up with the Tatton email
2. Click **+ New Form**
3. Name it "Tatton enquiries", set the send-to as `info@tattonprojects.co.uk`
4. Formspree shows you a form endpoint like:
   `https://formspree.io/f/xayzabcd`
   — copy the bit after `/f/` (here it's `xayzabcd`)
5. Open `index.html` in any text editor (Notepad, TextEdit, anything)
6. Press Ctrl-F / Cmd-F and search for: `PASTE-YOUR-FORMSPREE-ID-HERE`
7. Replace it with your ID (e.g. `xayzabcd`). Save.

That's the only file edit you need to make by hand. Done.

---

## STEP 2 — Put the files on GitHub (15 min)

GitHub is free and this is the fiddliest step. Go slowly.

1. Go to **github.com** → sign up (Tatton email)
2. Once in, click the **+** top right → **New repository**
3. Name it `tatton-projects`
4. Set it to **Public** (fine — it's a website, it's meant to be seen)
5. Leave everything else unticked. Click **Create repository**
6. On the next page click the link **"uploading an existing file"**
7. **Drag every file from your `tatton-site` folder into the browser.**
   IMPORTANT: open the folder, select everything *inside* it
   (index.html, the images folder, all of it) and drag that in —
   not the folder itself.
8. Wait for the upload bar to finish (the images take a minute)
9. At the bottom click **Commit changes**

Your site's code now lives on GitHub. This is your master copy.

---

## STEP 3 — Connect Vercel and go live (10 min)

1. Go to **vercel.com** → **Sign up** → choose **Continue with GitHub**
   (this links the two automatically)
2. On your Vercel dashboard click **Add New → Project**
3. It lists your GitHub repositories. Find `tatton-projects` → **Import**
4. Don't change any settings — it detects everything. Click **Deploy**
5. Wait about a minute.

**Your site is live** at something like `tatton-projects.vercel.app`.
Open it. Check it on your phone. Test the enquiry form — a real email
should land in the Tatton inbox.

---

## STEP 4 — Point your domain at it (15 min + waiting)

1. In your Vercel project: **Settings → Domains**
2. Type `tatton-projects.co.uk` → **Add**
3. Vercel shows you DNS records to add (an A record and/or a CNAME)
4. Log in wherever the domain is registered (123-reg, GoDaddy, Wix,
   whoever) and enter exactly what Vercel gave you
5. Add `www.tatton-projects.co.uk` the same way if offered
6. Wait — usually under an hour, occasionally up to 24h

HTTPS (the padlock) turns on by itself. You don't buy anything.

**Don't cancel Wix until the new site loads on your real domain.**

---

## STEP 5 — Cancel Wix

Once `tatton-projects.co.uk` shows the new site, cancel Wix.
Keep the domain registration itself — that's separate from Wix hosting.

**The site is now live and it's yours.** Everything below makes it earn.

---

## STEP 6 — Tell Google it exists (10 min)

1. **search.google.com/search-console** → Add property → Domain →
   `tatton-projects.co.uk` → verify with the DNS record it gives you
2. **Sitemaps** → enter `sitemap.xml` → Submit
3. **URL Inspection** → paste your homepage → Request Indexing
4. Repeat for `costs.html` and `blog.html`

---

## STEP 7 — Google Business Profile — THE BIG ONE

**This matters more than the website itself. Do not skip it.**

Most people searching for a builder in Altrincham tap a result on the
map, not a website. That map result is this:

1. **business.google.com** → Manage now
2. Name: **Tatton Projects**
3. Categories: **Construction company**, then add **Home builder** and
   **General contractor**
4. Address: **Suite 15, Peel House, 30 The Downs, Altrincham WA14 2PX**
5. Phone: **0161 706 2907**  ·  Website: your new domain
6. Service areas: add every town — Altrincham, Hale, Bowdon, Knutsford,
   Mobberley, Wilmslow, Alderley Edge, Sale, Timperley, Mere, Handforth,
   Northwich, Macclesfield, Lymm, Winsford, New Mills, Chester
7. **Upload 15–20 real photos from the `images` folder.** Profiles with
   photos get far more clicks.
8. Verify (usually a postcard to the office)

---

## STEP 8 — Reviews, this week

Phone three clients from jobs that went well. Ask for a Google review.
A phone call, not an email. Reviews move you up the local map faster
than anything else you can do. Three puts you ahead of most local
competitors; ten puts you near the top.

While you're at it, ask Sentric or the Vanguard client for a written
quote to put on the site. You're missing one, and it's worth more than
anything else you could add.

---

# HOW TO EDIT THE SITE FROM NOW ON

This is the payoff for setting up GitHub. Two ways:

**The easy way (small text changes):**
1. Go to your repo on github.com
2. Click the file you want to change (e.g. `posts.js`)
3. Click the pencil icon ✏️
4. Edit in the browser, click **Commit changes**
5. Vercel republishes automatically in ~20 seconds. Done.

**Adding photos:**
1. In the repo, open the `images` folder
2. **Add file → Upload files** → drag your photos in → Commit
3. Then reference them from `projects.js` or `posts.js`

---

# ADDING A BLOG POST

Edit `posts.js`. Copy an existing post (from its `{` to its `}`), paste
it at the top of the list, add a comma after it, fill it in, commit.

Body formatting:

    ## Heading             a section heading
    - bullet               a list item
    > quote                a pulled-out quote
    **bold**               bold text
    [image:photo.jpg]      a photo from your images folder
    [caption:the text]     caption under that photo

**Using AI to draft posts — the right way:** ask it to write a first
draft on a topic you know (e.g. "draft a 600-word post on what a care
home fit-out costs and why it's different"), then rewrite it in your own
voice with real numbers from your jobs. AI for the blank-page problem,
your experience for the substance. Never for photos.

Good topics — things people actually search:
- What a care home fit-out costs and why it's harder
- How long an office fit-out takes, week by week
- What a landlord's licence to alter involves
- Why extensions cost more per m² than new build

---

# ADDING A PROJECT

Same idea in `projects.js`. Copy a block, paste at the top, fill in.
Photos go in `images/`, named clearly (`surgery-01-reception.jpg`).
Leave `attribution` empty for Tatton Ltd work; use the pre-2020 line for
anything older — a tender team checks, and honesty makes the 20 years
credible.

---

# STILL TO ADD

- [ ] Photo of you on site → `images/dave.jpg`
- [ ] SiloPod product shot → `images/silopod.jpg`
- [ ] One client quote — worth more than anything else on the site
- [ ] Logo vector (.svg/.ai) from the van-wrap supplier (current one is soft)
- [ ] Values/years for Fossil, Calvin Klein, the Leeds bar
- [ ] Doctors' surgery photos once permitted — re-adds healthcare, your
      least competitive sector

---

# WHERE SUPABASE COMES IN (later, not tomorrow)

The day you want something a plain website can't do — a client login, a
searchable archive of every project, a form that saves to a database you
can filter — that's Supabase. It's powerful and it's free to start.
But it solves problems you don't have yet. Get the site live first.
When you want one of those things, come back and we'll add it properly.

---

# ONE CHECK BEFORE YOU PUBLISH

The site states **£8m turnover and 60+ projects since 2020**. Companies
House filings are public. Make sure that's consistent with what's filed —
a developer doing due diligence will look. If your accounts are
abbreviated and don't show turnover, you're fine.
