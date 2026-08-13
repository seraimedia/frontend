/* eslint-disable prettier/prettier */
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoImage from "@/assets/images/logo.webp";

const LINKS = [
  { to: "/story", label: "Story" },
  { to: "/services", label: "What We Do" },
  { to: "/proof", label: "Proof" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-hairline bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid h-14 max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-16 md:px-10"
      >
        <Link to="/" className="block shrink-0">
          <img src={logoImage} alt="SERAI logo" className="h-9 w-auto" />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.78rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply"
            className="border border-gold bg-gold px-5 py-2.5 text-[0.72rem] tracking-[0.18em] text-ink uppercase transition-opacity hover:opacity-85"
          >
            Apply
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 pt-2 pb-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display border-b border-hairline py-4 text-2xl text-foreground"
              style={{
                transition: `opacity .5s ${120 + i * 60}ms, transform .5s ${120 + i * 60}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(10px)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply"
            className="border border-gold bg-gold mt-6 px-6 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink uppercase"
          >
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
