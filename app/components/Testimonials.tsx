"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useRef } from "react"

interface Testimonial {
  id: number
  text: string
  rating: number
  name: string
  location: string
  level: string
  stay: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  variant?: "carousel" | "highlight"
  title?: string
  subtitle?: string
  className?: string
}

function getBadgeStyle(level: string) {
  switch (level) {
    case "Getaway Smart":
      return "bg-[#e0f7fa] text-[#007a94]"
    case "Getaway Elite":
      return "bg-[#fce4ec] text-[#c2185b]"
    default:
      return "bg-gray-200 text-gray-800"
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center md:justify-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-[#0090af] text-[#0090af]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-none w-full md:w-80 lg:w-96 bg-white rounded-2xl shadow-md border border-[#dee2e6] p-6 snap-start">
      <blockquote className="text-900 text-base leading-relaxed mb-4 min-h-[3rem]">"{testimonial.text}"</blockquote>
      <div className="flex items-center justify-between">
        <div>
          <StarRating rating={testimonial.rating} />
          <p className="text-600 font-medium mt-2">— {testimonial.name}</p>
          <div className={`inline-block mt-2 mb-2 px-3 py-1 rounded-full text-sm font-medium ${getBadgeStyle(testimonial.level)}`}>
            {testimonial.level}
          </div>
          <p className="text-400 text-sm opacity-80">{testimonial.location}</p>
          <p className="text-400 text-sm opacity-80">{testimonial.stay}</p>
        </div>
      </div>
    </div>
  )
}

function HighlightTestimonial({ testimonial }: { testimonial: Testimonial }) {
  const badgeStyle = getBadgeStyle(testimonial.level)

  return (
    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg border border-[#dee2e6] p-8">
      <blockquote className="text-2xl md:text-3xl text-gray-900 font-light italic leading-relaxed mb-6">
        “{testimonial.text}”
      </blockquote>
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-gray-700 font-semibold">— {testimonial.name}</p>
      <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${badgeStyle}`}>
        {testimonial.level}
      </div>
      <p className="text-gray-500 mt-1">{testimonial.location} · {testimonial.stay}</p>
    </div>
  )
}

export default function Testimonials({
  testimonials,
  variant = "carousel",
  title = "What people say",
  subtitle = "Real Stories, Real Results, Hear What Our Customers Says About Us",
  className = "",
}: TestimonialsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 24
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 24
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" })
    }
  }

  return (
    <section className={`w-full bg-gray-50 py-16 font-['Heebo',sans-serif] ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        {variant === "carousel" && (
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-[#dee2e6] items-center justify-center text-[#0090af] hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-[#dee2e6] items-center justify-center text-[#0090af] hover:bg-gray-50 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {testimonials.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-[#0090af] opacity-30" />
              ))}
            </div>
          </div>
        )}

        {variant === "highlight" && testimonials[0] && (
          <HighlightTestimonial testimonial={testimonials[0]} />
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
