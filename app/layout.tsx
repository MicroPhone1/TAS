import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'TAS Dashboard | Truck Access System',
  description: 'Login to access the TAS Dashboard for operators and managers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <head>
    {/* metadata ใส่ตรงนี้ได้ */}
  </head>
  <body className={`${geistSans.variable} ...`}>
    <Script
      src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js"
      strategy="afterInteractive"
    />
    {children}
  </body>
</html>

  );
}
