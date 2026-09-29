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
    name: "Shopfitting Manchester",
    short: "Shopfitting",
    sector: "Commercial",
    title: "Shopfitters Manchester | Retail Fit-Out | Tatton Projects",
    description: "Shopfitting and retail fit-out contractors in Manchester delivering strip-out, joinery, M&E, finishes, refurbishment and complete retail interiors.",
    h1: "Shopfitting, *Manchester.*",
    eyebrow: "Retail fit-out · Manchester & nationwide",
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
    name: "Commercial Refurbishment Manchester",
    short: "Commercial refurbishment",
    sector: "Commercial",
    title: "Commercial Refurbishment Manchester | Tatton Projects",
    description: "Commercial refurbishment contractors in Manchester for offices, workplaces, retail and operational buildings. Managed from survey and strip-out to handover.",
    h1: "Commercial refurbishment, *Manchester.*",
    eyebrow: "Refurbishment · Manchester & the North West",
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
    title: "New Build Homes Cheshire | Tatton Projects",
    description: "New-build home contractor for Cheshire and Greater Manchester. Tatton Projects delivers one-off private homes and residential construction from pre-construction to handover.",
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
    description: "Planning a major home extension in Altrincham? Tatton Projects delivers substantial extensions, structural remodelling and full refurbishments across Altrincham, Hale and Bowdon.",
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
  }

];
