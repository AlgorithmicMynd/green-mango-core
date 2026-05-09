import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, Brain, Code2, Megaphone, Zap, type LucideIcon } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { servicesHero, servicesList } from "@/lib/cms-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Mango Stack AI" },
      {
        name: "description",
        content:
          "Custom software, advanced automation, AI systems, and digital marketing services built for enterprise scale.",
      },
      { property: "og:title", content: "Services — Mango Stack AI" },
    ],
  }),
});

const iconMap: Record<string, LucideIcon> = { Brain, Code2, Megaphone, Zap };

function ServicesPage() {
  return (
    <PageShell>
      <PageHero {...servicesHero} />

      {/* Services list */}
      <section className="mx-auto max-w-7xl px-6 pb-28 space-y-10">
        {servicesList.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Code2;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-10 rounded-3xl border border-border bg-surface p-8 md:p-12 lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}
            >
              {/* Text side */}
              <div className={isEven ? "" : "lg:[direction:ltr]"}>
                <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {service.tag}
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.cta.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.04]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {service.cta.label} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Icon side */}
              <div className={`flex items-center justify-center ${isEven ? "" : "lg:[direction:ltr]"}`}>
                <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-border bg-surface-elevated shadow-[var(--shadow-card)]">
                  <div
                    className="absolute inset-0 rounded-3xl opacity-50"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                  <Icon className="relative h-24 w-24 text-primary opacity-90" strokeWidth={1.2} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </PageShell>
  );
}
