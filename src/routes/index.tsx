/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SeraiLine } from "@/components/site/SeraiLine";
import {
  SERVICES,
  PROOF_STATS,
  DISQUALIFIERS,
} from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Serai Media — Social first branch marketing for products that deserves attention",
      },
      {
        name: "description",
        content:
          "SERAI is a small marketing agency for excellent products with quiet marketing. Brand, social, influencer, Meta ads and fractional CMO leadership.",
      },
      {
        property: "og:title",
        content:
          "Serai Media — Social first branch marketing for products that deserves attention",
      },
      {
        property: "og:description",
        content:
          "A small agency closing the gap between an excellent product and the market's awareness of it.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow animate-rise">
                Marketing agency — Austin, TX
              </p>
              <h1 className="font-display animate-rise mt-7 max-w-[16ch] text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.02]">
                Your product is already excellent.
                <span className="block text-muted-foreground">
                  Your marketing hasn't caught up.
                </span>
              </h1>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/apply"
                  className="bg-ink px-7 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85"
                >
                  Apply to work with us
                </Link>
                <Link
                  to="/services"
                  className="border border-input px-7 py-4 text-center text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:bg-secondary"
                >
                  What we do
                </Link>
              </div>
            </div>

            <p className="max-w-[42ch] text-base leading-relaxed text-muted-foreground lg:pb-3">
              We work with a limited number companies whose service/product
              speaks for itself and whose growth is limited by how few people
              know it. We close that gap.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 md:mt-24">
          <SeraiLine />
        </div> */}
      </section>

      {/* Proof strip */}
      <section className="hairline-t bg-secondary/60">
        <div className="mx-auto max-w-[88rem] px-5 md:px-10">
          <ul className="-mx-5 flex snap-x gap-0 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-4 md:px-0">
            {PROOF_STATS.map((s, i) => (
              <Reveal
                as="li"
                key={s.label}
                delay={i * 90}
                className="min-w-[62%] shrink-0 snap-start border-r border-hairline py-10 pr-8 last:border-r-0 sm:min-w-[40%] md:min-w-0 md:px-8 md:py-14 md:first:pl-0"
              >
                <p className="font-display text-4xl md:text-5xl">{s.value}</p>
                <p className="mt-3 max-w-[24ch] text-sm text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">What we do</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 max-w-[20ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.06]">
                Five disciplines. One coherent signal.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              to="/services"
              className="link-underline text-[0.75rem] tracking-[0.18em] uppercase"
            >
              Explore our services
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 70}
              className="bg-background"
            >
              <Link
                to="/services"
                hash={s.slug}
                className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-secondary/70 md:p-10"
              >
                <div>
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-6 text-2xl leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.18em] uppercase">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
          <li className="hidden bg-secondary/40 lg:block" />
        </ul>
      </section>

      {/* Story teaser */}
      <section className="hairline-t">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="flex min-h-[20rem] h-full flex-col justify-between bg-ink p-8 text-ink-foreground md:min-h-[26rem] md:p-12">
              <span className="font-display text-5xl leading-none text-gold md:text-7xl">
                01
              </span>
              <div>
                <p className="text-[0.68rem] tracking-[0.22em] text-white/45 uppercase">
                  The original network
                </p>
                <p className="font-display mt-4 max-w-[16ch] text-2xl leading-tight md:text-3xl">
                  Nothing was made there. Everything was made known.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="lg:py-6">
            <Reveal>
              <p className="eyebrow">The story</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 max-w-[22ch] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.07]">
                Why a marketing agency is named after an old roadside inn.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
                A serai was where travellers stopped on long trade routes — a
                place where goods, languages and news were exchanged before
                moving on. It was the original network. It didn't make anything.
                It made things known.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/story"
                className="link-underline mt-10 inline-block text-[0.75rem] tracking-[0.18em] uppercase"
              >
                Read our story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Disqualifier */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <p className="text-[0.68rem] tracking-[0.22em] text-white/45 uppercase">
                Who this isn't for
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.06]">
                We work with a small number of brands at a time.
              </h2>
            </Reveal>
          </div>
          <ul className="grid gap-px self-start bg-white/12">
            {DISQUALIFIERS.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={i * 70}
                className="bg-ink flex items-baseline gap-5 py-5"
              >
                <span className="text-xs text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-white/80 md:text-lg">{d}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="hairline-t">
        <div className="mx-auto max-w-[88rem] px-5 py-28 text-center md:px-10 md:py-40">
          <Reveal>
            <p className="eyebrow">Next step</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mx-auto mt-7 max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)] leading-[1.03]">
              Let's see if it's a fit.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-[46ch] text-base leading-relaxed text-muted-foreground">
              A short application tells us more than a call would. If there's a
              fit, you'll hear from us within two business days.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/apply"
              className="bg-ink mt-11 inline-block px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85"
            >
              Start your application
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
