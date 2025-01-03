import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "../styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import { cn } from "@/utils/utils";
import ProgressProvider from "@/components/ProgressProvider";
import TailwindIndicator from "@/components/TailwindIndicator";
import ThemeProvider from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { site, siteBaseMetadata } from "@/config/site";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const biotif = localFont({
  src: [
    {
      path: "../styles/fonts/Biotif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Biotif-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/Biotif-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  ...siteBaseMetadata,
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.title}`,
    default: site.title,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT">
      <body className={cn(inter.className, biotif.className)}>
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ProgressProvider>
            <Header />
            <main className="static mx-auto max-w-5xl px-8 py-24 md:mb-16">
              {children}
            </main>
            <Footer />
            <Toaster />
            <TailwindIndicator />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
