import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Boot-style preloader: percentage counter + brand, slides away.
 */
export default function Preloader() {
  const [n, setN] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const duration = 1100
    const start = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1)
      setN(Math.round((1 - Math.pow(1 - p, 2)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-foreground text-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-mono-tech mb-6 text-xs uppercase tracking-[0.4em] text-background/40">
            [ avvio sistema ]
          </div>
          <div className="font-display text-5xl font-bold tracking-tight md:text-6xl">
            vetrina<span className="text-[#38bdf8]">.</span>
          </div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-background/15">
            <div
              className="h-full bg-[#38bdf8] transition-[width] duration-100"
              style={{ width: `${n}%` }}
            />
          </div>
          <div className="font-mono-tech mt-4 text-sm text-[#38bdf8]">
            {String(n).padStart(3, '0')}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
