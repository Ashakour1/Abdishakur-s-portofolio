import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const featuredSerif = Fraunces({
  subsets: ["latin"],
  variable: "--font-featured",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const themeBootstrapScript = `
  (() => {
    const storageKey = "preferred-theme";
    const root = document.documentElement;
    const storedTheme = window.localStorage.getItem(storageKey);
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  })();
`;

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
    <html
      lang="en"
      data-theme="dark"
      className={featuredSerif.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrapScript}
        </Script>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="5250c3c4-d346-413d-a6ae-af6ca7398879"
          strategy="afterInteractive"
        />
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
