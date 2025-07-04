import { Star, Bed, Utensils, Crown, Gift, Plus } from "lucide-react"

const benefits = [
  {
    icon: Star,
    title: "Exclusive Discounts",
    description: "Save up to 40% on room rates at luxury hotels worldwide",
  },
  {
    icon: Gift,
    title: "Complimentary Nights",
    description: "Earn free nights based on your membership level and stays",
  },
  {
    icon: Bed,
    title: "Room Upgrades",
    description: "Enjoy automatic upgrades to premium suites when available",
  },
  {
    icon: Utensils,
    title: "Dining Benefits",
    description: "Special discounts on restaurants, bars, and room service",
  },
  {
    icon: Crown,
    title: "VIP Treatment",
    description: "Priority check-in, concierge services, and personalized attention",
  },
  {
    icon: Plus,
    title: "Another Benefit",
    description: "Text",
  },
]

export default function WhatIs() {
  return (
    <section id="whatIs" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900">What is the membership program?</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our hotel membership program is an exclusive gateway to luxury travel experiences. Members enjoy significant
          savings, priority services, and access to premium amenities at our network of partner hotels worldwide. With
          two carefully crafted membership tiers, we cater to both occasional travelers and frequent luxury seekers,
          ensuring every stay exceeds expectations.
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0090af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-[#0090af]" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
