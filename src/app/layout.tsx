import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { TopNavigation } from "@/components/top-navigation";
import { BackToTop } from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhil Yadav | Controls Design Engineer",
  description: "Portfolio of Akhil Yadav - Controls Design Engineer specializing in DCS/SCADA, EPMS, BMS, and Data Center Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50`}>
        <Header />
        {children}
        <TopNavigation />
        <BackToTop />
      </body>
    </html>
  );
}