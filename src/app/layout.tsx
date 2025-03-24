import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "E-commerce store with Syte search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="//cdn.syteapi.com/assets/textual-search/syte_textual_search_loader.js?account_id=10803&sig=67d96545d6f2654f7793f982&lang=en_AU&feed=bestandless_au&base_url=/" async />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
