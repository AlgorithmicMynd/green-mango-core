import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-mark.png";

export function CTA() {
  return (
    <section id="demo" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center md:px-16"
      >
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Ready to scale AI across your enterprise?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to our solutions team and get a tailored architecture review within 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.04]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-border bg-background/40 px-6 py-3 text-sm font-semibold transition hover:scale-[1.04] hover:border-primary/50"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" aria-hidden width={28} height={28} className="rounded-md" />
          <span className="text-sm font-semibold">Mango Stack AI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mango Stack AI. Software Solutions · Automation · AI ·
          Digital Marketing.
        </p>
      </div>
    </footer>
  );
}
