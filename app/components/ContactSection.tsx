"use client"
import type React from "react"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  title?: string
  description?: string
  phoneContact?: {
    title: string
    phoneNumber: string
    description?: string
    buttonText?: string
  }
  emailContact?: {
    title: string
    email: string
    description?: string
    buttonText?: string
  }
  background?: {
    color?: string
    image?: string
    gradient?: string
  }
  className?: string
}

export default function ContactSection({
  title,
  description,
  phoneContact,
  emailContact,
  background,
  className = "",
}: ContactSectionProps) {
  // Build background styles
  const getBackgroundStyles = () => {
    if (!background) return {}

    const styles: React.CSSProperties = {}

    if (background.color) {
      styles.backgroundColor = background.color
    }

    if (background.gradient) {
      styles.background = background.gradient
    }

    if (background.image) {
      styles.backgroundImage = `url(${background.image})`
      styles.backgroundSize = "cover"
      styles.backgroundPosition = "center"
      styles.backgroundRepeat = "no-repeat"
    }

    return styles
  }

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} style={getBackgroundStyles()}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12 md:mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">{title}</h2>}
            {description && <p className="text-lg leading-relaxed font-normal">{description}</p>}
          </div>
        )}

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Phone Contact */}
          {phoneContact && (
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#0090af]/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-[#0090af]" />
              </div>

              <h3 className="text-2xl font-medium mb-3 text-card-foreground">{phoneContact.title}</h3>

              {phoneContact.description && (
                <p className="text-muted-foreground mb-4 leading-relaxed">{phoneContact.description}</p>
              )}

              <div className="mb-6">
                <a
                  href={`tel:${phoneContact.phoneNumber.replace(/\s+/g, "")}`}
                  className="text-xl font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {phoneContact.phoneNumber}
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#0090af] hover:bg-[#007a94] text-white px-12 py-6 text-lg font-medium mb-10 transition-all duration-300 hover:scale-105 rounded-full"
              >
                <a href={`tel:${phoneContact.phoneNumber.replace(/\s+/g, "")}`}>
                  <Phone className="w-12 h-12 mr-2" />
                  {phoneContact.buttonText || "Call Now"}
                </a>
              </Button>
            </div>
          )}

          {/* Email Contact */}
          {emailContact && (
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#0090af]/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-[#0090af]" />
              </div>

              <h3 className="text-2xl font-medium mb-3">{emailContact.title}</h3>

              {emailContact.description && (
                <p className="text-muted-foreground mb-4 leading-relaxed">{emailContact.description}</p>
              )}

              <div className="mb-6">
                <a
                  href={`mailto:${emailContact.email}`}
                  className="text-xl font-medium text-primary hover:text-primary/80 transition-colors break-all"
                >
                  {emailContact.email}
                </a>
              </div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white rounded-full hover:bg-gray-50 text-[#0090af] border-2 border-[#0090af] hover:scale-105 px-12 py-6 text-lg font-medium transition-all duration-300"
              >
                <a href={`mailto:${emailContact.email}`}>
                  <Mail className="w-12 h-12 mr-2" />
                  {emailContact.buttonText || "Send Email"}
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
