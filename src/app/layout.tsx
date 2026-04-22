import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalmedics.es"),
  title: {
    default:
      "Clínica Dental Madrid y Murcia — 40 años de confianza | Dental Medics Dr. Ferrer",
    template: "%s | Dental Medics Dr. Ferrer",
  },
  description:
    "Clínica dental familiar con 40 años de historia en Madrid (Chamberí) y Murcia. Implantes desde €380, ortodoncia Invisalign, estética dental. Primera consulta gratuita.",
  keywords: [
    "clínica dental Madrid",
    "dentista Chamberí",
    "implantes dentales Madrid",
    "Invisalign Madrid",
    "estética dental Madrid",
    "dentista Murcia",
    "Dr. Ferrer",
  ],
  openGraph: {
    title: "Dental Medics Dr. Ferrer — 40 años devolviendo sonrisas",
    description:
      "La clínica dental familiar de Madrid y Murcia. Primera consulta gratuita.",
    url: "https://www.dentalmedics.es",
    siteName: "Dental Medics",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Medics Dr. Ferrer — 40 años devolviendo sonrisas",
    description:
      "Clínica dental familiar en Madrid (Chamberí) y Murcia. Implantes desde €380, Invisalign, estética dental. Primera consulta gratuita.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.dentalmedics.es",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Clínica Dental Medics Dr. Ferrer",
    image: "https://www.dentalmedics.es/assets/logo.png",
    url: "https://www.dentalmedics.es",
    telephone: "+34914418042",
    priceRange: "€€",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Calle de Ramiro II, 10",
        addressLocality: "Madrid",
        postalCode: "28003",
        addressCountry: "ES",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "C. Donantes de Sangre, 3",
        addressLocality: "Murcia",
        postalCode: "30007",
        addressCountry: "ES",
      },
    ],
    openingHours: "Mo-Fr 10:00-20:00",
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a202c]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
