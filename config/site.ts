import { Metadata } from "next";

type Site = {
  title: string;
  description: string;
  url: string;
  logo: string;
};

export const site: Site = {
  title: "Will Shi",
  description: "Full-Stack Engineer",
  url: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
  logo: "",
};

export const siteBaseMetadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: "Will Shi",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Will Shi", url: "https://willshi.com" }],
  creator: "Will Shi",
  publisher: "Will Shi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    url: site.url,
    type: "website",
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: "it-IT",
    images: [
      {
        url: `${site.url}/images/default.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //     icon: '/images/favicon/favicon.ico',
  //     shortcut: '/images/favicon/favicon.ico',
  //     apple: [
  //         {
  //             url: '/images/favicon/apple-icon-60x60.png',
  //             sizes: '60x60',
  //             type: 'image/png',
  //         },
  //     ],
  //     other: [
  //         {
  //             rel: 'apple-touch-icon-precomposed',
  //             url: '/images/favicon/apple-icon-precomposed.png',
  //         },
  //         {
  //             rel: 'icon',
  //             type: 'image/png',
  //             sizes: '16x16',
  //             url: '/images/favicon/favicon-16x16.png',
  //         },
  //         {
  //             rel: 'icon',
  //             type: 'image/png',
  //             sizes: '32x32',
  //             url: '/images/favicon/favicon-32x32.png',
  //         },
  //         {
  //             rel: 'icon',
  //             type: 'image/png',
  //             sizes: '96x96',
  //             url: '/images/favicon/favicon-96x96.png',
  //         },
  //     ],
  // },
};
