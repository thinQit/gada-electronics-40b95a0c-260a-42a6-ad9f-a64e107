"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAGlass } from '@/components/blocks/CTAGlass'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 text-white">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-medium tracking-wider uppercase text-white/80">Services</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Guidance that feels <span className="text-white">premium</span>—and stays <span className="text-white">simple</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
              This is a static, content-first site. We keep the experience clean and modern—then support you via direct inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FeaturesGrid
          badge="What we do"
          headline="Everything you need to choose confidently."
          subheadline="No complex flows—just clear options and a fast path to answers."
          features={[
            {
              icon: "🧭",
              title: "Product recommendations",
              description: "Tell us your use case (work, gaming, travel, gifting). We’ll suggest a short list."
            },
            {
              icon: "🧾",
              title: "Quotes & availability",
              description: "Request pricing and stock details—ideal for bulk or specific models."
            },
            {
              icon: "🧰",
              title: "Setup guidance",
              description: "Compatibility checks for hubs, chargers, audio gear, and productivity accessories."
            },
            {
              icon: "🎁",
              title: "Gift matching",
              description: "We help you pick something that feels premium—without overthinking."
            }
          ]}
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
          <div>
            <p className="text-sm font-medium tracking-wider text-[var(--muted-foreground)] uppercase">How it works</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              A clean browse-to-inquiry flow.
            </h2>
            <ol className="mt-5 space-y-3 text-[var(--muted-foreground)] leading-relaxed">
              <li><span className="font-medium text-[var(--foreground)]">1.</span> Browse the product showcase.</li>
              <li><span className="font-medium text-[var(--foreground)]">2.</span> Pick what you like (or share your use case).</li>
              <li><span className="font-medium text-[var(--foreground)]">3.</span> Send an inquiry—get a clear response.</li>
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-background/70 backdrop-blur-xl">
            <Image
              src="/images/product-1.png"
              alt="Workflow and gadgets"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FAQAccordion
          headline="Service FAQs"
          items={[
            {
              question: "Do you provide installation or on-site setup?",
              answer:
                "This website is static and content-focused. For setup guidance, contact us with your devices and goals—we’ll advise the best configuration."
            },
            {
              question: "Can you help with bulk purchases?",
              answer:
                "Yes. Share the model(s), quantity, and timeline via the contact form and we’ll respond with a quote."
            },
            {
              question: "Do you offer repairs?",
              answer:
                "Not through this website experience. If you have a specific request, contact us and we’ll guide you to the best next step."
            }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <CTAGlass
          headline="Tell us what you’re building."
          description="Work setup, home tech, or a gift—send the details and we’ll recommend the right gear."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="View Products"
          secondaryCtaHref="/portfolio"
        />
      </motion.div>
    </div>
  );
}
