import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arunika-Company",
  description: "Arunika Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-[#EEEEEE]`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
