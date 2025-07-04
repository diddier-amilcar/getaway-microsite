"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main>
      <Navigation variant="inverted" />
      <HeroSection
        content={{
          h1: "Contact",
          paragraph:
            "Contact",
        }}
        backgroundImage={{
          enabled: true,
          desktop: "https://ateliercdn.azureedge.net/site-atelier/atelierpm/production/images/home/webp/R2400/ATELIER-Playa-Mujeres-Carrousel-4.webp",
          mobile: "https://ateliercdn.azureedge.net/site-atelier/atelierpm/production/images/home/webp/R2400/ATELIER-Playa-Mujeres-Carrousel-4.webp"
        }}
        overlay={{
          enabled: true,
          color: "#000000",
          opacity: 0.5
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6]">
            <h2 className="text-2xl font-medium mb-6 text-gray-900">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dee2e6] rounded-lg focus:ring-2 focus:ring-[#0090af] focus:border-[#0090af] outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dee2e6] rounded-lg focus:ring-2 focus:ring-[#0090af] focus:border-[#0090af] outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#dee2e6] rounded-lg focus:ring-2 focus:ring-[#0090af] focus:border-[#0090af] outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0090af] hover:bg-[#007a94] text-white py-3 font-medium transition-all duration-300 hover:scale-105"
                style={{ borderRadius: "1.95rem" }}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6]">
              <h2 className="text-2xl font-medium mb-6 text-gray-900">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#0090af] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">Member Services: +1 (555) 123-4567</p>
                    <p className="text-gray-600">Elite Concierge: +1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#0090af] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">General: info@luxurystay.com</p>
                    <p className="text-gray-600">Support: support@luxurystay.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#0090af]/10 rounded-full flex items-center justify-center hover:bg-[#0090af] hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#0090af]/10 rounded-full flex items-center justify-center hover:bg-[#0090af] hover:text-white transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#0090af]/10 rounded-full flex items-center justify-center hover:bg-[#0090af] hover:text-white transition-colors duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6]">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#dee2e6]">
                  <p className="text-sm">
                    <strong>Elite Concierge:</strong> Available 24/7 for Elite members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
