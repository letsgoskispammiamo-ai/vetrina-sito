import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Come funziona', href: '#processo' },
  { label: 'Prezzi', href: '#prezzi' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-foreground/10 bg-background/90 text-foreground backdrop-blur-md'
          : 'text-background'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          vetrina<span className="text-[#38bdf8]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-sm font-medium transition-colors ${
                  scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-background/70 hover:text-background'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#38bdf8] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          className="group hidden items-center gap-2 rounded-full bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Preventivo gratuito
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-foreground/10 bg-background px-6 py-6 text-foreground md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl font-semibold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
              >
                Preventivo gratuito <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
