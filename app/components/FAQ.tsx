"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does my membership last?",
    answer:
      "Your membership is valid for one full year from the date of purchase. You'll receive a renewal reminder 30 days before expiration, and you can renew at any time to continue enjoying your benefits without interruption.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time through your member portal or by contacting our support team. If you cancel within the first 30 days, you'll receive a full refund. After 30 days, cancellations are effective at the end of your current membership period.",
  },
  {
    question: "How do I redeem my membership benefits?",
    answer:
      "Simply log into your member portal when booking online, or mention your membership number when making reservations by phone. Your discounts and benefits will be automatically applied to eligible bookings at partner hotels.",
  },
  {
    question: "Are there any blackout dates or restrictions?",
    answer:
      "Most benefits are available year-round with minimal restrictions. Some partner hotels may have limited availability during peak seasons or special events. Free night certificates can be used at 95% of our partner properties with advance booking.",
  },
  {
    question: "Can I share my membership benefits with family?",
    answer:
      "Premium members can add one additional family member to their account at no extra cost. Classic members can upgrade to include family sharing for an additional $99 per year, allowing spouses and children to enjoy the same benefits.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our hotel membership program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-[#dee2e6] overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0090af] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#0090af] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
