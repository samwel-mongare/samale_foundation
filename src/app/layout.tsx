import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Samale Foundation | Peace, Empowerment & Climate Resilience in Northern Kenya",
  description:
    "Samale Foundation delivers integrated solutions for peace, economic empowerment, and climate resilience in Northern Kenya. Empowering youth and women while restoring natural ecosystems.",
  keywords: [
    "Northern Kenya",
    "Peace and Security",
    "Economic Development",
    "Climate Change",
    "Youth Empowerment",
    "Women Empowerment",
    "NGO",
    "Community Development",
  ],
  authors: [{ name: "Samale Foundation" }],
  openGraph: {
    title: "Samale Foundation",
    description:
      "Delivering integrated solutions for peace, economic empowerment, and climate resilience in Northern Kenya.",
    type: "website",
    locale: "en_US",
    siteName: "Samale Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samale Foundation",
    description:
      "Delivering integrated solutions for peace, economic empowerment, and climate resilience in Northern Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
