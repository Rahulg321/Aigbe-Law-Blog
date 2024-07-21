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
  title: "Aigbe Law Blogs",
  description: "Generated by create next app",
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
