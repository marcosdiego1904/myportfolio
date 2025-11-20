"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Height of navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">Marcos Barzola</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="#packages"
              onClick={(e) => scrollToSection(e, "packages")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Packages
            </Link>
            <Link
              href="#process"
              onClick={(e) => scrollToSection(e, "process")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Process
            </Link>
            <Link
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://calendly.com/marcosbarzola-devbymarcos/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
