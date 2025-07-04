export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">About Our Membership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury travel like never before with our exclusive hotel membership program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] text-center">
            <div className="w-16 h-16 bg-[#0090af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#0090af] rounded-full"></div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-900">What It Is</h3>
            <p className="text-gray-600 leading-relaxed">
              Our hotel membership program provides exclusive access to luxury accommodations and premium services at
              partner hotels worldwide, designed for discerning travelers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] text-center">
            <div className="w-16 h-16 bg-[#0090af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#0090af] rounded-full"></div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-900">How It Works</h3>
            <p className="text-gray-600 leading-relaxed">
              Simply choose your membership tier, complete the quick registration process, and start enjoying immediate
              benefits at over 500 partner locations globally.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6] text-center">
            <div className="w-16 h-16 bg-[#0090af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#0090af] rounded-full"></div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-900">Why It's Valuable</h3>
            <p className="text-gray-600 leading-relaxed">
              Save up to 40% on stays, enjoy complimentary upgrades, and receive VIP treatment that transforms every
              trip into an extraordinary luxury experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
