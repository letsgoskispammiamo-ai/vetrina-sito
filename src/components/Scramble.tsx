import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01'

/**
 * Scrambles through random glyphs before settling on each word,
 * cycling through the provided list.
 */
export default function Scramble({ words, interval = 2600, className }: { words: string[]; interval?: number; className?: string }) {
  const [text, setText] = useState(words[0])
  const indexRef = useRef(0)

  useEffect(() => {
    let frame: number
    let timeout: ReturnType<typeof setTimeout>

    const scrambleTo = (target: string) => {
      let step = 0
      const total = 14
      const tick = () => {
        step++
        const progress = step / total
        const out = target
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            return i / target.length < progress
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
        setText(out)
        if (step < total) frame = requestAnimationFrame(tick)
      }
      tick()
    }

    const cycle = () => {
      indexRef.current = (indexRef.current + 1) % words.length
      scrambleTo(words[indexRef.current])
      timeout = setTimeout(cycle, interval)
    }
    timeout = setTimeout(cycle, interval)
    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frame)
    }
  }, [words, interval])

  return (
    <span className={className}>
      {text}
      <span className="caret-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-[#38bdf8]" />
    </span>
  )
}
