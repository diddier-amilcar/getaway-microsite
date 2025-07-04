import { Star, Bed, Utensils, Crown, Gift } from "lucide-react"

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
]

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Core Benefits</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock a world of exclusive privileges designed to enhance every aspect of your travel experience
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
