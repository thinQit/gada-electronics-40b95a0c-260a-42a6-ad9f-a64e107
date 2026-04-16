"use client";
import React from "react";
export function Badge({ className = "", children, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) {
  const variants: Record<string, string> = { default: "bg-primary text-primary-foreground", secondary: "bg-secondary text-secondary-foreground", outline: "border text-foreground" };
  return <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant] || variants.default} ${className}`} {...props}>{children}</div>;
}
export default Badge;
