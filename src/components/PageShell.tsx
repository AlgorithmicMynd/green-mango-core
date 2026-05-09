import { Navbar } from "@/components/landing/Navbar";
import { CTA, Footer } from "@/components/landing/CTA";

interface PageShellProps {
  children: React.ReactNode;
  /** Pass false to hide the CTA block (e.g. on the Contact page itself) */
  showCta?: boolean;
}

export function PageShell({ children, showCta = true }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      {showCta && <CTA />}
      <Footer />
    </div>
  );
}
