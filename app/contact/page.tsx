"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAGlass } from '@/components/blocks/CTAGlass'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 text-white">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-medium tracking-wider uppercase text-white/80">Contact</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Ask once. Get a <span className="text-white">clear</span> answer.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
              Share what you’re looking for—model, budget, or use case—and we’ll respond with next steps.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <ContactForm
            headline="Send an inquiry"
            subheadline="This is a static site—use this form to request recommendations, quotes, or availability."
            contactInfo={[
              { icon: "📍", label: "Location", value: "Gada Electronics — City Center" },
              { icon: "✉️", label: "Email", value: "sales@gadaelectronics.example" },
              { icon: "☎️", label: "Phone", value: "+1 (000) 000-0000" }
            ]}
          />
        </div>
      </motion.section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FAQAccordion
          headline="Before you send"
          items={[
            {
              question: "What should I include for the fastest response?",
              answer:
                "Your use case (work/gaming/travel/gifting), budget range, preferred brands (optional), and any must-have features."
            },
            {
              question: "Do you accept returns via this website?",
              answer:
                "This site is content-focused and does not process orders. Contact us with your request and we’ll guide you."
            }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <CTAGlass
          headline="Prefer browsing first?"
          description="Explore the product showcase and then message us with the items you want."
          ctaLabel="View Products"
          ctaHref="/portfolio"
          secondaryCtaLabel="About Us"
          secondaryCtaHref="/about"
        />
      </motion.div>
    </div>
  );
}
