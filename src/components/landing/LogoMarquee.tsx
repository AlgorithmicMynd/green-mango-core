import { trustedLogos } from "@/lib/cms-data";

export function LogoMarquee() {
  const loop = [...trustedLogos, ...trustedLogos];
  return (
    <section className="relative mx-auto -mt-8 max-w-6xl px-6">
      <div className="rounded-2xl border border-border bg-surface/60 px-6 py-8 backdrop-blur">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by Industry Leaders
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {loop.map((logo, i) => (
              <span
                key={i}
                className="select-none text-2xl font-bold tracking-widest text-muted-foreground/60 transition hover:text-primary"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
