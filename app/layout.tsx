import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Article6 Carbon | Pre-validation readiness review",
  description:
    "Independent pre-validation evidence and methodology readiness review for carbon projects before validation becomes expensive or slow.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
