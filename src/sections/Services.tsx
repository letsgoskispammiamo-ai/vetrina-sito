import { Reveal } from '../components/Reveal'
import Tilt from '../components/Tilt'
import { Globe, CalendarCheck, MapPin, Search, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Sito vetrina',
    desc: 'Un sito moderno, veloce e perfetto da telefono. Chi sei, cosa fai, dove sei: chiaro in 5 secondi.',
    tag: 'Da 7 giorni',
  },
  {
    icon: CalendarCheck,
    title: 'Prenotazioni online',
    desc: 'I clienti prenotano un tavolo, un taglio o un appuntamento direttamente dal sito. Anche a mezzanotte.',
    tag: 'Zero commissioni',
  },
  {
    icon: MapPin,
    title: 'Google Business & Maps',
    desc: 'Scheda Google ottimizzata, orari, foto e recensioni. Quando cercano "vicino a me", trovano te.',
    tag: 'Visibilità locale',
  },
  {
    icon: Search,
    title: 'SEO locale',
    desc: 'Parole chiave della tua zona e della tua categoria, per salire nei risultati di ricerca della tua città.',
    tag: 'Primi su Google',
  },
  {
    icon: ShieldCheck,
    title: 'Assistenza continua',
    desc: 'Modifiche a testi, prezzi, orari e foto quando vuoi. Scrivere un\'email è sufficiente, al resto pensiamo noi.',
    tag: 'Sempre disponibili',
  },
  {
    icon: Mail,
    title: 'Email professionale',
    desc: 'Niente più @gmail.com: un indirizzo con il tuo nome di dominio che dà fiducia ai clienti.',
    tag: 'Impostata da noi',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="grid-lines-dark bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 font-mono-tech text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">
                Cosa facciamo
              </p>
              <h2 className="font-display max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Tutto quello che serve.
                <span className="text-stroke"> Niente di superfluo.</span>
              </h2>
            </div>
            <p className="max-w-sm text-background/50">
              Un unico interlocutore per la tua presenza online. Tu pensi al
              tuo lavoro, al resto pensiamo noi.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <Tilt className="h-full">
                <div className="group relative h-full rounded-2xl border border-background/15 bg-background/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#38bdf8]/60 hover:bg-background/[0.07]">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#38bdf8] text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-background/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background/50">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-bold">{s.title}</h3>
                  <p className="leading-relaxed text-background/50">{s.desc}</p>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-background/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#38bdf8]" />
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
