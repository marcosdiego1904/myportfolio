import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-dark)] bg-[var(--bg-primary)]">
      <div className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[var(--accent-primary)] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                M
              </div>
              <span className="text-2xl font-bold">Marco Builds</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs text-center md:text-left leading-relaxed">
              Helping non-tech founders and agencies ship launch-ready MVPs in 30 days, not 6 months.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Quick Links</h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              <Link
                href="#work"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Work
              </Link>
              <Link
                href="#how-it-works"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#packages"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Packages
              </Link>
              <Link
                href="#faq"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Connect</h3>
            <Link
              href="mailto:marco@marcobuilds.com"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
            >
              <Mail className="h-4 w-4" />
              <span className="group-hover:underline">marco@marcobuilds.com</span>
            </Link>
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-dark)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-secondary)] text-center md:text-left">
              © 2025 Marco Builds. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
