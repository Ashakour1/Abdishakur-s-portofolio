import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="h-full antialiased" style={{ fontFamily: manrope.style.fontFamily }}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <div aria-hidden="true" className="site-grid" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
