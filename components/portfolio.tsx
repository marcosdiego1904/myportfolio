"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`relative py-24 px-4 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/5 via-transparent to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Recent Work</h2>
          <p className="text-text-secondary text-lg">Real products solving real problems</p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {/* RackHawk Case Study */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            <div className="relative bg-bg-primary/40 backdrop-blur-sm border border-border-dark rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 transition-all duration-300">
              {/* Project Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📦</span>
                <h3 className="text-3xl md:text-4xl font-bold text-text-light">RackHawk</h3>
              </div>
              <p className="text-xl text-text-secondary mb-8">Warehouse Optimization Platform</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* The Problem */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-red-500">⚠️</span> The Problem
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Warehouse managers waste 40-60 hours per week manually hunting down forgotten pallets, data entry
                    errors, and capacity issues. Spreadsheet review takes hours. Problems are found too late.
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-accent-secondary">✅</span> The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    An intelligent system that analyzes inventory data and automatically detects 8 types of warehouse
                    problems in seconds.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-light mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Upload CSV → instant analysis in under 10 seconds",
                    "Prioritized alerts (forgotten pallets, overcapacity, cold chain violations)",
                    "ROI tracking dashboard (time saved, issues resolved)",
                    "Custom rule engine for different warehouse workflows",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-text-secondary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React + TypeScript", "Node.js", "PostgreSQL", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-primary border border-border-dark rounded-full text-sm text-text-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-bg-primary/60 border border-accent-secondary/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-text-light mb-4">Results</h4>
                <ul className="space-y-2">
                  {[
                    "Live in production serving real warehouse operations",
                    "Detects anomalies in seconds vs. hours of manual review",
                    "Saves average warehouse 50+ hours per week",
                    "Built and deployed in 8 weeks from idea to launch",
                  ].map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-accent-primary text-bg-primary rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors flex items-center gap-2 group/btn">
                  View Live Demo
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Lamp to My Feet Case Study */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            <div className="relative bg-bg-primary/40 backdrop-blur-sm border border-border-dark rounded-2xl p-8 md:p-12 hover:border-accent-secondary/50 transition-all duration-300">
              {/* Project Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📖</span>
                <h3 className="text-3xl md:text-4xl font-bold text-text-light">Lamp to My Feet</h3>
              </div>
              <p className="text-xl text-text-secondary mb-8">Bible Memorization Platform</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* The Problem */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-red-500">⚠️</span> The Problem
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    People want to memorize Bible verses, but traditional methods (flashcards, repetition) have low
                    retention rates and high dropout. Existing Bible apps focus on reading, not memorization.
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-accent-secondary">✅</span> The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    A 6-stage learning system based on cognitive science principles with spaced repetition and active
                    recall testing.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-light mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Spaced repetition for long-term retention",
                    "Active recall testing (scientifically proven method)",
                    "Gamification system (biblical rankings, streaks, leaderboards)",
                    "Multi-translation support (KJV, WEB, ASV, NLT)",
                    "Progress tracking and achievement celebrations",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-text-secondary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React + TypeScript", "Node.js", "MySQL", "JWT Authentication", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-primary border border-border-dark rounded-full text-sm text-text-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-bg-primary/60 border border-accent-secondary/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-text-light mb-4">Results</h4>
                <ul className="space-y-2">
                  {[
                    "Live in production with real users",
                    "Complete memorization flow from introduction to mastery",
                    "Biblical ranking system (Saul → John the Beloved)",
                    "Built in 8 weeks including full auth, gamification, and database",
                  ].map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-accent-secondary text-bg-primary rounded-lg font-semibold hover:bg-accent-secondary/90 transition-colors flex items-center gap-2 group/btn">
                  Try the App
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* MidiaCode Case Study */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            <div className="relative bg-bg-primary/40 backdrop-blur-sm border border-border-dark rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 transition-all duration-300">
              {/* Project Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🏢</span>
                <h3 className="text-3xl md:text-4xl font-bold text-text-light">MidiaCode</h3>
              </div>
              <p className="text-xl text-text-secondary mb-8">Corporate Homepage Redesign</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* The Problem */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-red-500">⚠️</span> The Problem
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    MidiaCode needed a modern, professional homepage to attract more customers, but their existing site
                    was outdated and didn't reflect their current brand.
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <h4 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
                    <span className="text-accent-secondary">✅</span> The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Built a responsive, high-performance homepage featuring modern design aligned with brand guidelines
                    and SEO optimization.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-light mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Modern design aligned with brand guidelines",
                    "Fast load times (<2 seconds)",
                    "Mobile-first responsive design",
                    "SEO optimization for better discoverability",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-text-secondary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React + Next.js", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-primary border border-border-dark rounded-full text-sm text-text-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-bg-primary/60 border border-accent-primary/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-text-light mb-4">Results</h4>
                <ul className="space-y-2">
                  {[
                    "Delivered on time during 3-month internship",
                    "Professional working relationship with non-tech stakeholders",
                    "Modern, performant site meeting all business requirements",
                  ].map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://v0-midiacode-navigation-header.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent-primary text-bg-primary rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors flex items-center gap-2 group/btn"
                >
                  View Live Site
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Closing */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-bg-primary/60 backdrop-blur-sm border border-border-dark rounded-xl p-8 max-w-3xl">
            <p className="text-lg text-text-secondary mb-6">Both apps share common traits:</p>
            <ul className="space-y-3 text-left mb-6">
              {[
                "Identified a real problem (not a solution looking for a problem)",
                "Built MVP fast, then iterated based on user feedback",
                'Deployed to production, not stuck in "beta forever"',
                "Solving actual problems for real users today",
              ].map((trait, index) => (
                <li key={index} className="flex items-start gap-2 text-text-secondary">
                  <CheckCircle2 className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-text-light">
              Your product could be <span className="text-accent-primary">next</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
