import { Button } from "@/components/ui/button"
import { Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#dee2e6]">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied members who enjoy exclusive benefits, significant savings, and VIP treatment at
            luxury hotels worldwide.
          </p>

          <Link href="/smart">
            <Button
              className="bg-[#0090af] hover:bg-[#007a94] text-white px-12 py-6 text-xl font-medium mb-10 transition-all duration-300 hover:scale-105"
              style={{ borderRadius: "1.95rem" }}
            >
              Start Your Journey
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-[#0090af]" />
              No hidden fees
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#0090af]" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#0090af]" />
              <span className="text-[#0090af] font-medium">30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
