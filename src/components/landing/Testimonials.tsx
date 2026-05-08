import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/cms-data";

function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold tracking-tight md:text-4xl"
      >
        Trusted by leaders shipping at scale
      </motion.h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseMove={handleMouseMove}
            className="hover-glow rounded-2xl border border-border bg-surface p-6"
          >
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{t.author}</span> · {t.company}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
