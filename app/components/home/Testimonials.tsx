import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The Elite membership has transformed my business travel. The guaranteed upgrades and VIP service make every trip feel like a vacation.",
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Smart membership offers incredible value. I've saved more than the membership cost in just three stays, plus the perks are amazing.",
  },
  {
    name: "Emily Rodriguez",
    location: "Miami, FL",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The concierge service and exclusive events have introduced me to experiences I never would have discovered on my own.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of travelers choose our membership program for their luxury stays
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
