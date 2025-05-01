import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const abelfont = Abel({
  variable: "--font-abel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NHC Product App",
  description: "NHC Product App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abelfont.variable} antialiased font-main`}>
        <div className="flex flex-col min-h-full">
          <Header />
          <main className="flex-1 container mx-auto py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
