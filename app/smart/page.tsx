"use client"

import { Button } from "@/components/ui/button"
import { Star, Bed, Utensils, Shield, Gift, Users } from "lucide-react"
import { useEffect } from "react"

import HeroSection from "../components/HeroSection"
import Navigation from "../components/Navigation"
import PlansSection from "../components/Plans"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"

const benefits = [
  {
    icon: Star,
    title: "20% Discount on Stays",
    description: "Enjoy consistent savings on room rates at all partner hotels worldwide",
  },
  {
    icon: Gift,
    title: "2 Free Nights Annually",
    description: "Receive two complimentary nights each year to use at any partner location",
  },
  {
    icon: Bed,
    title: "Room Upgrades",
    description: "Automatic upgrades to premium rooms based on availability at check-in",
  },
  {
    icon: Utensils,
    title: "10% Dining Discount",
    description: "Special pricing on restaurants, bars, and in-room dining services",
  },
  {
    icon: Shield,
    title: "Priority Support",
    description: "Dedicated customer service line with faster response times",
  },
  {
    icon: Users,
    title: "Member Portal Access",
    description: "Exclusive online platform to manage bookings and track benefits",
  },
]

const steps = [
  {
    title: "Choose Smart Membership",
    description: "Select the Smart plan and complete your secure online registration",
  },
  {
    title: "Receive Your Membership",
    description: "Get instant access to your member portal and digital membership card",
  },
  {
    title: "Start Saving",
    description: "Book your first stay and immediately enjoy member benefits and discounts",
  },
]

const myTestimonials = [
  {
    id: 1,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 2,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 3,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 5,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 6,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  // ...
]

const plans = [
    {
      name: "Getaway Smart",
      price: "$199",
      period: "per year",
      description: "Perfect for occasional travelers who want great value",
      features: [
        "20% discount on room rates",
        "2 free nights per year",
        "Room upgrade when available",
        "10% dining discount",
        "Priority customer support",
        "Access to member portal",
      ],
      background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
      primaryLink: "https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html",
    },
  ]

export default function SmartMembership() {
  useEffect(() => {
    // Esto asegura que cualquier contenedor haga scroll al top
    document.querySelector("main")?.scrollTo?.(0, 0)
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Navigation variant="inverted" />
      <HeroSection
        content={{
          h1: "Getaway Smart",
          paragraph:
            "Perfect for frequent travelers who want premium benefits and significant savings on every stay. Experience luxury without the premium price tag.",
        }}
        backgroundImage={{
          enabled: true,
          desktop:
            "https://atelierdehoteles.com.mx/dest/atelierpm/production/images/home/ATELIER-Playa-Mujeres-Carrousel-1.webp",
          mobile:
            "https://atelierdehoteles.com.mx/dest/atelierpm/production/images/home/ATELIER-Playa-Mujeres-Carrousel-1.webp",
        }}
        overlay={{
          enabled: true,
          color: "#000000",
          opacity: 0.5,
        }}
        badge={{
          enabled: true,
          text: "Smart Choice",
          variant: "outline",
          className: "text-white border-white",
        }}
        counters={{
          enabled: true,
          stats: [{ value: "USD $999", label: "For 10 nights at ATELIER Playa Mujeres" }],
        }}
        cta={{
          primary: {
            text: "View All Benefits",
            scrollTo: "benefits",
            variant: "default",
            size: "xl",
            className: "bg-[#0090af] hover:bg-[#007a94] text-white rounded-full",
          },
        }}
      />

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Smart Membership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the exclusive perks and privileges included with your Smart Membership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#0090af]/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-[#0090af]" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started with Smart Membership is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#0090af] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlansSection
        plans={plans}
        columns={1}
        title="Discover the Right Plan for You"
        subtitle="Each membership is designed to offer comfort, value, and luxury experiences."
      />

      <Testimonials
        variant="carousel"
        title="Lo que opinan nuestros miembros"
        subtitle="Conoce sus experiencias reales"
        testimonials={myTestimonials}
      />

      <ContactSection
        title="Support Center"
        description="Need help? Our support team is ready to assist you."
        phoneContact={{
          title: "Emergency Support",
          phoneNumber: "+1 (555) 999-0000",
          description: "24/7 emergency support line for urgent issues.",
          buttonText: "Call Now",
        }}
        emailContact={{
          title: "General Inquiries",
          email: "support@company.com",
          description: "For general questions and non-urgent matters.",
          buttonText: "Send Email",
        }}
        background={{
          gradient: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(168, 85, 247) 100%)",
        }}
        className="text-white"
      />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#dee2e6]">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Start Your Smart Journey Today</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join Smart Membership for just $199 per year and start enjoying luxury travel benefits immediately.
            </p>

            <a
              href="https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-[#0090af] hover:bg-[#007a94] text-white px-12 py-6 text-xl font-medium transition-all duration-300 hover:scale-105"
                style={{ borderRadius: "1.95rem" }}
              >
                Join Smart Membership
              </Button>
            </a>

            <div className="mt-8 text-sm text-gray-600">
              <p>30-day money-back guarantee • No hidden fees • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
