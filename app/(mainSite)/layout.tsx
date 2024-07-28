import type { Metadata } from "next";
import "../globals.css";
import { Inter as FontSans, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aigbe-law-blog.vercel.app"),
  title: {
    default: "Destiny Aigbe",
    template: "%s | Destiny Aigbe",
  },
  description: "Securities Law Blog.",
  openGraph: {
    title: "Aigbe Law Blog",
    description: "Securities Law Blog.",
    url: "https://aigbe-law-blog.vercel.app",
    siteName: "Aigbe Law Blog",
    locale: "en_US",
    type: "website",
  },
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
  twitter: {
    title: "Aigbe Law Blog",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-poppins antialiased",
          fontSans.variable,
          fontPoppins.variable
        )}
      >
        <main className="parent-container">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
