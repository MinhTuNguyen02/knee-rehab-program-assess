import type { Metadata } from "next";
// import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const outfit = Outfit({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "KRPS - Knee Rehab Program Assessment",
  description: "Quickly assess your knee health at home with simple, intuitive sliders and get clinical program recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
    //   <body className={`${outfit.className} min-h-full flex flex-col bg-background text-foreground`}>
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
