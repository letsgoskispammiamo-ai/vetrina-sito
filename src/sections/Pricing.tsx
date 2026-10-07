import { Reveal } from '../components/Reveal'
import { Check, ArrowUpRight } from 'lucide-react'

const plans = [
  {
    name: 'Vetrina',
    price: '490',
    desc: 'Per chi parte da zero e vuole esserci.',
    features: [
      'Sito one-page moderno',
      'Perfetto da smartphone',
      'Contatti, mappa e orari',
      'Dominio + hosting 1 anno',
      'Consegna in 7 giorni',
    ],
    highlight: false,
  },
  {
    name: 'Bottega',
    price: '890',
    desc: 'Il pacchetto completo per farsi trovare.',
    features: [
      'Sito multi-pagina',
      'Google Business ottimizzato',
      'Prenotazioni o menu digitale',
      'SEO locale di base',
      'Email professionale',
      '2 mesi di assistenza inclusa',
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="prezzi" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 text-center font-mono-tech text-xs font-semibold uppercase tracking-[0.3em] text-[#0284c7]">
            Prezzi chiari
          </p>
          <h2 className="font-display mx-auto mb-4 max-w-2xl text-center text-4xl font-bold tracking-tight md:text-6xl">
            Un prezzo solo. Una volta sola.
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-foreground/60">
            Niente abbonamenti obbligatori, niente sorprese. Sai subito quanto
            spendi e cosa ricevi.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border-2 border-foreground p-8 transition-transform duration-300 hover:-translate-y-2 ${
                  p.highlight
                    ? 'bg-foreground text-background shadow-[10px_10px_0px_#38bdf8]'
                    : 'bg-white hover:shadow-[10px_10px_0px_#111111]'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-4 left-8 rounded-full bg-[#38bdf8] px-4 py-1 text-xs font-bold uppercase tracking-wider text-foreground">
                    Più scelto
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.highlight ? 'text-background/60' : 'text-foreground/60'}`}>
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold tracking-tight">
                    €{p.price}
                  </span>
                  <span className={`text-sm ${p.highlight ? 'text-background/50' : 'text-foreground/50'}`}>
                    una tantum
                  </span>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlight ? 'bg-[#38bdf8] text-foreground' : 'bg-foreground text-background'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contatti"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-display font-semibold transition-colors ${
                    p.highlight
                      ? 'bg-[#38bdf8] text-foreground hover:bg-background'
                      : 'bg-foreground text-background hover:bg-[#38bdf8] hover:text-foreground'
                  }`}
                >
                  Richiedi {p.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
