/* ===========================================================
   TATTON PROJECTS — services.js
   ===========================================================
   The service pages (office fit-out, shopfitting, extensions…)
   are built from this file by build-pages.js, the same way the
   project pages are built from projects.js.

   To change a service page, edit it here — not the .html file,
   which is rewritten every time the site is built.

   *Words in stars* show in gold italics in headings.
   hero / projects use the photos and project ids from projects.js.
   Keep prices and claims to what the costs page and FAQ say.
   =========================================================== */

const SERVICES = [

  {
    id: "office-fit-out-manchester",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    name: "Office Fit-Out Manchester",
    short: "Office fit-out",
    sector: "Commercial",
    title: "Office Fit-Out Manchester | Cat A & Cat B | Tatton Projects",
    description: "Manchester office fit-out contractors delivering Cat A, Cat B, refurbishment and commercial interiors from pre-construction through to handover.",
    h1: "Office fit-out, *Manchester.*",
    eyebrow: "Commercial fit-out · Manchester & the North West",
    lede: "Tatton Projects delivers office fit-outs, workplace refurbishments and commercial interior projects across Manchester, Greater Manchester and the North West, with selected projects delivered nationwide.",
    summary: "Cat A and Cat B fit-out, workplace refurbishment and commercial interiors — much of it delivered in buildings that never closed.",
    hero: "images/vanguard-01-breakout.jpg",
    heroCaption: "Vanguard · £2M Cat B fit-out · Manchester",
    card: "images/vanguard-01-breakout-card.jpg",
    heroFacts: [["Cat B from", "£70 / sq ft"], ["Largest to date", "£2M"], ["Coverage", "North West · nationwide"]],
    introEyebrow: "Project delivery",
    introHeading: "Commercial office fit-out contractors *in Manchester.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "Most of our fit-outs happen in buildings that stay open — floors handed back in phases, dust and route separation, noisy trades out of hours. Our largest, a £2M Cat B fit-out at Vanguard, was delivered floor by floor in a live, occupied building."
    ],
    factsTitle: "2026 guide prices",
    facts: [["Cat A refresh", "£45–£70 / sq ft"], ["Cat B — standard", "£70–£110 / sq ft"], ["Cat B — high spec", "£110–£180+ / sq ft"], ["Occupied building", "+10–25%"]],
    factsNote: "All-in, excluding VAT and loose furniture. Manchester and the North West.",
    cardsHeading: "From landlord shell *to working floor.*",
    cards: [
      ["Cat A & Cat B office fit-out", "We undertake Cat A landlord works and Cat B occupier fit-outs, including partitions, ceilings, flooring, lighting, power, data, mechanical services, kitchens, breakout spaces, bespoke joinery and finishes."],
      ["Pre-construction that reduces surprises", "Before mobilisation we review drawings, specifications, landlord requirements, programme, access, long-lead items, M&E requirements and the cost plan so key risks are identified early."],
      ["One accountable project team", "Tatton Projects coordinates procurement, subcontractors, programme, health and safety, quality, variations, snagging and handover through one project team."],
      ["Manchester and UK-wide commercial delivery", "We work across Manchester, Trafford, Salford, Stockport, Altrincham, Cheshire and the wider North West, with selected commercial fit-out projects delivered nationwide."]
    ],
    scope: [
      "Cat A landlord works",
      "Cat B occupier fit-out",
      "Partitions, doors and glazed screens",
      "Ceilings and lighting",
      "Flooring",
      "Power, data and mechanical services",
      "Kitchens, tea points and breakout spaces",
      "Bespoke joinery and finishes",
      "Pre-construction review and cost plan",
      "Snagging and handover"
    ],
    projects: ["vanguard", "stockport-service-centre", "sentric-music"],
    faqs: [
      ["What does an office fit-out cost per square foot in Manchester?", "As a working range in 2026: a basic Cat A refresh runs around £45–£70 per sq ft. A standard Cat B fit-out is roughly £70–£110 per sq ft. A high-specification Cat B — bespoke joinery, feature lighting, acoustic treatment, the kind of thing we did at Vanguard — runs £110–£180 per sq ft and upwards. Anyone who quotes you a single number without seeing the floor, the building's services and the landlord's licence to alter is guessing. We give you an elemental cost plan instead, and that number is the one you build to."],
      ["Can you work in my building while we're still open?", "Yes — it's most of what we do. Hotels that kept selling rooms, care homes with residents in their beds, a public service centre with ninety staff at their desks and the public coming through the doors, retail units in a trading mall. Phased handbacks, dust and route separation, out-of-hours working. If you can only close for a weekend, say so at the appraisal and we'll build the programme around it."],
      ["How do you stop the final account creeping?", "A written cost plan at stage two and a signed variation procedure before anyone lifts a spade. Written variations only — no verbal extras, ever. Monthly valuations so you always know where the number is."],
      ["Do you work outside Manchester?", "Yes. Commercial fit-out and refurbishment we take nationwide for the right project. We have delivered in Liverpool, Leeds, Stockport and London."]
    ],
    ctaHeading: "Planning an office *fit-out?*",
    ctaText: "Send us your drawings, specification or initial brief. You'll get a written cost plan from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["Cat A office fit-out", "Cat B office fit-out", "Office refurbishment", "Commercial interiors", "Fit-out project management"]
  },

  {
    id: "shopfitting-manchester",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    name: "Shopfitting Manchester",
    short: "Shopfitting",
    sector: "Commercial",
    title: "Shopfitting & Retail Fit-Out, UK-wide | Tatton Projects",
    description: "Shopfitting and retail fit-out contractors in Manchester delivering strip-out, joinery, M&E, finishes, refurbishment and complete retail interiors.",
    h1: "Shopfitting, *Manchester.*",
    eyebrow: "Retail fit-out · UK-wide",
    lede: "Tatton Projects delivers shopfitting, retail refurbishment and commercial fit-out projects across Manchester and the North West, from strip-out and enabling works through to finished customer-facing space.",
    summary: "Shopfitting and retail refurbishment, from strip-out and enabling works to a finished store — built around a fixed opening date.",
    hero: "images/fossil-01-store.jpg",
    heroCaption: "Fossil retail shopfit · delivered by Dave Groom before founding Tatton",
    card: "images/fossil-01-store-card.jpg",
    heroFacts: [["Programme", "Built to opening day"], ["Coverage", "Nationwide · selected"], ["Scope", "Strip-out to handover"]],
    introEyebrow: "Project delivery",
    introHeading: "Retail fit-out and *shopfitting contractors.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "Retail units inside trading shopping centres are part of what we do — out-of-hours working, dust and route separation, and a programme built around the day the doors open."
    ],
    factsTitle: "At a glance",
    facts: [["Scope", "Strip-out to handover"], ["New stores", "And refurbishments"], ["Coverage", "Manchester · nationwide"]],
    factsNote: "",
    cardsHeading: "From strip-out *to opening day.*",
    cards: [
      ["Complete retail fit-out", "Our delivery can include strip-out, partitions, ceilings, flooring, bespoke joinery, counters, lighting, electrical works, plumbing, staff facilities, decoration, fire stopping and final finishes."],
      ["Built around opening dates", "Retail programmes are often driven by a fixed launch date. We review drawings, landlord requirements, procurement and long-lead items before works begin and manage the trade sequence through to snagging and handover."],
      ["Refurbishment as well as new stores", "Where a complete strip-out is unnecessary, works can be focused on selected areas and phased around operational requirements."],
      ["Commercial project management", "Programme, procurement, site management, subcontractors, health and safety, cost control, variations and quality are coordinated by Tatton Projects."]
    ],
    scope: [
      "Strip-out and enabling works",
      "Partitions and ceilings",
      "Flooring",
      "Bespoke joinery and counters",
      "Lighting and electrical works",
      "Plumbing and staff facilities",
      "Fire stopping",
      "Decoration and final finishes",
      "Snagging and handover"
    ],
    projects: ["fossil", "calvin-klein", "leeds-bar"],
    projectsNote: "These three were delivered by Dave Groom as project and contracts manager, before he founded Tatton Projects in 2020.",
    faqs: [
      ["Can you build to a fixed opening date?", "Yes. Retail programmes are often driven by a fixed launch date, so we review drawings, landlord requirements, procurement and long-lead items before works begin, and manage the trade sequence through to snagging and handover."],
      ["Do you refurbish existing stores as well as fitting out new ones?", "Yes. Where a complete strip-out is unnecessary, works can be focused on selected areas and phased around the way the store trades."],
      ["Can you work while the shopping centre is open?", "Yes — it's most of what we do. Retail units in a trading mall, hotels that kept selling rooms, a public service centre with the public coming through the doors. Phased handbacks, dust and route separation, out-of-hours working."]
    ],
    ctaHeading: "Opening a *new store?*",
    ctaText: "Send us the drawings, the landlord pack and the opening date. You'll get a written cost plan and a programme from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["Shopfitting", "Retail fit-out", "Retail refurbishment", "Commercial interiors"]
  },

  {
    id: "commercial-refurbishment-manchester",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    name: "Commercial Refurbishment Manchester",
    short: "Commercial refurbishment",
    sector: "Commercial",
    title: "Commercial Refurbishment, UK-wide | Tatton Projects",
    description: "Commercial refurbishment contractors in Manchester for offices, workplaces, retail and operational buildings. Managed from survey and strip-out to handover.",
    h1: "Commercial refurbishment, *Manchester.*",
    eyebrow: "Refurbishment · UK-wide",
    lede: "Tatton Projects delivers commercial refurbishment across Manchester and the North West, coordinating the building fabric, interiors and specialist trades required to upgrade existing workplaces and commercial property.",
    summary: "Whole-building and occupied refurbishment of workplaces and commercial property — including the EPC and MEES upgrades that make a building lettable.",
    hero: "images/stockport-01-floor.jpg",
    heroCaption: "Stockport service centre · £175K · fitted out while open",
    card: "images/stockport-01-floor-card.jpg",
    heroFacts: [["Occupied buildings", "Phased handbacks"], ["EPC & MEES", "Upgrades"], ["Buildings", "Occupied or vacant"]],
    introEyebrow: "Project delivery",
    introHeading: "Refurbishment of occupied and *vacant buildings.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "If your building is EPC E, in most cases it can't lawfully be let. We survey it, tell you what it costs to get the rating up, and do the work — often fabric, lighting and controls rather than anything dramatic."
    ],
    factsTitle: "At a glance",
    facts: [["Buildings", "Occupied or vacant"], ["Phasing", "Around your operation"], ["EPC & MEES", "Survey, cost, upgrade"]],
    factsNote: "",
    cardsHeading: "Existing buildings, *properly managed.*",
    cards: [
      ["Refurbishment without losing control of the building", "Existing buildings bring unknowns. We plan surveys, enabling works, sequencing, temporary protection, procurement and interfaces with existing services before the main programme gathers pace."],
      ["Occupied and phased works", "Where a client remains operational, works can be planned in phases with access, noise, dust and service interruptions considered in the programme."],
      ["One team across the trades", "We coordinate strip-out, partitions, ceilings, flooring, joinery, decoration, M&E, fire stopping and associated builders work."],
      ["From brief to handover", "Tatton Projects can support pre-construction review, cost planning, delivery, snagging and handover, providing a clear point of responsibility throughout the refurbishment."]
    ],
    scope: [
      "Surveys and enabling works",
      "Strip-out",
      "Partitions and ceilings",
      "Flooring and joinery",
      "Mechanical and electrical",
      "Fire stopping",
      "Decoration",
      "Associated builders work",
      "Phased and occupied works",
      "EPC and MEES upgrades"
    ],
    projects: ["stockport-service-centre", "vanguard", "stockport-office"],
    faqs: [
      ["My building is EPC E. Can I still let it?", "Not lawfully, in most cases — and the standard is tightening. This is the MEES regime, and it turns an aesthetic decision into a legal one: a sub-standard building can't earn until it's fixed. We survey it, tell you what it costs to get the rating up, and do the work. Often it's fabric, lighting and controls rather than anything dramatic. Get it assessed before your next void, not during one."],
      ["Can you work in my building while we're still open?", "Yes — it's most of what we do. Hotels that kept selling rooms, care homes with residents in their beds, a public service centre with ninety staff at their desks and the public coming through the doors, retail units in a trading mall. Phased handbacks, dust and route separation, out-of-hours working."],
      ["How do you stop the final account creeping?", "A written cost plan at stage two and a signed variation procedure before anyone lifts a spade. Written variations only — no verbal extras, ever. Monthly valuations so you always know where the number is."]
    ],
    ctaHeading: "Got a building to *bring back?*",
    ctaText: "Send us the address, the floor plans and what you need it to do. You'll get a straight answer on what it takes, and a written cost plan.",
    ctaButton: "Discuss a project →",
    serviceType: ["Commercial refurbishment", "Office refurbishment", "Building refurbishment", "Occupied building works", "EPC and MEES upgrades"]
  },

  {
    id: "new-build-homes-cheshire",
    name: "New Build Homes Cheshire",
    short: "New build homes",
    sector: "Residential",
    title: "New Build Homes & New Builds, Cheshire | Tatton Projects",
    description: "New-build home contractor for Cheshire and Greater Manchester. Tatton Projects delivers one-off private homes from pre-construction to handover.",
    h1: "New build homes, *Cheshire.*",
    eyebrow: "New build · Cheshire & Greater Manchester",
    lede: "Tatton Projects delivers new-build homes across Cheshire and Greater Manchester, coordinating the construction process from pre-construction and groundworks through structure, services, finishes and handover.",
    summary: "One-off private homes, from £400k to £3m and beyond — from groundworks and structure through services, finishes and handover.",
    hero: "images/knutsford-05-complete.jpg",
    heroCaption: "Knutsford new build · circa £400K · brick and flint",
    card: "images/knutsford-05-complete-card.jpg",
    heroFacts: [["Private homes", "£400K – £3M+"], ["Build rates", "£2,000–£5,500 / sq m"], ["Knutsford new build", "circa £400K"]],
    introEyebrow: "Project delivery",
    introHeading: "One-off private homes and *residential construction.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "Our Knutsford new build — an empty plot to a finished family home in brick and flint under a slate roof — came in at circa £400,000 for the build."
    ],
    factsTitle: "2026 guide prices",
    facts: [["Good standard", "£2,000–£2,600 / sq m"], ["High specification", "£2,600–£3,800 / sq m"], ["Exceptional", "£3,800–£5,500+ / sq m"], ["Basement", "£3,000–£5,000 / sq m"]],
    factsNote: "Finished floor area, excluding VAT, land, professional fees and abnormals. Cheshire and Greater Manchester.",
    cardsHeading: "A managed route *from plot to keys.*",
    cards: [
      ["A managed route from drawings to site", "We review architectural and structural information, procurement, programme, Building Control requirements and long-lead packages before and during delivery."],
      ["From groundworks to finishes", "Our scope can coordinate groundworks, structure, envelope, roofing, windows, M&E, internal finishes, kitchens, bathrooms and external works."],
      ["Private clients and development", "Tatton Projects works on substantial one-off homes and residential schemes where programme, quality and commercial control need active management."],
      ["Cheshire and Greater Manchester", "Our residential construction focus includes Knutsford, Wilmslow, Altrincham, Hale, Bowdon and surrounding Cheshire locations."]
    ],
    scope: [
      "Pre-construction review",
      "Groundworks",
      "Structure and envelope",
      "Roofing and windows",
      "Mechanical and electrical",
      "Kitchens and bathrooms",
      "Internal finishes",
      "External works",
      "Building Control and long-lead packages"
    ],
    projects: ["knutsford-new-build", "wilmslow-house", "pendrick-self-storage"],
    faqs: [
      ["What does a new build house cost per square metre in Cheshire?", "As a 2026 guide: £2,000–£2,600 per square metre for a well-built family house at a good standard, £2,600–£3,800 for high specification, and £3,800–£5,500 and upwards for the exceptional — basement, pool or spa, lift, gated approach. That excludes VAT, land, professional fees and abnormals. A 220 sq m house at a good standard is roughly £506,000 for the build, and £580,000 to £620,000 all-in before land."],
      ["I own a plot but don't know what it's worth. Can you help?", "Send us the location and a title plan. You'll get a residual land value and a build cost back in five working days, free. If the numbers don't work we'll tell you that too — that advice is free, and it's cheaper than finding out after you've bought it."],
      ["How do you stop the final account creeping?", "A written cost plan at stage two and a signed variation procedure before anyone lifts a spade. Written variations only — no verbal extras, ever. Monthly valuations so you always know where the number is."],
      ["Where do you build?", "New build homes, developments and private work across Greater Manchester and Cheshire — Altrincham, Hale, Bowdon, Knutsford, Mobberley, Wilmslow, Alderley Edge, Sale, Timperley, Mere, Handforth, Northwich, Macclesfield, Lymm, Winsford, New Mills and Chester."]
    ],
    ctaHeading: "Got a plot *and a plan?*",
    ctaText: "Send us the plot, the drawings or just the idea. You'll get a written cost plan from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["New build homes", "Residential construction", "Construction project management", "Home building"]
  },

  {
    id: "housing-developments-cheshire",
    name: "Housing Developments & Land Cheshire",
    short: "Housing developments & land",
    sector: "Residential",
    title: "Housing Developments & Land Cheshire | Tatton Projects",
    description: "Housing developments of 2–30 plots across Cheshire and Greater Manchester. We buy sites, joint-venture with landowners and build out. Free appraisal in 5 days.",
    h1: "Housing developments *& land, Cheshire.*",
    eyebrow: "Developments & land · Cheshire & Greater Manchester",
    lede: "Tatton Projects builds small and medium housing developments of two to thirty plots across Cheshire and Greater Manchester. We buy sites, joint-venture with landowners, and build out for landowners who want to keep the development upside.",
    summary: "Schemes of two to thirty plots. We buy sites, joint-venture with landowners and build out — with a free site appraisal in five working days.",
    hero: "images/knutsford-04-scaffold.jpg",
    heroCaption: "Knutsford · first floor and roof structure going on",
    card: "images/knutsford-04-scaffold.jpg",
    heroFacts: [["Schemes", "2 – 30 plots"], ["Site appraisal", "Free · 5 working days"], ["Routes", "Buy · JV · build out"]],
    introEyebrow: "Development delivery",
    introHeading: "Housing developers in *Cheshire and Greater Manchester.*",
    intro: [
      "Tatton Projects is owner-managed: the person who priced the job is the person managing it on site. We work with landowners, architects, engineers, Building Control and specialist subcontractors to turn an agreed scheme into a controlled construction project.",
      "Send us a location and a title plan and you'll get a residual land value and a build cost, free, in five working days. If the numbers don't work we'll tell you that too — it's cheaper than finding out after you've bought it."
    ],
    factsTitle: "At a glance",
    facts: [["Plots", "2 – 30"], ["Status", "With or without consent"], ["Geography", "Gtr Manchester & Cheshire"], ["Appraisal turnaround", "5 working days"]],
    factsNote: "",
    cardsHeading: "From a line on a map *to a street.*",
    cards: [
      ["Site appraisal in five working days", "Send us a location and a title plan. You'll get a residual land value and a build cost, free, in five working days."],
      ["Buy, joint-venture or build out", "We buy sites, joint-venture with landowners who'd rather keep the development upside, or build out a scheme for you."],
      ["Two to thirty plots", "Small and medium schemes of two to thirty plots, with or without planning consent."],
      ["Cheshire and Greater Manchester", "Our residential construction focus includes Knutsford, Wilmslow, Altrincham, Hale, Bowdon and surrounding Cheshire locations."]
    ],
    scope: [
      "Residual land value appraisal",
      "Planning and conditions discharge",
      "Elemental cost plan and procurement",
      "Full site management and build out",
      "Plot handover, snagging and warranty"
    ],
    projects: ["knutsford-new-build", "pendrick-self-storage", "wilmslow-house"],
    faqs: [
      ["I own a plot but don't know what it's worth. Can you help?", "Send us the location and a title plan. You'll get a residual land value and a build cost back in five working days, free. If the numbers don't work we'll tell you that too — that advice is free, and it's cheaper than finding out after you've bought it."],
      ["Do you buy land?", "Yes. We buy sites, joint-venture with landowners who'd rather keep the development upside, or build out a scheme for you."],
      ["What size of scheme do you build?", "Small and medium schemes of two to thirty plots, with or without planning consent."],
      ["Where do you build?", "New build homes, developments and private work across Greater Manchester and Cheshire — Altrincham, Hale, Bowdon, Knutsford, Mobberley, Wilmslow, Alderley Edge, Sale, Timperley, Mere, Handforth, Northwich, Macclesfield, Lymm, Winsford, New Mills and Chester."]
    ],
    ctaHeading: "Have a site? *We'll appraise it in a week.*",
    ctaText: "Send us a location and a title plan — you'll get a residual land value and a build cost, free, in five working days.",
    ctaButton: "Send us a site →",
    serviceType: ["Housing development", "Land acquisition", "Joint venture development", "Residential construction", "Site appraisal"]
  },

  {
    id: "extension-builders-altrincham",
    name: "Extension Builders Altrincham",
    short: "Extensions in Altrincham",
    sector: "Residential",
    title: "Extension Builders Altrincham | Tatton Projects",
    description: "Major home extensions, structural remodelling and full refurbishments across Altrincham, Hale and Bowdon, from Tatton Projects.",
    h1: "Extension builders, *Altrincham.*",
    eyebrow: "Extensions & remodelling · Altrincham, Hale & Bowdon",
    lede: "Tatton Projects delivers substantial residential extensions, structural remodelling and complete property refurbishments across Altrincham, Hale, Bowdon and the surrounding Cheshire area.",
    summary: "Substantial extensions, structural remodelling and whole-house refurbishment across Altrincham, Hale and Bowdon.",
    hero: "images/wilmslow-05-rear-after.jpg",
    heroCaption: "Wilmslow house · £375K rear extension & refurbishment",
    card: "images/wilmslow-04-front-after-card.jpg",
    heroFacts: [["Extensions from", "£2,400 / sq m"], ["Wilmslow house", "£375K"], ["Areas", "Altrincham · Hale · Bowdon"]],
    introEyebrow: "Project delivery",
    introHeading: "Major home extensions and remodelling *in Altrincham.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "Tatton Projects is owner-managed, so the projects we take get proper attention — the person who priced the job is the person managing it on site. Extensions, remodels and whole-house refurbishments are all welcome."
    ],
    factsTitle: "2026 guide prices",
    facts: [["Extension", "£2,400–£3,600 / sq m"], ["Whole-house refurbishment", "£1,400–£2,800 / sq m"], ["Basement", "£3,000–£5,000 / sq m"]],
    factsNote: "Finished floor area, excluding VAT, professional fees and abnormals. Cheshire and Greater Manchester.",
    cardsHeading: "From drawings *to handover.*",
    cards: [
      ["Built for substantial projects", "A major extension involves structure, foundations, drainage, glazing, M&E, kitchens and finishes. We manage the sequence and coordination rather than treating each package as an isolated trade."],
      ["From drawings to construction", "If you already have an architect and structural information, we can review the package, develop the construction scope and price the works. At an earlier stage, we can coordinate with the professional team to move the project towards site."],
      ["Project-specific cost planning", "Ground conditions, steelwork, glazing, kitchens, bathrooms, access and specification can materially change cost. We develop the price around the actual project rather than relying on a headline square-metre rate."],
      ["Local coverage", "Residential work is focused on Altrincham, Hale, Bowdon and the wider Greater Manchester and Cheshire area."]
    ],
    scope: [
      "Foundations and drainage",
      "Structural steelwork and remodelling",
      "Glazing",
      "Mechanical and electrical",
      "Kitchens and bathrooms",
      "Whole-house refurbishment",
      "Staircases and joinery",
      "Finishes and handover"
    ],
    projects: ["wilmslow-house", "didsbury-extension", "didsbury-kitchen"],
    faqs: [
      ["How much does an extension cost per square metre?", "As a 2026 guide across Cheshire and Greater Manchester: £2,400–£3,600 per square metre for a single or two-storey extension with structural alterations, tying into the existing house. It often costs more per square metre than a new build, because nothing is square. Whole-house refurbishment runs £1,400–£2,800 per square metre. Rates exclude VAT, professional fees and abnormals — ground conditions, drainage diversions and structural surprises are found by survey, not by a rate."],
      ["Can you work from my architect's drawings?", "Yes. If you already have an architect and structural information, we can review the package, develop the construction scope and price the works. At an earlier stage, we can coordinate with the professional team to move the project towards site."],
      ["Which areas do you cover?", "Altrincham, Hale, Bowdon and the wider Greater Manchester and Cheshire area — including Knutsford, Wilmslow, Alderley Edge, Sale, Timperley, Mere, Lymm and Macclesfield."]
    ],
    ctaHeading: "Planning a major *extension?*",
    ctaText: "Send us the drawings, or just the house and what you want from it. You'll get a written cost plan from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["House extensions", "Structural remodelling", "Whole-house refurbishment", "Residential construction"]
  },

  {
    id: "extension-builders-hale",
    name: "Extension Builders Hale",
    short: "Extensions in Hale",
    sector: "Residential",
    title: "Extension Builders Hale | Tatton Projects",
    description: "Major house extensions, structural remodelling and high-specification refurbishments in Hale and Cheshire from Tatton Projects.",
    h1: "Extension builders, *Hale.*",
    eyebrow: "Extensions & remodelling · Hale & Cheshire",
    lede: "Tatton Projects delivers substantial home extensions and whole-house remodelling in Hale, combining hands-on construction delivery with structured project management.",
    summary: "Major extensions and high-specification whole-house remodelling in Hale, Bowdon and the surrounding Cheshire villages.",
    hero: "images/didsbury-kitchen-01-crittall.jpg",
    heroCaption: "Didsbury kitchen extension · £120K · glazed roof",
    card: "images/didsbury-kitchen-01-crittall-card.jpg",
    heroFacts: [["Extensions from", "£2,400 / sq m"], ["Remodels", "Whole-house"], ["Areas", "Hale · Bowdon · Altrincham"]],
    introEyebrow: "Project delivery",
    introHeading: "Major extensions and high-specification *refurbishment in Hale.*",
    intro: [
      "Our approach combines practical construction delivery with programme, procurement and commercial management. We work with clients, architects, engineers, Building Control and specialist subcontractors to turn an agreed scope into a controlled construction project.",
      "Every price is built around the actual house — ground conditions, steelwork, glazing, kitchens, bathrooms, access and specification — not a headline square-metre rate. Scope, allowances and variations are written down before anyone lifts a spade."
    ],
    factsTitle: "At a glance",
    facts: [["Extension", "£2,400–£3,600 / sq m"], ["Whole-house refurbishment", "£1,400–£2,800 / sq m"], ["Areas", "Hale · Bowdon · Altrincham"]],
    factsNote: "2026 guide prices, excluding VAT, professional fees and abnormals.",
    cardsHeading: "One contractor, *one project.*",
    cards: [
      ["Complex residential construction", "We coordinate foundations, structural steelwork, masonry, roofing, glazing, first fix, second fix and finishes so the extension is managed as one construction project."],
      ["Working with your design team", "We can work from architect and structural engineer information, review buildability and procurement, and coordinate the construction phase with Building Control and specialist suppliers."],
      ["Clear commercial control", "Scope, allowances, procurement and variations need to be visible on substantial projects. Our approach is built around documented cost and programme control."],
      ["Hale, Altrincham and Cheshire", "Our residential focus covers Hale, Altrincham, Bowdon and surrounding Cheshire locations."]
    ],
    scope: [
      "Foundations",
      "Structural steelwork",
      "Masonry and roofing",
      "Glazing",
      "First and second fix",
      "Kitchens, bathrooms and finishes",
      "Coordination with your architect and engineer",
      "Building Control and specialist suppliers"
    ],
    projects: ["didsbury-kitchen", "didsbury-extension", "wilmslow-house"],
    faqs: [
      ["What does a major extension in Hale cost?", "As a 2026 guide across Cheshire and Greater Manchester: £2,400–£3,600 per square metre for a single or two-storey extension with structural alterations. It often costs more per square metre than a new build, because nothing is square. Whole-house refurbishment runs £1,400–£2,800 per square metre. Excluding VAT, professional fees and abnormals — and a measured survey and cost plan beats any rate."],
      ["How do you stop the final account creeping?", "A written cost plan at stage two and a signed variation procedure before anyone lifts a spade. Written variations only — no verbal extras, ever. Monthly valuations so you always know where the number is."],
      ["Which areas do you cover?", "Hale, Bowdon, Altrincham and the surrounding Cheshire area — including Knutsford, Mobberley, Wilmslow, Alderley Edge, Mere and Lymm."]
    ],
    ctaHeading: "Planning a major *extension?*",
    ctaText: "Send us the drawings, or just the house and what you want from it. You'll get a written cost plan from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["House extensions Hale", "Home refurbishment", "Structural alterations", "High-specification residential construction"]
  },

  {
    id: "cat-a-cat-b-fit-out",
    name: "Cat A & Cat B Fit-Out",
    short: "Cat A & Cat B fit-out",
    sector: "Commercial",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    title: "Cat A & Cat B Office Fit-Out, UK-wide | Tatton Projects",
    description: "Cat A and Cat B office fit-out contractors, UK-wide. Landlord Cat A, tenant Cat B and shell-to-handover, engineered, costed and delivered.",
    h1: "Cat A & Cat B *fit-out.*",
    eyebrow: "Office fit-out · UK-wide",
    lede: "Tatton Projects delivers Cat A and Cat B office fit-out across the UK, from landlord Cat A upgrades that make a floor lettable to full Cat B fit-outs that turn a bare shell into a workplace.",
    summary: "Landlord Cat A, tenant Cat B and complete shell-to-handover fit-out, delivered UK-wide.",
    hero: "images/vanguard-01-breakout.jpg",
    heroCaption: "Vanguard · £2M Cat B fit-out · Manchester",
    card: "images/vanguard-01-breakout-card.jpg",
    heroFacts: [["Cat A from", "£45 / sq ft"], ["Cat B from", "£70 / sq ft"], ["Coverage", "UK-wide"]],
    introEyebrow: "Project delivery",
    introHeading: "The difference between *Cat A and Cat B.*",
    intro: [
      "Cat A is the landlord's base build: raised floors, suspended ceilings, basic services, fire detection and finished surfaces that leave a floor clean, lettable and ready for a tenant. Cat B is the tenant's fit-out: the layout, partitions, meeting rooms, kitchens, joinery, branding, lighting and workplace design that turn that empty floor into somewhere a team actually works.",
      "We deliver both, and the shell-to-handover work in between, coordinating landlord, tenant, designer and building control so the two stages meet cleanly instead of clashing on site."
    ],
    factsTitle: "Guide rates",
    facts: [["Cat A refresh", "£45–£70 / sq ft"], ["Standard Cat B", "£70–£110 / sq ft"], ["High-spec Cat B", "£110–£180 / sq ft"], ["Coverage", "UK-wide, selected"]],
    factsNote: "2026 guide rates, excluding VAT and professional fees. A measured cost plan replaces the range.",
    cardsHeading: "From base build *to handover.*",
    cards: [
      ["Cat A for landlords", "Raised floors, ceilings, base services, fire detection and finished surfaces that make a floor lettable and pass a letting agent's inspection."],
      ["Cat B for tenants", "Space planning, partitions, meeting rooms, tea points, joinery, feature lighting, acoustics, branding and the full workplace fit-out."],
      ["Shell-to-handover", "A bare shell taken all the way to an occupied floor as one managed project, so nothing falls between landlord and tenant scope."],
      ["Dilapidations & reinstatement", "End-of-lease strip-out and reinstatement back to the Cat A condition your lease requires."]
    ],
    scope: [
      "Raised access floors and suspended ceilings",
      "Partitions, glazed screens and doors",
      "Mechanical, electrical and HVAC",
      "Lighting, power and data",
      "Kitchens, tea points and washrooms",
      "Joinery, branding and finishes",
      "Fire detection and life safety",
      "Test, commission and handover"
    ],
    projects: ["vanguard", "sentric-music", "stockport-office"],
    faqs: [
      ["What is the difference between Cat A and Cat B fit-out?", "Cat A is the landlord's base finish, raised floors, ceilings, basic services and finished surfaces that make a floor lettable. Cat B is the tenant's fit-out on top: layout, partitions, meeting rooms, kitchens, joinery, lighting and branding. We deliver both."],
      ["How much does a Cat B office fit-out cost?", "As a 2026 guide: a Cat A refresh runs about £45–£70 per sq ft, a standard Cat B £70–£110, and a high-specification Cat B £110–£180 and up. We give you an elemental cost plan rather than a single headline number."],
      ["Do you work UK-wide?", "Yes. Commercial fit-out is delivered across the UK on selected projects, managed from Manchester with the same team on site wherever the building is."],
      ["Can you take a shell through Cat A and Cat B as one project?", "Yes. Running Cat A straight into Cat B as one programme avoids the gap where landlord and tenant scope usually clash, and gets the floor occupied sooner."]
    ],
    ctaHeading: "Fitting out *a floor?*",
    ctaText: "Send us the floor plans, the lease and the specification. You'll get a written cost plan and a programme from the person who'd run the job.",
    ctaButton: "Discuss a fit-out →",
    serviceType: ["Cat A fit-out", "Cat B fit-out", "Office fit-out", "Commercial fit-out", "Shell and core fit-out"]
  },

  {
    id: "commercial-fit-out-uk",
    name: "Commercial Fit-Out",
    short: "Commercial fit-out",
    sector: "Commercial",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    title: "Commercial Fit-Out Contractors, UK-wide | Tatton Projects",
    description: "Commercial and office fit-out contractors working UK-wide: offices, healthcare, hospitality and retail, delivered in occupied buildings and to fixed programmes.",
    h1: "Commercial fit-out, *UK-wide.*",
    eyebrow: "Commercial fit-out · UK-wide",
    lede: "Tatton Projects fits out commercial buildings across the UK, offices, workplaces, healthcare, hotels, restaurants and retail, much of it delivered in buildings that never close.",
    summary: "Office, healthcare, hospitality and retail fit-out, delivered UK-wide and around live operations.",
    hero: "images/sentric-01-lounge.jpg",
    heroCaption: "Sentric Music · Cat B fit-out · Liverpool",
    card: "images/sentric-01-lounge-card.jpg",
    heroFacts: [["Largest to date", "£2M"], ["Sectors", "Office · care · retail"], ["Coverage", "UK-wide"]],
    introEyebrow: "Project delivery",
    introHeading: "One contractor, *every sector.*",
    intro: [
      "We deliver commercial fit-out and refurbishment across the UK: Cat A and Cat B offices, care homes and healthcare, hotels and restaurants, retail units and public-facing service buildings. The common thread is programme, procurement and commercial control, the same discipline whatever the sector.",
      "Much of it is done in occupied buildings: hotels that kept selling rooms, care homes with residents in their beds, service centres with the public coming through the doors. Phased handbacks, dust and route separation and out-of-hours working are routine."
    ],
    factsTitle: "At a glance",
    facts: [["Sectors", "Office, healthcare, hospitality, retail"], ["Occupied buildings", "Phased, out-of-hours"], ["Programme", "Fixed-date delivery"], ["Coverage", "UK-wide, selected"]],
    factsNote: "",
    cardsHeading: "Commercial interiors, *properly run.*",
    cards: [
      ["Offices & workplaces", "Cat A and Cat B fit-out, refurbishment and reconfiguration for landlords and occupiers."],
      ["Healthcare & care homes", "Fit-out and refurbishment in live clinical and care settings, sequenced around residents and patients."],
      ["Hotels, restaurants & retail", "Front and back of house delivered to a fixed opening date, in trading buildings where needed."],
      ["Occupied buildings", "Phased handbacks, temporary protection and out-of-hours working so your operation keeps running."]
    ],
    scope: [
      "Cat A and Cat B office fit-out",
      "Healthcare and care-home fit-out",
      "Hotel, restaurant and retail fit-out",
      "Whole-building refurbishment",
      "Mechanical and electrical",
      "Partitions, ceilings and joinery",
      "Phasing and temporary works",
      "Test, commission and handover"
    ],
    projects: ["vanguard", "sentric-music", "stockport-service-centre"],
    faqs: [
      ["Do you work across the whole UK?", "Yes. Commercial fit-out and refurbishment is delivered on selected projects nationwide, managed from Manchester with our own team on site wherever the building is."],
      ["Can you work while our building stays open?", "Yes, it is most of what we do. Hotels, care homes, service centres and retail units in trading malls, delivered with phased handbacks, dust and route separation and out-of-hours working."],
      ["What sectors do you fit out?", "Offices and workplaces, healthcare and care homes, hotels, restaurants, retail and public-facing service buildings."],
      ["How do you control the final cost?", "A written cost plan at stage two and a signed variation procedure before work starts. Written variations only, and monthly valuations so you always know where the number is."]
    ],
    ctaHeading: "Got a building *to fit out?*",
    ctaText: "Send us the floor plans and what the space needs to do. You'll get a written cost plan and a programme from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["Commercial fit-out", "Office fit-out", "Healthcare fit-out", "Retail fit-out", "Hospitality fit-out"]
  },

  {
    id: "building-conversions",
    name: "Building & Change-of-Use Conversions",
    short: "Conversions",
    sector: "Commercial",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    title: "Building Conversions & Change of Use | Tatton Projects",
    description: "Building conversion contractors: office-to-residential, commercial change of use and permitted-development conversions, engineered and delivered across the UK.",
    h1: "Building *conversions.*",
    eyebrow: "Conversions & change of use · UK-wide",
    lede: "Tatton Projects converts buildings to new uses, offices to apartments, commercial to residential and change-of-use projects under permitted development, from structural work through to finished, lettable space.",
    summary: "Office-to-residential, commercial change of use and permitted-development conversions, delivered UK-wide.",
    hero: "images/stockport-01-floor.jpg",
    heroCaption: "Stockport service centre · refurbished while occupied",
    card: "images/stockport-01-floor-card.jpg",
    heroFacts: [["Change of use", "Class MA & full"], ["Scope", "Structure to finish"], ["Coverage", "UK-wide"]],
    introEyebrow: "Project delivery",
    introHeading: "A new use *from an old building.*",
    intro: [
      "Conversions turn a building that no longer earns into one that does: offices into apartments, redundant commercial space into homes, and mixed change-of-use schemes. Many now proceed under permitted development rights such as Class MA, which lets suitable commercial premises become residential without a full planning application, though prior approval and building regulations still apply.",
      "We handle the whole conversion: structural alterations, new floors and cores, services, fire compartmentation, acoustics, insulation and the finishes that make the space lettable or saleable."
    ],
    factsTitle: "At a glance",
    facts: [["Office to residential", "Class MA & full planning"], ["Commercial change of use", "Retail, industrial, mixed"], ["Structure", "Alterations & new cores"], ["Coverage", "UK-wide, selected"]],
    factsNote: "Permitted development still needs prior approval and building regulations sign-off. We confirm the route at survey.",
    cardsHeading: "From redundant *to let.*",
    cards: [
      ["Office to residential", "Converting redundant offices into apartments, under Class MA permitted development or full planning."],
      ["Commercial change of use", "Retail, industrial and mixed-use buildings converted to a new, consented use."],
      ["Structure & compartmentation", "New floors, cores, fire compartmentation, acoustic separation and insulation to meet residential standards."],
      ["Fit-out & finishes", "Kitchens, bathrooms, services and finishes that leave units ready to let or sell."]
    ],
    scope: [
      "Feasibility and change-of-use advice",
      "Structural alterations and new cores",
      "Fire compartmentation and means of escape",
      "Acoustic and thermal upgrades",
      "Mechanical, electrical and drainage",
      "Apartment layouts and fit-out",
      "Building regulations and prior approval",
      "Handover ready to let or sell"
    ],
    projects: ["stockport-service-centre", "wilmslow-house", "pendrick-self-storage"],
    faqs: [
      ["Can I convert an office into flats without planning permission?", "Often, yes. Class MA permitted development lets many offices and commercial premises become residential without a full planning application, but you still need prior approval from the council and building regulations sign-off. We confirm the route at survey."],
      ["What is change of use?", "It is moving a building from one planning use class to another, for example commercial to residential. Some changes are permitted development, others need full planning. Either way the building work must meet building regulations."],
      ["Do you do office-to-residential conversions?", "Yes, converting redundant offices and commercial buildings into apartments is a core part of what we do, from structure and compartmentation through to finished, lettable units."],
      ["Do you work UK-wide on conversions?", "Commercial and mixed-use conversions are delivered on selected projects nationwide; residential conversion work is focused on Greater Manchester and Cheshire."]
    ],
    ctaHeading: "Got a building *to convert?*",
    ctaText: "Send us the building and what you want it to become. You'll get a straight answer on the route, the works and a written cost plan.",
    ctaButton: "Discuss a conversion →",
    serviceType: ["Building conversion", "Change of use", "Office to residential conversion", "Permitted development conversion", "Commercial conversion"]
  },

  {
    id: "healthcare-fit-out",
    name: "Healthcare & Care-Home Fit-Out",
    short: "Healthcare fit-out",
    sector: "Commercial",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    title: "Care Home & Healthcare Fit-Out, UK-wide | Tatton Projects",
    description: "Care home and healthcare fit-out and refurbishment contractors, UK-wide, delivered in live clinical and care settings, sequenced around residents and patients.",
    h1: "Healthcare & care-home *fit-out.*",
    eyebrow: "Healthcare fit-out · UK-wide",
    lede: "Tatton Projects fits out and refurbishes care homes, surgeries and healthcare buildings across the UK, working in live settings around residents, patients and staff.",
    summary: "Care homes, surgeries and clinical buildings, fitted out and refurbished in live settings, UK-wide.",
    hero: "images/stockport-01-floor.jpg",
    heroCaption: "Occupied building · phased handbacks · fitted out while open",
    card: "images/stockport-01-floor-card.jpg",
    heroFacts: [["Settings", "Live clinical & care"], ["Sectors", "Care homes · surgeries · NHS"], ["Coverage", "UK-wide"]],
    introEyebrow: "Project delivery",
    introHeading: "Building around *people who can't move out.*",
    intro: [
      "Healthcare and care happen in buildings that cannot close. We fit out and refurbish care homes, GP surgeries, dental and clinical settings around the people who depend on them, with infection control, dust and noise management, fire compartmentation and phased handbacks planned before the first wall comes down.",
      "The programme is built around the building's routine, day rooms, medication rounds and clinics, so the works progress without putting residents or patients at risk."
    ],
    factsTitle: "At a glance",
    facts: [["Settings", "Care homes, surgeries, clinics"], ["Occupied", "Infection control & phasing"], ["Compliance", "Fire, DDA, HTM-aware"], ["Coverage", "UK-wide, selected"]],
    factsNote: "",
    cardsHeading: "Care settings, *kept safe.*",
    cards: [
      ["Care & nursing homes", "Refurbishment and fit-out of bedrooms, day rooms, dining and wet rooms, phased around residents."],
      ["Surgeries & clinics", "GP, dental and clinical fit-out with the infection control and compliance these settings demand."],
      ["Infection & dust control", "Sealed zones, negative pressure where needed, HEPA extraction and rigorous cleaning regimes."],
      ["Phased handbacks", "Rooms and wings handed back in a planned sequence so the building keeps running."]
    ],
    scope: [
      "Bedroom, day-room and dining refurbishment",
      "Wet rooms and accessible washrooms",
      "Infection control and dust management",
      "Fire compartmentation and life safety",
      "Nurse call, data and services",
      "DDA and accessibility upgrades",
      "Flooring, decoration and finishes",
      "Phasing and handback planning"
    ],
    projects: ["stockport-service-centre", "vanguard", "sentric-music"],
    faqs: [
      ["Can you work in an occupied care home?", "Yes, it is what we specialise in. Works are zoned and sealed, dust and noise controlled, and rooms handed back in a planned sequence so residents stay safe and the home keeps running."],
      ["Do you fit out GP surgeries and clinics?", "Yes, GP, dental and clinical settings, delivered with the infection control, compartmentation and compliance these buildings require."],
      ["Do you work UK-wide on healthcare projects?", "Yes, healthcare fit-out and refurbishment is delivered on selected projects nationwide, managed from Manchester."],
      ["How do you keep infection risk down during works?", "Sealed work zones, negative pressure and HEPA extraction where needed, dedicated routes, and cleaning regimes agreed with the home or practice before work starts."]
    ],
    ctaHeading: "Refurbishing *a care setting?*",
    ctaText: "Send us the building and how it is used day to day. You'll get a phased plan and a written cost plan from the person who'd run the job.",
    ctaButton: "Discuss a project →",
    serviceType: ["Healthcare fit-out", "Care home refurbishment", "Care home fit-out", "GP surgery fit-out", "Dental practice fit-out", "NHS fit-out"]
  },

  {
    id: "hospitality-fit-out",
    name: "Hotel, Restaurant & Hospitality Fit-Out",
    short: "Hospitality fit-out",
    sector: "Commercial",
    areaServed: [{ "@type": "Country", "name": "United Kingdom" }],
    title: "Hotel & Restaurant Fit-Out, UK-wide | Tatton Projects",
    description: "Hotel, restaurant and bar fit-out contractors, UK-wide. Front and back of house delivered to a fixed opening date, in trading venues where needed.",
    h1: "Hotel & restaurant *fit-out.*",
    eyebrow: "Hospitality fit-out · UK-wide",
    lede: "Tatton Projects fits out hotels, restaurants and bars across the UK, front and back of house, delivered to a fixed opening date and in venues that keep trading where they must.",
    summary: "Hotels, restaurants and bars, front and back of house, delivered to a fixed opening date, UK-wide.",
    hero: "images/leeds-bar-01-restaurant.jpg",
    heroCaption: "Bar & restaurant fit-out · Leeds",
    card: "images/leeds-bar-01-restaurant-card.jpg",
    heroFacts: [["Front & back", "Of house"], ["Programme", "Built to opening day"], ["Coverage", "UK-wide"]],
    introEyebrow: "Project delivery",
    introHeading: "Built to *opening day.*",
    intro: [
      "Hospitality lives and dies by the opening date. We fit out hotels, restaurants, bars and cafes across the UK, coordinating kitchens, bars, front of house, guest rooms and back of house so the venue opens on the day the marketing says it will.",
      "Where a hotel keeps selling rooms or a venue keeps trading next door, we phase the works, separate the routes and run the noisy trades out of hours."
    ],
    factsTitle: "At a glance",
    facts: [["Venues", "Hotels, restaurants, bars"], ["Kitchens", "Commercial, extract, gas"], ["Trading", "Phased where needed"], ["Coverage", "UK-wide, selected"]],
    factsNote: "",
    cardsHeading: "Front and back *of house.*",
    cards: [
      ["Restaurants & bars", "Full fit-out: dining, bar servery, commercial kitchen, extract and finishes, to a fixed opening date."],
      ["Hotels", "Guest rooms, lobbies, restaurants and back of house, delivered around a trading operation."],
      ["Commercial kitchens", "Kitchen fit-out with extract, gas interlocks, drainage and the compliance a servery needs."],
      ["Trading venues", "Phased handbacks, route separation and out-of-hours working so the doors stay open."]
    ],
    scope: [
      "Restaurant, bar and cafe fit-out",
      "Hotel guest rooms and public areas",
      "Commercial kitchens and extract",
      "Bars, serveries and joinery",
      "Feature lighting and acoustics",
      "Mechanical, electrical and drainage",
      "Fire, gas and life safety",
      "Phasing to a fixed opening date"
    ],
    projects: ["leeds-bar", "sentric-music", "vanguard"],
    faqs: [
      ["Can you deliver to a fixed opening date?", "Yes. Hospitality programmes are driven by the opening date, so we plan procurement, long-lead items and the trade sequence backwards from it and manage to that date."],
      ["Can you fit out a commercial kitchen?", "Yes, commercial kitchens with extract, gas interlocks, drainage and the compliance a servery needs, coordinated with your catering supplier."],
      ["Can you work while the venue keeps trading?", "Yes, hotels that kept selling rooms and venues that kept serving next door. Phased handbacks, route separation and out-of-hours working keep the doors open."],
      ["Do you work UK-wide on hospitality projects?", "Yes, hotel, restaurant and bar fit-out is delivered on selected projects nationwide, managed from Manchester."]
    ],
    ctaHeading: "Opening *a venue?*",
    ctaText: "Send us the drawings and the opening date. You'll get a written cost plan and a programme from the person who'd run the job.",
    ctaButton: "Discuss a fit-out →",
    serviceType: ["Hospitality fit-out", "Hotel fit-out", "Restaurant fit-out", "Bar fit-out", "Commercial kitchen fit-out", "Cafe fit-out"]
  }

];
