import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  background?: string
  primaryLink?: string
  detailsLink?: string
}

type PlansProps = {
  plans: Plan[]
  columns?: 1 | 2
  title?: string
  subtitle?: string
}

export default function PlansSection({
  plans,
  columns = 2,
  title = "Choose Your Membership Plan",
  subtitle = "Select the perfect membership tier that matches your travel style and preferences",
}: PlansProps) {
  return (
    <section id="plans" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className={`grid ${columns === 2 ? "md:grid-cols-2" : "grid-cols-1"} gap-8 max-w-4xl mx-auto`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-sm border relative transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-[#0090af] ring-2 ring-[#0090af]/20 scale-105" : "border-[#dee2e6]"
              }`}
              style={{ background: plan.background || "#ffffff" }}
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
                <p className="text-gray-700 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#0090af] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                {plan.primaryLink && (
                  <Button
                    asChild
                    className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#0090af] hover:bg-[#007a94] text-white hover:scale-105"
                        : "bg-white hover:bg-gray-50 text-[#0090af] border-2 border-[#0090af] hover:scale-105"
                    }`}
                    style={{ borderRadius: "1.95rem" }}
                  >
                    <Link href={plan.primaryLink}>
                      Choose {plan.name}
                    </Link>
                  </Button>
                )}

                {plan.detailsLink && (
                  <Button
                    asChild
                    variant="link"
                    className="w-full text-sm text-[#0090af] hover:underline text-center"
                  >
                    <Link href={plan.detailsLink}>
                      View more details
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
