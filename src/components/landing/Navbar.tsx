import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navMenus } from "@/lib/cms-data";

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="Mango Stack AI" width={36} height={36} className="rounded-md" />
          <span className="text-base font-semibold tracking-tight">Mango Stack AI</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {Object.entries(navMenus).map(([label, items]) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setOpen(label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground">
                {label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {open === label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="glass min-w-[260px] rounded-xl p-2 shadow-[var(--shadow-card)]">
                      {items.map((it) => (
                        <a
                          key={it.label}
                          href={it.href}
                          className="block rounded-lg px-3 py-2.5 transition hover:bg-secondary"
                        >
                          <div className="text-sm font-medium">{it.label}</div>
                          <div className="text-xs text-muted-foreground">{it.desc}</div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="#resources" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Resource Center
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden rounded-lg bg-[var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.03] sm:inline-block"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Demo
          </a>
          <button className="lg:hidden" onClick={() => setMobile(!mobile)} aria-label="Menu">
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {Object.entries(navMenus).map(([label, items]) => (
                <div key={label}>
                  <div className="px-2 py-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  {items.map((it) => (
                    <a key={it.label} href={it.href} className="block rounded-md px-2 py-2 text-sm hover:bg-secondary">
                      {it.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
