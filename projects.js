/* ===========================================================
   TATTON PROJECTS — projects.js
   ===========================================================
   THIS IS THE ONLY FILE YOU EDIT TO ADD WORK.

   Copy a block, paste it at the TOP of the list, fill it in.
   Keep every comma where it is. Text goes in "quote marks".

   sector:      resi | dev | fitout | refurb | health | hosp | retail
   featured:    true = homepage.  false = still opens, just not featured.
   attribution: ""  if Tatton Projects Ltd delivered it.
                Otherwise the pre-2020 line. Tatton Ltd was founded in
                2020 — anything older was delivered by Dave at a previous
                employer. Keep this honest. Tender teams check.

   Photos live in /images. Leave any field as "" and it won't show.
   =========================================================== */

const PROJECTS = [

  {
    id: "vanguard",
    name: "Vanguard",
    client: "",
    location: "Manchester",
    value: "£2M",
    year: "2024",
    sector: "fitout",
    type: "Cat B fit-out",
    live: false,
    featured: true,
    attribution: "",
    card: "images/vanguard-01-breakout-card.jpg",
    hero: "images/vanguard-01-breakout.jpg",
    gallery: [
      { src: "images/vanguard-02-lounge.jpg",     cap: "Curved banquette and herringbone oak beneath a perforated metal ceiling raft" },
      { src: "images/vanguard-03-lift-lobby.jpg", cap: "Terrazzo lift lobby with framed glazed partitions" },
      { src: "images/vanguard-04-booths.jpg",     cap: "Walnut slat booths with acoustic backs and integrated power" },
      { src: "images/vanguard-05-booth.jpg",      cap: "Acoustic felt, walnut, and a worktop that takes a laptop and nothing else" },
      { src: "images/vanguard-06-entrance.jpg",   cap: "Glazed double doors set flush into the walnut slat wall" },
      { src: "images/vanguard-07-openplan.jpg",   cap: "Open plan with suspended linear lighting" },
      { src: "images/vanguard-08-floor.jpg",      cap: "Acoustic curtain and the meeting suite running the length of the floor" },
      { src: "images/vanguard-09-utility.jpg",    cap: "Copy and utility area behind an arched opening" },
      { src: "images/vanguard-10-progress.jpg",   cap: "The same floor, mid-programme" }
    ],
    blurb: "A £2M Cat B fit-out across multiple floors. Feature lighting, bespoke joinery, acoustic booths and a terrazzo lift lobby — delivered to a fixed programme in a live building.",
    overview: "Our largest project to date and the one we point people at. A full Cat B fit-out delivered floor by floor in a live, occupied building — every noisy trade sequenced around a working office, and a landlord who wanted the common parts handed back exactly as we found them.\nThe brief wasn't a standard office. Circular suspended lighting rings under perforated metal acoustic rafts. Herringbone oak. Walnut slat walls the full length of the floor. Bespoke banquette seating with integrated power and planting. A terrazzo lift lobby. None of it off a catalogue — all of it drawn, made and set out on site.",
    facts: { "Contract": "Cat B fit-out", "Value": "£2,000,000", "Duration": "", "Floor area": "", "Status": "Complete" },
    scope: [
      "Multi-floor Cat B fit-out",
      "Feature lighting and perforated metal ceiling rafts",
      "Herringbone oak and carpet tile flooring",
      "Bespoke walnut slat wall panelling",
      "Bespoke banquette seating with integrated power",
      "Acoustic booths and meeting suite",
      "Tea points and utility areas",
      "Terrazzo lift lobby and glazed screens",
      "Full mechanical and electrical"
    ],
    challenge: "A live, occupied building. Deliveries, strip-out and every noisy trade sequenced around people trying to work — and the landlord's common parts handed back untouched. Most of the heavy work ran out of hours.",
    outcome: "Delivered on programme. Settled at the agreed final account.",
    quote: { text: "", by: "" }
  },

  {
    id: "stockport-service-centre",
    name: "Stockport service centre",
    client: "Confidential client",
    location: "Stockport",
    value: "£175K",
    year: "2025",
    sector: "fitout",
    type: "Cat B fit-out · Live building",
    live: false,
    featured: true,
    attribution: "",
    card: "images/stockport-01-floor-card.jpg",
    hero: "images/stockport-01-floor.jpg",
    gallery: [
      { src: "images/stockport-02-positions.jpg", cap: "Ninety-plus numbered service positions, screened and fully serviced" },
      { src: "images/stockport-03-waiting.jpg",   cap: "Waiting area and wayfinding — the public side of the floor" },
      { src: "images/stockport-06-openplan.jpg",  cap: "Open plan running the full length of the building" },
      { src: "images/stockport-05-breakout.jpg",  cap: "Soft seating and collaboration space" },
      { src: "images/stockport-04-desks.jpg",     cap: "Desking with acoustic and protective screens" },
      { src: "images/stockport-07-detail.jpg",    cap: "Power, data and cable management at every position" }
    ],
    blurb: "A £175K fit-out delivered in a fully operational building — a public-facing service floor with ninety-plus staffed positions that never closed for a day.",
    overview: "A large public-facing service centre, fitted out while it was open and staffed. Not an empty shell handed over on a Friday — a working floor with the public coming through the doors and staff at their desks throughout.\nThat changes everything about how you build. The floor was delivered in phases so service positions came back online in batches — powered, cabled and screened before anyone sat down. Noisy trades ran out of hours. The separation between the works and the public had to hold every single day.\nThe client is confidential. But this is the job to look at if you're asking whether we can build around your operation instead of shutting it down.",
    facts: { "Contract": "Cat B fit-out", "Value": "circa £175,000", "Duration": "", "Floor area": "", "Status": "Complete" },
    scope: [
      "Phased fit-out of a live, staffed floor",
      "90+ numbered service positions",
      "Desking, screens and acoustic dividers",
      "Public waiting areas and wayfinding",
      "Power, data and floor-box cable management",
      "Suspended ceilings and lighting",
      "Full mechanical and electrical",
      "Out-of-hours working and public separation"
    ],
    challenge: "The building never closed. Staff worked at their desks and the public came through the doors every day of the programme. Positions had to come back online in batches, and the separation between the works and the public had to hold without fail.",
    outcome: "Delivered in phases with no closure of the service. On programme, settled at the agreed final account.",
    quote: { text: "", by: "" }
  },

  {
    id: "wilmslow-house",
    name: "Wilmslow house",
    client: "Private client",
    location: "Wilmslow",
    value: "£375K",
    year: "",
    sector: "resi",
    type: "Extension · Refurbishment · Fit-out",
    live: false,
    featured: true,
    attribution: "",
    card: "images/wilmslow-04-front-after-card.jpg",
    hero: "images/wilmslow-04-front-after.jpg",
    gallery: [
      { src: "images/wilmslow-01-before.jpg",     cap: "Before — the house as we took it on" },
      { src: "images/wilmslow-02-during.jpg",     cap: "Rear extension going in" },
      { src: "images/wilmslow-05-rear-after.jpg", cap: "After — rear elevation with bi-folds onto the terrace" },
      { src: "images/wilmslow-06-kitchen.jpg",    cap: "Open-plan kitchen and living space, opened to the garden" },
      { src: "images/wilmslow-07-porch.jpg",      cap: "Oak-framed porch" },
      { src: "images/wilmslow-03-stairs.jpg",     cap: "New oak staircase and landing" }
    ],
    blurb: "A tired 1930s detached taken back to brick and rebuilt — full-width rear extension, complete refurbishment, new kitchen, staircase and oak porch.",
    overview: "This is the before-and-after that shows what we do to a house.\nA tired red-brick detached, dark and cut up inside. We extended it front and rear, re-rendered it, replaced every window, put in a full-width rear extension with bi-folds onto a new terrace, opened the ground floor into a single kitchen-living space, and built a new oak staircase and oak-framed porch.\nWhat came out is a different house on the same footprint. This is the kind of job we still take — above £100,000.",
    facts: { "Contract": "Extension, refurbishment and fit-out", "Value": "circa £375,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Full-width rear extension",
      "Front extension and re-render",
      "Structural alterations and steelwork",
      "Complete internal strip-out and refurbishment",
      "New kitchen and open-plan living space",
      "Bi-fold glazing and new terrace",
      "New oak staircase and joinery",
      "Oak-framed porch",
      "Complete re-services — heating, electrics, plumbing",
      "Driveway, landscaping and external works"
    ],
    challenge: "",
    outcome: "Delivered and settled at the agreed final account.",
    quote: { text: "", by: "" }
  },

  {
    id: "sentric-music",
    name: "Sentric Music",
    client: "Sentric Music Group",
    location: "Liverpool",
    value: "£110K",
    year: "2024",
    sector: "fitout",
    type: "Cat B fit-out",
    live: false,
    featured: true,
    attribution: "",
    card: "images/sentric-01-lounge-card.jpg",
    hero: "images/sentric-01-lounge.jpg",
    gallery: [
      { src: "images/sentric-02-lounge-wide.jpg",   cap: "Curved lounge beneath a bespoke chain-and-globe feature ceiling" },
      { src: "images/sentric-04-breakout.jpg",      cap: "Breakout and townhall space with acoustic artwork" },
      { src: "images/sentric-10-booths.jpg",        cap: "High-back acoustic booths for focus work" },
      { src: "images/sentric-11-pods.jpg",          cap: "Upholstered pods against the record wall" },
      { src: "images/sentric-05-boardroom.jpg",     cap: "Boardroom with acoustic ceiling raft" },
      { src: "images/sentric-06-meeting.jpg",       cap: "Meeting suite with operable wall" },
      { src: "images/sentric-14-acoustic-wall.jpg", cap: "Acoustic panels running the length of the corridor" },
      { src: "images/sentric-12-tv-wall.jpg",       cap: "Media wall and slatted timber" },
      { src: "images/sentric-08-corridor.jpg",      cap: "Meeting rooms, each named after a track" },
      { src: "images/sentric-13-believe-2.jpg",     cap: "Staff kitchen and social space" }
    ],
    blurb: "Cat B fit-out for a music rights business. Bespoke feature lighting, acoustic booths, boardroom, staff kitchen and a lounge built around a record wall.",
    overview: "A music rights business that had outgrown its space. The brief was a floor that sounded as good as it looked — and one that felt like the industry it works in.\nA curved lounge sits under a bespoke chain-and-globe feature ceiling, facing a wall of records. Acoustic panelling runs the length of the floor. High-back pods and booths give people somewhere to think. Meeting rooms, a boardroom with an operable wall, and a staff kitchen that people actually want to sit in.",
    facts: { "Contract": "Cat B fit-out", "Value": "circa £110,000", "Duration": "", "Floor area": "", "Status": "Complete" },
    scope: [
      "Reception and lounge with record wall",
      "Bespoke chain-and-globe feature ceiling",
      "Acoustic wall panelling throughout",
      "High-back acoustic booths and pods",
      "Boardroom with acoustic ceiling raft",
      "Meeting suite with operable wall",
      "Staff kitchen and social space",
      "Full mechanical, electrical and AV"
    ],
    challenge: "",
    outcome: "Delivered on programme and settled at the agreed final account.",
    quote: { text: "", by: "" }
  },

  {
    id: "knutsford-new-build",
    name: "Knutsford new build",
    client: "Private client",
    location: "Knutsford",
    value: "£400K",
    year: "",
    sector: "resi",
    type: "New build home",
    live: false,
    featured: true,
    attribution: "",
    card: "images/knutsford-05-complete-card.jpg",
    hero: "images/knutsford-05-complete.jpg",
    gallery: [
      { src: "images/knutsford-01-plot.jpg",     cap: "The plot, before anything existed" },
      { src: "images/knutsford-02-shell.jpg",    cap: "Substructure and ground floor going up" },
      { src: "images/knutsford-03-frame.jpg",    cap: "Brick and flint elevations rising" },
      { src: "images/knutsford-04-scaffold.jpg", cap: "First floor and roof structure" },
      { src: "images/knutsford-06-front.jpg",    cap: "Complete — brick and flint, slate roof" },
      { src: "images/knutsford-07-gable.jpg",    cap: "Rear gable and garden elevation" }
    ],
    blurb: "An empty plot to a finished family home. Brick and flint elevations, slate roof, built from the ground up.",
    overview: "A field, and then a house.\nThis is the whole point of what we do: someone owned a plot, and we took it from a line on a drawing to a home with the keys handed over. Groundworks, substructure, structural frame, brick and flint elevations, roof, first fix, second fix, finishes, landscaping.\nIf you own a plot and don't know what it's worth or what it costs to build out — that's the conversation to have with us.",
    facts: { "Contract": "New build — design and build", "Value": "circa £400,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Site clearance and groundworks",
      "Substructure and drainage",
      "Structural frame and superstructure",
      "Brick and flint elevations",
      "Roof structure and slating",
      "Windows, doors and glazing",
      "Full first and second fix",
      "Kitchen, bathrooms and joinery",
      "Landscaping, driveway and external works",
      "Building control and warranty sign-off"
    ],
    challenge: "",
    outcome: "Handed over complete.",
    quote: { text: "", by: "" }
  },

  {
    id: "stockport-office",
    name: "Office fit-out",
    client: "Private client",
    location: "Stockport",
    value: "£125K",
    year: "",
    sector: "fitout",
    type: "Office fit-out",
    live: false,
    featured: true,
    attribution: "",
    card: "images/stockport-office-01-boardroom-card.jpg",
    hero: "images/stockport-office-01-boardroom.jpg",
    gallery: [
      { src: "images/stockport-office-02-boardroom-2.jpg", cap: "Boardroom behind frameless glass, facing the street" },
      { src: "images/stockport-office-03-openplan.jpg",    cap: "Open plan with recessed linear lighting and oak flooring" },
      { src: "images/stockport-office-04-stair.jpg",       cap: "Double-height stair with the red wall running through it" }
    ],
    blurb: "A £125K office fit-out. Frameless glass boardroom, wide-board oak flooring, recessed lighting and a double-height stair.",
    overview: "A compact, high-specification office. Frameless glass partitions to a boardroom facing the street, wide oak boards throughout, recessed linear lighting set into the soffits, and a double-height stair with a single red wall carrying through both floors.\nSmall floorplate, big detailing. Every junction visible.",
    facts: { "Contract": "Office fit-out", "Value": "circa £125,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Frameless glass partitioning",
      "Boardroom and meeting space",
      "Wide-board oak flooring",
      "Recessed linear lighting",
      "Feature staircase and balustrade",
      "Open-plan desking",
      "Mechanical and electrical"
    ],
    challenge: "",
    outcome: "Delivered and settled at the agreed final account.",
    quote: { text: "", by: "" }
  },

  {
    id: "didsbury-extension",
    name: "Didsbury extension",
    client: "Private client",
    location: "Didsbury, Manchester",
    value: "£160K",
    year: "",
    sector: "resi",
    type: "Extension · Kitchen · Staircase",
    live: false,
    featured: true,
    attribution: "",
    card: "images/didsbury-01-kitchen-card.jpg",
    hero: "images/didsbury-01-kitchen.jpg",
    gallery: [
      { src: "images/didsbury-02-kitchen-garden.jpg", cap: "Kitchen opened to the garden through minimal-frame sliders" },
      { src: "images/didsbury-03-kitchen-hob.jpg",    cap: "Bookmatched marble island with integrated hob" },
      { src: "images/didsbury-07-rear-extension.jpg", cap: "The rear extension from the garden — full-width glazing under a flat zinc-line fascia" },
      { src: "images/didsbury-08-rear-complete.jpg",  cap: "Rear elevation complete — extension tied into the original brick" },
      { src: "images/didsbury-05-hallway.jpg",        cap: "Hallway with the replacement staircase balustrade and oak handrail" },
      { src: "images/didsbury-10-landing.jpg",        cap: "New oak handrail and painted spindles, run through every landing" },
      { src: "images/didsbury-06-understair.jpg",     cap: "Panelled under-stair storage, built to the stair line" },
      { src: "images/didsbury-04-wardrobes.jpg",      cap: "Fitted wardrobes with a recessed dressing table" },
      { src: "images/didsbury-09-bathroom-brass.jpg", cap: "Brass high-level cistern — the detail work carried into the bathrooms" }
    ],
    blurb: "A rear extension with a full kitchen install — bookmatched marble island, minimal-frame sliders — plus a complete staircase railing and handrail replacement through the house.",
    overview: "A rear extension in Didsbury, delivered with the kitchen installed and finished — not left as a shell.\nBookmatched marble island and splashback, dark cabinetry, minimal-frame sliding glazing onto the garden, and skylights over the working end of the room.\nAlongside the extension we replaced the full staircase railing and handrail through the house — new oak handrail, painted spindles, and panelled under-stair storage built to the stair line.",
    facts: { "Contract": "Extension, kitchen install and staircase", "Value": "circa £160,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Single-storey rear extension",
      "Structural alterations and steelwork",
      "Minimal-frame sliding glazing and rooflights",
      "Full kitchen install — marble island and splashback",
      "Complete staircase railing and handrail replacement",
      "Panelled under-stair storage",
      "Fitted wardrobes and joinery",
      "Bathroom fit-out",
      "Decoration and flooring throughout"
    ],
    challenge: "",
    outcome: "",
    quote: { text: "", by: "" }
  },

  {
    id: "didsbury-kitchen",
    name: "Didsbury kitchen extension",
    client: "Private client",
    location: "Didsbury, Manchester",
    value: "£120K",
    year: "",
    sector: "resi",
    type: "Extension · Kitchen · Flooring & tiling",
    live: false,
    featured: false,
    attribution: "",
    card: "images/didsbury-kitchen-01-crittall-card.jpg",
    hero: "images/didsbury-kitchen-01-crittall.jpg",
    gallery: [
      { src: "images/didsbury-kitchen-05-glazed-roof.jpg", cap: "Glazed roof running the length of the extension, over the island and dining end" },
      { src: "images/didsbury-kitchen-04-kitchen.jpg",     cap: "The new kitchen — painted cabinetry, stone-effect worktops and a range cooker" },
      { src: "images/didsbury-kitchen-03-living.jpg",      cap: "Living room — herringbone flooring, panelling and joinery" },
      { src: "images/didsbury-kitchen-02-bedroom.jpg",     cap: "Bedroom refit with fitted wardrobes" }
    ],
    blurb: "A kitchen extension under a full glazed roof — new kitchen fitted, flooring and tiling throughout, and crittall-style glazing onto the garden.",
    overview: "A kitchen extension in Didsbury finished to the last detail.\nThe extension runs under a full-length glazed roof with a crittall-style glazed screen and door onto the garden. We fitted the new kitchen, and ran the flooring and tiling through the house — herringbone to the living space, large-format tile to the kitchen.",
    facts: { "Contract": "Kitchen extension, flooring and tiling", "Value": "circa £120,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Kitchen extension",
      "Full-length glazed roof",
      "Crittall-style glazed screen and door",
      "Kitchen supply and fit",
      "Flooring throughout — herringbone and large-format tile",
      "Wall tiling",
      "Fitted wardrobes and decoration"
    ],
    challenge: "",
    outcome: "",
    quote: { text: "", by: "" }
  },

  {
    id: "pendrick-self-storage",
    name: "Pendrick Self Storage",
    client: "Pendrick Self Storage",
    location: "",
    value: "£115K",
    year: "",
    sector: "resi",
    type: "Industrial new build",
    live: false,
    featured: false,
    attribution: "",
    card: "images/pendrick-01-unit-card.jpg",
    hero: "images/pendrick-01-unit.jpg",
    gallery: [
      { src: "images/pendrick-02-steel-frame.jpg", cap: "Steel portal frame up on the new slab" },
      { src: "images/pendrick-03-doors.jpg",       cap: "Insulated cladding and roller-shutter bays" },
      { src: "images/pendrick-04-complete.jpg",    cap: "The completed unit, ready to trade" }
    ],
    blurb: "A steel-frame self-storage facility taken from bare site to trading unit — slab, portal frame, insulated cladding and roller-shutter bays.",
    overview: "A new-build storage facility for Pendrick Self Storage.\nSlab and groundworks, steel portal frame, insulated cladding, and roller-shutter doors to each bay — a clean industrial building delivered ready to trade.",
    facts: { "Contract": "New-build storage facility", "Value": "circa £115,000", "Duration": "", "Status": "Complete" },
    scope: [
      "Groundworks and slab",
      "Steel portal frame",
      "Insulated wall and roof cladding",
      "Roller-shutter doors",
      "Personnel doors and external works"
    ],
    challenge: "",
    outcome: "",
    quote: { text: "", by: "" }
  },

  /* ───── PRE-2020 — Dave's own work, before Tatton Projects Ltd existed ───── */

  {
    id: "fossil",
    name: "Fossil",
    client: "Fossil",
    location: "London",
    value: "",
    year: "",
    sector: "retail",
    type: "Retail shopfit",
    live: false,
    featured: true,
    attribution: "Delivered by Dave Groom as project and contracts manager, prior to founding Tatton Projects in 2020.",
    card: "images/fossil-01-store-card.jpg",
    hero: "images/fossil-01-store.jpg",
    gallery: [
      { src: "images/fossil-02-watch-wall.jpg", cap: "Illuminated watch wall in timber and steel" },
      { src: "images/fossil-03-cases.jpg",      cap: "Glass display cases and lacquered drawer units" },
      { src: "images/fossil-04-shelving.jpg",   cap: "Steel and timber shelving system to the leather wall" },
      { src: "images/fossil-05-till.jpg",       cap: "Cash desk, media wall and tin-tile surround" }
    ],
    blurb: "Retail shopfit for a global watch and leather goods brand. Illuminated display walls, bespoke joinery, media wall and full brand-standard finishes.",
    overview: "A brand-standard retail fit-out in London. Every element built to a global specification and signed off against it — illuminated watch walls, glass display cases, a steel-and-timber shelving system, lacquered joinery, and a media wall behind the cash desk.\nRetail is unforgiving. The brand team measure the finishes, the trading date does not move, and the shopping centre only lets you in at night.",
    facts: { "Contract": "Retail shopfit", "Value": "", "Duration": "", "Status": "Complete" },
    scope: [
      "Full retail fit-out to brand standard",
      "Illuminated watch display walls",
      "Bespoke joinery and lacquered units",
      "Glass display cases",
      "Steel and timber shelving system",
      "Cash desk and media wall",
      "Feature lighting and shopfront",
      "Flooring and finishes"
    ],
    challenge: "Brand-standard finishes measured and signed off by the client's global team, against a trading date that could not move.",
    outcome: "Opened on the trading date.",
    quote: { text: "", by: "" }
  },

  {
    id: "calvin-klein",
    name: "Calvin Klein",
    client: "Calvin Klein",
    location: "UK",
    value: "",
    year: "",
    sector: "retail",
    type: "Retail shopfit",
    live: false,
    featured: true,
    attribution: "Delivered by Dave Groom as project and contracts manager, prior to founding Tatton Projects in 2020.",
    card: "images/calvin-klein-01-shopfront-card.jpg",
    hero: "images/calvin-klein-01-shopfront.jpg",
    gallery: [
      { src: "images/calvin-klein-09-shell.jpg",    cap: "The unit as we took it — bare shell" },
      { src: "images/calvin-klein-08-services.jpg", cap: "Services and stud framing, first fix" },
      { src: "images/calvin-klein-07-frame.jpg",    cap: "Ceilings and partitions taking shape" },
      { src: "images/calvin-klein-06-ceiling.jpg",  cap: "Feature ceiling and lighting grid" },
      { src: "images/calvin-klein-04-hoarding.jpg", cap: "Branded hoarding — the mall trading around us throughout" },
      { src: "images/calvin-klein-03-till.jpg",     cap: "Cash desk against the brand graphic wall" },
      { src: "images/calvin-klein-02-complete.jpg", cap: "Complete — illuminated display walls and mirrored ceiling" }
    ],
    blurb: "Retail shopfit from bare shell to trading store, delivered inside a live shopping centre.",
    overview: "Shell to shop. This one has the whole story in the photographs — bare concrete and blockwork, services first fix, ceilings, feature lighting, then a finished store trading behind a branded hoarding that never came down until it did.\nDelivered inside a live shopping centre. Every delivery out of hours, through service corridors, around a mall full of shoppers.",
    facts: { "Contract": "Retail shopfit", "Value": "", "Duration": "", "Status": "Complete" },
    scope: [
      "Bare shell to trading store",
      "Partitions, ceilings and feature lighting",
      "Illuminated display walls",
      "Bespoke cash desk and joinery",
      "Brand graphic walls",
      "Shopfront and glazing",
      "Full mechanical and electrical",
      "Out-of-hours working in a live mall"
    ],
    challenge: "A live shopping centre. Every delivery out of hours, through service corridors, with the mall trading around us the entire time.",
    outcome: "Opened on the trading date.",
    quote: { text: "", by: "" }
  },

  {
    id: "leeds-bar",
    name: "Bar & restaurant",
    client: "Private client",
    location: "Leeds",
    value: "",
    year: "",
    sector: "hosp",
    type: "Bar & restaurant fit-out",
    live: false,
    featured: true,
    attribution: "Delivered by Dave Groom as project and contracts manager, prior to founding Tatton Projects in 2020.",
    card: "images/leeds-bar-01-restaurant-card.jpg",
    hero: "images/leeds-bar-01-restaurant.jpg",
    gallery: [
      { src: "images/leeds-bar-03-bar.jpg",    cap: "Back bar against exposed brick, with track lighting on conduit" },
      { src: "images/leeds-bar-02-lounge.jpg", cap: "Lounge under exposed beams and spiral ductwork" },
      { src: "images/leeds-bar-04-booths.jpg", cap: "Booth seating beneath the steel stair" }
    ],
    blurb: "Bar and restaurant fit-out. Exposed brick and beams, blackened steel, spiral ductwork and a back bar built to be looked at.",
    overview: "A hospitality fit-out where the building was the design. Exposed brick, original beams, blackened steel screens and a raw concrete floor — with all the services run on show rather than hidden.\nThat's harder than it looks. When the ductwork, conduit and steelwork are the finish, every bracket and every joint is a snag. Nothing gets covered up.",
    facts: { "Contract": "Bar and restaurant fit-out", "Value": "", "Duration": "", "Status": "Complete" },
    scope: [
      "Full front and back of house fit-out",
      "Bar construction and back bar",
      "Exposed services — ductwork, conduit, tray",
      "Blackened steel screens and staircase",
      "Exposed brick and lime finishes",
      "Banquette and booth seating",
      "Commercial kitchen extraction",
      "Feature lighting"
    ],
    challenge: "Every service was on show. When the ductwork and conduit are the finish, there is nowhere to hide a bad bracket.",
    outcome: "Delivered and opened on the agreed date.",
    quote: { text: "", by: "" }
  },

];
