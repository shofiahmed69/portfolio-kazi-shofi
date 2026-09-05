import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, getPersonSchema, getProfilePageSchema, getWebsiteSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Kazi Shofi Ahmed",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Kazi Shofi Ahmed",
    "Kazi Shofi Ahmed Portfolio",
    "Kazi Shofi Ahmed CTO",
    "Kazi Shofi Ahmed Jantra Software",
    "Kazi Shofi Ahmed ScholarPass",
    "Kazi Shofi Ahmed NSTU",
    "Full-Stack Software Engineer Bangladesh",
    "Software Engineering Student NSTU",
    "NestJS Next.js Developer",
    "Flutter PostgreSQL Developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: "Kazi Shofi Ahmed Official Portfolio",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Kazi Shofi Ahmed — CTO at Jantra Software & Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/shofi_formal.png",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [getPersonSchema(), getProfilePageSchema(), getWebsiteSchema()];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={schemas} />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-neutral-100">{children}</body>
    </html>
  );
}

