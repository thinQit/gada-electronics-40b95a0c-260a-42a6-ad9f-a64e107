"use client";
import React from "react";
export function Avatar({ className = "", children, ...props }: any) { return <div className={className} {...props}>{children}</div>; }
export default Avatar;

export function AvatarImage(props: any) { return <div {...props}>{props.children}</div>; }

export function AvatarFallback(props: any) { return <div {...props}>{props.children}</div>; }
