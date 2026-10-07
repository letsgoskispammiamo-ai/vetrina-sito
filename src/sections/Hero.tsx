import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import Scramble from '../components/Scramble'
import Magnetic from '../components/Magnetic'

const Scene3D = lazy(() => import('../components/Scene3D'))

const line1 = 'Il tuo negozio,'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-foreground text-background">
      {/* 3D scene */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      {/* grid overlay + scanline + HUD corners */}
      <div className="grid-lines-dark pointer-events-none absolute inset-0" />
      <div className="scanline" />
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      {/* HUD side labels */}
      <div className="font-mono-tech pointer-events-none absolute left-6 top-28 hidden text-[10px] uppercase tracking-[0.3em] text-[#38bdf8]/70 lg:block">
        SYS.VTRN_01 <span className="hud-blink">// online</span>
      </div>
      <div className="font-mono-tech pointer-events-none absolute bottom-24 right-6 hidden text-right text-[10px] uppercase tracking-[0.3em] text-background/30 lg:block">
        lat 45.4642 — lon 9.1900
        <br />
        render.webgl_3d
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono-tech mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[#38bdf8]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8]" />
          </span>
          Siti web per attività locali
        </motion.div>

        <h1 className="font-display max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="block">
            {line1.split(' ').map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split('').map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 40, rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + (wi * 4 + i) * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {ch}
                  </motion.span>
                ))}
                {wi < line1.split(' ').length - 1 && <span>{'\u00A0'}</span>}
              </span>
            ))}
          </span>
          <motion.span
            className="block text-[#38bdf8]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scramble words={['online.', 'visibile.', 'su Google.', 'al lavoro.']} />
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="max-w-xl text-lg text-background/60 md:text-xl"
          >
            Costruiamo siti veloci, belli e pensati per farti trovare dai
            clienti della tua zona. Menu, prenotazioni, contatti e Google
            Maps: tutto in un unico posto, senza pensieri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contatti"
                className="group inline-flex items-center gap-2 rounded-full bg-[#38bdf8] px-7 py-4 font-display text-base font-semibold text-foreground transition-colors hover:bg-background"
              >
                Inizia ora
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#servizi"
                className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-7 py-[14px] font-display text-base font-semibold text-background transition-colors hover:border-[#38bdf8] hover:text-[#38bdf8]"
              >
                Scopri di più
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-mono-tech mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-background/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-background/50"
        >
          <span>Bar · ristoranti · parrucchieri · officine</span>
          <span className="hidden h-4 w-px bg-background/20 sm:block" />
          <span>Nessun abbonamento nascosto</span>
          <span className="hidden h-4 w-px bg-background/20 sm:block" />
          <span className="inline-flex items-center gap-1 text-[#38bdf8]">
            <ArrowDown className="h-4 w-4 animate-bounce" /> Scorri
          </span>
        </motion.div>
      </div>
    </section>
  )
}
