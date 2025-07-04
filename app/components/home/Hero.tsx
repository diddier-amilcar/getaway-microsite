"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans")
    if (plansSection) plansSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-luxury-suite.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
          Discover a new way to enjoy luxury stays
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Experience unparalleled comfort and exclusive benefits with our premium hotel membership program. From
          discounted rates to VIP treatment, elevate every journey.
        </p>
        <Button
          onClick={scrollToPlans}
          className="bg-[#0090af] hover:bg-[#007a94] text-white px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
          style={{ borderRadius: "1.95rem" }}
        >
          Explore Memberships
        </Button>
      </div>
    </section>
  )
}
