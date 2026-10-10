import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { ToastProviderWrapper } from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Bazar Dor",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস সহ নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <ToastProviderWrapper>
          <Header />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ToastProviderWrapper>
      </body>
    </html>
  );
}