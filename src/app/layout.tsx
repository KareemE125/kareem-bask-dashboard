import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { cn, generateRandomThemeColor } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import "@/styles/themes.css";
import ReactQueryProvider from "@/lib/ReactQueryProvider";


const fontNunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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

  const randomThemeColor = generateRandomThemeColor();

  return (
    <html lang="en" className={`dark ${randomThemeColor}`}>
      <body
        className={cn(
          "min-h-screen h-full flex flex-col bg-background antialiased",
          fontNunito.className
        )}
      >
        <ReactQueryProvider>
          <main>
            {children}
          </main>
        </ReactQueryProvider>
        <footer className="fixed bottom-0 inset-x-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
