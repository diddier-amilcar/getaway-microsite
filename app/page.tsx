import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation"
import TrustedBy from "./components/TrustedBy"
import WhatIs from "./components/home/WhatIs"
import PlansSection from "./components/Plans"
import Testimonials from "./components/Testimonials"
import ContactSection from "./components/ContactSection"
import FinalCTA from "./components/home/FinalCTA"

const myTestimonials = [
  {
    id: 1,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 2,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 3,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 5,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  {
    id: 6,
    text: "The membership gave us access to upgrades and spa discounts that truly made our stay unforgettable.",
    rating: 5,
    name: "Andrea López",
    location: "Bogotá, Colombia",
    level: "Getaway Smart",
    stay: "12 nights",
  },
  // ...
]

const plans = [
    {
      name: "Getaway Smart",
      price: "$199",
      period: "per year",
      description: "Perfect for occasional travelers who want great value",
      features: [
        "20% discount on room rates",
        "2 free nights per year",
        "Room upgrade when available",
        "10% dining discount",
        "Priority customer support",
        "Access to member portal",
      ],
      background: "linear-gradient(180deg, rgba(46, 0, 184, 0.1), #ffffff )",
      primaryLink: "https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html",
      detailsLink: "/smart",
    },
    {
      name: "Getaway Elite",
      price: "$399",
      period: "per year",
      description: "Ideal for frequent travelers seeking luxury experiences",
      features: [
        "40% discount on room rates",
        "5 free nights per year",
        "Guaranteed room upgrades",
        "25% dining & spa discount",
        "VIP concierge service",
        "Exclusive member events",
        "Late checkout privilege",
        "Welcome amenities",
      ],
      popular: true,
      background: "linear-gradient(180deg, rgba(0, 122, 184,0.1), #ffffff)",
      primaryLink: "https://atelierdehoteles.bitbucket.io/public/payment_gateway-step-2.html",
      detailsLink: "/elite",
    },
  ]

export default function Home() {
  return (
    <main>
      <Navigation variant="inverted" />

      {/* Hero */}
      <HeroSection
        content={{
          h1: "Experience Caribbean Paradise",
          paragraph: "Unlock unparalleled luxury at ATELIER Playa Mujeres with our exclusive membership packages.",
        }}
        backgroundVideo={{
          enabled: true,
          desktop: "https://atelierdehoteles.bitbucket.io/public/img/video/facebook1.mp4",
          mobile: "/path/to/mobile-video.mp4",
          poster: "/path/to/poster.jpg",
        }}
        gradient={{ 
          enabled: true, 
          colors: ["rgb(0, 122, 184)", "rgb(46, 0, 184)"], 
          direction: "45deg", 
          animate: true, 
          opacity: 0.9 
        }}
        badge={{
          enabled: true,
          text: "Exclusive Caribbean Memberships",
          variant: "outline",
          className: "text-white border-white",
        }}
        counters={{
          enabled: true,
          stats: [
            { value: "2,500+", label: "Active Members" },
            { value: 98, suffix: "%", label: "Satisfaction Rate" },
            { value: "USD $2.3M", label: "Total Savings" },
            { value: "4.9/5", label: "Average Rating" },
          ],
        }}
        cta={{
          primary: {
            text: "Explore Memberships",
            scrollTo: "plans",
            variant: "default",
            size: "xl",
            className: "bg-[#0090af] hover:bg-[#007a94] text-white rounded-full",
          },
        }}
      />

      {/* Core Sections */}
      <TrustedBy />
      <WhatIs />
      <Testimonials
        variant="highlight"
        title="Una experiencia inolvidable"
        subtitle="Testimonio de un huésped satisfecho"
        testimonials={[
          {
            id: 99,
            text: "Fue la mejor decisión que tomamos para nuestra luna de miel. Todo fue perfecto.",
            rating: 5,
            name: "Laura y Andrés",
            location: "Monterrey, México",
            level: "Getaway Elite",
            stay: "7 noches",
          },
        ]}
      />
      <PlansSection
        plans={plans}
        columns={2}
        title="Discover the Right Plan for You"
        subtitle="Each membership is designed to offer comfort, value, and luxury experiences."
      />
      <Testimonials
        variant="carousel"
        title="Lo que opinan nuestros miembros"
        subtitle="Conoce sus experiencias reales"
        testimonials={myTestimonials}
      />
      <ContactSection
        title="Support Center"
        description="Need help? Our support team is ready to assist you."
        phoneContact={{
          title: "Emergency Support",
          phoneNumber: "+1 (555) 999-0000",
          description: "24/7 emergency support line for urgent issues.",
          buttonText: "Call Now",
        }}
        emailContact={{
          title: "General Inquiries",
          email: "support@company.com",
          description: "For general questions and non-urgent matters.",
          buttonText: "Send Email",
        }}
        background={{
          gradient: "linear-gradient(135deg, rgb(0, 122, 184) 0%, rgb(46, 0, 184) 100%)",
        }}
        className="text-white"
      />

      {/* Final Call-to-Action */}
      <FinalCTA />
    </main>
  )
}
