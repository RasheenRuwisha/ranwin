import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranwin Tours & Travels - Best Sri Lanka Travel Experiences",
  description:
    "Discover Sri Lanka with Ranwin Tours & Travels. Explore custom travel packages, breathtaking destinations, and unforgettable experiences. Book now!",
  keywords: [
    "Sri Lanka tours",
    "travel packages",
    "best travel agency",
    "holiday trips",
    "guided tours",
    "adventure travel",
    "Ranwin Tours & Travels",
  ],
  metadataBase: new URL("https://www.ranwintours.com"),
  openGraph: {
    type: "website",
    url: "https://www.ranwintours.com",
    title: "Ranwin Tours & Travels",
    description:
      "Plan your dream vacation in Sri Lanka with Ranwin Tours & Travels. Custom tour packages, expert guides, and stunning destinations await!",
    images: [
      {
        url: "/ol-graph.svg",
        width: 800,
        height: 400,
        alt: "Ranwin Tours & Travels Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ranwin_tours",
    title: "Ranwin Tours & Travels",
    description:
      "Explore the best of Sri Lanka with our customized tour packages. Experience adventure, culture, and relaxation like never before!",
    images: ["/ol-graph.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Tawk.to live chat script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                (function() {
                  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = 'https://embed.tawk.to/67bc80cf08ee3c190b3a2662/1iks5eahb';
                  s1.charset = 'UTF-8';
                  s1.setAttribute('crossorigin', '*');
                  s0.parentNode.insertBefore(s1, s0);
                })();
              `,
          }}
        ></script>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Ranwin Tours & Travels",
              url: "https://www.ranwintours.com/",
              logo: "https://www.ranwintours.com/logo.png",
              description:
                "Sri Lanka's premier travel agency offering tailor-made tour packages, adventure trips, and cultural experiences.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "65-8K 1 Kahawita mw Atthidiya",
                addressLocality: "Dehiwala",
                addressRegion: "Colombo, Sri Lanka",
                addressCountry: "LK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94767984452",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/people/Ranwin-Tours-Travels/61571960647288/",
                "https://www.instagram.com/ranwin.tours/",
                "https://www.twitter.com/ranwin_tours",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
