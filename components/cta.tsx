"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Cta() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-32 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--accent-secondary)]/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-[var(--border-dark)] rounded-3xl p-12 md:p-16 relative overflow-hidden group hover:border-[var(--accent-primary)]/30 transition-all duration-500">
          <div className="inline-flex items-center gap-2 bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-[var(--accent-secondary)] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--accent-secondary)]">Limited Availability</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Ready to Ship Your Product?
          </h2>

          <div className="max-w-2xl mx-auto space-y-5 mb-12">
            <p className="text-xl text-[var(--text-light)] font-semibold">
              Stop waiting for the "perfect time" or the "perfect developer."
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Your competitors aren't waiting. Your market isn't waiting.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Book a free 20-minute discovery call. We'll discuss your idea, see if we're a good fit, and map out a plan
              to get you live in 30 days.
            </p>
            <p className="text-[var(--text-light)] italic font-medium">
              No pressure. No sales pitch. Just an honest conversation about whether I can help you ship.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white h-16 px-10 text-lg font-semibold rounded-full shadow-[0_0_30px_-5px_var(--accent-primary)] hover:shadow-[0_0_50px_-5px_var(--accent-primary)] hover:scale-105 transition-all duration-300 group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Free Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-[var(--text-secondary)] mt-6">
            Usually reply within 24 hours • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}
