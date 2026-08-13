/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Serai Media" },
      {
        name: "description",
        content:
          "Why a marketing agency is named after an old roadside inn: the serai was the original network. It didn't make anything — it made things known.",
      },
      { property: "og:title", content: "Our Story — Serai Media" },
      {
        property: "og:description",
        content: "The serai was the original network. It made things known.",
      },
    ],
  }),
  component: StoryPage,
});

const CHAPTERS = [
  {
    label: "The name",
    paragraphs: [
      "A caravanserai was a walled roadside inn built along the trade routes that connected Asia, North Africa and southeast Europe. Travellers stopped there because the next stretch of road was long and the night was not safe.",
      "What happened inside was more interesting than shelter. Merchants unloaded goods, compared prices, argued about routes, and left with information they could not have obtained anywhere else. A silk trader learned what indigo was selling for four hundred miles away. A spice merchant learned which pass was closed.",
      "Nothing was manufactured in a serai. Everything was made known.",
    ],
  },
  {
    label: "Arrivals",
    paragraphs: [
      "I've spent my life arriving somewhere new. Chennai, TN, India, then a different Indian state every few years growing up. Then Toronto, ON. Then Austin, TX. Each move meant the same thing: a stranger at a new door, starting from nobody-knows-you, having to make a new place notice I existed.",
      "So when I found the word serai, it didn't feel like a metaphor I'd chosen. It felt like a word that had been waiting for the business — and, if I'm honest, for me. I know what it costs to be good at something and have no one around yet to know it.",
      "That's the gap I close for other people now.",
    ],
  },
  {
    label: "The problem",
    paragraphs: [
      "Most of the companies we meet do not have a product problem. They have a distribution problem dressed up as a marketing problem.",
      "The work is excellent. The people are serious. The customers who find them stay for years. And still, the market's picture of the company is a fraction of the truth — because nobody has been responsible for translating substance into signal.",
      "That gap is expensive. It shows up as long sales cycles, price pressure, and competitors with products not at par, winning better deals.",
    ],
  },
  {
    label: "The approach",
    paragraphs: [
      "We start with what is already true. Before any campaign, we spend time inside the business finding the specific, defensible things that make it worth choosing — the details a founder assumes everybody already knows.",
      "Then we build the smallest coherent system that makes those things unavoidable: a clear position, a voice that sounds like the company, and a distribution rhythm that runs whether or not anyone is inspired that week.",
      "Consistency beats intensity. A defensible position, repeated patiently, compounds into something a competitor cannot buy their way past.",
    ],
  },
  {
    label: "The commitment",
    paragraphs: [
      "We work with a small number of brands at a time because the work only functions at depth. We would rather turn down good companies than dilute the ones we've committed to.",
      "If that sounds like the kind of relationship you're looking for, the next step is short.",
    ],
  },
];

function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="The serai was the original network. It didn't make anything. It made things known."
        lede="A marketing agency named after a roadside inn, and why that isn't a metaphor we chose lightly."
      />

      <section className="mx-auto max-w-[88rem] px-5 md:px-10">
        <Reveal>
          <div className="border-y border-hairline py-7 md:flex md:items-center md:justify-between md:py-9">
            <p className="font-display max-w-[31ch] text-xl leading-snug md:text-2xl">
              A place for people, goods and ideas to become known.
            </p>
            <p className="mt-5 text-xs tracking-[0.16em] text-muted-foreground uppercase md:mt-0">
              Est. 2025 · Austin, Texas
            </p>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[88rem] px-5 py-20 md:px-10 md:py-32">
        {CHAPTERS.map((c, i) => (
          <section
            key={c.label}
            className="grid gap-8 border-t border-hairline py-14 md:grid-cols-[0.3fr_0.7fr] md:gap-16 md:py-20"
          >
            <Reveal>
              <p className="eyebrow md:sticky md:top-28">
                {String(i + 1).padStart(2, "0")} — {c.label}
              </p>
            </Reveal>
            <div className="max-w-[62ch]">
              {c.paragraphs.map((p, j) => (
                <Reveal key={j} delay={j * 70}>
                  <p
                    className={
                      i === 0 && j === 0
                        ? "font-display mb-7 text-2xl leading-snug md:text-3xl"
                        : "mb-6 text-base leading-[1.85] text-muted-foreground md:text-[1.0625rem]"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground/70">
          Serai Media was founded in 2025, formerly operating as Content Crafts Digital.
        </p>

        <Reveal>
          <div className="hairline-t flex flex-col gap-6 pt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display max-w-[20ch] text-2xl md:text-3xl">
              Ready to see whether we're the right fit?
            </p>
            <Link
              to="/apply"
              className="bg-ink shrink-0 px-8 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85"
            >
              Apply to work with us
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
