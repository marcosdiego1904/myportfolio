import type React from "react"

export function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string
  effectiveDate: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background pt-16">
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-[var(--border-dark)] pb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="text-sm text-[var(--text-secondary)]">Effective date: {effectiveDate}</p>
        </header>
        <div className="space-y-12">{children}</div>
      </article>
    </main>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-4 leading-relaxed text-[var(--text-secondary)] [&_a]:text-[var(--accent-primary)] [&_a]:underline [&_a:hover]:text-[var(--accent-primary)]/80 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  )
}
