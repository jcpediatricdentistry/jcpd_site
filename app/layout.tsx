import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Johnson City Pediatric Dentistry",
  description: "Specialized pediatric dental care in a friendly, comfortable environment designed just for kids.",
  generator: "v0.dev",
  metadataBase: new URL("https://jcpd-site.vercel.app"),
  openGraph: {
    siteName: "Johnson City Pediatric Dentistry",
    description:
      "Specialized pediatric dental care in a kid-friendly, modern space.",
    url: "https://jcpd-site.vercel.app",
    siteName: "Johnson City Pediatric Dentistry",
    images: [
      {
        url: "/logo/JCPD_true_transparent.png", 
        width: 1200,
        height: 630,
        alt: "Johnson City Pediatric Dentistry Logo",
      },
    ],
  locale: "en_US",
  type: "website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'