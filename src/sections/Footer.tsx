import { ArrowUp, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground py-14 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#top" className="font-display text-3xl font-bold tracking-tight">
              vetrina<span className="text-[#38bdf8]">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-background/50">
              Siti web e presenza digitale per le attività locali italiane.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/70">
            <a href="#servizi" className="transition-colors hover:text-[#38bdf8]">Servizi</a>
            <a href="#processo" className="transition-colors hover:text-[#38bdf8]">Come funziona</a>
            <a href="#prezzi" className="transition-colors hover:text-[#38bdf8]">Prezzi</a>
            <a href="#faq" className="transition-colors hover:text-[#38bdf8]">FAQ</a>
          </nav>

          <a
            href="#top"
            className="pulse-ring relative flex h-12 w-12 items-center justify-center rounded-full bg-[#38bdf8] text-foreground transition-transform hover:scale-110"
            aria-label="Torna su"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} vetrina. — Tutti i diritti riservati.</span>
          <a
            href="mailto:matteogpplm@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#38bdf8]"
          >
            <Mail className="h-3.5 w-3.5" /> matteogpplm@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
