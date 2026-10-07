import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Reveal } from '../components/Reveal'

type Stat = { value: number; suffix: string; label: string }

const stats: Stat[] = [
  { value: 97, suffix: '%', label: 'dei consumatori cerca attività locali online' },
  { value: 7, suffix: ' giorni', label: 'dal brief al tuo sito online' },
  { value: 3, suffix: 'x', label: 'più richieste con un sito ottimizzato' },
  { value: 100, suffix: '%', label: 'tuo: dominio e contenuti restano tuoi' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-6xl font-bold tracking-tight md:text-7xl">
      {n}
      <span className="text-[#0284c7]">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="dots-pattern py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-14 max-w-md font-mono-tech text-xs font-semibold uppercase tracking-[0.3em] text-[#0284c7]">
            I numeri parlano chiaro
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-l-2 border-foreground pl-6">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
