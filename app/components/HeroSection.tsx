"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Types for the component props
interface HeroSectionProps {
  content: {
    h1: string
    h2?: string
    h3?: string
    h4?: string
    paragraph?: string
  }
  gradient?: {
    enabled: boolean
    colors: string[]
    direction?: string
    animate?: boolean
    opacity?: number
  }
  backgroundImage?: {
    enabled: boolean
    desktop?: string
    mobile?: string
  }
  backgroundVideo?: {
    enabled: boolean
    desktop?: string
    mobile?: string
    poster?: string
  }
  overlay?: {
    enabled: boolean
    color?: string
    opacity?: number
    mixBlendMode?: string
  }
  badge?: {
    enabled: boolean
    text: string
    variant?: "default" | "outline" | "secondary" | "destructive"
    className?: string
  }
  counters?: {
    enabled: boolean
    stats: Array<{
      value: number | string
      prefix?: string
      suffix?: string
      label: string
    }>
  }
  cta?: {
    primary?: {
      text: string
      href?: string
      scrollTo?: string
      variant?: "default" | "outline" | "secondary" | "destructive"
      size?: "default" | "sm" | "lg" | "xl"
      className?: string // ⬅️ NUEVO
    }
    secondary?: {
      text: string
      href?: string
      scrollTo?: string
      variant?: "default" | "outline" | "secondary" | "destructive"
      size?: "default" | "sm" | "lg" | "xl"
      className?: string // ⬅️ NUEVO
    }
  }
  className?: string
}

export default function HeroSection({
  content,
  gradient = { enabled: false, colors: ["#4F46E5", "#10B981"], direction: "45deg", animate: false, opacity: 0.7 },
  backgroundImage = { enabled: false },
  backgroundVideo = { enabled: false },
  overlay = { enabled: false, color: "#000000", opacity: 0.5, mixBlendMode: "normal" },
  badge = { enabled: false, text: "", variant: "default" },
  counters = { enabled: false, stats: [] },
  cta,
  className,
}: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set loaded state for animation
    setIsLoaded(true)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Handle scroll to functionality
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Generate gradient style
  const getGradientStyle = () => {
    if (!gradient.enabled) return {}

    const direction = gradient.direction || "45deg"
    const colors = gradient.colors.join(", ")
    const opacity = gradient.opacity !== undefined ? gradient.opacity : 0.7

    const gradientStyle: React.CSSProperties = {
      background: `linear-gradient(${direction}, ${colors})`,
      opacity,
    }

    if (gradient.animate) {
      gradientStyle.backgroundSize = "200% 200%"
      gradientStyle.animation = "gradientAnimation 4s ease infinite"
    }

    return gradientStyle
  }

  // Determine which background video to use
  const getVideoSource = () => {
    if (!backgroundVideo.enabled) return null

    return isMobile && backgroundVideo.mobile ? backgroundVideo.mobile : backgroundVideo.desktop
  }

  // Determine which background image to use
  const getImageSource = () => {
    if (!backgroundImage.enabled) return null

    return isMobile && backgroundImage.mobile ? backgroundImage.mobile : backgroundImage.desktop
  }

  return (
    <section className={cn("relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden mb-4", className)}>
      {/* Background Layers */}
      {gradient.enabled && <div className="absolute inset-0 z-[1]" style={getGradientStyle()} />}

      {backgroundImage.enabled && getImageSource() && (
        <div className="absolute inset-0 z-[0]">
          <Image src={getImageSource() || ""} alt="Background" fill className="object-cover object-center" priority />
        </div>
      )}

      {backgroundVideo.enabled && getVideoSource() && (
        <div className="absolute inset-0 z-[0]">
          <video autoPlay loop muted playsInline poster={backgroundVideo.poster} className="w-full h-full object-cover">
            <source src={getVideoSource() || ""} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {overlay.enabled && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundColor: overlay.color || "#000000",
            opacity: overlay.opacity || 0.5,
            mixBlendMode: (overlay.mixBlendMode as any) || "normal",
          }}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 container mx-auto px-4 py-16 text-center",
          isLoaded ? "animate-fade-in-up" : "opacity-0",
        )}
      >
        {badge.enabled && (
          <div className="mb-6">
            <span
              className={cn(
                "inline-block px-3 py-1 text-sm font-medium rounded-full",
                badge.variant === "default" && "bg-primary text-primary-foreground",
                badge.variant === "secondary" && "bg-secondary text-secondary-foreground",
                badge.variant === "outline" && "border border-primary text-primary",
                badge.variant === "destructive" && "bg-destructive text-destructive-foreground",
                badge.className,
              )}
            >
              {badge.text}
            </span>
          </div>
        )}

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-semibold">{content.h1}</h1>

          {content.h2 && <h2 className="text-3xl md:text-4xl font-medium text-white">{content.h2}</h2>}

          {content.h3 && <h3 className="text-2xl md:text-3xl font-medium">{content.h3}</h3>}

          {content.h4 && <h4 className="text-xl md:text-2xl font-medium">{content.h4}</h4>}

          {content.paragraph && <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-white font-normal">{content.paragraph}</p>}
        </div>

        {/* Counters */}
        {counters.enabled && counters.stats.length > 0 && (
          <div className="mt-16 text-white">
            <div
              className={cn(
                "grid gap-8 mx-auto max-w-4xl",
                counters.stats.length === 1
                  ? "grid-cols-1"
                  : counters.stats.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : counters.stats.length === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
              )}
            >
              {counters.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-1xl md:text-2xl font-medium">
                    {stat.prefix}
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        {(cta?.primary || cta?.secondary) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {cta.primary && (
              <button
                className={cn(
                  "inline-flex items-center justify-center rounded-full text-medium font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  cta.primary.variant === "default" || !cta.primary.variant
                    ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    : cta.primary.variant === "secondary"
                      ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
                      : cta.primary.variant === "outline"
                        ? "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                        : "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                  cta.primary.size === "default" || !cta.primary.size
                    ? "h-9 px-4 py-2"
                    : cta.primary.size === "sm"
                      ? "h-8 rounded-md px-3 text-xs"
                      : "h-10 rounded-md px-8",
                  cta.primary.className
                )}
                onClick={() => cta.primary?.scrollTo && handleScrollTo(cta.primary.scrollTo)}
              >
                {cta.primary.href && !cta.primary.scrollTo ? (
                  <Link href={cta.primary.href} className="flex items-center">
                    {cta.primary.text}
                  </Link>
                ) : (
                  cta.primary.text
                )}
              </button>
            )}

            {cta.secondary && (
              <button
                className={cn(
                  "inline-flex items-center justify-center rounded-full text-medium font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  cta.secondary.variant === "default"
                    ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    : cta.secondary.variant === "secondary"
                      ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
                      : cta.secondary.variant === "outline" || !cta.secondary.variant
                        ? "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                        : "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                  cta.secondary.size === "default" || !cta.secondary.size
                    ? "h-9 px-4 py-2"
                    : cta.secondary.size === "sm"
                      ? "h-8 rounded-md px-3 text-xs"
                      : "h-10 rounded-md px-8",
                  cta.primary.className
                )}
                onClick={() => cta.secondary?.scrollTo && handleScrollTo(cta.secondary.scrollTo)}
              >
                {cta.secondary.href && !cta.secondary.scrollTo ? (
                  <Link href={cta.secondary.href} className="flex items-center">
                    {cta.secondary.text}
                  </Link>
                ) : (
                  cta.secondary.text
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
