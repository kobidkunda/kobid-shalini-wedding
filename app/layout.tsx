import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kobid & Shalini | Wedding Reception Invitation",
  description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 4, 2025 at Hotel Nandan, Barasat, West Bengal. A memorable evening of love, joy, and togetherness awaits.",
  keywords: ["wedding invitation", "Kobid Shalini wedding", "wedding reception", "Barasat wedding", "May 4 2025 wedding", "Hotel Nandan", "Bengali wedding", "wedding celebration"],
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
    url: "https://kobid-shalini-wedding.vercel.app",
    siteName: "Kobid & Shalini Wedding",
    title: "Kobid & Shalini | Wedding Reception Invitation",
    description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 4, 2025 at Hotel Nandan, Barasat, West Bengal.",
    images: [
      {
        url: "/images/kobid-shalini_2.png",
        width: 1200,
        height: 630,
        alt: "Kobid and Shalini Wedding Reception Invitation",
        type: "image/png",
      },
      {
        url: "/images/hero-couple-photo.webp",
        width: 800,
        height: 600,
        alt: "Kobid and Shalini - The Happy Couple",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kobidshalini",
    creator: "@kobidshalini",
    title: "Kobid & Shalini | Wedding Reception Invitation",
    description: "Join us in celebrating the wedding reception of Kobid and Shalini on May 4, 2025 at Hotel Nandan, Barasat, West Bengal.",
    images: ["/images/kobid-shalini_2.png"],
  },
  alternates: {
    canonical: "https://kobid-shalini-wedding.vercel.app",
    languages: {
      "en-US": "https://kobid-shalini-wedding.vercel.app",
      "bn-IN": "https://kobid-shalini-wedding.vercel.app",
      "hi-IN": "https://kobid-shalini-wedding.vercel.app",
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
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "msapplication-TileColor": "#E11D48",
    "msapplication-TileImage": "/images/kobid-shalini_2.png",
    "theme-color": "#E11D48",
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
    { media: "(prefers-color-scheme: light)", color: "#E11D48" },
    { media: "(prefers-color-scheme: dark)", color: "#881337" },
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
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Barasat, West Bengal" />
        <meta name="geo.position" content="22.72;88.48" />
        <meta name="ICBM" content="22.72, 88.48" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingEvent",
              "name": "Kobid & Shalini Wedding Reception",
              "description": "Wedding reception celebration for Kobid and Shalini",
              "startDate": "2025-05-04T18:00:00+05:30",
              "endDate": "2025-05-04T23:00:00+05:30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Hotel Nandan",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Barasat, West Bengal",
                  "addressLocality": "Barasat",
                  "addressRegion": "West Bengal",
                  "addressCountry": "IN",
                  "postalCode": "700124"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "22.72",
                  "longitude": "88.48"
                }
              },
              "image": [
                "https://kobid-shalini-wedding.vercel.app/images/kobid-shalini_2.png",
                "https://kobid-shalini-wedding.vercel.app/images/hero-couple-photo.webp"
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
              "url": "https://kobid-shalini-wedding.vercel.app",
              "description": "Wedding reception invitation for Kobid and Shalini",
              "publisher": {
                "@type": "Organization",
                "name": "Kobid & Shalini Wedding",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kobid-shalini-wedding.vercel.app/images/kobid-shalini_2.png"
                }
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
