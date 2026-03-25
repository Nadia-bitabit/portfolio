import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadia Lopez | Desarrolladora de Software",
  description: "Desarrolladora de software especializada en IA en Bitabit Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-zinc-50`}>
        {children}
      </body>
    </html>
  );
}