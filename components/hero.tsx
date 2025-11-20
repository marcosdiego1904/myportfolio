import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 animate-pulse-slow" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-sm text-secondary backdrop-blur-sm ring-1 ring-secondary/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              Available for new projects
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ship Your Product in <span className="text-primary">30 Days</span>, Not 6 Months
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I help non-tech founders and small agencies build launch-ready MVPs without the $50k agency bill or
              endless development cycles.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-12 bg-gradient-to-r from-primary to-primary/90 px-8 text-base font-semibold text-primary-foreground hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book Free Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-border bg-card/50 px-8 text-base font-semibold text-foreground hover:bg-card hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                See My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5.0 from 30+ clients</span>
              </div>
              <span className="text-border">•</span>
              <span>100+ projects shipped</span>
              <span className="text-border">•</span>
              <span>2-4 week turnaround</span>
            </div>
          </div>

          {/* Laptop Mockup */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl animate-pulse-slow" />

              {/* Mockup Container */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-3 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-secondary/80" />
                  </div>
                  <div className="ml-4 flex-1 rounded bg-background/50 px-4 py-1 text-xs text-muted-foreground">
                    warewise.app
                  </div>
                </div>

                <div className="bg-background">
                  <img src="/images/image.png" alt="WareWise Action Center Dashboard" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
