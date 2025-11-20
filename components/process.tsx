"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Process() {
  const { ref, isVisible } = useScrollAnimation()

  const steps = [
    {
      number: "1",
      title: "Discovery & Scope",
      timeline: "Day 1-2",
      description: "We jump on a 60-90 minute call where we:",
      items: [
        "Define your MVP scope (what ships in 30 days vs. Phase 2)",
        "Identify your core value proposition",
        "Map out user flows and key features",
        "Choose the right tech stack for your needs",
        "Set clear success metrics",
      ],
      result: "You'll leave with a detailed project roadmap and timeline.",
    },
    {
      number: "2",
      title: "Design & Planning",
      timeline: "Day 3-5",
      description: "I create:",
      items: [
        "Wireframes for key screens",
        "Database schema and architecture plan",
        "User flow diagrams",
        "Feature priority list (must-have vs. nice-to-have)",
      ],
      result: "You review and approve before any code is written.",
    },
    {
      number: "3",
      title: "Development Sprint",
      timeline: "Day 6-25",
      description: "This is where the magic happens:",
      items: [
        "Daily progress updates via Slack/email",
        "Working demos every 3-4 days (you see progress, not just promises)",
        "Your feedback incorporated in real-time",
        "AI-assisted development (Gemini Certified) for 3x speed",
      ],
      result: "You're involved throughout, not left in the dark.",
    },
    {
      number: "4",
      title: "Testing & Launch",
      timeline: "Day 26-30",
      description: "Final stretch:",
      items: [
        "User testing with 5-10 real users",
        "Bug fixes and polish",
        "Production deployment",
        "Domain setup and SSL configuration",
        "Handoff session (I walk you through everything)",
      ],
      result: "On day 30, your product is live and ready for customers.",
    },
    {
      number: "5",
      title: "Post-Launch Support",
      timeline: "30 days after",
      description: "You're not abandoned after launch:",
      items: [
        "30 days of included support",
        "Critical bug fixes",
        "Minor adjustments based on user feedback",
        "Email/Slack access to me",
      ],
      result: "After 30 days, we can continue hourly or via retainer if needed.",
    },
  ]

  return (
    <section
      id="process"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">The 30-Day Process</h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative border border-border-dark rounded-2xl p-8 hover:border-accent-primary/50 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-8 bg-background border-2 border-accent-primary rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-primary">{step.number}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left side: Title and timeline */}
                <div className="md:w-1/3 pt-4">
                  <h3 className="text-2xl font-bold text-light mb-2 group-hover:text-accent-primary transition-colors">
                    {step.title}
                  </h3>
                  <span className="inline-block bg-accent-secondary/20 text-accent-secondary px-4 py-1 rounded-full text-sm font-medium">
                    {step.timeline}
                  </span>
                </div>

                {/* Right side: Content */}
                <div className="md:w-2/3 space-y-4">
                  <p className="text-text-secondary">{step.description}</p>

                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-light">
                        <span className="text-accent-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <p className="text-light font-medium border-l-2 border-accent-primary pl-4">{step.result}</p>
                  </div>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-8 left-[3.5rem] w-0.5 h-8 bg-gradient-to-b from-border-dark to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
