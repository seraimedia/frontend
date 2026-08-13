export type Service = {
  slug: string;
  name: string;
  short: string;
  outcome: string;
  body: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "brand-identity",
    name: "Brand Identity",
    short: "The signal your product already deserves.",
    outcome:
      "A coherent brand system that makes quality legible at first glance.",
    body: [
      "Most companies with an excellent product are not misunderstood because of what they build. They are misunderstood because the surface of the brand does not match the substance underneath it.",
      "We define the positioning, the voice, and the visual system that carry your product into the market without translation loss. Everything is built to be used, not admired in a slide deck.",
    ],
    deliverables: [
      "Positioning and messaging architecture",
      "Verbal identity and tone of voice",
      "Visual identity system and usage rules",
      "Brand guidelines and asset library",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    short: "A consistent voice, held over time.",
    outcome: "Owned channels that compound instead of resetting every quarter.",
    body: [
      "Social is not a content treadmill. It is the most public, most repeated expression of your brand, and it is usually the least considered.",
      "We run channels as an editorial operation: a defined point of view, a publishing rhythm your audience can rely on, and a feedback loop from performance back into strategy.",
    ],
    deliverables: [
      "Channel strategy and editorial calendar",
      "Creative production and art direction",
      "Community management",
      "Monthly performance review",
    ],
  },
  {
    slug: "influencer-management",
    name: "Influencer Management",
    short: "Borrowed trust, carefully chosen.",
    outcome:
      "Partnerships that transfer credibility rather than rent attention.",
    body: [
      "Reach is easy to buy. Credibility is not. The wrong partner costs more than the fee — it costs the perception you spent years building.",
      "We source, vet, and manage partners whose audience actually overlaps with your buyer, then structure the collaboration so the work looks native to both brands.",
    ],
    deliverables: [
      "Partner sourcing and vetting",
      "Negotiation and contracting",
      "Creative briefing and approvals",
      "Attribution and performance reporting",
    ],
  },
  {
    slug: "meta-ads-management",
    name: "Meta Ads Management",
    short: "Paid distribution with a floor under it.",
    outcome: "Predictable acquisition economics you can plan a year around.",
    body: [
      "Paid media only works when the brand underneath it is clear. When it is, media becomes a lever instead of a leak.",
      "We build account structure, creative testing systems, and measurement discipline so spend can scale without the return quietly collapsing.",
    ],
    deliverables: [
      "Account and campaign architecture",
      "Creative testing framework",
      "Audience and offer strategy",
      "Weekly reporting and spend governance",
    ],
  },
  {
    slug: "fractional-cmo",
    name: "Fractional CMO",
    short: "Senior marketing judgment, without the hire.",
    outcome: "One person accountable for the whole marketing picture.",
    body: [
      "Many teams do not need more execution. They need someone senior enough to decide what not to do.",
      "We embed as your marketing leadership: strategy, budget, hiring, agency oversight, and the operating cadence that keeps all of it honest.",
    ],
    deliverables: [
      "Marketing strategy and roadmap",
      "Budget planning and allocation",
      "Team and vendor oversight",
      "Executive and board reporting",
    ],
  },
];

export const PROOF_STATS = [
  { value: "12+", label: "Years of senior marketing leadership" },
  { value: "6", label: "Brands worked with at a time — no more" },
  { value: "3x", label: "Median pipeline growth in year one" },
  { value: "94%", label: "Client retention beyond initial engagement" },
];

export const DISQUALIFIERS = [
  "You want volume content with no point of view.",
  "The product is not yet good enough to stand behind.",
  "You need results next week, not a durable position.",
  "Decisions require six approvals and a committee.",
  "You are looking for the cheapest option available.",
];
