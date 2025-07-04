"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

interface HeaderProps {
  variant?: "default" | "inverted"
}

export default function Header({ variant = "default" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (variant === "inverted") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 64)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [variant])

  const isInvertedMode = variant === "inverted" && !isScrolled

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isInvertedMode ? "bg-transparent" : "bg-white border-b border-[#dee2e6] shadow-sm"
      }`}
      style={{ fontFamily: "Heebo, sans-serif" }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <div
                className={`text-lg lg:text-xl font-normal transition-colors duration-300 ${
                  isInvertedMode ? "text-white" : "text-900"
                }`}
              >
                Getaway Membership
              </div>
              <div
                className={`text-sm flex items-center transition-colors duration-300 ${
                  isInvertedMode ? "text-white" : "text-gray-500"
                }`}
              >
                By
                <img
                  src="https://atelierdehoteles.bitbucket.io/img/INSP-Color-Symbol.svg"
                  alt="INSPIRA Logo"
                  className="h-6 inline-block ml-1 mr-1"
                />
                <span className="font-normal mr-1">INSPIRA</span>Elite Vacations
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isInvertedMode ? "text-white" : "text-gray-500"
              }`}
            >
              Home
            </a>

            {/* Memberships Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center font-normal transition-colors duration-300 hover:opacity-80 ${
                  isInvertedMode ? "text-white" : "text-gray-500"
                }`}
              >
                Memberships
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="/smart" className="block px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors">
                    Getaway Smart
                  </a>
                  <a href="/elite" className="block px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors">
                    Getaway Elite
                  </a>
                </div>
              )}
            </div>

            <a
              href="/faq"
              className={`font-normal transition-colors duration-300 hover:opacity-80 ${
                isInvertedMode ? "text-white" : "text-gray-500"
              }`}
            >
              FAQ
            </a>
            <a
              href="/contact"
              className={`font-normal transition-colors duration-300 hover:opacity-80 ${
                isInvertedMode ? "text-white" : "text-gray-500"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isInvertedMode ? "text-white" : "text-gray-500"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-500 font-medium hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </a>

              {/* Mobile Memberships */}
              <div className="px-3 py-2">
                <div className="text-gray-500 font-medium mb-2">Memberships</div>
                <div className="pl-4 space-y-1">
                  <a href="/smart" className="block py-1 text-gray-500 hover:text-400 transition-colors">
                    Getaway Smart
                  </a>
                  <a href="/elite" className="block py-1 text-gray-500 hover:text-400 transition-colors">
                    Getaway Elite
                  </a>
                </div>
              </div>

              <a
                href="/faq"
                className="block px-3 py-2 text-400 font-medium hover:bg-gray-50 rounded-md transition-colors"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-400 font-medium hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
