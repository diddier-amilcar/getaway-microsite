import { UserPlus, CreditCard, Sparkles } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Choose Your Plan",
    description: "Select the membership tier that best fits your travel needs and budget preferences",
  },
  {
    icon: UserPlus,
    title: "Register",
    description: "Complete your registration in minutes with our simple and secure online process",
  },
  {
    icon: Sparkles,
    title: "Enjoy Your Benefits",
    description: "Start using your membership immediately at over 500 partner hotels worldwide",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with your hotel membership is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] hover:shadow-md transition-shadow duration-300">
                <div className="w-20 h-20 bg-[#0090af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-[#0090af]" />
                </div>
                <div className="w-10 h-10 bg-[#0090af] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-[#0090af]/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
