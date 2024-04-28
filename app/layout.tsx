import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SiteFooter } from "@/components/footer";
import { cn } from "@/lib/utils";
import { LucideLightbulb } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun fact of the day",
  description: "Get a daily fun fact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
        inter.className
      )}>
        <Providers>
          <div className="inset-0 min-h-screen h-full w-full flex flex-col items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="flex flex-col flex-grow items-center justify-center p-2">
              <LucideLightbulb className="w-16 h-16 bg-black rounded-lg p-2" />
              {children}
            </div>

            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
