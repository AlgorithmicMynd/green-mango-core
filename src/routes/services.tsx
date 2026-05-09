import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, Brain, Code2, Megaphone, Zap, type LucideIcon } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { serviceFaqs, servicesHero, servicesList } from "@/lib/cms-data";
import {
  breadcrumbSchema,
  buildSeo,
  faqSchema,
  servicesCatalogSchema,
  webPageSchema,
} from "@/lib/seo";

const title = "AI Automation, Custom Software & Digital Marketing Services | Mango Stack AI";
const description =
  "Explore Mango Stack AI services for custom software development, AI systems, process automation, and SEO-focused digital marketing.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () =>
    buildSeo({
      title,
      description,
      path: "/services",
      keywords: [
        "AI automation services",
        "custom software development services",
        "AI integration services",
        "business process automation",
        "SEO digital marketing services",
        "Mango Stack AI services",
      ],
      schema: [
        webPageSchema("/services", title, description, "CollectionPage"),
        servicesCatalogSchema(),
        faqSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
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
              <div
                className={`flex items-center justify-center ${isEven ? "" : "lg:[direction:ltr]"}`}
              >
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

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Common Questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Questions before you start
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A quick look at how we approach software, AI, automation, and measurable digital growth.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {serviceFaqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold tracking-tight">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
