import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kobid & Shalini | Wedding Reception Invitation",
  description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 5, 2026 at BIOLASTIC, Sukantapally, Ward No. 33, Siliguri. A memorable evening of love, joy, and togetherness awaits.",
  keywords: ["wedding invitation", "Kobid Shalini wedding", "wedding reception", "Siliguri wedding", "May 5 2026 wedding", "BIOLASTIC", "Bengali wedding", "wedding celebration"],
  authors: [{ name: "Kobid & Shalini" }],
  creator: "Kobid & Shalini",
  publisher: "Kobid & Shalini",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/kobid-shalini_2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/kobid-shalini_2.png", sizes: "192x192", type: "image/png" },
      { url: "/images/kobid-shalini_2.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/kobid-shalini_2.png",
    apple: [
      { url: "/images/kobid-shalini_2.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_IN", "hi_IN"],
    url: "https://kobid-shalini-wedding.netlify.app",
    siteName: "Kobid & Shalini Wedding",
    title: "Kobid & Shalini | Wedding Reception Invitation",
    description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 5, 2026 at BIOLASTIC, Sukantapally, Siliguri.",
    images: [
      {
        url: "https://kobid-shalini-wedding.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kobid and Shalini Wedding Reception Invitation - May 5 2026 at BIOLASTIC Siliguri",
        type: "image/png",
      },
      {
        url: "https://kobid-shalini-wedding.netlify.app/images/kobid-shalini_2.png",
        width: 600,
        height: 597,
        alt: "Kobid and Shalini Wedding Monogram",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobid & Shalini | Wedding Reception Invitation",
    description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 5, 2026 at BIOLASTIC, Sukantapally, Siliguri.",
    images: ["https://kobid-shalini-wedding.netlify.app/og-image.png"],
  },
  alternates: {
    canonical: "https://kobid-shalini-wedding.netlify.app",
    languages: {
      "en-US": "https://kobid-shalini-wedding.netlify.app",
      "bn-IN": "https://kobid-shalini-wedding.netlify.app",
      "hi-IN": "https://kobid-shalini-wedding.netlify.app",
    },
  },
  category: "wedding",
  classification: "Wedding Invitation",
  applicationName: "Kobid & Shalini Wedding",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  verification: {},
  other: {
    "msapplication-TileColor": "#07100A",
    "msapplication-TileImage": "/images/kobid-shalini_2.png",
    "theme-color": "#07100A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Kobid & Shalini Wedding",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#07100A" },
    { media: "(prefers-color-scheme: dark)", color: "#050905" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="video" href="/video/mobile_video_bg.mp4" type="video/mp4" media="(max-width: 760px)" />
        <link rel="preload" as="video" href="/video/1_output_1777166813935022_iEqPaVidu.mp4" type="video/mp4" media="(min-width: 761px)" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Siliguri, West Bengal" />
        <meta name="geo.position" content="26.72;88.43" />
        <meta name="ICBM" content="26.72, 88.43" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingEvent",
              "name": "Kobid & Shalini Wedding Reception",
              "description": "Wedding reception celebration for Kobid and Shalini",
              "startDate": "2026-05-05T18:00:00+05:30",
              "endDate": "2026-05-05T23:00:00+05:30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "BIOLASTIC",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sukantapally, Ward No. 33",
                  "addressLocality": "Siliguri",
                  "addressRegion": "West Bengal",
                  "addressCountry": "IN",
                  "postalCode": "734005"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "26.72",
                  "longitude": "88.43"
                }
              },
              "image": [
                "https://kobid-shalini-wedding.netlify.app/og-image.png",
                "https://kobid-shalini-wedding.netlify.app/images/kobid-shalini_2.png"
              ],
              "organizer": {
                "@type": "Person",
                "name": "Kobid & Shalini"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01"
              },
              "performer": {
                "@type": "Person",
                "name": "Kobid & Shalini"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kobid & Shalini Wedding",
              "url": "https://kobid-shalini-wedding.netlify.app",
              "description": "Wedding reception invitation for Kobid and Shalini",
              "publisher": {
                "@type": "Organization",
                "name": "Kobid & Shalini Wedding",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kobid-shalini-wedding.netlify.app/images/kobid-shalini_2.png"
                }
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://kobid-shalini-wedding.netlify.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Wedding Reception Invitation",
                  "item": "https://kobid-shalini-wedding.netlify.app/"
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5872R2CJ44" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5872R2CJ44');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
