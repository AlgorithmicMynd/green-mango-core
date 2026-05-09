import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { navMenus } from "@/lib/cms-data";

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Mango Stack AI" width={36} height={36} className="rounded-md" />
          <span className="text-base font-semibold tracking-tight">Mango Stack AI</span>
        </Link>

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
                        <Link
                          key={it.label}
                          to={it.href as never}
                          className="block rounded-lg px-3 py-2.5 transition hover:bg-secondary"
                          onClick={() => setOpen(null)}
                        >
                          <div className="text-sm font-medium">{it.label}</div>
                          <div className="text-xs text-muted-foreground">{it.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            to="/services"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.03] sm:inline-block"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Demo
          </Link>
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
                    <Link
                      key={it.label}
                      to={it.href as never}
                      className="block rounded-md px-2 py-2 text-sm hover:bg-secondary"
                      onClick={() => setMobile(false)}
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="border-t border-border pt-3 mt-2">
                <Link
                  to="/services"
                  className="block rounded-md px-2 py-2 text-sm hover:bg-secondary"
                  onClick={() => setMobile(false)}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="block rounded-md px-2 py-2 text-sm hover:bg-secondary"
                  onClick={() => setMobile(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="mt-2 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                  onClick={() => setMobile(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
