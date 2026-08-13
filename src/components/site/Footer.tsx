/* eslint-disable prettier/prettier */
import { Link } from "@tanstack/react-router";
import iconImage from "@/assets/images/icon.webp";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[88rem] px-5 py-20 md:px-10 md:py-28">
        <p className="font-display max-w-[14ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02]">
          Let's close the gap.
        </p>

        <div className="mt-16 grid gap-10 border-t border-white/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={iconImage} alt="SERAI icon" className="h-10 w-auto" />
          </div>
          <div>
            <p className="text-[0.68rem] tracking-[0.2em] text-white/45 uppercase">
              Pages
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <Link to="/story" className="link-underline">
                  Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="link-underline">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/proof" className="link-underline">
                  Proof
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] tracking-[0.2em] text-white/45 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="mailto:hello@seraimedia.com"
                  className="link-underline"
                >
                  hello@seraimedia.com
                </a>
              </li>
              <li>Austin, Texas</li>
            </ul>
          </div>
          <div className="sm:text-right">
            <Link
              to="/apply"
              className="inline-block border border-gold px-6 py-3 text-[0.7rem] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              APPLY
            </Link>
          </div>
        </div>

        <p className="mt-14 text-[0.7rem] tracking-[0.12em] text-white/35 uppercase">
          SERAI MEDIA 2026
        </p>
      </div>
    </footer>
  );
}
