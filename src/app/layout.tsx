import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Cette ligne doit être présente

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guzel K Beauty",
  description: "Votre salon de beauté et bien-être à Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}