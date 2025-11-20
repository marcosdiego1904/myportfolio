"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "How can you build in 30 days what agencies take 6 months for?",
    answer: (
      <div className="space-y-4">
        <p>Three reasons:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>I use AI-assisted development (Gemini Certified) to code 3x faster than traditional methods</li>
          <li>I focus on MVP scope — no feature bloat, just what you need to validate</li>
          <li>I've done this before (see WareWise and Lamp to My Feet above)</li>
        </ol>
        <p className="font-semibold text-[#F97316]">I'm not cutting corners. I'm cutting waste.</p>
      </div>
    ),
  },
  {
    question: "What if I need changes after the 30 days?",
    answer: (
      <div className="space-y-4">
        <p>Package 2 includes 30 days of post-launch support for critical bugs and minor adjustments.</p>
        <p>After that, we can work hourly ($75/hr) or continue with a monthly retainer if you have ongoing needs.</p>
      </div>
    ),
  },
  {
    question: "Do I own the code, or is it licensed?",
    answer: (
      <p>You own 100% of the code. Full GitHub access. No licensing restrictions. It's your product completely.</p>
    ),
  },
  {
    question: "What if my idea is too complex for 30 days?",
    answer: (
      <div className="space-y-4">
        <p>
          We'll discuss this in the Discovery Call. If it truly can't be done in 30 days, I'll tell you upfront and
          we'll break it into phases:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            Phase 1: Core MVP (30 days)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            Phase 2: Advanced features (quoted separately)
          </li>
        </ul>
        <p className="font-semibold text-[#F97316]">I won't take your money if I can't deliver.</p>
      </div>
    ),
  },
  {
    question: "Can you sign an NDA before we discuss my idea?",
    answer: (
      <p>Absolutely. I'm happy to sign an NDA before our Discovery Call if your idea requires confidentiality.</p>
    ),
  },
  {
    question: "What technologies do you use?",
    answer: (
      <div className="space-y-4">
        <p>My standard stack is:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            "Frontend: React + TypeScript",
            "Backend: Node.js",
            "Database: PostgreSQL or MySQL",
            "Deployment: Vercel, Railway, or Render",
            "Payments: Stripe or PayPal",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-[#A1A1AA]">
              <span className="text-[#4ADE80]">✓</span> {item}
            </li>
          ))}
        </ul>
        <p>
          This stack is modern, scalable, and well-supported. If your project requires something different, we can
          discuss alternatives.
        </p>
      </div>
    ),
  },
  {
    question: "Do you work with clients outside the US?",
    answer: (
      <p>
        Yes. I work remotely and have experience with clients across time zones. As long as we can find a few hours of
        overlap for weekly calls, we're good.
      </p>
    ),
  },
  {
    question: "What if I'm not satisfied with the final product?",
    answer: (
      <div className="space-y-4">
        <p>
          See the guarantee above. If I don't deliver what we agreed on, you get 100% of your money back and keep all
          the code.
        </p>
        <p className="text-[#A1A1AA] italic">
          But honestly, this hasn't happened yet because we align expectations clearly in the Discovery Call before any
          money changes hands.
        </p>
      </div>
    ),
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 px-6 bg-[#0A0A0A] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#A1A1AA]">Everything you need to know about the process</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index ? "border-[#F97316] bg-[#F97316]/5" : "border-[#1F2937] hover:border-[#F97316]/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-medium ${openIndex === index ? "text-[#F97316]" : "text-[#F3F4F6]"}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#A1A1AA] flex-shrink-0" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-[#A1A1AA] leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
