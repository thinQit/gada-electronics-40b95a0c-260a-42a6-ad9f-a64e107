import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { NavbarGlass } from '@/components/blocks/NavbarGlass'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Gada Electronics",
  description: "Premium gadgets and modern electronics—curated for performance, design, and everyday reliability."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="fixed top-0 left-0 right-0 w-full z-50">
            <NavbarGlass
              logo="Gada Electronics"
              navItems={[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Portfolio", href: "/portfolio" }
              ]}
              ctaLabel="Explore Products"
              ctaHref="/portfolio"
            />
          </div>

          <main className="pt-20">{children}</main>

          <FooterMultiColumn
            brand="Gada Electronics"
            description="A modern electronics destination—precision-picked gadgets, clean guidance, and a premium browsing experience."
            columns={[
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" }
                ]
              },
              {
                title: "Explore",
                links: [
                  { label: "Pricing", href: "/pricing" },
                  { label: "Contact", href: "/contact" }
                ]
              },
              {
                title: "Store",
                links: [
                  { label: "Featured Gadgets", href: "/portfolio" },
                  { label: "New Arrivals", href: "/portfolio" },
                  { label: "Accessories", href: "/portfolio" }
                ]
              }
            ]}
            copyright="© 2026 Gada Electronics. All rights reserved."
          />
        </div>
      </body>
    </html>
  );
}
