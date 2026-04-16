"use client";
import React from "react";
export function Label({ className = "", children, ...props }: any) { return <div className={className} {...props}>{children}</div>; }
export default Label;
