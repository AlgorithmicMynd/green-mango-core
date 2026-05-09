import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe,
  Handshake,
  Mail,
  Phone,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import harshPhoto from "@/assets/Harsh-Shukla-Img.jpeg";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import {
  aboutHero,
  aboutMission,
  aboutValues,
  aboutStats,
  aboutTeam,
} from "@/lib/cms-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Mango Stack AI" },
      {
        name: "description",
        content:
          "Learn about Mango Stack AI — our mission, values, and the team behind enterprise-grade AI and automation solutions.",
      },
      { property: "og:title", content: "About Us — Mango Stack AI" },
    ],
  }),
});

const iconMap: Record<string, LucideIcon> = { Globe, Handshake, Shield, Zap };

function AboutPage() {
  return (
    <PageShell>
      <PageHero {...aboutHero} />

      {/* Stats strip */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-surface px-6 py-10 text-center"
            >
              <span className="text-4xl font-bold text-gradient">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-14"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">{aboutMission.headline}</p>
            <p className="mt-5 text-xl leading-relaxed text-foreground/90 md:text-2xl">
              "{aboutMission.body}"
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Our Values</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What we stand for
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutValues.map((val, i) => {
            const Icon = iconMap[val.icon] ?? Shield;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Leadership */}
      <section id="careers" className="mx-auto max-w-7xl px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-primary">{aboutTeam.headline}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The person behind it</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-border bg-surface p-10 text-center md:flex-row md:text-left">
            <div className="flex-shrink-0">
              <div className="relative h-24 w-24 rounded-full border-2 border-primary/40 bg-surface-elevated p-1 shadow-[var(--shadow-glow)]">
                <img
                  src={harshPhoto}
                  alt="Harsh Shukla"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{aboutTeam.lead.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{aboutTeam.lead.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{aboutTeam.lead.bio}</p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
                <a
                  href={`mailto:${aboutTeam.lead.contact}`}
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> {aboutTeam.lead.contact}
                </a>
                <a
                  href={`tel:${aboutTeam.lead.phone}`}
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> {aboutTeam.lead.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
