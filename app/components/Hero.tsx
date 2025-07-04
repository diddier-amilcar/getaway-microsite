"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
          Unlock Exclusive Hotel Experiences
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Join our premium membership program and enjoy luxury accommodations, exclusive perks, and unforgettable
          experiences at the world's finest hotels.
        </p>
        <Button
          onClick={scrollToPlans}
          className="bg-[#0090af] hover:bg-[#007a94] text-white px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
          style={{ borderRadius: "1.95rem" }}
        >
          See Plans
        </Button>
      </div>
    </section>
  )
}
