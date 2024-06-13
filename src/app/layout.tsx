import type { Metadata } from "next";
import "./globals.css";

import { Courier_Prime } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"

const courier = Courier_Prime({
  weight:"400",
  subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Kroma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={courier.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
