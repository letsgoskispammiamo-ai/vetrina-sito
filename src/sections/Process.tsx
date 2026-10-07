import { Reveal } from '../components/Reveal'
import { MessageSquare, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'Ci racconti la tua attività',
    desc: 'Una chiacchierata di 20 minuti, anche al telefono. Raccogliamo foto, menu, servizi e tutto ciò che serve.',
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Disegniamo e costruiamo',
    desc: 'In 7 giorni il sito è pronto. Ti mandiamo l\'anteprima, raccogliamo i tuoi feedback e sistemiamo tutto.',
  },
  {
    n: '03',
    icon: Rocket,
    title: 'Online, e restiamo vicini',
    desc: 'Pubblichiamo il sito e lo colleghiamo a Google. Poi restiamo disponibili per modifiche e assistenza.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 font-mono-tech text-xs font-semibold uppercase tracking-[0.3em] text-[#0284c7]">
            Come funziona
          </p>
          <h2 className="font-display mb-16 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Tre passi. <span className="text-stroke-ink">Zero stress.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15}>
              <div className="group relative">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-6xl font-bold text-stroke-ink transition-all duration-300 group-hover:text-foreground group-hover:[-webkit-text-stroke:0px]">
                    {s.n}
                  </span>
                  <div className="h-px flex-1 bg-foreground/15" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/15 transition-colors duration-300 group-hover:border-[#38bdf8] group-hover:bg-[#38bdf8]">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display mb-3 text-2xl font-bold">{s.title}</h3>
                <p className="leading-relaxed text-foreground/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
