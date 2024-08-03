import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { cn } from "@/utils/utils";

import Footer from "@/components/layout/footer";
import "@/styles/globals.css";


const fontNunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Bask Dashboard",
  description:
    "Bask Dashboard is where you can get full insights and keep focused with all your data gathered in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body 
        className={cn(
          "min-h-screen h-full flex flex-col bg-background antialiased",
          fontNunito.className
        )}
      >
        <main>
          {children}
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
