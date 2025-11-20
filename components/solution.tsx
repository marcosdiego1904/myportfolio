"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Solution() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`relative py-24 px-6 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Fast Execution Meets <span className="text-accent-primary">Product Thinking</span>
        </h2>

        {/* Main Content Card */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-border-dark/50 rounded-2xl p-8 md:p-12 bg-card">
            {/* Opening Statement */}
            <p className="text-2xl md:text-3xl font-semibold text-light mb-8 text-balance">
              I'm not a typical developer for hire.
            </p>

            {/* Background Story */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-10">
              <div className="relative">
                <div className="relative border border-accent-primary/20 rounded-xl p-6 hover:border-accent-primary/40 hover:bg-white/[0.02] transition-all duration-300">
                  <p>
                    Before writing code, I spent 3 years managing warehouse operations — identifying real problems and
                    implementing solutions under pressure. I learned to cut through complexity and focus on what
                    actually moves the needle.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div className="mb-10">
              <p className="text-lg text-light mb-6">Now I combine that operational mindset with:</p>
              <div className="grid gap-4">
                {[
                  { text: "Full-stack development (React, TypeScript, Node.js, databases)", icon: "💻" },
                  { text: "AI-assisted coding (Gemini Certified, 3x faster than traditional development)", icon: "⚡" },
                  { text: "Product thinking (build what users need, not just what you ask for)", icon: "🎯" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-border-dark/30 hover:border-accent-primary/30 transition-all duration-300 hover:translate-x-2 group/skill"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-light flex-1 pt-2">{skill.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Result Statement */}
            <div className="relative">
              <div className="absolute -inset-1 bg-accent-primary/10 rounded-xl blur-lg" />
              <div className="relative bg-white/[0.02] border border-accent-primary/30 rounded-xl p-6">
                <p className="text-xl md:text-2xl font-semibold text-center">
                  The result? <span className="text-accent-primary">Working products in 30 days</span>, not quarters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Apps Shipped", value: "2" },
            { label: "Days Average", value: "30" },
            { label: "Code Ownership", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="relative group/stat">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 rounded-xl blur opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-sm bg-white/[0.02] border border-border-dark/50 rounded-xl p-6 text-center hover:border-accent-secondary/50 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
