import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Solution } from "@/components/solution"
import { Packages } from "@/components/packages"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Guarantee } from "@/components/guarantee"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Packages />
      <Portfolio />
      <Process />
      <Guarantee />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
