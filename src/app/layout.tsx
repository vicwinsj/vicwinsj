import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Quicksand, Caladea } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const caladea = Caladea({
  variable: "--font-caladea",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Winsjansen | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-radial-[circle_at_50%_90%]! from-ginger/50 via-ginger/30 sm:via-ginger/10 to-background/70 flex flex-col gap-30 items-center min-h-dvh text-foreground font-sans ${quicksand.variable} ${caladea.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
