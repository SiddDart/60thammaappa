import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashti Abda Poorthi — Neelavathy & Sathyendran",
  description:
    "Celebrating 60 years of togetherness. Join us for the Shashti Abda Poorthi ceremony of Mrs. Neelavathy & Mr. Sathyendran.",
  openGraph: {
    title: "Shashti Abda Poorthi — 60 Years of Togetherness",
    description:
      "With the blessings of elders and the grace of Goddess Meenakshi, we invite you to celebrate this sacred milestone.",
    images: ["/images/07-meenakshi-thirukalyanam.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#241A14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-ink text-sandalwood-light antialiased">
        {children}
      </body>
    </html>
  );
}
