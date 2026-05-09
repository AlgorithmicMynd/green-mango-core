import { ArrowRight } from "lucide-react";
import mango from "@/assets/mango-hero-small.png";
import { hero } from "@/lib/cms-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <img
        src={mango}
        alt=""
        aria-hidden
        width={560}
        height={560}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="pointer-events-none absolute -left-32 top-20 hidden w-[420px] opacity-60 blur-[1px] md:block"
      />
      <img
        src={mango}
        alt=""
        aria-hidden
        width={560}
        height={560}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="pointer-events-none absolute -right-40 bottom-0 hidden w-[520px] rotate-12 opacity-30 md:block"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:py-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          {hero.eyebrow}
        </div>

        <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {hero.title}
          <br />
          <span className="text-gradient">{hero.highlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.04]"
            style={{ background: "var(--gradient-primary)" }}
          >
            {hero.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:scale-[1.04] hover:border-primary/50"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
