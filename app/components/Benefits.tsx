import { Star, Bed, Utensils, Sparkles, Crown, Gift } from "lucide-react"

const benefits = [
  {
    icon: Star,
    title: "Discounted Stays",
    description: "Save 20-40% on room rates at partner hotels worldwide",
  },
  {
    icon: Gift,
    title: "Free Nights",
    description: "Earn complimentary nights based on your membership tier",
  },
  {
    icon: Bed,
    title: "Room Upgrades",
    description: "Automatic upgrades to premium rooms when available",
  },
  {
    icon: Utensils,
    title: "Spa & Restaurant Discounts",
    description: "Exclusive discounts on dining, bars, and spa services",
  },
  {
    icon: Crown,
    title: "VIP Treatment",
    description: "Priority check-in, late checkout, and personalized service",
  },
  {
    icon: Sparkles,
    title: "Exclusive Experiences",
    description: "Access to members-only events and unique local experiences",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Membership Benefits</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the exclusive perks and privileges that come with your membership
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
