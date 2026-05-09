import { motion } from "framer-motion";
import { ArrowRight, Cog, Megaphone, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { departments } from "@/lib/cms-data";

const iconMap: Record<string, LucideIcon> = { Cog, Megaphone, TrendingUp, Users };

function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function Departments() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Departments</p>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Purpose-built for every team in the enterprise
        </h2>
        <p className="mt-4 text-muted-foreground">
          From engineering primitives to revenue intelligence — one platform, four powerhouses.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {departments.map((d, i) => {
          const Icon = iconMap[d.icon] ?? Cog;
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseMove={handleMouseMove}
              className="hover-glow group relative flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              <a
                href={d.link.href}
                aria-label={`Learn about ${d.title}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition group-hover:gap-2.5"
              >
                {d.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
