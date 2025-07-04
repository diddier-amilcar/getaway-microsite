export default function TrustedBy() {
  const logos = [
    { name: "Luxury Hotels Group", url: "/placeholder.svg?height=60&width=120" },
    { name: "Global Travel Awards", url: "/placeholder.svg?height=60&width=120" },
    { name: "Premium Resorts", url: "/placeholder.svg?height=60&width=120" },
    { name: "Travel Excellence", url: "/placeholder.svg?height=60&width=120" },
    { name: "Hospitality Partners", url: "/placeholder.svg?height=60&width=120" },
    { name: "Elite Destinations", url: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">Trusted by Leading Brands</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Partnered with the world's most prestigious hotels and travel organizations
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
