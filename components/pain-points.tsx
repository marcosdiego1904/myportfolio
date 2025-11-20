"use client"

import { Clock, Ghost, Users, FileText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PainPoints() {
  const { ref, isVisible } = useScrollAnimation()

  const painPoints = [
    {
      icon: Clock,
      title: "Agencies quote $15k-$50k and 6-month timelines",
      description:
        "By the time you finally launch, the market has moved on and competitors have already captured your opportunity.",
      isPrimary: true,
    },
    {
      icon: Ghost,
      title: "Freelancers on Upwork ghost you mid-project",
      description:
        "You get broken code, missed deadlines, or developers who disappear after the first payment. Starting over costs more than hiring right the first time.",
      isPrimary: false,
    },
    {
      icon: Users,
      title: '"Technical co-founders" want 40% equity for unproven work',
      description:
        "You give up half your company before validating whether users even want your product. That's backwards.",
      isPrimary: true,
    },
    {
      icon: FileText,
      title: "Your idea sits in a Google Doc while competitors move faster",
      description:
        "Every month you delay is potential revenue lost, customers going to competitors, and momentum killed.",
      isPrimary: false,
    },
  ]

  return (
    <section
      ref={ref}
      className={`relative px-6 py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Tired of These <span className="text-primary">{'"Normal"'}</span> Development Timelines?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            const accentColor = point.isPrimary ? "primary" : "secondary"
            const borderHover = point.isPrimary ? "hover:border-primary/50" : "hover:border-secondary/50"
            const shadowHover = point.isPrimary ? "hover:shadow-primary/10" : "hover:shadow-secondary/10"
            const bgGradient = point.isPrimary ? "from-primary/10" : "from-secondary/10"
            const iconBg = point.isPrimary ? "from-primary/20 to-primary/5" : "from-secondary/20 to-secondary/5"
            const iconRing = point.isPrimary
              ? "ring-primary/20 group-hover:ring-primary/40"
              : "ring-secondary/20 group-hover:ring-secondary/40"
            const iconShadow = point.isPrimary ? "group-hover:shadow-primary/20" : "group-hover:shadow-secondary/20"
            const iconColor = point.isPrimary ? "text-primary" : "text-secondary"

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 ${borderHover} hover:shadow-lg ${shadowHover} hover:-translate-y-1`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgGradient} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 rounded-lg bg-gradient-to-br ${iconBg} p-3 ring-1 ${iconRing} transition-all duration-300 group-hover:ring-2 group-hover:shadow-lg ${iconShadow}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight transition-colors duration-300">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-4 ring-1 ring-primary/20">
            <p className="text-xl font-semibold text-primary md:text-2xl">
              Every month you wait is money left on the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
