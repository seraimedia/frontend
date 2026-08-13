/* eslint-disable prettier/prettier */
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[88rem] px-5 pt-32 pb-14 md:px-10 md:pt-44 md:pb-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="font-display mt-6 max-w-[18ch] text-[clamp(2.4rem,6.4vw,5rem)] leading-[1.03]">
          {title}
        </h1>
      </Reveal>
      {lede ? (
        <Reveal delay={160}>
          <div className="mt-8 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            {lede}
          </div>
        </Reveal>
      ) : null}
    </header>
  );
}
