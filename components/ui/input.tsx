"use client";
import React from "react";
export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) { return <input className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`} {...props} />; }
export default Input;
