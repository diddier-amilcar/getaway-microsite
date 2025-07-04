import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Smart Membership",
    price: "$199",
    period: "per year",
    description: "Perfect for occasional travelers seeking value and comfort",
    features: [
      "20% discount on stays",
      "2 free nights annually",
      "Room upgrades when available",
      "10% dining discount",
    ],
    href: "/smart",
  },
  {
    name: "Elite Membership",
    price: "$399",
    period: "per year",
    description: "Designed for frequent travelers who demand luxury",
    features: [
      "40% discount on stays",
      "5 free nights annually",
      "Guaranteed suite upgrades",
      "25% dining & spa discount",
      "VIP concierge service",
      "Exclusive member events",
    ],
    href: "/elite",
    popular: true,
  },
]

export default function PlansComparison() {
  return (
    <section id="plans" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Choose Your Membership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the membership tier that best matches your travel lifestyle and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm border relative transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-[#0090af] ring-2 ring-[#0090af]/20 scale-105" : "border-[#dee2e6]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="bg-[#0090af] text-white px-6 py-2 text-sm font-medium"
                    style={{ borderRadius: "1.95rem" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-medium text-[#0090af]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#0090af] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#0090af] hover:bg-[#007a94] text-white hover:scale-105"
                        : "bg-white hover:bg-gray-50 text-[#0090af] border-2 border-[#0090af] hover:scale-105"
                    }`}
                    style={{ borderRadius: "1.95rem" }}
                  >
                    Buy Now
                  </Button>
                </a>
                <Link href={plan.href}>
                  <Button
                    variant="outline"
                    className="w-full py-6 text-lg font-medium border-[#dee2e6] text-gray-700 hover:bg-gray-50"
                    style={{ borderRadius: "1.95rem" }}
                  >
                    View More Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
