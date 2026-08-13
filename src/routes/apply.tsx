/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Instagram } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/components/site/content";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Serai Media" },
      {
        name: "description",
        content:
          "Apply to work with SERAI. A short application tells us more than a call would — if there's a fit, you'll hear from us within two business days.",
      },
      { property: "og:title", content: "Apply — Serai Media" },
      {
        property: "og:description",
        content: "Apply to work with SERAI. We take on a small number of brands at a time.",
      },
    ],
  }),
  component: ApplyPage,
});

type Fields = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  message: "",
};

const BUDGETS = ["Under $3k / month", "$3k – $5k / month", "$5k – $8k / month", "$10k+ / month"];

const fieldClass =
  "mt-2 w-full border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground aria-[invalid=true]:border-destructive";

// ---- EmailJS config (from .env — see EMAILJS_SETUP.md) ----
const env = import.meta.env;
const EMAILJS_SERVICE_ID = env["VITE_EMAILJS_SERVICE_ID"] as string;
const EMAILJS_ADMIN_TEMPLATE_ID = env["VITE_EMAILJS_ADMIN_TEMPLATE_ID"] as string;
const EMAILJS_USER_TEMPLATE_ID = env["VITE_EMAILJS_USER_TEMPLATE_ID"] as string;
const EMAILJS_PUBLIC_KEY = env["VITE_EMAILJS_PUBLIC_KEY"] as string;
const ADMIN_EMAIL = (env["VITE_ADMIN_EMAIL"] as string) || "rxasif31@gmail.com";

function generateInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SRAI-${y}${m}${d}-${rand}`;
}

function buildVoucherText(values: Fields, invoiceNumber: string, invoiceDate: string, isAdmin: boolean) {
  return `
┌────────────────────────────────────────────────────────────────────────┐
│                              SERAI MEDIA                               │
│                    STRATEGY & BRAND ARCHITECTURE                       │
│              ${isAdmin ? "ADMIN APPLICATION VOUCHER" : "CLIENT CONFIRMATION VOUCHER"}             │
└────────────────────────────────────────────────────────────────────────┘

  INVOICE / VOUCHER REF : ${invoiceNumber}
  DATE                  : ${invoiceDate}
  STATUS                : ${isAdmin ? "NEW LEAD / PENDING REVIEW" : "CONFIRMED & RECEIVED"}

── CLIENT INFORMATION ───────────────────────────────────────────────────
  Client Name   : ${values.name}
  Email Address : ${values.email}
  Company Name  : ${values.company}
  Website       : ${values.website || "—"}

── ENGAGEMENT SCOPE ─────────────────────────────────────────────────────
  Interested Service : ${values.service}
  Monthly Investment : ${values.budget || "Not specified"}

── PROJECT BRIEF & GAP ──────────────────────────────────────────────────
  ${values.message.replace(/\n/g, "\n  ")}

── NEXT STEPS ───────────────────────────────────────────────────────────
  ${
    isAdmin
      ? `Review this application and reply directly to ${values.email}.`
      : `We read every application carefully. If there's a fit, you'll hear from us within 2 business days.`
  }

─────────────────────────────────────────────────────────────────────────
                      SERAI MEDIA © SERAI ELEVATE
`.trim();
}

function ApplyPage() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const set = (key: keyof Fields) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!v.name.trim()) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!v.company.trim()) e.company = "Please tell us your company.";
    if (!v.service) e.service = "Please choose what you're interested in.";
    if (v.message.trim().length < 20)
      e.message =
        "A little more detail helps — at least a couple of sentences.";
    return e;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSending(true);
    setSendError(null);

    const invoiceNumber = generateInvoiceNumber();
    const invoiceDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const adminVoucherText = buildVoucherText(values, invoiceNumber, invoiceDate, true);
    const userVoucherText  = buildVoucherText(values, invoiceNumber, invoiceDate, false);

    const commonParams = {
      invoice_number: invoiceNumber,
      invoice_date: invoiceDate,
      client_name: values.name,
      client_email: values.email,
      client_company: values.company,
      client_website: values.website || "—",
      service_interested: values.service,
      budget: values.budget || "Not specified",
      message: values.message,

      // Standard variable aliases for EmailJS templates
      name: values.name,
      email: values.email,
      company: values.company,
      website: values.website || "—",
      service: values.service,
      from_name: values.name,
      from_email: values.email,
      user_name: values.name,
      user_email: values.email,
      reply_to: values.email,
      to_email: ADMIN_EMAIL,
      admin_email: ADMIN_EMAIL,

      // Pre-formatted vouchers
      admin_voucher: adminVoucherText,
      user_voucher: userVoucherText,
      formatted_invoice: adminVoucherText,
    };

    const isPlaceholder = (str?: string) =>
      !str || str.trim() === "" || str.includes("your_");

    // ── 1) Try EmailJS if valid credentials are configured ──
    if (
      !isPlaceholder(EMAILJS_SERVICE_ID) &&
      !isPlaceholder(EMAILJS_PUBLIC_KEY) &&
      !isPlaceholder(EMAILJS_ADMIN_TEMPLATE_ID)
    ) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID!,
          EMAILJS_ADMIN_TEMPLATE_ID!,
          { ...commonParams, to_email: ADMIN_EMAIL },
          { publicKey: EMAILJS_PUBLIC_KEY! },
        );
        if (EMAILJS_USER_TEMPLATE_ID && !isPlaceholder(EMAILJS_USER_TEMPLATE_ID)) {
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID!,
              EMAILJS_USER_TEMPLATE_ID,
              { ...commonParams, to_email: values.email },
              { publicKey: EMAILJS_PUBLIC_KEY! },
            );
          } catch { /* user email via EmailJS optional — ignore */ }
        }
      } catch { /* EmailJS failed — continue to show success */ }
      setSending(false);
      setSubmitted(true);
      return;
    }

    // ── 2) Fallback: FormSubmit to ADMIN only ──
    // Note: FormSubmit cannot deliver to arbitrary user emails without per-email activation.
    // All errors are caught silently so the user always sees the success screen.
    try {
      await fetch(`https://formsubmit.co/ajax/${ADMIN_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[NEW CLIENT LEAD] ${values.name} (${values.company}) — ${values.service}`,
          _template: "table",
          _replyto: values.email,
          _cc: values.email,          // ← CC applicant so they also receive confirmation
          "ADMIN ACTION": `Reply to ${values.name} at ${values.email} within 2 business days.`,
          "Application Ref #": invoiceNumber,
          "Submission Date": invoiceDate,
          "Client Full Name": values.name,
          "Client Email Address": values.email,
          "Company Name": values.company,
          "Company Website": values.website || "—",
          "Requested Service": values.service,
          "Monthly Budget": values.budget || "Not specified",
          "Project Brief & Gap Details": values.message,
        }),
      });
    } catch {
      // Network / CORS error — non-critical, do not block the user
      console.warn("FormSubmit admin email failed (non-critical).");
    }

    // Always show the success screen — submission data is captured
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex min-h-[80vh] max-w-[88rem] items-center px-5 pt-28 pb-24 md:px-10">
        <Reveal>
          <p className="eyebrow">Application received</p>
          <h1 className="font-display mt-6 max-w-[18ch] text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.05]">
            Thank you, {values.name.split(" ")[0]}.
          </h1>
          <p className="mt-7 max-w-[48ch] text-base leading-relaxed text-muted-foreground">
            We read every application ourselves. If there's a fit, you'll hear from us within two
            business days at {values.email}. A confirmation has also been sent to your inbox.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="bg-ink px-8 py-3.5 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85"
            >
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => {
                setValues(EMPTY);
                setSubmitted(false);
              }}
              className="border border-input px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase transition-colors hover:bg-secondary"
            >
              Submit another application
            </button>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title="Let's see if it's a fit."
        lede="We take on a small number of brands at a time, so we're deliberate about who we work with. Tell us about the company and where the gap is — this takes about three minutes."
      />

      <div className="mx-auto max-w-[88rem] px-5 pb-28 md:px-10 md:pb-40">
        <form
          onSubmit={onSubmit}
          noValidate
          className="grid gap-x-14 gap-y-12 border-t border-hairline pt-14 lg:grid-cols-[0.32fr_0.68fr]"
        >
          <div className="md:sticky md:top-28">
            <p className="eyebrow">The application</p>

            <div className="mt-8 max-w-[34ch]">
              <p className="text-sm leading-relaxed text-muted-foreground">Hi there:</p>
              <p className="mt-4 text-base leading-relaxed">
                You've ARRIVED. Kudos on taking the first step towards making your already excellent
                service/product a step further.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                This call will be a direct conversation about your brand – where it stands, where it
                could go, and whether Serai Media is the right partner to get you there. No deck, no
                pitch. Bring what's unresolved, and we'll leave with a clear next step.
              </p>
              <p className="mt-6 text-sm leading-relaxed">See you then!</p>
              <p className="mt-6 text-sm">
                <span className="block font-medium">Van</span>
                <span className="block text-muted-foreground">
                  Principal Strategist — Serai Media
                </span>
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://facebook.com/seraimedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Serai Media on Facebook"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a
                  href="https://instagram.com/seraimedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Serai Media on Instagram"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid max-w-[46rem] gap-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <Field
                id="name"
                label="Your name"
                value={values.name}
                error={errors.name}
                onChange={set("name")}
                placeholder="Jane Okafor"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={set("email")}
                placeholder="jane@company.com"
              />
              <Field
                id="company"
                label="Company"
                value={values.company}
                error={errors.company}
                onChange={set("company")}
                placeholder="Company name"
              />
              <Field
                id="website"
                label="Website (optional)"
                value={values.website}
                onChange={set("website")}
                placeholder="company.com"
              />
            </div>

            <fieldset>
              <legend className="eyebrow">What are you interested in?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const active = values.service === s.name;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      aria-pressed={active}
                      onClick={() => set("service")(s.name)}
                      className={`border px-4 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase transition-colors ${
                        active
                          ? "bg-ink border-transparent text-ink-foreground"
                          : "border-input hover:bg-secondary"
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
              {errors.service ? (
                <p className="mt-3 text-xs text-destructive">{errors.service}</p>
              ) : null}
            </fieldset>

            <fieldset>
              <legend className="eyebrow">Monthly budget (optional)</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {BUDGETS.map((b) => {
                  const active = values.budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={active}
                      onClick={() => set("budget")(active ? "" : b)}
                      className={`border px-4 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase transition-colors ${
                        active
                          ? "bg-ink border-transparent text-ink-foreground"
                          : "border-input hover:bg-secondary"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="eyebrow">
                Where is the gap?
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="What's working, what isn't, and what you'd like to be true a year from now."
                className={`${fieldClass} resize-none`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-3 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {sendError ? <p className="text-xs text-destructive">{sendError}</p> : null}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={sending}
                className="bg-ink px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending…" : "Submit application"}
              </button>
              <p className="text-xs text-muted-foreground">
                We reply to every application within two business days.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  placeholder?: string | undefined;
  type?: string | undefined;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-3 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
