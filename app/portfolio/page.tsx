"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HoverEffect } from '@/components/ui/effects/HoverEffect'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { CTAGlass } from '@/components/blocks/CTAGlass'

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const products = [
  { title: "AeroNoise Pro Headphones", description: "Studio-grade clarity with all-day comfort. A premium daily driver." },
  { title: "Chromodyne Ultra Laptop", description: "Performance-first design for work, study, and creative flow." },
  { title: "Pulse X Smartwatch", description: "Clean health tracking with a minimal, modern face." },
  { title: "NovaDock USB-C Hub", description: "Ports you need, in a compact aluminum build—desk-ready." },
  { title: "IonCharge 65W GaN", description: "Fast charging with a small footprint—travel and everyday." },
  { title: "ArcKey Mechanical Keyboard", description: "Crisp switches, quiet confidence—built for focus." },
  { title: "Vector Precision Mouse", description: "Ergonomic shape with smooth tracking and premium materials." },
  { title: "Halo Smart Speaker", description: "Room-filling sound with a clean, architectural silhouette." }
];

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="Products" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--primary)]/70 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 text-white">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-medium tracking-wider uppercase text-white/80">Products</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              A static showcase of <span className="text-white">fancy gadgets</span> and essentials.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
              No filtering, no reviews—just a clean grid of modern electronics with premium storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product grid (static) */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "/images/product-1.png",
              "/images/product-2.png",
              "/images/product-3.png",
              "/images/product-2.png",
              "/images/product-3.png",
              "/images/product-1.png"
            ].map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl bg-background/70 backdrop-blur-xl">
                <Image
                  src={src}
                  alt={`Product image ${i + 1}`}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">Featured</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{products[i]?.title ?? "Signature Gadget"}</p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {products[i]?.description ??
                      "A premium pick—clean design, reliable performance, and a modern feel."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick categories */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-wider text-[var(--muted-foreground)] uppercase">Collections</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Browse the highlights</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Each collection is designed to feel like a clean editorial spread—simple, modern, and decisive.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                { title: "Audio", description: "Headphones, earbuds, speakers—clarity and comfort.", link: "/contact" },
                { title: "Wearables", description: "Smartwatches and trackers with clean interfaces.", link: "/contact" },
                { title: "Productivity", description: "Keyboards, mice, monitors, and desk essentials.", link: "/contact" },
                { title: "Charging", description: "GaN chargers, cables, power—fast and reliable.", link: "/contact" },
                { title: "Smart Home", description: "Modern home tech with minimal design.", link: "/contact" },
                { title: "Premium Picks", description: "Statement gadgets with standout materials.", link: "/contact" }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <FeaturesGrid
          badge="Notes"
          headline="Static by design—premium by default."
          subheadline="This page is intentionally simple: a modern grid, clear categories, and a direct inquiry path."
          features={[
            { icon: "🖼️", title: "Visual-first", description: "Large imagery and calm spacing keep focus on the product." },
            { icon: "🧾", title: "Clear details", description: "Short descriptions that explain the value without fluff." },
            { icon: "📨", title: "Inquiry-ready", description: "Contact us for quotes, availability, and recommendations." },
            { icon: "🧊", title: "Modern aesthetic", description: "Glass layers, gradients, and editorial hierarchy." }
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <CTAGlass
          headline="Want pricing or availability?"
          description="Send the product name(s) you like and we’ll reply with details."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="About Gada"
          secondaryCtaHref="/about"
        />
      </motion.div>
    </div>
  );
}
