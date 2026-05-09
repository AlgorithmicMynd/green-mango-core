import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Send,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { contactHero, contactDetails, contactReasons } from "@/lib/cms-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Mango Stack AI" },
      {
        name: "description",
        content:
          "Get in touch with Mango Stack AI. Reach out for custom software, AI solutions, automation, or digital marketing enquiries.",
      },
      { property: "og:title", content: "Contact — Mango Stack AI" },
    ],
  }),
});

const iconMap: Record<string, LucideIcon> = { Brain, Code2, Globe, Megaphone, MessageCircle, Zap };

function ContactPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell showCta={false}>
      <PageHero {...contactHero} />

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-surface p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Send className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">Message received!</h2>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out. {contactDetails.responseTime}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">{contactDetails.responseTime}</p>

                {/* Reason chips */}
                <div className="mt-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    I'm interested in…
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contactReasons.map((r) => {
                      const Icon = iconMap[r.icon] ?? MessageCircle;
                      return (
                        <button
                          key={r.label}
                          type="button"
                          onClick={() => setSelected(r.label)}
                          className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition ${
                            selected === r.label
                              ? "border-primary bg-primary/15 text-primary"
                              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {r.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="contact-name">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Harsh Shukla"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="contact-company">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Mango Stack AI"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or challenge…"
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Right — contact details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Direct contact cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: contactDetails.email,
                href: `mailto:${contactDetails.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: contactDetails.phone,
                href: `tel:${contactDetails.phone}`,
              },
              {
                icon: Globe,
                label: "Website",
                value: contactDetails.website,
                href: `https://${contactDetails.website}`,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Website" ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-0.5 font-medium">{value}</p>
                </div>
              </a>
            ))}

            {/* Map / availability card */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-surface p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Availability</p>
              <h3 className="mt-3 text-2xl font-bold">We work globally.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our team is available across time zones. Whether you're in India, the US, Europe, or beyond —
                we'll find a time that works for both of us.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { region: "India (HQ)", tz: "IST — UTC+5:30" },
                  { region: "US Clients", tz: "EST / PST — flexible" },
                  { region: "Europe", tz: "CET — flexible" },
                ].map(({ region, tz }) => (
                  <div key={region} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-2.5">
                    <span className="text-sm font-medium">{region}</span>
                    <span className="text-xs text-muted-foreground">{tz}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
