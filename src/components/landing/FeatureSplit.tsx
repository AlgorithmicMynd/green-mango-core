import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import dashboard from "@/assets/dashboard.jpg";
import { features } from "@/lib/cms-data";

export function FeatureSplit() {
  return (
    <section id="platform" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-primary">The Platform</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            One control plane for every AI workload
          </h2>
          <p className="mt-4 text-muted-foreground">
            From experimentation to production — model lifecycle, observability and governance unified
            under a single, secure platform.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#demo"
            className="mt-10 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.04]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Explore the platform <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="absolute -inset-6 rounded-3xl opacity-60 blur-3xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs text-muted-foreground">app.mangostackai.com</span>
            </div>
            <img src={dashboard} alt="Mango Stack AI dashboard" width={1280} height={896} loading="lazy" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
