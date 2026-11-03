"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

const CONTACT_EMAIL = "marcosbarzola@devbymarcos.com"

export const SMS_CONSENT_TEXT =
  "I agree to receive text messages from Marcos Diego Barzola Sr, operating as Marcos Barzola, with a summary of calls answered by my AI receptionist. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our Privacy Policy and Terms. Mobile opt-in data is not shared with third parties for marketing."

const fields = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name", required: true },
  { name: "businessName", label: "Business name", type: "text", autoComplete: "organization", required: true },
  { name: "phone", label: "Mobile phone number", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "calendarEmail", label: "Calendar email (Google Calendar)", type: "email", autoComplete: "off", required: false },
  { name: "carrier", label: "Phone carrier", type: "text", autoComplete: "off", required: false },
] as const

const inputClass =
  "w-full rounded-lg border border-[var(--border-dark)] bg-white/5 px-4 py-3 text-foreground placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/30"

export function SignupForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const smsConsent = data.get("smsConsent") === "yes"

    const lines = fields.map((f) => `${f.label}: ${data.get(f.name) || "-"}`)
    lines.push("")
    lines.push(
      smsConsent
        ? `SMS consent: YES (box checked on ${new Date().toISOString()})\nConsent text: "${SMS_CONSENT_TEXT}"`
        : "SMS consent: NO (box not checked)",
    )

    const subject = `AI receptionist sign-up: ${data.get("businessName")}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((f) => (
        <div key={f.name} className="space-y-2">
          <label htmlFor={f.name} className="block text-sm font-medium text-foreground">
            {f.label}
            {!f.required && <span className="text-[var(--text-secondary)]"> (optional)</span>}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex items-start gap-3 rounded-lg border border-[var(--border-dark)] bg-white/[0.02] p-4">
        <input
          id="smsConsent"
          name="smsConsent"
          type="checkbox"
          value="yes"
          defaultChecked={false}
          className="mt-1 h-4 w-4 flex-shrink-0 accent-[var(--accent-primary)]"
        />
        <label htmlFor="smsConsent" className="text-sm leading-relaxed text-[var(--text-secondary)]">
          I agree to receive text messages from Marcos Diego Barzola Sr, operating as Marcos Barzola, with a summary of
          calls answered by my AI receptionist. Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out, HELP for help. See our{" "}
          <Link href="/privacy" className="text-[var(--accent-primary)] underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-[var(--accent-primary)] underline">
            Terms
          </Link>
          . Mobile opt-in data is not shared with third parties for marketing.
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--accent-primary)] px-6 py-3 font-semibold text-[var(--bg-primary)] transition-colors hover:bg-[var(--accent-primary)]/90"
      >
        Sign Up
      </button>

      <p className="text-sm text-[var(--text-secondary)]">
        {submitted
          ? `Your email app should open with your details. Send that email to finish signing up. If it did not open, email ${CONTACT_EMAIL}.`
          : "Submitting opens your email app with your details, addressed to us. Send that email to finish signing up."}
      </p>
    </form>
  )
}
