"use client"
import { Button } from "@/components/ui/button"
import { Star, Crown, Utensils, Clock, Gift, Users, Sparkles, Car } from "lucide-react"
import { useEffect } from "react"

import HeroSection from "../components/HeroSection"
import Navigation from "../components/Navigation"
import PlansSection from "../components/Plans"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"

const benefits = [
  {
    icon: Star,
    title: "40% Discount on Stays",
    description: "Maximum savings on room rates at all partner hotels and resorts worldwide",
  },
  {
    icon: Gift,
    title: "5 Free Nights Annually",
    description: "Five complimentary nights each year at any partner location of your choice",
  },
  {
    icon: Crown,
    title: "Guaranteed Suite Upgrades",
    description: "Automatic upgrades to luxury suites and premium accommodations",
  },
  {
    icon: Utensils,
    title: "25% Dining & Spa Discount",
    description: "Exclusive pricing on fine dining, bars, spa treatments, and wellness services",
  },
  {
    icon: Users,
    title: "VIP Concierge Service",
    description: "Personal concierge available 24/7 for reservations and special requests",
  },
  {
    icon: Sparkles,
    title: "Exclusive Member Events",
    description: "Access to private events, wine tastings, and cultural experiences",
  },
  {
    icon: Clock,
    title: "Late Checkout Privilege",
    description: "Extended checkout until 4 PM at no additional charge",
  },
  {
    icon: Car,
    title: "Airport Transfer Service",
    description: "Complimentary luxury transportation to and from select airports",
  },
]

const steps = [
  {
    title: "Choose Elite Membership",
    description: "Select the Elite plan and complete your premium membership registration",
  },
  {
    title: "VIP Onboarding",
    description: "Receive personal welcome call and exclusive member materials",
  },
  {
    title: "Enjoy Elite Benefits",
    description: "Experience luxury travel with all premium benefits and VIP treatment",
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
      name: "Getaway Elite",
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

export default function EliteMembership() {
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
          h1: "Getaway Elite",
          paragraph: "The pinnacle of luxury hospitality. Enjoy unparalleled service, exclusive access, and premium amenities that transform every stay into an extraordinary experience.",
        }}
        backgroundImage={{
          enabled: true,
          desktop: "https://ateliercdn.azureedge.net/site-atelier/atelierpm/production/images/home/webp/R2400/ATELIER-Playa-Mujeres-Carrousel-9-1.webp",
          mobile: "https://ateliercdn.azureedge.net/site-atelier/atelierpm/production/images/home/webp/R2400/ATELIER-Playa-Mujeres-Carrousel-9-1.webp"
        }}
        overlay={{
          enabled: true,
          color: "#000000",
          opacity: 0.5
        }}
        badge={{
          enabled: true,
          text: "Ultimate Luxury Experience",
          variant: "outline",
          className: "text-white border-white",
        }}
        counters={{
          enabled: true,
          stats: [
            { value: "USD $1,699", label: "For 20 nights at ATELIER Playa Mujeres" },
          ],
        }}
        cta={{
          primary: {
            text: "View All Benefits",
            scrollTo: "benefits",
            variant: "default",
            size: "xl",
            className: "bg-[#0090af] hover:bg-[#007a94] text-white rounded-full"
          },
        }}
      >
        {/* Price & Purchase CTA inside the Hero as plain markup */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">USD $1499</h2>
          <div className="flex flex-col items-start text-sm text-white">
            <span>Per year</span>
            <span>Pays for itself in 3-4 stays</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-[#ffffff] hover:bg-[#007a94] text-[#007a94] hover:text-[#ffffff] px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ borderRadius: "1.95rem" }}
            >
              Purchase Elite Membership
            </Button>
          </a>
        </div>
      </HeroSection>


      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Elite Membership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate in luxury travel with our most comprehensive membership tier
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
              Your journey to elite luxury travel begins with these simple steps
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Experience Elite Luxury Today</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join Elite Membership for $399 per year and unlock the ultimate luxury travel experience with exclusive
              benefits and VIP treatment.
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
                Join Elite Membership
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
