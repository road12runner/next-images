import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {ClerkProvider} from "@clerk/nextjs";

//const inter = Inter({ subsets: ["latin"] });
const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700'] ,
  variable: '--font-ibm'});

export const metadata: Metadata = {
  title: "AI Foms",
  description: "AI image improves ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
      <body className={cn('font-IBMPlex-ibm anitialiased', IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
