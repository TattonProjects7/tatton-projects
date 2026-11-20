import json, os, html, datetime, hashlib
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'site')
os.makedirs(OUT, exist_ok=True)
DOMAIN = 'https://www.tattoninteriors.co.uk'
IMG = 'https://www.tatton-projects.co.uk/images/'
PHONE = '0161 706 3880'; PHONE_INTL = '+441617063880'
EMAIL = os.environ.get('TI_EMAIL', '').strip()   # set by the owner; omitted from the site if blank
TODAY = datetime.date.today().isoformat()
def ver(f):
    return hashlib.md5(open(os.path.join(OUT, f), 'rb').read()).hexdigest()[:8]

def mail(label=None, subject='Subcontract package - Tatton Interiors'):
    if not EMAIL: return ''
    return f'<a href="mailto:{EMAIL}?subject={subject.replace(" ", "%20")}">{label or EMAIL}</a>'


CITIES = [
 dict(slug='london', name='London', region='London & the South East', near='the City, the West End, Canary Wharf, King\'s Cross and across the M25',
      note='London fit-outs run on tight logistics: restricted deliveries, booked goods lifts and out-of-hours working. We plan labour, material drops and accommodation around that from the start.'),
 dict(slug='birmingham', name='Birmingham', region='the West Midlands', near='Birmingham city centre, Colmore Row, Digbeth, Solihull and the wider West Midlands',
      note='Birmingham is a short run down the M6 from our Altrincham base, so we can mobilise teams quickly and keep the same supervisor on your job from start to finish.'),
 dict(slug='manchester', name='Manchester', region='Greater Manchester', near='Manchester city centre, Spinningfields, Salford Quays, Trafford, Stockport and Altrincham',
      note='Manchester is home. Our office is in Altrincham, so for Greater Manchester packages there is no travel cost and the person who priced it is never far from site.'),
 dict(slug='liverpool', name='Liverpool', region='Merseyside', near='Liverpool city centre, the Commercial District, the Baltic Triangle, the Knowledge Quarter and the Wirral',
      note='We have delivered Cat B office fit-out work in Liverpool, including the Sentric Music offices, and run Merseyside packages daily from our Altrincham base.'),
 dict(slug='leeds', name='Leeds', region='West Yorkshire', near='Leeds city centre, Wellington Place, Holbeck, Bradford and Wakefield',
      note='Leeds is just over the Pennines on the M62, so Yorkshire packages are run as day-commute jobs with the same supervised teams we use in Manchester.'),
 dict(slug='sheffield', name='Sheffield', region='South Yorkshire', near='Sheffield city centre, Kelham Island, Meadowhall, Rotherham and Doncaster',
      note='South Yorkshire packages are run from Manchester over the Snake or the M62, with teams staying local for longer programmes.'),
 dict(slug='newcastle', name='Newcastle', region='the North East', near='Newcastle city centre, Gateshead, Sunderland and Durham',
      note='For North East packages we mobilise a supervised team with local accommodation, so programme and quality are the same as on our home patch.'),
 dict(slug='bristol', name='Bristol', region='the South West', near='Bristol city centre, Temple Quarter, Harbourside, Bath and the M4/M5 corridor',
      note='South West packages are run with a resident supervised team and booked accommodation, priced up front so there are no travel extras later.'),
 dict(slug='nottingham', name='Nottingham', region='the East Midlands', near='Nottingham, Derby, Leicester and the M1 corridor',
      note='The East Midlands is in easy reach of our base, so packages here are run with the same teams and supervision as our North West work.'),
 dict(slug='glasgow', name='Glasgow', region='Scotland', near='Glasgow city centre, the IFSD, Edinburgh and the Central Belt',
      note='For Scottish packages we bring a supervised team with accommodation booked, working to the same systems and records as in England.'),
 dict(slug='cardiff', name='Cardiff', region='South Wales', near='Cardiff city centre, Swansea, Newport and the M4 corridor',
      note='South Wales packages are run with a resident supervised team, with travel and accommodation priced in from the start.'),
 dict(slug='cheshire', name='Cheshire', region='Cheshire', near='Chester, Warrington, Knutsford, Wilmslow, Macclesfield and Crewe',
      note='Cheshire is on our doorstep, with our office in Altrincham, so Cheshire packages carry no travel costs and quick call-outs for snagging.'),
]

ADDRESS = {"@type": "PostalAddress", "streetAddress": "Suite 15, Peel House, 30 The Downs", "addressLocality": "Altrincham",
           "addressRegion": "Greater Manchester", "postalCode": "WA14 2PX", "addressCountry": "GB"}
ORG_ID = DOMAIN + '/#organization'
AREAS = [{"@type": "Country", "name": "United Kingdom"}, {"@type": "Country", "name": "England"}, {"@type": "Country", "name": "Scotland"}, {"@type": "Country", "name": "Wales"}] + [{"@type": "City", "name": c["name"]} for c in CITIES if c["slug"] != "cheshire"] + [{"@type": "AdministrativeArea", "name": "Cheshire"}]
ORG = {
    "@context": "https://schema.org", "@type": ["GeneralContractor", "LocalBusiness"], "@id": ORG_ID,
    "name": "Tatton Interiors", "alternateName": ["Tatton Interiors UK", "Tatton Interiors Manchester"],
    "url": DOMAIN + '/', "logo": IMG + 'tatton-interiors-logo-dark.png', "image": DOMAIN + '/images/ti-breakout-mesh-ceiling.jpg',
    "description": "Interior fit-out subcontractor for main contractors and fit-out firms: plastering and drylining, metal stud partitions, suspended ceilings, commercial joinery, internal glazing, and toilet cubicles and washrooms. Supply & fit or labour only. Based in Altrincham, Greater Manchester, working UK-wide including London, Birmingham, Leeds, Liverpool, Newcastle, Bristol, Glasgow and Cardiff.",
    "telephone": PHONE_INTL, "address": ADDRESS,
    "geo": {"@type": "GeoCoordinates", "latitude": 53.3889, "longitude": -2.3497},
    "areaServed": AREAS,
    "knowsAbout": ["Drylining", "Plastering", "Metal stud partitions", "Acoustic partitions", "Acoustic walls", "Suspended ceilings", "MF plasterboard ceilings", "Commercial joinery", "Fitted furniture", "Wall panelling",
                   "Fire doorsets", "Internal glazing", "Glass partitions", "Toilet cubicles", "IPS duct panels", "Washroom fit-out", "Office fit-out", "Cat A fit-out", "Cat B fit-out", "Retail shopfitting"],
    "parentOrganization": {"@type": "Organization", "name": "DPG Holdings"},
    "sameAs": ["https://www.tatton-projects.co.uk/", "https://find-and-update.company-information.service.gov.uk/company/17553626"],
    "legalName": "Tatton Projects of Cheshire Limited", "identifier": "Companies House 17553626",
    "openingHours": "Mo-Fr 07:30-17:30", "priceRange": "££",
}
if EMAIL: ORG["email"] = EMAIL

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Bodoni+Moda:ital,wght@0,500;0,600;1,500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">'
         '<link rel="preconnect" href="https://www.tatton-projects.co.uk">')

TRADES = [
 dict(slug='plastering-drylining', name='Plastering & Drylining', short='drylining',
  title='Plastering & Drylining Contractors UK | Tatton Interiors',
  desc='Drylining and plastering subcontractor for main contractors across the UK. Wall linings, MF, tape & joint, skim. Supply & fit or labour only.',
  h1='Plastering & drylining contractors',
  lede='Wall linings, independent linings, tape & joint and skim finishes for commercial fit-outs, refurbishments and new build. Priced as a package, delivered by our own supervised teams.',
  card='Wall linings, tape & joint and skim finishes for fit-outs and refurbs.',
  img='ti-drylining-partition-taped.jpg', img2='ti-drylining-tape-joint-boards.jpg',
  gallery=[('ti-drylining-taped-wall-over-shutter.jpg','Full-height wall lining taped and jointed over a roller shutter opening'), ('ti-drylining-warehouse-wall-lining.jpg','Warehouse wall lining boarded and taped from scissor lifts'), ('calvin-klein-03-till.jpg','Retail unit walls boarded, taped and jointed, Calvin Klein')],
  scope=['Dot & dab and direct-bond wall linings', 'Independent wall linings (metal stud and I-stud)', 'Shaftwall and stairwell linings',
         'Tape & joint to Q2–Q4 finish ready for decoration', 'Hard-coat and skim plastering, patch & make good',
         'Fire-rated and acoustic linings to manufacturer systems', 'Boarding to bulkheads, risers and boxing-in', 'Making good after M&E first and second fix'],
  systems='We install to British Gypsum, Knauf and Siniat specifications, so the system on the drawings is the system that gets built and signed off.',
  faqs=[('Do you price drylining labour only?', 'Yes. We price drylining and plastering packages either supply & fit or labour only where the main contractor free-issues boards and metal.'),
        ('What finish standard do you work to?', 'We tape & joint to the finish level in your specification, typically Q3 or Q4 for commercial areas, or hard-coat and skim where a plastered finish is specified.'),
        ('Can you work in occupied buildings?', 'Yes. Much of our fit-out work is in live offices and public buildings, phased around the client with dust control and out-of-hours working where needed.')]),
 dict(slug='partitions', name='Partitions', short='partitions',
  title='Metal Stud & Acoustic Partition Contractors UK | Tatton Interiors',
  meta='Metal stud and acoustic partition contractors: acoustic walls built to your Rw rating, fire-rated partitions to British Gypsum and Knauf systems. UK-wide.',
  desc='Metal stud and acoustic partition contractors: acoustic walls built to your Rw rating, fire-rated and high-performance partitions to British Gypsum and Knauf systems. UK-wide.',
  h1='Metal stud & acoustic partition contractors',
  lede='Fire-rated, acoustic and standard metal stud partitions, set out, built and boarded to the system on your drawings, for office fit-outs, retail, healthcare and hospitality.',
  card='Acoustic and fire-rated metal stud walls built to system.',
  img='ti-metal-stud-partitions-framing.jpg', img2='office-walkways-06-toilet-framing.jpg',
  gallery=[('ti-metal-stud-framing-first-fix.jpg','Metal stud partitions framed out at first fix'), ('ti-acoustic-partition-pattresses.jpg','Partition with timber pattresses fixed before boarding')],
  extra='acoustic',
  scope=['Metal stud partitions (GypWall, Knauf and Siniat systems)', 'Fire-rated partitions to 30, 60 and 90 minutes', 'Acoustic partitions with insulation and twin-frame build-ups',
         'Head deflection details and fire stopping at junctions', 'Pattresses and noggins for wall-hung fittings', 'Door openings, frames and ironmongery prep',
         'Toilet cubicles and IPS panel systems', 'Acoustic wall panelling and feature walls'],
  systems='Partitions are set out from your drawings, built to the specified system and fire-stopped at the head, so they pass inspection first time.',
  faqs=[('Can you build acoustic walls to a set sound rating?', 'Yes. We build acoustic partitions to the Rw rating in your specification, using the manufacturer system that achieves it: twin or staggered studs, acoustic insulation, double-layer acoustic board, sealed heads and junctions, and flanking details above the ceiling. We can arrange pre-completion sound testing.'),
        ('Do you install fire-rated partitions?', 'Yes. We build fire-rated partitions to the specified manufacturer system, including head deflection details and fire stopping at junctions and penetrations.'),
        ('Can you set out from drawings?', 'Yes. Our supervisors set out partition lines from your general arrangement and setting-out drawings and raise any clashes before boarding.'),
        ('Do you do partitions as a separate package?', 'Yes: partitions on their own, or combined with drylining, ceilings, joinery and glazing as one interiors package.')]),
 dict(slug='suspended-ceilings', name='Suspended Ceilings', short='ceilings',
  title='Suspended Ceiling Contractors UK | Tatton Interiors',
  desc='Suspended ceiling contractors: grid and tile ceilings, MF plasterboard ceilings, bulkheads, rafts and acoustic ceilings for commercial fit-outs. UK-wide.',
  h1='Suspended ceiling contractors',
  lede='Exposed-grid and tile ceilings, MF plasterboard ceilings, bulkheads and acoustic rafts, installed level, coordinated with M&E and handed over clean.',
  card='Grid, MF plasterboard, bulkheads and acoustic rafts.',
  img='ti-breakout-mesh-ceiling.jpg', img2='ti-open-plan-grid-ceiling.jpg',
  gallery=[('calvin-klein-01-shopfront.jpg','MF plasterboard ceiling with recessed downlights in a retail shell, Calvin Klein'), ('vanguard-07-openplan.jpg','Open-plan grid ceiling with linear lighting'), ('vanguard-02-lounge.jpg','Black mesh feature ceiling raft over a breakout lounge with fitted seating')],
  scope=['Exposed grid and lay-in tile ceilings (600×600 / 1200×600)', 'Metal and mesh feature ceiling tiles', 'MF plasterboard ceilings and bulkheads', 'Acoustic ceiling rafts and baffles',
         'Fire-rated ceilings and membranes', 'Access panels and service hatches', 'Coordination with lighting, diffusers and sprinkler drops',
         'Ceiling replacement in occupied buildings', 'Perimeter trims and feature edges'],
  systems='Ceiling heights, grid setting-out and service positions are agreed up front, so the M&E trades fit around a ceiling that is already right.',
  faqs=[('What types of suspended ceiling do you install?', 'Exposed-grid tile ceilings, concealed and MF plasterboard ceilings, bulkheads, acoustic rafts and fire-rated ceilings.'),
        ('Do you coordinate with M&E contractors?', 'Yes. We agree setting-out and service positions before install so lights, diffusers and sprinkler heads land in the grid.'),
        ('Can you replace ceilings in a live office?', 'Yes. We phase ceiling replacements around occupied floors and work out of hours where the client needs it.')]),
 dict(slug='joinery', name='Joinery & Fitted Furniture', short='joinery',
  title='Commercial Joinery & Fitted Furniture UK | Tatton Interiors',
  meta='Commercial joinery and fitted furniture subcontractor: wall panelling, booth seating, tea points, reception desks and shopfit joinery. UK-wide.',
  desc='Commercial joinery and fitted furniture subcontractor: timber slat and acoustic wall panelling, booth seating, tea points, reception desks, doorsets and shopfit joinery. UK-wide.',
  h1='Commercial joinery & fitted furniture',
  lede='Timber slat and acoustic wall panelling, fitted booth seating, tea points and kitchenettes, bench desks, reception desks and doorsets, made and fitted by joiners who know commercial programmes.',
  card='Wall panelling, booth seating, tea points, desks and doorsets.',
  img='ti-timber-slat-wall-panelling.jpg', img2='ti-booths-acoustic-panelling.jpg',
  gallery=[('vanguard-09-utility.jpg','Fitted utility and tea point run with full-height storage and an arched opening'), ('sentric-08-corridor.jpg','Timber slat wall panelling framing a media wall, Sentric Music'), ('ti-office-bar-slatted-bulkhead.jpg','Office breakfast bar, curved slatted timber bulkhead and feature wall joinery'), ('ti-fluted-wall-panelling-brass.jpg','Fluted wall panelling with brass trims, display niches and a walnut counter')],
  scope=['Timber slat and acoustic felt wall panelling', 'Fitted booth seating, banquettes and bench seating', 'Tea points, kitchenettes and breakout kitchen runs', 'Bench desks, touchdown points and work booths',
         'Reception desks and feature joinery', 'Fire doorsets and ironmongery', 'Retail shopfit joinery and display', 'First and second fix, skirtings and architraves'],
  systems='Our founder came up through the tools as a joiner, so joinery packages are set out, fixed and finished to the standard the client sees first.',
  faqs=[('Do you install fire doorsets?', 'Yes. We hang and ironmonger fire doorsets to the manufacturer installation instructions and keep the certification trail for handover.'),
        ('Do you make and fit fitted furniture?', 'Yes. We supply and fit booth seating, banquettes, tea points, bench desks, reception desks and wall panelling, or fit client-supplied furniture and joinery labour only.'),
        ('Do you do shopfitting joinery?', 'Yes. Our team has delivered brand-standard retail joinery for stores including Fossil and Calvin Klein.')]),
 dict(slug='internal-glazing', name='Internal Glazing', short='glazing',
  title='Internal Glazing & Glass Partitions UK | Tatton Interiors',
  meta='Internal glazing contractors: frameless and framed glass partitions, glazed office screens, glass meeting rooms and crittall-style screens. UK-wide.',
  desc='Internal glazing contractors: frameless and framed glass partitions, glazed office screens, glass meeting rooms, glazed doors and crittall-style screens. UK-wide.',
  h1='Internal glazing & glass partitions',
  lede='Frameless and framed glass partitions, glazed meeting rooms and screens, glazed doors and crittall-style screens, installed plumb, sealed and manifested to spec.',
  card='Frameless glass partitions, glazed screens and crittall-style screens.',
  img='ti-glazed-partitions-corridor.jpg', img2='stockport-office-02-boardroom-2.jpg',
  gallery=[('vanguard-06-entrance.jpg','Glazed double doors and side screens set into timber slat wall panelling'), ('vanguard-03-lift-lobby.jpg','Framed glazed partitions and doors along a lift lobby'), ('stockport-office-04-stair.jpg','Frameless glass meeting room with fitted storage joinery, Stockport')],
  extra='glazing',
  scope=['Frameless single and double glazed partitions', 'Framed aluminium glazed office screens', 'Glass meeting rooms and boardrooms', 'Glazed and frameless glass doors',
         'Crittall-style steel-look screens', 'Acoustic glazing to specified dB ratings', 'Manifestation and privacy film', 'Integration with partitions and ceilings'],
  systems='Glazing is coordinated with the partition and ceiling packages, so heads, deflection and junctions are designed once rather than fixed on site.',
  faqs=[('Do you install frameless glass partitions?', 'Yes. We install frameless single and double glazed partitions, glazed doors and meeting rooms, including acoustic-rated glazing.'),
        ('Can you do glazing with the partitions package?', 'Yes. Running glazing alongside partitions and ceilings means one team owns the junctions between them.'),
        ('Do you supply manifestation?', 'Yes. We supply and fit manifestation and privacy film to meet Building Regulations and the client brand.')]),
 dict(slug='toilet-cubicles', name='Toilet Cubicles & Washrooms', short='washroom',
  title='Toilet Cubicle Installers & Washroom Fit-Out UK | Tatton Interiors',
  meta='Toilet cubicle and washroom installers for main contractors: compact laminate cubicles, IPS panels and vanity units. Supply & fit or labour only. UK-wide.',
  desc='Toilet cubicle and washroom installers for main contractors: full-height compact laminate cubicles, IPS duct panels, vanity units and washroom fit-out. Supply & fit or labour only. UK-wide.',
  h1='Toilet cubicle & washroom installers',
  lede='Full-height and standard compact laminate cubicles, IPS framing and duct panels, vanity units and washroom fit-out, built around your plumbing and M&E so the washroom is ready to hand over.',
  card='Compact laminate cubicles, IPS panels and vanity units.',
  img='ti-toilet-cubicles-full-height.jpg', img2='ti-washroom-cubicles-vanity.jpg',
  gallery=[('ti-ips-framing-washroom.jpg','Before: stripped washroom, IPS frames set out'), ('ti-ips-framing-first-fix.jpg','Before: IPS framing at first fix, cisterns and pipework in'), ('ti-cubicle-panels-installed.jpg','During: full-height cubicle panels installed'), ('ti-cubicle-doors-woodgrain.jpg','After: woodgrain doors hung, washroom complete'), ('ti-vanity-unit-solid-surface.jpg','After: vanity run, solid-surface top and mirrors'), ('ti-cubicle-interior-ips-panel.jpg','After: finished cubicle with IPS back panel')],
  gallery_title='Before, during &amp; after',
  scope=['Full-height and standard toilet cubicles in compact laminate (HPL)', 'IPS framing and duct panels to conceal cisterns and pipework, with access panels',
         'Vanity units with solid-surface tops and undermount basin cut-outs', 'Washroom wall panelling and IPS back panels',
         'Mirrors, dispensers and washroom accessories fitted', 'Shower and changing room cubicles and benching',
         'Coordinated with plumbing and M&E first and second fix', 'Washroom refurbishment in occupied buildings, phased floor by floor'],
  systems='IPS frames are set out and built before the plumber arrives, so cisterns, waste and supply pipework land where the panels and cubicles need them.',
  faqs=[('Do you install toilet cubicles labour only?', 'Yes. We install client-supplied cubicles, IPS and vanities labour only, or supply and fit the full washroom package.'),
        ('Do you build the IPS framing?', 'Yes. We build the IPS framing at first fix, coordinate with the plumber for cisterns and pipework, then fit the duct panels, access panels and vanity tops at second fix.'),
        ('Can you refurbish washrooms in a building that stays open?', 'Yes. We phase washroom refurbishments floor by floor so the building always has working toilets, with temporary screening and out-of-hours noisy work where needed.')]),
]

PROJECTS = [
 dict(t='Stockport service centre', loc='Stockport', v='£175K', img='stockport-01-floor.jpg', d='Phased fit-out of a live public service floor with 90+ staffed positions that never closed: suspended ceilings, acoustic dividers and screens.', tags=['Ceilings', 'Partitions'], areas=['manchester']),
 dict(t='Sentric Music', loc='Liverpool', v='£110K', img='sentric-10-booths.jpg', d='Cat B office fit-out with feature ceiling raft, acoustic wall panelling, booths, boardroom and joinery.', tags=['Ceilings', 'Joinery', 'Partitions'], areas=['liverpool']),
 dict(t='Office fit-out', loc='Stockport', v='£125K', img='stockport-office-02-boardroom-2.jpg', d='Compact office with frameless glass boardroom, oak flooring and a double-height stair.', tags=['Internal glazing', 'Joinery'], areas=['manchester']),
 dict(t='Office walkways & communal toilets', loc='North West', v='', img='office-walkways-07-cubicles-installed.jpg', d='Occupied office: new toilets, showers and changing rooms with stud framing, cubicle partitions and joinery.', tags=['Drylining', 'Partitions', 'Joinery']),
 dict(t='Calvin Klein', loc='UK', v='', img='calvin-klein-06-ceiling.jpg', d='Shell-to-store shopfit inside a live shopping centre: partitions, ceilings, joinery and shopfront glazing.', tags=['Partitions', 'Ceilings', 'Glazing'], pre=True),
 dict(t='Fossil', loc='London', v='', img='fossil-01-store.jpg', d='Brand-standard retail shopfit with illuminated walls, glazed display cases and joinery.', tags=['Joinery', 'Glazing'], pre=True, areas=['london']),
 dict(t='Bar & restaurant', loc='Leeds', v='', img='leeds-bar-01-restaurant.jpg', d='Bar and restaurant with blackened steel screens, back bar and booth joinery.', tags=['Joinery'], pre=True, areas=['leeds']),
]

def im(n):
    return (DOMAIN + '/images/' + n) if n.startswith('ti-') else IMG + n

def ld(obj): return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False) + '</script>'

def head(title, desc, path, img, extra_ld=(), robots='index,follow,max-image-preview:large'):
    url = DOMAIN + path
    e = html.escape
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<meta name="robots" content="{robots}">
<meta name="theme-color" content="#0C0C0D">
<meta property="og:type" content="website"><meta property="og:site_name" content="Tatton Interiors">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}"><meta property="og:image" content="{im(img)}"><meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(desc)}"><meta name="twitter:image" content="{im(img)}">
<meta name="geo.region" content="GB-TRF"><meta name="geo.placename" content="Altrincham, Greater Manchester">
<link rel="icon" href="https://www.tatton-projects.co.uk/favicon-32.png" sizes="32x32"><link rel="apple-touch-icon" href="https://www.tatton-projects.co.uk/favicon-180.png">
{FONTS}
<link rel="stylesheet" href="/styles.css?v={ver('styles.css')}">
{ld(ORG)}
{''.join(ld(x) for x in extra_ld)}
</head>
<body>
'''

NAV = [('/plastering-drylining', 'Drylining'), ('/partitions', 'Partitions'), ('/suspended-ceilings', 'Ceilings'), ('/joinery', 'Joinery'),
       ('/internal-glazing', 'Glazing'), ('/toilet-cubicles', 'Washrooms'), ('/projects', 'Projects'), ('/about', 'About')]

BRAND = '<img class="logo" src="' + IMG + 'tatton-interiors-logo-light-120.png" alt="Tatton Interiors" width="368" height="120">'

def header(active=''):
    links = ''.join(f'<a href="{h}"{" aria-current=page" if h == active else ""}>{n}</a>' for h, n in NAV)
    return f'''<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="nav"><a class="brand" href="/" aria-label="Tatton Interiors home">{BRAND}</a>
<nav class="links" aria-label="Main">{links}</nav>
<a class="nav-cta" href="/contact">Send a package</a>
<button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
</header>
<div class="mobile-menu">{links}<a href="/contact" class="btn btn-solid">Send a package</a><a href="tel:{PHONE_INTL}" class="mono">{PHONE}</a></div>
<main id="main">
'''

def footer():
    trades = ''.join(f'<li><a href="/{t["slug"]}">{t["name"]}</a></li>' for t in TRADES)
    areas = ''.join(f'<li><a href="/areas/{c["slug"]}">{c["name"]}</a></li>' for c in CITIES)
    em = f'<br>{mail()}' if EMAIL else ''
    return f"""</main>
<footer class="foot">
<div class="foot-grid">
<div>{BRAND}<p>UK interior fit-out subcontractor for main contractors and fit-out firms. Supply &amp; fit or labour only.</p>
<p class="mono small">Suite 15, Peel House, 30 The Downs,<br>Altrincham WA14 2PX</p>
<p><a href="tel:{PHONE_INTL}">{PHONE}</a>{em}</p>
<p class="mono small">Mon–Fri 7:30–17:30</p></div>
<div><h3>Packages</h3><ul>{trades}</ul></div>
<div><h3>Areas we cover</h3><ul class="cols2">{areas}<li><a href="/areas">All UK areas</a></li></ul></div>
<div><h3>Company</h3><ul><li><a href="/projects">Projects</a></li><li><a href="/about">About &amp; accreditations</a></li><li><a href="/contact">Send a package to price</a></li><li><a href="/contact">PQQ &amp; supplier forms</a></li></ul>
<h3 style="margin-top:22px">DPG Holdings group</h3><ul>
<li><a href="https://www.tatton-projects.co.uk/">Tatton Projects</a> <span class="muted">· main contractor</span></li>
<li><a href="https://www.theloadbearingcompany.co.uk/">The Load Bearing Company</a> <span class="muted">· structural</span></li>
<li><a href="https://www.silopod.co.uk/">SiloPod</a> <span class="muted">· acoustic pods</span></li>
<li><a href="https://www.esti-mate.app/">EstiMate</a> <span class="muted">· estimating software</span></li></ul></div>
</div>
<div class="foot-seo"><p>Tatton Interiors is a UK interior fit-out subcontractor working for main contractors, fit-out firms and developers across England, Scotland and Wales. We price and deliver <a href="/plastering-drylining">drylining and plastering</a>, <a href="/partitions">metal stud and acoustic partitions</a>, <a href="/suspended-ceilings">suspended ceilings and MF ceilings</a>, <a href="/joinery">commercial joinery, wall panelling and fitted furniture</a>, <a href="/internal-glazing">internal glazing and glass partitions</a> and <a href="/toilet-cubicles">toilet cubicles, IPS and washroom fit-out</a>, supply &amp; fit or labour only, for offices, retail, healthcare, education, hospitality and residential schemes. Constructionline Gold, SSIP accredited, CITB registered and CSCS-carded teams.</p></div>
<div class="foot-base mono small"><span>© {datetime.date.today().year} Tatton Interiors is a trading name of Tatton Projects of Cheshire Limited, company no. 17553626, registered in England &amp; Wales. A Tatton Projects company, part of the DPG Holdings group.</span><span>Constructionline Gold · SSIP · CITB · CSCS</span></div>
</footer>
<script src="/site.js?v={ver('site.js')}" defer></script>
</body></html>"""

def crumbs(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": DOMAIN + p} for i, (n, p) in enumerate(items)]}

def faq_ld(faqs):
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}


ACOUSTIC_HTML = """<section class="sec alt"><div class="wrap two">
<div><p class="kicker reveal">Acoustic walls</p><h2 class="reveal">Built to the sound rating, not just the drawing.</h2>
<p class="reveal">Meeting rooms, boardrooms, treatment rooms and hotel bedrooms only work if the wall stops the sound. We build acoustic partitions to the Rw rating in your specification, using the tested manufacturer system that achieves it, and we detail the junctions where most walls leak.</p></div>
<ul class="ticks">
<li class="reveal">Built to the specified Rw (dB) rating using tested British Gypsum, Knauf and Siniat systems</li>
<li class="reveal" style="--d:50ms">Twin-frame, staggered and wide-stud builds with acoustic insulation in the cavity</li>
<li class="reveal" style="--d:100ms">Double-layer acoustic plasterboard with staggered joints</li>
<li class="reveal" style="--d:150ms">Acoustic sealant at heads, bases and abutments; head deflection details that keep the seal</li>
<li class="reveal" style="--d:200ms">Flanking control: barriers in ceiling voids and raised floors, sealed service penetrations</li>
<li class="reveal" style="--d:250ms">Acoustic doorsets and acoustic glazing coordinated with the wall</li>
<li class="reveal" style="--d:300ms">Acoustic felt and timber slat wall panelling for room acoustics</li>
<li class="reveal" style="--d:350ms">Pre-completion sound testing arranged where the spec or Approved Document E needs it</li>
</ul></div></section>"""

QUALITY_HTML = """<section class="sec"><div class="wrap"><p class="kicker reveal">Quality</p><h2 class="reveal">How we make sure it's right first time.</h2>
<div class="qgrid">
<div class="reveal"><b>Built to system</b><span>Every wall, ceiling and lining goes in to the manufacturer's tested system and your specification. No substitutions without approval.</span></div>
<div class="reveal" style="--d:80ms"><b>Line, level &amp; finish</b><span>Set out from your drawings, checked for line and level, and taped and jointed to the finish level specified, Q1 to Q4.</span></div>
<div class="reveal" style="--d:160ms"><b>Hold points &amp; photos</b><span>Pre-board inspections for fire stopping, insulation, pattresses and services, photographed and recorded before anything is closed up.</span></div>
<div class="reveal" style="--d:240ms"><b>Snagged before you see it</b><span>We snag our own work first, then hand over with the records you need: fire-stopping photos, system details and O&amp;M information.</span></div>
</div></div></section>"""


def _svg(kind):
    st='stroke="#D6B136" fill="none" stroke-width="2"'
    glass='fill="rgba(237,235,231,.06)" stroke="#85868A" stroke-width="1"'
    base=f'<rect x="10" y="20" width="220" height="150" {glass}/>'
    if kind=='frameless':
        body=(f'<line x1="10" y1="20" x2="230" y2="20" {st}/><line x1="10" y1="170" x2="230" y2="170" {st}/>'
              '<line x1="83" y1="22" x2="83" y2="168" stroke="#85868A" stroke-width="1" stroke-dasharray="3 3"/>'
              '<line x1="156" y1="22" x2="156" y2="168" stroke="#85868A" stroke-width="1" stroke-dasharray="3 3"/>'
              '<line x1="30" y1="40" x2="60" y2="70" stroke="#EDEBE7" stroke-opacity=".25"/><line x1="100" y1="40" x2="140" y2="80" stroke="#EDEBE7" stroke-opacity=".25"/>')
    elif kind=='framed':
        body=(f'<rect x="10" y="20" width="220" height="150" {st}/>'
              f'<line x1="83" y1="20" x2="83" y2="170" {st}/><line x1="156" y1="20" x2="156" y2="170" {st}/>'
              f'<rect x="160" y="40" width="66" height="130" stroke="#D6B136" fill="none" stroke-width="1.5"/>'
              '<line x1="218" y1="100" x2="218" y2="112" stroke="#D6B136" stroke-width="3"/>')
    else:
        lines=''.join(f'<line x1="{x}" y1="20" x2="{x}" y2="170" {st}/>' for x in (65,120,175))
        lines+=''.join(f'<line x1="10" y1="{y}" x2="230" y2="{y}" {st}/>' for y in (70,120))
        body=f'<rect x="10" y="20" width="220" height="150" stroke="#D6B136" fill="none" stroke-width="3"/>'+lines
    return f'<svg viewBox="0 0 240 190" role="img" aria-label="{kind} glass partition diagram">{base}{body}<line x1="0" y1="176" x2="240" y2="176" stroke="#2B2C2F" stroke-width="4"/></svg>'

GLAZING_HTML = """<section class="sec alt"><div class="wrap"><p class="kicker reveal">Glazing systems</p><h2 class="reveal">Which glass partition fits the spec?</h2>
<p class="reveal muted small">Illustrations of the systems we install. Typical performance shown; the final figure always comes from the specified manufacturer system.</p>
<div class="gsys">
<div class="reveal">""" + _svg('frameless') + """<h3>Frameless glass</h3><p>Butt-jointed toughened or laminated glass in slim head and floor channels. Clean sightlines for meeting rooms and receptions.</p><ul><li>Single glazed, 10–12mm</li><li>Typically around Rw 35–38 dB</li><li>Frameless or framed glass doors</li></ul></div>
<div class="reveal" style="--d:90ms">""" + _svg('framed') + """<h3>Framed aluminium</h3><p>Aluminium-framed single or double-glazed screens with integrated doors and blinds options. The workhorse for offices and healthcare.</p><ul><li>Single or double glazed</li><li>Double glazed typically Rw 42–50 dB+</li><li>Fire-rated options available</li></ul></div>
<div class="reveal" style="--d:180ms">""" + _svg('crittall') + """<h3>Crittall-style screens</h3><p>Slim black steel-look frames with glazing bars, for a warehouse feel in offices, hospitality and high-end residential.</p><ul><li>Steel or aluminium steel-look frames</li><li>Single, double and acoustic glass</li><li>Hinged, pivot and sliding doors</li></ul></div>
</div></div></section>"""

def gallery_html(t):
    g = t.get('gallery')
    if not g: return ''
    figs = ''.join(f'<figure class="reveal" style="--d:{i*80}ms"><img src="{im(f)}" alt="{html.escape(a)}" loading="lazy" width="800" height="600"><figcaption>{html.escape(a)}</figcaption></figure>' for i, (f, a) in enumerate(g))
    return f'<section class="sec slim gal-sec"><div class="wrap"><p class="kicker reveal">{t.get('gallery_title', 'On site')}</p><div class="gal{' gal3' if len(g) >= 5 else ''}">{figs}</div></div></section>'

def faq_html(faqs):
    return ('<section class="sec faq"><div class="wrap narrow"><p class="kicker reveal">Questions</p><h2 class="reveal">Common questions</h2>'
            + ''.join(f'<details class="reveal"><summary>{html.escape(q)}</summary><p>{html.escape(a)}</p></details>' for q, a in faqs) + '</div></section>')

CTA = f'''<section class="cta"><div class="wrap reveal"><h2>Got a package to price?</h2><p>Send drawings, spec and programme. You'll deal with the person who prices it.</p><div class="row"><a class="btn btn-solid" href="/contact">Send a package</a><a class="btn btn-ghost" href="tel:{PHONE_INTL}">Call {PHONE}</a></div></div></section>'''

ACCRED = '<div class="accred">' + ''.join(f'<span>{a}</span>' for a in ['Constructionline Gold', 'SSIP accredited', 'CITB registered', 'CSCS-carded teams', 'Supply &amp; fit or labour only', 'UK-wide']) + '</div>'

def proj_card(p, h='h2'):
    return f'''<article class="proj reveal"><div class="imgwrap"><img src="{im(p["img"])}" alt="{p["t"]}, {p["loc"]} interior fit-out" loading="lazy" width="900" height="650"></div><div><p class="mono small gold">{p["loc"]}{" · " + p["v"] if p["v"] else ""}</p><{h}>{p["t"]}</{h}><p>{p["d"]}</p><p class="tags">{"".join(f"<span>{x}</span>" for x in p["tags"])}</p>{'<p class="muted small">Delivered by Dave Groom before founding Tatton Projects.</p>' if p.get("pre") else ''}</div></article>'''

def write(path, content):
    fp = os.path.join(OUT, 'index.html') if path == '/' else os.path.join(OUT, path.strip('/') + '.html')
    with open(fp, 'w') as f: f.write(content)

# ---------- HOME ----------
home_faqs = [
 ('What does Tatton Interiors do?', 'Tatton Interiors is an interior fit-out subcontractor. We price and deliver plastering and drylining, metal stud partitions, suspended ceilings, joinery and fitted furniture, internal glazing, and toilet cubicle and washroom packages for main contractors and fit-out firms.'),
 ('Do you work supply & fit or labour only?', 'Both. Every package can be priced supply & fit with materials included, or labour only where the main contractor free-issues materials.'),
 ('Where do you work?', 'Anywhere in the UK. We are based in Altrincham, Greater Manchester, and take packages across England, Scotland and Wales, including London, Birmingham, Manchester, Liverpool, Leeds, Sheffield, Newcastle, Bristol, Nottingham, Glasgow and Cardiff. For work away we bring supervised teams with accommodation priced in.'),
 ('How is Tatton Interiors related to Tatton Projects?', 'Tatton Interiors is the interiors subcontracting arm of Tatton Projects. It is a trading name of Tatton Projects of Cheshire Limited and part of the DPG Holdings group. Tatton Projects delivers main contracts; Tatton Interiors delivers interior packages for other contractors.'),
 ('Are you pre-qualified?', 'Yes. We hold Constructionline Gold and SSIP accreditation, are CITB registered, and our site teams are CSCS carded. We will complete your PQQ or supplier forms.')]
cards = ''.join(f'''<a class="card reveal" href="/{t["slug"]}" style="--d:{i*80}ms"><div class="card-img"><img src="{im(t["img"])}" alt="{t["name"]} by Tatton Interiors" loading="lazy" width="800" height="600"></div><div class="card-body"><span class="mono num">0{i+1}</span><h3>{t["name"]}</h3><p>{t["card"]}</p><span class="arrow">View package <i>→</i></span></div></a>''' for i, t in enumerate(TRADES))
proj_strip = ''.join(f'<figure class="pc reveal" style="--d:{i*70}ms"><img src="{im(p["img"])}" alt="{p["t"]}, {p["loc"]}: interior fit-out" loading="lazy" width="800" height="600"><figcaption><strong>{p["t"]}</strong><span>{p["loc"]}{" · " + p["v"] if p["v"] else ""}</span></figcaption></figure>' for i, p in enumerate(PROJECTS[:4]))
mq = ' <b>/</b> '.join(['Plastering', 'Drylining', 'Metal stud partitions', 'Acoustic walls', 'Suspended ceilings', 'MF ceilings', 'Commercial joinery', 'Fitted furniture', 'Wall panelling', 'Glass partitions', 'Internal glazing', 'Toilet cubicles', 'IPS & vanities', 'Ceiling tiles'])
home = head('Drylining, Partitions & Ceilings Subcontractor UK | Tatton Interiors',
            'Interior fit-out subcontractor for main contractors: drylining, partitions, ceilings, joinery, glazing and washrooms. Supply & fit or labour only. UK-wide.',
            '/', 'ti-breakout-mesh-ceiling.jpg',
            [{"@context": "https://schema.org", "@type": "WebSite", "@id": DOMAIN + '/#website', "url": DOMAIN + '/', "name": "Tatton Interiors", "publisher": {"@id": ORG_ID}, "inLanguage": "en-GB"}, faq_ld(home_faqs)]) + header('/') + f'''
<section class="hero">
<div class="hero-bg"><img src="{im('ti-breakout-mesh-ceiling.jpg')}" alt="Office breakout with black mesh ceiling tiles, ring light, fitted seating and kitchen joinery" width="1800" height="1200" fetchpriority="high"></div>
<div class="hero-in wrap">
<p class="kicker anim" style="--d:0ms">Interior fit-out subcontractor · A Tatton Projects company</p>
<h1 class="anim" style="--d:120ms">Interior packages for <em>main contractors</em> and fit-out firms.</h1>
<p class="lead anim" style="--d:260ms">Plastering &amp; drylining, partitions, suspended ceilings, wall panelling, joinery &amp; fitted furniture and internal glazing. Priced as one package or trade by trade, supply &amp; fit or labour only. Based in Manchester, working right across the UK.</p>
<div class="row anim" style="--d:380ms"><a class="btn btn-solid" href="/contact">Send a package to price</a><a class="btn btn-ghost" href="#packages">See the packages</a></div>
</div>
<div class="marquee" aria-hidden="true"><div class="track"><span>{mq} <b>/</b> </span><span>{mq} <b>/</b> </span></div></div>
</section>
<div class="wrap"><section class="stats">
<div class="stat reveal"><b><span data-count="110">110</span>+</b><span>projects since 2020</span></div>
<div class="stat reveal" style="--d:80ms"><b><span data-count="20">20</span>+</b><span>years on the tools &amp; running sites</span></div>
<div class="stat reveal" style="--d:160ms"><b><span data-count="6">6</span></b><span>interior trades, one point of contact</span></div>
<div class="stat reveal" style="--d:240ms"><b>Gold</b><span>Constructionline accredited</span></div>
</section></div>
<section class="sec" id="packages"><div class="wrap"><p class="kicker reveal">What we deliver</p><h2 class="reveal">Six interior packages. One team owning the junctions.</h2>
<div class="cards">{cards}</div></div></section>
<section class="sec alt"><div class="wrap two">
<div><p class="kicker reveal">How we work</p><h2 class="reveal">Priced by the person who runs it.</h2>
<ol class="steps"><li class="reveal"><b>Send the package</b><span>Drawings, spec, programme and whether it's supply &amp; fit or labour only.</span></li><li class="reveal" style="--d:80ms"><b>Priced properly</b><span>A clear breakdown with qualifications listed. No surprises at final account.</span></li><li class="reveal" style="--d:160ms"><b>Set out &amp; built</b><span>Supervised teams, set out from your drawings, clashes raised early.</span></li><li class="reveal" style="--d:240ms"><b>Signed off</b><span>Snagged, cleaned and handed back with the paperwork you need.</span></li></ol></div>
<div class="reveal" style="--d:120ms"><div class="imgwrap"><img class="rounded" src="{im('ti-acoustic-felt-booth.jpg')}" alt="Acoustic felt wall panelling and walnut joinery in a fitted work booth" loading="lazy" width="900" height="700"></div>{ACCRED}</div>
</div></section>
<section class="sec"><div class="wrap"><p class="kicker reveal">Recent interiors work</p><h2 class="reveal">Delivered in live offices, retail and hospitality.</h2><div class="pgrid">{proj_strip}</div><p class="reveal center"><a class="btn btn-ghost" href="/projects">All projects →</a></p></div></section>
<section class="sec"><div class="wrap"><p class="kicker reveal">Where we work</p><h2 class="reveal">Based in Manchester. Working across the UK.</h2>
<p class="reveal muted" style="max-width:720px">We take interior packages anywhere in England, Scotland and Wales. Close to home we run day teams; further afield we bring supervised teams with accommodation priced in, so there are no travel extras at final account.</p>
<ul class="pills reveal">{''.join(f'<li><a href="/areas/{c["slug"]}">{c["name"]}</a></li>' for c in CITIES)}<li><a href="/areas">All areas →</a></li></ul></div></section>
<section class="sec group"><div class="wrap narrow reveal"><p class="kicker">Part of the group</p><h2>A Tatton Projects company.</h2><p>Tatton Interiors is the interiors subcontracting arm of <a href="https://www.tatton-projects.co.uk/">Tatton Projects</a>, the Manchester and Cheshire main contractor behind new build homes, developments and commercial fit-outs. Both sit under the DPG Holdings group alongside <a href="https://www.theloadbearingcompany.co.uk/">The Load Bearing Company</a>, <a href="https://www.silopod.co.uk/">SiloPod</a> and <a href="https://www.esti-mate.app/">EstiMate</a>, so every package has a main contractor's backing.</p></div></section>
{faq_html(home_faqs)}
{CTA}''' + footer()
write('/', home)

# ---------- TRADE PAGES ----------
for t in TRADES:
    others = ''.join(f'<li><a href="/{o["slug"]}">{o["name"]}</a></li>' for o in TRADES if o is not t)
    svc = {"@context": "https://schema.org", "@type": "Service", "name": t['name'], "serviceType": t['h1'], "description": t['desc'],
           "provider": {"@id": ORG_ID}, "areaServed": AREAS, "url": DOMAIN + '/' + t['slug'],
           "hasOfferCatalog": {"@type": "OfferCatalog", "name": t['name'] + ' scope',
                               "itemListElement": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": s}} for s in t['scope']]}}
    scope = ''.join(f'<li class="reveal" style="--d:{i*50}ms">{s}</li>' for i, s in enumerate(t['scope']))
    page = head(t['title'], t.get('meta', t['desc']), '/' + t['slug'], t['img'], [svc, faq_ld(t['faqs']), crumbs([('Home', '/'), (t['name'], '/' + t['slug'])])]) + header('/' + t['slug']) + f'''
<section class="phero"><div class="phero-bg"><img src="{im(t["img"])}" alt="{t["name"]} by Tatton Interiors" width="1600" height="1000" fetchpriority="high"></div>
<div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <span>{t["name"]}</span></nav>
<h1 class="anim">{t["h1"]}</h1><p class="lead anim" style="--d:140ms">{t["lede"]}</p>
<div class="row anim" style="--d:260ms"><a class="btn btn-solid" href="/contact?package={t["slug"]}">Price a {t["short"]} package</a><a class="btn btn-ghost" href="tel:{PHONE_INTL}">{PHONE}</a></div></div></section>
<section class="sec"><div class="wrap two">
<div><p class="kicker reveal">Scope we cover</p><h2 class="reveal">{t["name"]} packages</h2><ul class="ticks">{scope}</ul></div>
<div class="reveal" style="--d:120ms"><div class="imgwrap"><img class="rounded" src="{im(t["img2"])}" alt="{t["name"]} project example" loading="lazy" width="900" height="700"></div><p class="note">{t["systems"]}</p>
<div class="terms"><div><b>Supply &amp; fit</b><span>Materials, labour and supervision in one price.</span></div><div><b>Labour only</b><span>You free-issue materials; we supply managed, supervised teams.</span></div></div></div>
</div></section>
{gallery_html(t)}
{ACOUSTIC_HTML if t.get("extra") == "acoustic" else (GLAZING_HTML if t.get("extra") == "glazing" else "")}
{QUALITY_HTML}
<section class="sec slim"><div class="wrap reveal">{ACCRED}</div></section>
{faq_html(t["faqs"])}
<section class="sec slim"><div class="wrap reveal"><h2>Other interior packages</h2><ul class="pills">{others}</ul></div></section>
{CTA}''' + footer()
    write('/' + t['slug'], page)

# ---------- PROJECTS ----------
pc = ''.join(proj_card(p) for p in PROJECTS)
proj = head('Interior Fit-Out Projects | Tatton Interiors',
            'Interior fit-out projects by the Tatton team: offices, live public buildings, retail shopfits and hospitality. Ceilings, partitions, joinery and glazing.',
            '/projects', 'stockport-01-floor.jpg', [crumbs([('Home', '/'), ('Projects', '/projects')])]) + header('/projects') + f'''
<section class="phero short"><div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Projects</span></nav><h1 class="anim">Interior fit-out projects</h1><p class="lead anim" style="--d:140ms">A selection of interiors work delivered by the Tatton team, much of it in occupied buildings that stayed open throughout.</p></div></section>
<section class="sec"><div class="wrap projlist">{pc}</div></section>{CTA}''' + footer()
write('/projects', proj)

# ---------- ABOUT ----------
about_faqs = [('Who owns Tatton Interiors?', 'Tatton Interiors is a trading name of Tatton Projects of Cheshire Limited (company no. 17553626), part of the DPG Holdings group, run by founder Dave Groom.'),
              ('What accreditations do you hold?', 'Constructionline Gold and SSIP accreditation, CITB registration, and CSCS-carded site teams.')]
group_ld = {"@context": "https://schema.org", "@type": "Organization", "name": "DPG Holdings",
            "subOrganization": [{"@id": ORG_ID}, {"@type": "Organization", "name": "Tatton Projects", "url": "https://www.tatton-projects.co.uk/"},
                                {"@type": "Organization", "name": "The Load Bearing Company", "url": "https://www.theloadbearingcompany.co.uk/"},
                                {"@type": "Organization", "name": "SiloPod", "url": "https://www.silopod.co.uk/"},
                                {"@type": "Organization", "name": "EstiMate", "url": "https://www.esti-mate.app/"}]}
about = head('About Tatton Interiors | A Tatton Projects Company',
             'Tatton Interiors is the interiors subcontracting arm of Tatton Projects. Constructionline Gold, SSIP and CITB. Based in Altrincham, Greater Manchester.',
             '/about', 'ti-timber-slat-wall-panelling.jpg', [faq_ld(about_faqs), crumbs([('Home', '/'), ('About', '/about')]), group_ld]) + header('/about') + f'''
<section class="phero short"><div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <span>About</span></nav><h1 class="anim">About Tatton Interiors</h1><p class="lead anim" style="--d:140ms">The interiors arm of Tatton Projects, set up so main contractors get a dedicated interiors subcontractor with a main contractor's backing.</p></div></section>
<section class="sec"><div class="wrap two">
<div class="reveal"><h2>Why a separate interiors company</h2><p>Tatton Projects builds new homes, developments and commercial fit-outs as a main contractor. More and more main contractors asked us to take on their drylining, ceilings, partitions, joinery and glazing packages. Tatton Interiors exists to do exactly that, with its own focus, its own teams and the same standards.</p>
<h2>Who runs it</h2><p>Tatton Interiors is run by founder Dave Groom, who has 20+ years in construction. He started on the tools as a joiner and worked up through site manager, project manager and contracts manager roles, including McGoff Construction and Morris &amp; Spottiswood, before founding Tatton Projects. You deal with the person who prices your package.</p></div>
<div class="reveal" style="--d:120ms"><h2>Accreditations</h2>{ACCRED}<h2>Company details</h2><p class="mono small">Tatton Interiors is a trading name of Tatton Projects of Cheshire Limited · Company no. 17553626 · Registered office: Suite 15, Peel House, 30 The Downs, Altrincham WA14 2PX</p>
<h2>The DPG Holdings group</h2><ul class="group-list"><li><a href="https://www.tatton-projects.co.uk/">Tatton Projects</a><span>Main contractor: new build homes, developments, commercial fit-out</span></li><li><b>Tatton Interiors</b><span>Interior packages for main contractors</span></li><li><a href="https://www.theloadbearingcompany.co.uk/">The Load Bearing Company</a><span>Steels, knock-throughs and structural alterations</span></li><li><a href="https://www.silopod.co.uk/">SiloPod</a><span>Acoustic office pods</span></li><li><a href="https://www.esti-mate.app/">EstiMate</a><span>Estimating and quoting software for trades</span></li></ul></div>
</div></section>{faq_html(about_faqs)}{CTA}''' + footer()
write('/about', about)

# ---------- CONTACT ----------
opts = ''.join(f'<option value="{t["slug"]}">{t["name"]}</option>' for t in TRADES)
direct_email = f'<p class="big">{mail()}</p>' if EMAIL else ''
form_note = 'fill this in and it opens a ready-made email' if EMAIL else 'call us'
contact = head('Send a Package to Price | Tatton Interiors',
               'Send your drylining, partitions, ceilings, joinery or internal glazing package to Tatton Interiors for pricing. Supply & fit or labour only. Call 0161 706 3880.',
               '/contact', 'stockport-04-desks.jpg', [crumbs([('Home', '/'), ('Contact', '/contact')]), {"@context": "https://schema.org", "@type": "ContactPage", "url": DOMAIN + '/contact', "about": {"@id": ORG_ID}}]) + header('/contact') + f'''
<section class="phero short"><div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Contact</span></nav><h1 class="anim">Send a package to price</h1><p class="lead anim" style="--d:140ms">Send drawings, spec and programme, or {form_note}. We also complete PQQs and supplier forms.</p></div></section>
<section class="sec"><div class="wrap two">
<form class="form reveal" id="pkg" data-to="{EMAIL}">
<label>Your name<input name="name" required autocomplete="name"></label>
<label>Company<input name="company" required autocomplete="organization"></label>
<label>Email<input type="email" name="email" required autocomplete="email"></label>
<label>Phone<input name="phone" autocomplete="tel"></label>
<label>Package<select name="package"><option value="full">Full interiors package</option>{opts}</select></label>
<label>Basis<select name="basis"><option>Supply &amp; fit</option><option>Labour only</option><option>Price both</option></select></label>
<label>Site location<input name="site"></label>
<label>Start date / programme<input name="start"></label>
<label class="full">Notes<textarea name="notes" rows="5" placeholder="Scope, tender return date, drawing links"></textarea></label>
<button class="btn btn-solid full" type="submit">Send package details</button>
<p class="muted small full">Attach drawings to the email that opens. Prefer to call? <a href="tel:{PHONE_INTL}">{PHONE}</a></p>
</form>
<div class="reveal" style="--d:120ms"><div class="contact-card"><p class="kicker">Direct</p><p class="big"><a href="tel:{PHONE_INTL}">{PHONE}</a></p>{direct_email}<p class="mono small">Suite 15, Peel House<br>30 The Downs, Altrincham<br>WA14 2PX</p><p class="muted small">Mon–Fri 7:30–17:30</p></div>{ACCRED}</div>
</div></section>''' + footer()
write('/contact', contact)

write('/404', head('Page not found | Tatton Interiors', 'Page not found.', '/404', 'vanguard-01-breakout.jpg', robots='noindex') + header()
      + '<section class="phero short"><div class="wrap phero-in"><h1>Page not found</h1><p class="lead">Try one of our interior packages instead.</p><p><a class="btn btn-solid" href="/">Back to home</a></p></div></section>' + footer())


# ---------- AREA PAGES ----------
os.makedirs(os.path.join(OUT, 'areas'), exist_ok=True)
for c in CITIES:
    n = c['name']
    path = '/areas/' + c['slug']
    t_links = ''.join(f'<li class="reveal" style="--d:{i*50}ms"><a href="/{t["slug"]}"><b>{t["name"]} in {n}</b><span>{t["card"]}</span></a></li>' for i, t in enumerate(TRADES))
    faqs = [(f'Do you work in {n}?', f'Yes. Tatton Interiors takes drylining, partitions, ceilings, joinery, glazing and washroom packages in {n} and across {c["region"]}, including {c["near"]}. {c["note"]}'),
            (f'Can you supply labour-only teams in {n}?', f'Yes. We supply supervised, CSCS-carded labour-only teams in {n} where the main contractor free-issues materials, or price supply & fit with materials included.'),
            (f'How quickly can you start in {n}?', 'Send the drawings, spec and programme and we will confirm price and start date. For most packages we can mobilise within one to two weeks of order, subject to programme.')]
    svc = {"@context": "https://schema.org", "@type": "Service", "name": f"Interior fit-out subcontractor in {n}",
           "serviceType": "Drylining, partitions, suspended ceilings, joinery, internal glazing and washroom fit-out",
           "provider": {"@id": ORG_ID}, "areaServed": {"@type": "City" if c['slug'] != 'cheshire' else "AdministrativeArea", "name": n}, "url": DOMAIN + path}
    others = ''.join(f'<li><a href="/areas/{o["slug"]}">{o["name"]}</a></li>' for o in CITIES if o is not c)
    local = [p for p in PROJECTS if c['slug'] in p.get('areas', ())]
    local_html = '' if not local else f'''<section class="sec alt"><div class="wrap"><p class="kicker reveal">Local work</p><h2 class="reveal">Delivered in {c["region"]}</h2><div class="projlist">{"".join(proj_card(p, "h3") for p in local)}</div><p class="reveal center" style="margin-top:40px"><a class="btn btn-ghost" href="/projects">All projects →</a></p></div></section>'''
    page = head(f'Drylining, Partitions & Ceilings Contractors {n} | Tatton Interiors',
                f'Fit-out subcontractor in {n}: drylining, partitions, ceilings, joinery, glazing and washrooms for main contractors. Supply & fit or labour only.',
                path, 'ti-breakout-mesh-ceiling.jpg', [svc, faq_ld(faqs), crumbs([('Home', '/'), ('Areas', '/areas'), (n, path)])]) + header() + f"""
<section class="phero short"><div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/areas">Areas</a> / <span>{n}</span></nav>
<h1 class="anim">Interior fit-out subcontractors in {n}</h1>
<p class="lead anim" style="--d:140ms">Drylining, partitions, suspended ceilings, joinery, internal glazing and washroom packages for main contractors and fit-out firms {("across " + c["region"]) if n in c["region"] else ("in " + n + " and across " + c["region"])}. Supply &amp; fit or labour only.</p>
<div class="row anim" style="--d:260ms"><a class="btn btn-solid" href="/contact">Send a {n} package</a><a class="btn btn-ghost" href="tel:{PHONE_INTL}">{PHONE}</a></div></div></section>
<section class="sec"><div class="wrap two">
<div><p class="kicker reveal">Packages in {n}</p><h2 class="reveal">What we deliver in {n}</h2><ul class="arealinks">{t_links}</ul></div>
<div class="reveal" style="--d:120ms"><h2>Working in {n}</h2><p>We cover {c["near"]}.</p><p>{c["note"]}</p>
<p>Every package is supervised, set out from your drawings and built to the specified manufacturer system, with hold-point photos and handover records as standard.</p>{ACCRED}</div>
</div></section>
{local_html}
{QUALITY_HTML}
{faq_html(faqs)}
<section class="sec slim"><div class="wrap reveal"><h2>Other areas we cover</h2><ul class="pills">{others}</ul></div></section>
{CTA}""" + footer()
    write(path, page)

idx_items = ''.join(f'<li class="reveal" style="--d:{(i%4)*50}ms"><a href="/areas/{c["slug"]}"><b>{c["name"]}</b><span>{c["region"]}</span></a></li>' for i, c in enumerate(CITIES))
areas_idx = head('Areas We Cover | UK Interior Fit-Out Subcontractor | Tatton Interiors',
                 'Tatton Interiors works UK-wide: drylining, partitions, ceilings, joinery, glazing and washroom packages from London to Glasgow, with supervised teams.',
                 '/areas', 'ti-open-plan-grid-ceiling.jpg', [crumbs([('Home', '/'), ('Areas', '/areas')])]) + header() + f"""
<section class="phero short"><div class="wrap phero-in"><nav class="crumbs mono small" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Areas</span></nav>
<h1 class="anim">Working across the UK</h1><p class="lead anim" style="--d:140ms">Based in Altrincham, Greater Manchester, we take interior packages anywhere in England, Scotland and Wales. For work away we bring supervised teams with travel and accommodation priced in from the start.</p></div></section>
<section class="sec"><div class="wrap"><ul class="areagrid">{idx_items}</ul>
<p class="reveal muted" style="margin-top:30px">Not listed? We still cover it. <a href="/contact">Send us the package</a> and tell us where the site is.</p></div></section>{CTA}""" + footer()
write('/areas', areas_idx)

# ---------- sitemap / robots / llms ----------
pages = ['/', '/plastering-drylining', '/partitions', '/suspended-ceilings', '/joinery', '/internal-glazing', '/toilet-cubicles', '/projects', '/areas'] + ['/areas/' + c['slug'] for c in CITIES] + ['/about', '/contact']
with open(os.path.join(OUT, 'sitemap.xml'), 'w') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + ''.join(f'<url><loc>{DOMAIN}{p}</loc><lastmod>{TODAY}</lastmod><priority>{"1.0" if p == "/" else "0.8"}</priority></url>\n' for p in pages) + '</urlset>\n')
bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot',
        'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'DuckDuckBot', 'CCBot', 'Amazonbot', 'meta-externalagent']
with open(os.path.join(OUT, 'robots.txt'), 'w') as f:
    f.write(''.join(f'User-agent: {b}\nAllow: /\n\n' for b in bots) + f'User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n')
contact_line = f'- Contact: {PHONE}' + (f', {EMAIL}' if EMAIL else '') + ', Suite 15, Peel House, 30 The Downs, Altrincham WA14 2PX'
llms = f'''# Tatton Interiors

> Tatton Interiors is a UK interior fit-out subcontractor based in Altrincham, Greater Manchester. It prices and delivers plastering & drylining, metal stud partitions, suspended ceilings, commercial joinery and fitted furniture, internal glazing, and toilet cubicle and washroom packages for main contractors and fit-out firms, supply & fit or labour only, anywhere in the UK. It is the interiors subcontracting arm of Tatton Projects (main contractor) and part of the DPG Holdings group.

Key facts:
- Legal entity: Tatton Projects of Cheshire Limited (Companies House 17553626); Tatton Interiors is a trading name
- Group: DPG Holdings: Tatton Projects, Tatton Interiors, The Load Bearing Company, SiloPod, EstiMate
- Accreditations: Constructionline Gold, SSIP, CITB registered, CSCS-carded teams
- Founder: Dave Groom (20+ years: joiner, site manager, project manager, contracts manager)
{contact_line}
- Areas: UK-wide (England, Scotland, Wales), including {', '.join(c['name'] for c in CITIES)}

## Packages
''' + ''.join(f'- [{t["name"]}]({DOMAIN}/{t["slug"]}): {t["desc"]}\n' for t in TRADES) + f'''
## Company
- [Projects]({DOMAIN}/projects): Interior fit-out projects including Sentric Music (Liverpool), Stockport service centre, Calvin Klein and Fossil shopfits
- [About]({DOMAIN}/about): Company, accreditations and the DPG Holdings group
- [Contact]({DOMAIN}/contact): Send a package to price
- [Areas we cover]({DOMAIN}/areas): UK-wide coverage
''' + ''.join(f'- [Interior fit-out subcontractor in {c["name"]}]({DOMAIN}/areas/{c["slug"]})\n' for c in CITIES) + f'''- [Tatton Projects](https://www.tatton-projects.co.uk/): Main contractor for new build homes, developments and commercial fit-out; Tatton Interiors is its interiors subcontracting arm

## Optional
- [Full text]({DOMAIN}/llms-full.txt): every package with its scope list, the projects, the areas and the common questions in one file
'''
with open(os.path.join(OUT, 'llms.txt'), 'w') as f: f.write(llms)

# ---------- llms-full.txt: the whole site in one plain-text read ----------
import re
def txt(x): return html.unescape(re.sub(r'<[^>]+>', '', x))
def qa(faqs): return ''.join(f'Q: {txt(q)}\nA: {txt(a)}\n\n' for q, a in faqs)
full = llms.split('## Packages')[0].rstrip() + '\n\n'
full += ''.join(f'## {t["name"]}\n{DOMAIN}/{t["slug"]}\n\n{txt(t["lede"])}\n\nScope:\n' + ''.join(f'- {txt(x)}\n' for x in t['scope'])
                + f'\n{txt(t["systems"])}\n\n' + qa(t['faqs']) for t in TRADES)
full += f'## Projects\n{DOMAIN}/projects\n\n' + ''.join(
    f'- {p["t"]}, {p["loc"]}{" (" + p["v"] + ")" if p["v"] else ""}: {txt(p["d"])}' + (' Delivered by Dave Groom before founding Tatton Projects.' if p.get('pre') else '') + '\n' for p in PROJECTS)
full += f'\n## Areas\n{DOMAIN}/areas\n\n' + ''.join(f'- {c["name"]} ({c["region"]}): {c["near"]}. {c["note"]}\n' for c in CITIES)
full += '\n## Common questions\n\n' + qa(home_faqs + about_faqs)
with open(os.path.join(OUT, 'llms-full.txt'), 'w') as f: f.write(full.rstrip() + '\n')
print('ok', sorted(os.listdir(OUT)))
