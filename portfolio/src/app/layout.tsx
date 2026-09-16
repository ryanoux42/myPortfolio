import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ryan-hercule.vercel.app";
const SITE_NAME = "Ryan HERCULE - Portfolio";
const SITE_DESCRIPTION =
  "Ryan HERCULE is a software developer based in Paris, France. Explore his experience, skills, and projects.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Ryan HERCULE",
  },
  description: SITE_DESCRIPTION,
  keywords: ["Ryan Hercule", "Ryan HERCULE", "software developer", "portfolio", "Paris"],
  authors: [{ name: "Ryan HERCULE", url: SITE_URL }],
  creator: "Ryan HERCULE",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/professional_pic.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/professional_pic.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="magicpattern antialiased flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ryan HERCULE",
              url: SITE_URL,
              image: `${SITE_URL}/professional_pic.jpg`,
              jobTitle: "Software Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                addressCountry: "FR",
              },
              sameAs: [
                "https://github.com/ryanoux42",
                "https://www.linkedin.com/in/ryan-hercule/",
              ],
            }),
          }}
        />
        <main>
          <Navigation />
          <div className="p-4 sm:p-6">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
