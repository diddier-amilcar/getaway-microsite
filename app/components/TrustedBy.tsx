export default function TrustedBy() {
  const logos = [
    { name: "adh-color", url: "https://atelierdehoteles.bitbucket.io/img/ADH-Color.svg" },
    { name: "atpm-color", url: "https://atelierdehoteles.bitbucket.io/img/ATPM-Color.svg" },
    { name: "olcp-color", url: "https://atelierdehoteles.bitbucket.io/img/OLCP-Color.svg" },
    { name: "insp-color", url: "https://atelierdehoteles.bitbucket.io/img/INSP-Color.svg" },
  ]

  return (
    <section className="mb-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dee2e6]">
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
            Gateway Membership is part of ATELIER de Hoteles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
