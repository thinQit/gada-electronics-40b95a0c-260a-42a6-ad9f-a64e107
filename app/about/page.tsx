"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { CTAGlass } from '@/components/blocks/CTAGlass'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="About Gada Electronics" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 text-white">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-medium tracking-wider uppercase text-white/80">About</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Gada Electronics is built on <span className="text-white">taste</span> and <span className="text-white">precision</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
              We treat electronics like modern tools—designed, curated, and presented with editorial clarity. Our goal is simple:
              help people find the right gadget faster, with less noise.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <StatsCounter
          stats={[
            { value: "Curated", label: "Selection mindset" },
            { value: "Modern", label: "Editorial layout" },
            { value: "Clear", label: "Product storytelling" },
            { value: "Fast", label: "Inquiry path" }
          ]}
          bgColor="bg-[var(--secondary)] text-white"
        />
      </motion.div>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-background/70 backdrop-blur-xl">
            <Image
              src="/images/product-2.png"
              alt="Premium electronics"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium tracking-wider text-[var(--muted-foreground)] uppercase">Our approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Minimal interface. Maximum confidence.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Instead of overwhelming pages, we use space, hierarchy, and strong product visuals. The result is a premium browsing
              experience that feels calm, modern, and decisive.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FeaturesGrid
          badge="What we value"
          headline="A brand that respects your attention."
          subheadline="Every section is designed to feel intentional—like a precision instrument."
          features={[
            { icon: "🧠", title: "Clarity", description: "Clear categories, clean copy, and strong visual hierarchy." },
            { icon: "🧱", title: "Craft", description: "Aesthetic layouts that make hardware feel like art." },
            { icon: "🔍", title: "Curation", description: "Focused product storytelling—no clutter, no gimmicks." },
            { icon: "🤝", title: "Support", description: "A direct inquiry path for quotes, availability, and recommendations." }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <TeamGrid
          headline="People behind the polish."
          subheadline="A small team with a big obsession: modern tech that feels good to use."
          members={[
            {
              name: "Store Lead",
              title: "Customer Experience",
              bio: "Helps customers match products to real-world needs—fast, clear, and friendly.",
              imageUrl: "/images/product-3.png"
            },
            {
              name: "Curator",
              title: "Product Selection",
              bio: "Focuses on quality, design, and value—so the catalog stays sharp.",
              imageUrl: "/images/product-3.png"
            },
            {
              name: "Ops",
              title: "Availability & Quotes",
              bio: "Keeps inquiries moving with accurate details and quick turnarounds.",
              imageUrl: "/images/product-2.png"
            }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <CTAGlass
          headline="Want a recommendation?"
          description="Tell us your use case and budget—we’ll reply with a short, confident shortlist."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="View Products"
          secondaryCtaHref="/portfolio"
        />
      </motion.div>
    </div>
  );
}
