"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroBeams } from '@/components/blocks/HeroBeams'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { HoverEffect } from '@/components/ui/effects/HoverEffect'
import { CTAGlass } from '@/components/blocks/CTAGlass'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="Gada Electronics hero"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="text-white">
            <HeroBeams
              headline="Precision tech for"
              highlightText="everyday brilliance."
              subheadline="Discover premium gadgets and essential electronics—curated for performance, design, and reliability. Clean choices. Confident upgrades."
              primaryCta={{ label: "Browse the Collection", href: "/portfolio" }}
              secondaryCta={{ label: "Contact Sales", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      {/* Editorial intro + image */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium tracking-wider text-[var(--muted-foreground)] uppercase">
              The Gada Standard
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              A sleek storefront for modern electronics—built for clarity.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Gada Electronics brings together the gadgets you actually want—smart essentials, standout design,
              and dependable performance. No clutter, no noise—just a premium way to explore what’s next.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-background/70 backdrop-blur-xl">
            <Image
              src="/images/product-1.png"
              alt="Featured product"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeaturesGrid
          badge="Why Gada"
          headline="Designed like an editorial. Built like a toolbox."
          subheadline="A modern, content-first experience that highlights products with space, hierarchy, and confidence."
          features={[
            {
              icon: "⚡",
              title: "Fast clarity",
              description: "Clean sections and strong typography help customers decide quickly—without distractions."
            },
            {
              icon: "🧩",
              title: "Curated selection",
              description: "A focused catalog presentation that spotlights key categories and hero items."
            },
            {
              icon: "🛡️",
              title: "Trust-first layout",
              description: "Reassurance modules and clear contact paths—built for conversion without heavy e-commerce."
            },
            {
              icon: "📦",
              title: "Static & launch-ready",
              description: "No filtering, no reviews, no complex flows—just a premium static site that looks expensive."
            }
          ]}
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <StatsCounter
          stats={[
            { value: "50+", label: "Featured gadgets" },
            { value: "10+", label: "Core categories" },
            { value: "24/7", label: "Inquiry intake" },
            { value: "1", label: "Premium brand experience" }
          ]}
          bgColor="bg-[var(--primary)] text-white"
        />
      </motion.div>

      {/* Category / collection discovery */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-wider text-[var(--muted-foreground)] uppercase">
              Explore
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Shop by intent, not by noise.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              From daily drivers to statement pieces—discover what fits your workflow.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: "Smart Essentials",
                  description: "Chargers, hubs, power, and everyday upgrades that quietly improve everything.",
                  link: "/portfolio"
                },
                {
                  title: "Audio & Wearables",
                  description: "Headphones, earbuds, and wearables—comfort, clarity, and clean design.",
                  link: "/portfolio"
                },
                {
                  title: "Work & Study",
                  description: "Keyboards, mice, monitors, and productivity gear built for focus.",
                  link: "/portfolio"
                },
                {
                  title: "Home Tech",
                  description: "Smart home and lifestyle electronics—simple, modern, and reliable.",
                  link: "/portfolio"
                },
                {
                  title: "Premium Picks",
                  description: "Hero products with standout materials, performance, and presence.",
                  link: "/portfolio"
                },
                {
                  title: "Gifting",
                  description: "High-impact gadgets that feel thoughtful—without guesswork.",
                  link: "/portfolio"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FAQAccordion
          headline="Questions, answered."
          subheadline="A simple, static experience—focused on discovery and inquiries."
          items={[
            {
              question: "Do you offer product filtering or advanced e-commerce checkout?",
              answer:
                "No—this site is intentionally static and content-focused. It’s designed to showcase products beautifully and drive inquiries."
            },
            {
              question: "Can I request a quote or availability?",
              answer:
                "Yes. Use the Contact page to share what you’re looking for—model, quantity, and timeline—and we’ll respond with next steps."
            },
            {
              question: "What kind of electronics do you carry?",
              answer:
                "A broad range: smart essentials, audio, wearables, productivity gear, home tech, and premium gadgets."
            },
            {
              question: "How do I get help choosing the right item?",
              answer:
                "Send your use case (work, gaming, travel, gifting) and budget via the contact form. We’ll recommend a short list."
            }
          ]}
        />
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTAGlass
          headline="Ready to upgrade your setup?"
          description="Browse the showcase or send an inquiry—clean, fast, and focused."
          ctaLabel="View Products"
          ctaHref="/portfolio"
          secondaryCtaLabel="Contact Us"
          secondaryCtaHref="/contact"
        />
      </motion.div>
    </div>
  );
}
