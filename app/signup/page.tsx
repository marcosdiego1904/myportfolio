import type { Metadata } from "next"
import { SignupForm } from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Sign Up - AI Receptionist - Marcos Barzola",
  description:
    "Sign up for the AI voice receptionist for small service businesses in the Harrisburg, Pennsylvania area.",
  alternates: { canonical: "/signup" },
  robots: { index: true, follow: true },
}

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Sign Up for the AI Receptionist
          </h1>
          <p className="leading-relaxed text-[var(--text-secondary)]">
            For small service businesses in the Harrisburg, Pennsylvania area. The AI receptionist answers calls you
            cannot pick up, in English or Spanish, and can book visits on your calendar. After each call, you can get a
            text message summary.
          </p>
        </header>
        <SignupForm />
      </div>
    </main>
  )
}
