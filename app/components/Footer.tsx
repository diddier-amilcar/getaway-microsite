import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export default function HotelMembershipFooter() {
  return (
    <footer className="w-full bg-white mt-4 border-t border-[#dee2e6]" style={{ fontFamily: "Heebo, sans-serif" }}>
      {/* Main Footer Content Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              {/* Logo */}
              <Link href="/" className="block">
                <div className="text-gray-900 leading-7" style={{ fontFamily: "Heebo, sans-serif" }}>
                  <div className="text-lg font-semibold leading-tight mb-0 leading-7">Membership Getaway</div>
                  <div className="flex items-center gap-2 text-sm leading-tight text-gray-600">
                    <span>By</span>
                    <img src="/inspira-logo.svg" alt="INSPIRA Logo" width={20} height={20} className="inline-block" />
                    <span>INSPIRA Elite Vacations</span>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-600 text-sm leading-relaxed max-w-xs">
              Exclusive hotel memberships to elevate your vacation experience.
            </p>
          </div>

          {/* Column 2 - Memberships */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-base">Memberships</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/smart"
                className="text-600 text-sm hover:underline hover:opacity-80 transition-all duration-200"
              >
                Smart
              </Link>
              <Link
                href="/elite"
                className="text-600 text-sm hover:underline hover:opacity-80 transition-all duration-200"
              >
                Elite
              </Link>
            </nav>
          </div>

          {/* Column 3 - Navigation */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-base">Explore</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-600 text-sm hover:underline hover:opacity-80 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/faq"
                className="text-600 text-sm hover:underline hover:opacity-80 transition-all duration-200"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-600 text-sm hover:underline hover:opacity-80 transition-all duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-base">Contact</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="text-600 text-sm">
                <div className="font-medium mb-1">Phone</div>
                <Link href="tel:+528001234567" className="hover:underline hover:opacity-80 transition-all duration-200">
                  +52 800 123 4567
                </Link>
              </div>

              {/* Email */}
              <div className="text-600 text-sm">
                <div className="font-medium mb-1">Email</div>
                <Link
                  href="mailto:info@getawayinspira.com"
                  className="hover:underline hover:opacity-80 transition-all duration-200 break-all"
                >
                  info@getawayinspira.com
                </Link>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <div className="text-gray-900 text-sm font-medium mb-3">Follow Us</div>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-600 hover:opacity-70 transition-opacity duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={22} />
                  </Link>
                  <Link
                    href="#"
                    className="text-600 hover:opacity-70 transition-opacity duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={22} />
                  </Link>
                  <Link
                    href="#"
                    className="text-600 hover:opacity-70 transition-opacity duration-200"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle size={22} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#dee2e6]">
        <div className="max-w-screen-xl mx-auto px-6 py-6">
          <p className="text-center text-600 text-sm">
            © 2024 Getaway by INSPIRA Elite Vacations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
