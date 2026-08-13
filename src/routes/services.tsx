import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/components/site/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Serai Media" },
      {
        name: "description",
        content:
          "Brand identity, social media management, influencer management, Meta ads and fractional CMO leadership — five disciplines, run as one coherent system.",
      },
      { property: "og:title", content: "What We Do — Serai Media" },
      {
        property: "og:description",
        content: "Five marketing disciplines, run as one coherent system.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="How we close the gap."
        lede="Five services. They can be engaged individually, but they are designed to work together — one position, expressed consistently across everything a buyer sees."
      />

      <div className="mx-auto max-w-[88rem] px-5 pb-24 md:px-10 md:pb-36">
        {SERVICES.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 grid gap-8 border-t border-hairline py-14 md:grid-cols-[0.32fr_0.68fr] md:gap-16 md:py-24"
          >
            <Reveal>
              <div className="md:sticky md:top-28">
                <p className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.08]">
                  {s.name}
                </h2>
                <p className="mt-4 max-w-[26ch] text-sm text-muted-foreground">
                  {s.short}
                </p>
              </div>
            </Reveal>

            <div>
              {s.body.map((p, j) => (
                <Reveal key={j} delay={j * 70}>
                  <p className="mb-6 max-w-[62ch] text-base leading-[1.85] text-muted-foreground md:text-[1.0625rem]">
                    {p}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={140}>
                <div className="mt-8 grid gap-8 bg-secondary/60 p-7 sm:grid-cols-[0.9fr_1.1fr] md:p-9">
                  <div>
                    <p className="eyebrow">Outcome</p>
                    <p className="mt-3 max-w-[28ch] text-base leading-relaxed">
                      {s.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Included</p>
                    <ul className="mt-3 space-y-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="text-gold">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <Link
                  to="/apply"
                  className="link-underline mt-8 inline-block text-[0.72rem] tracking-[0.18em] uppercase"
                >
                  Enquire about {s.name.toLowerCase()}
                </Link>
              </Reveal>
            </div>
          </section>
        ))}

        <Reveal>
          <div className="hairline-t flex flex-col gap-6 pt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display max-w-[24ch] text-2xl md:text-3xl">
              Not sure which of these you need? That's usually the fractional
              CMO conversation.
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
