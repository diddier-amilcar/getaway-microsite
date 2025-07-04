import type React from "react"
import { Heebo } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"


const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
})

export const metadata: Metadata = {
  title: "Hotel Membership - Luxury Stays Redefined",
  description:
    "Discover a new way to enjoy luxury stays with our exclusive hotel membership program. Choose from Smart or Elite memberships.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={heebo.className}>
      <body className="bg-[#e9ecef]">
        {children}
        
        <Footer />
      </body>
    </html>
  )
}
