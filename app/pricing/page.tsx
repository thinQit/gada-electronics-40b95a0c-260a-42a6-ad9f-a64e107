"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAGlass } from '@/components/blocks/CTAGlass'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PricingPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="Pricing" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 text-white">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-medium tracking-wider uppercase text-white/80">Pricing</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Simple plans for <span className="text-white">inquiries</span> and <span className="text-white">curation</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
              This is a static site—use pricing as a clear way to request recommendations, quotes, and curated lists.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <PricingTable
          headline="Choose your support level"
          subheadline="For customers who want fast, confident decisions—without the noise."
          tiers={[
            {
              name: "Starter",
              price: "Free",
              period: "",
              description: "Browse the showcase and send a basic inquiry.",
              features: ["Product showcase access", "General recommendations", "Response within 1–2 business days"],
              ctaLabel: "Contact Us",
              ctaHref: "/contact"
            },
            {
              name: "Curated",
              price: "$29",
              period: "per request",
              description: "A short, tailored shortlist based on your use case and budget.",
              features: ["3–5 item shortlist", "Compatibility checks", "Clear pros/cons summary"],
              ctaLabel: "Request Curation",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Business",
              price: "Custom",
              period: "",
              description: "Quotes and availability for teams, offices, and bulk orders.",
              features: ["Bulk quote support", "Model alternatives", "Timeline + availability guidance"],
              ctaLabel: "Request a Quote",
              ctaHref: "/contact"
            }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FAQAccordion
          headline="Pricing FAQs"
          items={[
            {
              question: "Is this real checkout pricing?",
              answer:
                "No. The site is static and content-focused. Pricing here represents inquiry and curation support—not an automated checkout."
            },
            {
              question: "How do I get exact product prices?",
              answer:
                "Send the product name/model (or your use case) via Contact. We’ll reply with pricing and availability."
            },
            {
              question: "Can you handle bulk orders?",
              answer:
                "Yes—use the Business option and include quantities and timeline in your message."
            }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <CTAGlass
          headline="Get a clean shortlist in one message."
          description="Tell us what you need. We’ll respond with the best options—fast."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="View Products"
          secondaryCtaHref="/portfolio"
        />
      </motion.div>
    </div>
  );
}
