import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { Departments } from "@/components/landing/Departments";
import { FeatureSplit } from "@/components/landing/FeatureSplit";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA, Footer } from "@/components/landing/CTA";
import { buildSeo, webPageSchema } from "@/lib/seo";

const title = "Mango Stack AI | Custom Software, AI Automation & Digital Marketing";
const description =
  "Mango Stack AI builds custom software, AI systems, workflow automation, and digital marketing systems for growing teams and enterprise operations.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeo({
      title,
      description,
      path: "/",
      keywords: [
        "Mango Stack AI",
        "custom software development",
        "AI automation company",
        "enterprise AI solutions",
        "digital marketing agency",
        "workflow automation",
      ],
      schema: webPageSchema("/", title, description, "WebPage"),
    }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
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
