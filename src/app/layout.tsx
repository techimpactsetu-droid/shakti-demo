import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shakti Foundation | Empowering Communities Through Sustainable Development",
  description: "Supporting women empowerment, youth development, livelihood programs and social equality initiatives across communities.",
  openGraph: {
    title: "Shakti Foundation",
    description: "Empowering Communities. Transforming Lives.",
    url: "https://shaktifoundation.example.com",
    siteName: "Shakti Foundation",
    images: [
      {
        url: "https://picsum.photos/seed/3inacp/1200/800",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Shakti Foundation",
  url: "https://shaktifoundation.example.com",
  logo: "https://shaktifoundation.example.com/logo.png",
  description: "Empowering Communities Through Sustainable Development",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shakti Bhawan, 29B Neha Enclave, Station Road",
    addressLocality: "Shikohabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "205135",
    addressCountry: "IN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9412535459",
    contactType: "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 cursor-none sm:cursor-auto">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
