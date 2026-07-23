/* ===========================================================
   TATTON PROJECTS — posts.js
   ===========================================================
   THIS IS THE ONLY FILE YOU EDIT TO BLOG.

   To publish a post:
     1. Copy the whole block between { and }
     2. Paste it at the TOP of the list (newest first)
     3. Fill it in, save, re-upload the folder
     4. It appears on blog.html automatically

   WRITING THE BODY
   Use these markers at the start of a line:

     ## Heading             a section heading
     - bullet point         a bulleted list item
     > quote                a pulled-out quote
     [image:filename.jpg]   a photo from your /images folder
     [caption:some text]    a caption under that photo

   Everything else becomes a normal paragraph.
   Leave a blank line between paragraphs.

   TIPS THAT ACTUALLY MATTER FOR GOOGLE
     · title      — write it like someone would search it
     · summary    — this is what shows in Google. 150 chars.
     · Answer a real question. One post that genuinely answers
       "what does a Cat B fit-out cost" beats ten posts of news.
   =========================================================== */

const POSTS = [

  {
    slug: "office-fit-out-cost-per-square-foot-manchester",
    title: "What an office fit-out actually costs per square foot in Manchester",
    summary: "Real 2026 rates for Cat A and Cat B fit-out in Manchester and Cheshire — and the five things that move the number more than anything on the drawing.",
    date: "2026-07-14",
    author: "Dave Groom",
    category: "Cost",
    readTime: "6 min",
    image: "images/vanguard-01-breakout.jpg",
    featured: true,
    body: `Nobody in this industry publishes prices. I've never understood it. You end up with a client who has a floor, a budget in their head, and no way of knowing whether the two are in the same postcode until they've spent three weeks getting quotes.

So here are the numbers we're working to in 2026.

## The working ranges

These are all-in rates per square foot, excluding VAT and excluding furniture.

- **Cat A refresh** — £45 to £70 per sq ft. Ceilings, lighting, raised floor, basic M&E, decoration. Landlord specification, ready to let.
- **Standard Cat B** — £70 to £110 per sq ft. Partitions, meeting rooms, tea point, carpet, cabling, some joinery. What most businesses actually buy.
- **High-specification Cat B** — £110 to £180 per sq ft and upwards. Bespoke joinery, feature lighting, acoustic treatment, terrazzo, bespoke seating.

> If someone quotes you a single figure without seeing the floor, the building's services and the landlord's licence to alter, they are guessing. It might be a good guess. It is still a guess.

## What moves the number

The specification matters less than people expect. These five things matter more.

**The building's existing services.** A floor with good, recent M&E is a completely different job from one where the air conditioning is twenty years old and the incoming power won't take another forty desks. This is the single biggest swing, and it is invisible on a floor plan.

**Whether the building is occupied.** Working around a live business costs more — out-of-hours labour, phased handbacks, dust and route separation, security. It is worth every penny if the alternative is moving your staff out for three months, but it needs to be in the budget from day one, not discovered halfway through.

**Ceiling height and structure.** Low soffits mean services fight each other. Every clash is a variation.

**Access.** A city-centre floor with one goods lift and a two-hour delivery window is a different programme from a business park unit you can back a wagon up to.

**How well the design is resolved before you start.** This is the one clients control completely, and the one that costs them most when it goes wrong.

## Where the money actually goes

On a typical £110 per sq ft Cat B, roughly:

- Mechanical and electrical — 30 to 40 per cent
- Partitions, doors and glazing — 15 per cent
- Ceilings and lighting — 12 per cent
- Flooring — 8 per cent
- Joinery and tea points — 10 per cent
- Preliminaries, management and profit — the rest

The interesting line is M&E. It is the biggest cost, it is the one clients understand least, and it is the one where a cheap quote is almost always a quote that has missed something.

## The honest advice

Get a measured survey and a proper cost plan before you commit to a lease length or a fit-out budget. It costs a fraction of the job and it is the difference between a number you can hold and a number that grows.

We'll do a feasibility appraisal on any floor above £100,000 and tell you what it will really cost — including telling you when the building is wrong for you. That advice is free, and we would rather give it before you sign than after.`
  },

  {
    slug: "mees-epc-changes-what-landlords-need-to-do",
    title: "Your building is EPC E. Here's what that actually means for letting it",
    summary: "MEES turned energy performance from a nice-to-have into a legal condition of letting. What the rules require, what the work costs, and when to do it.",
    date: "2026-06-20",
    author: "Dave Groom",
    category: "Landlords",
    readTime: "5 min",
    image: "",
    featured: true,
    body: `Most landlords I speak to know their EPC rating. Far fewer have worked out what it now stops them doing.

The Minimum Energy Efficiency Standards regime made energy performance a condition of letting rather than a piece of paperwork. A sub-standard building cannot lawfully be let, and the standard has been tightening. That turns an aesthetic decision into a legal one — and a building that cannot be let is a building that cannot earn.

## The practical position

If you own commercial property and the rating is weak, you have three options and only one of them is good.

- **Do nothing and hope.** Your building sits empty or you carry enforcement risk. Neither is cheap.
- **Wait until the tenant leaves and rush it.** You pay a premium for speed and you lose rent during the works.
- **Do it in a planned void, alongside a Cat A refresh you were going to fund anyway.** Half the cost, none of the panic.

> The third option is available to nearly everyone and almost nobody takes it, because energy work gets deferred until it becomes urgent.

## What the work usually is

People imagine solar panels and heat pumps. Usually it is far less dramatic.

- Lighting — swapping to LED with proper controls is the fastest, cheapest single improvement in most buildings
- Heating and cooling controls — often the plant is fine and the controls are the problem
- Fabric — insulation where it is accessible, draught sealing, glazing where it is genuinely failing
- Metering and building management, so the improvements are actually evidenced

The order matters. Doing the cheap, high-impact items first often gets you over the line without touching the expensive ones.

## The number

For a typical older office floor, moving from a weak rating to a compliant one usually sits in the low tens of thousands rather than the hundreds. It is almost always less than one void period.

## When to do it

Now, if the building is empty. At the next break or expiry, if it is not. The worst time is when a tenant is signed and waiting.

Get it assessed before your next void, not during one. We survey the building, tell you what the rating costs to fix, and do the work — and if it makes more sense to combine it with a Cat A refresh, we will say so.`
  },

  {
    slug: "building-around-a-business-that-cannot-close",
    title: "How to fit out a building without closing it",
    summary: "Hotels selling rooms, care homes with residents in bed, a service floor with ninety staff at their desks. What it actually takes to build around a live operation.",
    date: "2026-05-30",
    author: "Dave Groom",
    category: "Fit-out",
    readTime: "5 min",
    image: "images/stockport-01-floor.jpg",
    featured: false,
    body: `The question I get asked most often by commercial clients is not about price. It is: *can you do this without shutting us down?*

The answer is almost always yes, and it is most of what we do. But it changes how the job is built, and it needs to be planned in from the first appraisal rather than bolted on later.

## What actually changes

**The programme runs backwards.** On an empty floor you sequence by trade — strip out, then services, then partitions. In an occupied building you sequence by zone, and each zone has to come back into use complete. That means services, partitions, ceilings, power and data all landing in the same small area before you move on.

**The noisy work moves.** Core drilling, cutting, anything that carries through structure — that goes out of hours. Which means the programme has to be costed with out-of-hours labour in it from the beginning.

**Separation is not optional.** Dust, noise, route and fire separation between the works and the operation has to hold every single day. Not most days.

**Fire strategy stays live throughout.** This is the one that catches people. Escape routes, alarm coverage and compartmentation must be maintained at every stage of the works, not just at handover.

## What it looks like in practice

We fitted out a large public-facing service centre in Stockport with over ninety staffed positions. The building never closed. The public came through the doors every day of the programme.

[image:stockport-02-positions.jpg]
[caption:Ninety-plus service positions, brought back online in batches]

Positions came back online in batches — powered, cabled, screened and tested before anyone sat down at them. Heavy work ran outside opening hours. The separation between the works and the public held for the whole job.

We have done the same in hotels that kept selling rooms, in care homes with residents in the rooms next door, and in retail units inside malls that traded throughout.

> A care home is the hardest version of this. Residents are elderly, often frail, frequently unsettled by change — and they live there. Everything is phased, everything is sealed, and noise is confined to windows in the day when people are up.

## What to ask a contractor

If you are getting quotes for work in an occupied building, ask these:

- How will you sequence the handbacks, and what is complete at each stage?
- What work is out of hours, and is that in your price or is it a variation?
- How is the fire strategy maintained during the works?
- Who is on site managing the separation day to day?

If they cannot answer clearly, the price is not comparable to one from someone who can.`
  }

  /* ═══════ TEMPLATE — copy from the comma to the closing brace ═══════

  ,{
    slug: "url-friendly-name-with-hyphens",
    title: "",
    summary: "",
    date: "2026-01-01",
    author: "Dave Groom",
    category: "Fit-out",
    readTime: "4 min",
    image: "",
    featured: false,
    body: `Write the post here.

## A heading

A paragraph.

- A bullet
- Another bullet

> A quote worth pulling out.

[image:some-photo.jpg]
[caption:What the photo shows]`
  }

  ══════════════════════════════════════════════════════════ */

];
