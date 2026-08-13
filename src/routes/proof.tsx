/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { PROOF_STATS } from "@/components/site/content";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof - Serai Media" },
      {
        name: "description",
        content: "Evidence, not adjectives. Selected case studies from SERAI.",
      },
      { property: "og:title", content: "Proof - Serai Media" },
      {
        property: "og:description",
        content: "Evidence, not adjectives. Selected case studies from SERAI.",
      },
    ],
  }),
  component: ProofPage,
});

type CaseStudy = {
  client: string;
  industry: string;
  location: string;
  challenge: string;
  approach: string;
  solution: string[];
  results: string[];
  metrics: { value: string; label: string }[];
  testimonial: string;
  beforeAfter: { before: string; after: string };
};

const CASES: CaseStudy[] = [
  {
    client: "Shiva Jewelers & Shiva Bullion",
    industry: "Jewelry & Precious Metals",
    location: "Austin, TX",
    challenge:
      "Five years of real trust in Austin, and a feed that didn't reflect it - inconsistent visuals, no content system, and a sister business, Shiva Bullion, with no presence at all.",
    approach:
      "Rebuilt the visual foundation first. Layered paid acquisition only once the organic base could support it.",
    solution: [
      "Two distinct brand identity systems, cross-promoted.",
      "A consistent content and photography system, replacing ad hoc posting.",
      "Shiva Bullion built from zero: Google Business Profile, social presence, and its first Google Ads campaign.",
      "Geo-targeted Meta campaigns tied to key retail dates.",
      "Recurring content formats and a proactive review program.",
    ],
    results: [
      "Facebook views reached 146.8K from March to August - a 57.8% increase.",
      "Content velocity increased 91% after a mid-year format correction.",
      "Paid campaigns landed at $0.12-$0.21 per action, a fraction of typical DFW jewelry-vertical benchmarks.",
    ],
    metrics: [
      { value: "146.8K", label: "Facebook views, Mar-Aug" },
      { value: "91%", label: "Content velocity increase" },
      { value: "$0.12-$0.21", label: "Cost per action" },
    ],
    testimonial: "Reserved - pending client approval.",
    beforeAfter: {
      before:
        "A fragmented feed with no visual system, and a second business with no online presence.",
      after: "Two coherent, consistently performing brands.",
    },
  },
  {
    client: "Tous Les Jours, McKinney",
    industry: "French Asian Bakery & Cafe",
    location: "DFW, TX",
    challenge:
      "A new location, zero local presence, one immovable launch date - competing for attention in a market that didn't know the brand existed.",
    approach:
      "Organic-first sequencing, with paid spend layered in only where it compounded existing momentum.",
    solution: [
      "A structured content system across Instagram, Facebook, and TikTok.",
      "A phased launch sequence built around a single anchor date.",
      "A creator partnership program, including one repeat collaboration that outperformed its own first result.",
      "Precision-targeted paid amplification, geo-fenced to the trade area.",
    ],
    results: [
      "217,467 combined reach in 66 days - 20-40x the original target.",
      "Four influencer reels generated 74,401 views in three weeks.",
      "Blended Meta CPM reached $3.77, compared with an $8-14 DFW benchmark.",
    ],
    metrics: [
      { value: "217,467", label: "Combined reach in 66 days" },
      { value: "74,401", label: "Influencer reel views" },
      { value: "$3.77", label: "Blended Meta CPM" },
    ],
    testimonial: "Reserved - pending client approval.",
    beforeAfter: {
      before: "Zero local presence at launch.",
      after:
        "600+ organic followers and reach an order of magnitude beyond target, inside one 66-day window.",
    },
  },
];

function ProofPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proof"
        title="Evidence, not adjectives."
        lede="Selected engagements, documented in full: what the constraint was, what we did about it, and what changed as a result."
      />

      <section className="hairline-t bg-secondary/50">
        <div className="mx-auto grid max-w-[88rem] gap-px bg-hairline px-0 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="bg-background px-6 py-12 md:px-10"
            >
              <p className="font-display text-4xl md:text-5xl">{s.value}</p>
              <p className="mt-3 max-w-[24ch] text-sm text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[88rem] px-5 py-20 md:px-10 md:py-32">
        {CASES.map((c, i) => (
          <article
            key={c.client}
            className="border-t border-hairline py-14 first:border-t-0 first:pt-0 md:py-24"
          >
            <Reveal>
              <div>
                <p className="eyebrow">
                  Case {String(i + 1).padStart(2, "0")} - {c.industry}
                </p>
                <h2 className="font-display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.06]">
                  {c.client}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {c.location}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-10 border-y border-hairline py-9 md:grid-cols-3 md:gap-14 md:py-11">
              <Reveal>
                <p className="eyebrow">Challenge</p>
                <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
                  {c.challenge}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="eyebrow">Approach</p>
                <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
                  {c.approach}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="eyebrow">Solution</p>
                <ul className="mt-4 space-y-3">
                  {c.solution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-[1.8] text-muted-foreground"
                    >
                      <span className="text-gold">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <Reveal>
                <p className="eyebrow">Results</p>
                <ul className="mt-5 divide-y divide-[color:var(--hairline)] border-y border-hairline">
                  {c.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-4 py-4 text-base leading-relaxed"
                    >
                      <span className="text-gold">-</span>
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-3 gap-px bg-hairline">
                  {c.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-background px-2 py-6 text-center"
                    >
                      <p className="font-display text-2xl md:text-3xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid grid-cols-2 gap-px bg-hairline">
                  <div className="bg-secondary/60 p-6">
                    <p className="eyebrow">Before</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.beforeAfter.before}
                    </p>
                  </div>
                  <div className="bg-secondary/60 p-6">
                    <p className="eyebrow">After</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.beforeAfter.after}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-14 border-l border-gold pl-6 md:pl-10">
                <p className="eyebrow">Client quote</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.testimonial}
                </p>
              </div>
            </Reveal>
          </article>
        ))}

        <Reveal>
          <div className="hairline-t flex flex-col gap-6 pt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display max-w-[24ch] text-2xl md:text-3xl">
              More engagements are being documented. The next one could be
              yours.
            </p>
            <Link
              to="/apply"
              className="bg-ink shrink-0 px-8 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85"
            >
              Apply
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
