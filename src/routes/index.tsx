import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { Departments } from "@/components/landing/Departments";
import { FeatureSplit } from "@/components/landing/FeatureSplit";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA, Footer } from "@/components/landing/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mango Stack AI — Enterprise-Grade AI & Automation" },
      {
        name: "description",
        content:
          "Mango Stack AI delivers enterprise-grade AI, automation, and digital marketing solutions engineered to scale across complex organizations.",
      },
      { property: "og:title", content: "Mango Stack AI — Enterprise AI & Automation" },
      {
        property: "og:description",
        content: "Scalable AI solutions for engineering, marketing, sales and HR teams.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <h1 className="sr-only">Mango Stack AI — Enterprise-Grade AI & Automation</h1>
      <Hero />
      <LogoMarquee />
      <Departments />
      <FeatureSplit />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
