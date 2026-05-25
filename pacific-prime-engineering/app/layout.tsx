import Script from "next/script";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pacificprimeengineering.com"),

  title: {
    default: "Pacific Prime Engineering",
    template: "%s | Pacific Prime Engineering",
  },

  description:
    "Premium engineering services for luxury hospitality, utilities infrastructure, pumping systems and industrial maintenance in Guanacaste, Costa Rica.",

  keywords: [
    "engineering services guanacaste",
    "industrial maintenance costa rica",
    "hospitality engineering",
    "utilities infrastructure",
    "pumping systems costa rica",
    "papagayo engineering",
    "resort maintenance guanacaste",
    "critical infrastructure costa rica",
  ],

  authors: [{ name: "Pacific Prime Engineering" }],

  openGraph: {
    title: "Pacific Prime Engineering",
    description:
      "Critical Infrastructure. Premium Response.",
    url: "https://pacificprimeengineering.com",
    siteName: "Pacific Prime Engineering",
    images: [
      {
        url: "/ppe-logo.png",
        width: 1200,
        height: 630,
        alt: "Pacific Prime Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pacific Prime Engineering",
    description:
      "Critical Infrastructure. Premium Response.",
    images: ["/ppe-logo.png"],
  },

  icons: {
    icon: "/ppe-logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-X3GPDNRXJV"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-X3GPDNRXJV');
  `}
</Script>
      </body>
    </html>
  );
}
