"use client"

import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Packages() {
  const { ref, isVisible } = useScrollAnimation()

  const packages = [
    {
      name: "Proof of Concept MVP",
      price: "$1,500",
      timeline: "10-14 days",
      bestFor: "Validating your idea before full investment",
      included: [
        "Core feature only (your main value proposition)",
        "Basic UI (functional first, fancy later)",
        "Hosted online for 10-20 test users",
        "Your idea comes to life fast",
      ],
      notIncluded: ["User authentication", "Payment processing", "Production scalability", "Mobile app version"],
      popular: false,
    },
    {
      name: "V1 Launch-Ready Product",
      price: "$3,500",
      timeline: "30 days",
      bestFor: "Going to market and charging customers from day 1",
      included: [
        "Everything in Package 1, plus:",
        "Full user authentication & accounts",
        "Database architecture built for scale",
        "Payment integration (Stripe/PayPal)",
        "Admin dashboard",
        "Mobile responsive design",
        "Production deployment (Vercel/Railway/Render)",
        "30-day post-launch support",
        "Full code ownership (complete GitHub access)",
      ],
      notIncluded: [
        "Advanced analytics dashboards",
        "Complex third-party integrations (Zapier, CRMs)",
        "Team collaboration features",
        "Multi-language support",
      ],
      popular: true,
    },
    {
      name: "Monthly Retainer",
      price: "$2,500/month",
      timeline: "40 hours included",
      bestFor: "Agencies with ongoing client projects",
      included: [
        "40 development hours per month",
        "White-label or co-branded work",
        "Multiple small projects or ongoing feature development",
        "Priority support (24-48 hour response time)",
        "Unused hours roll over (up to 10 hours/month)",
        "Monthly strategy call",
      ],
      notIncluded: [],
      popular: false,
    },
  ]

  return (
    <section
      ref={ref}
      className={`relative py-24 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How We Work Together</h2>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative group ${pkg.popular ? "md:-translate-y-4" : ""}`}>
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-accent-primary text-background text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white/5 border-2 border-accent-primary shadow-glow-orange"
                    : "bg-white/[0.02] border border-border-dark hover:border-accent-primary/50"
                } backdrop-blur-sm hover:transform hover:scale-[1.02]`}
              >
                {/* Package name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>

                {/* Price & timeline */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-accent-primary mb-1">{pkg.price}</div>
                  <div className="text-text-secondary">{pkg.timeline}</div>
                </div>

                {/* Best for */}
                <div className="mb-6 pb-6 border-b border-border-dark">
                  <p className="text-sm text-text-secondary mb-1">Best For:</p>
                  <p className="text-foreground">{pkg.bestFor}</p>
                </div>

                {/* What's included */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                  <ul className="space-y-2">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's NOT included */}
                {pkg.notIncluded.length > 0 && (
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-foreground mb-3">What's NOT Included:</p>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA button */}
                <Button
                  className={`w-full group/btn text-white ${
                    pkg.popular
                      ? "bg-accent-primary hover:bg-accent-primary/90"
                      : "bg-white/5 hover:bg-white/10 border border-border-dark hover:border-accent-primary"
                  }`}
                >
                  Book Discovery Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-xl bg-white/[0.02] border border-border-dark backdrop-blur-sm">
            <p className="text-text-secondary">
              💡 Not sure which package fits your needs?
              <br />
              <span className="text-accent-primary font-semibold">Book a free 20-minute discovery call</span> and we'll
              figure it out together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
