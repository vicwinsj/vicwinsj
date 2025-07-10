import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Quicksand, Caladea } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/constants/url";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const caladea = Caladea({
  variable: "--font-caladea",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const title = "Victor Winsjansen | Portfolio";
const description = "Portfolio of frond end developer Victor Winsjansen.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: BASE_URL,
  },
  twitter: {
    title: title,
    description: description,
  },
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico" },
      {
        url: "/assets/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/assets/favicons/apple-touch-icon.png",
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
        className={`bg-radial-[ellipse_at_50%_50%]! from-ginger/40 via-ginger/30 to-ginger/20 flex flex-col gap-10 items-center min-h-dvh text-foreground font-sans ${quicksand.variable} ${caladea.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
