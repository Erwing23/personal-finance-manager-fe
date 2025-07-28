// lib/metadata.ts
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "PFM",
  description: "Welcome to my personal finance manager",
  keywords: ["next.js", "pwa", "persoal", "finance", "manager"],
  authors: [{ name: "Erwing Medina" }],
  icons: {
    icon: "/favicon.ico",
  },
};
