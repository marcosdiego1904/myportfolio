"use client"

import { Shield, CheckCircle2, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Guarantee() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-20 px-6 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F97316]/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full px-6 py-3 mb-6">
            <Shield className="w-5 h-5 text-[#F97316]" />
            <span className="text-[#F97316] font-semibold">Zero Risk Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-4">30-Day Working Product Guarantee</h2>
        </div>

        {/* Main content card */}
        <div className="bg-[#0A0A0A]/50 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 md:p-12 mb-8 hover:border-[#F97316]/30 transition-all duration-300">
          <p className="text-[#F3F4F6] text-xl md:text-2xl font-semibold mb-8">Here's my promise:</p>

          {/* Guarantee points */}
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
              </div>
              <p className="text-[#F3F4F6] text-lg leading-relaxed">
                If in <span className="text-[#F97316] font-semibold">30 days</span> you don't have a functional product
                that does exactly what we agreed on in the Discovery Call,{" "}
                <span className="text-[#F97316] font-semibold">I keep working for FREE</span> until it's done.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
              </div>
              <p className="text-[#F3F4F6] text-lg leading-relaxed">
                If after <span className="text-[#F97316] font-semibold">45 days</span> we still haven't met the agreed
                specifications, <span className="text-[#F97316] font-semibold">I refund 100% of your money</span> AND
                you keep all the code developed.
              </p>
            </div>
          </div>

          {/* Why section */}
          <div className="border-t border-[#1F2937] pt-8">
            <h3 className="text-[#F3F4F6] text-xl font-semibold mb-4">Why can I offer this?</h3>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              Because I've done this before. WareWise and Lamp to My Feet (above) were both built in under 60 days each.
              I know how to scope properly, build efficiently, and ship on time.
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#F97316] inline-flex items-center gap-3 group">
            The risk is on me, not you.
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </p>
        </div>
      </div>
    </section>
  )
}
