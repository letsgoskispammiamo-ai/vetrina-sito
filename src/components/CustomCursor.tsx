import { useEffect, useRef } from 'react'

/**
 * Custom cursor: small azure dot + trailing ring, difference blend.
 * Only active on devices with a fine pointer (desktop).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current!
    const ring = ringRef.current!
    let mx = -100, my = -100, rx = -100, ry = -100
    let hovering = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      const t = e.target as HTMLElement
      hovering = !!t.closest('a, button, [role="button"], input, textarea, [data-cursor]')
    }

    let raf: number
    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${hovering ? 2.2 : 1})`
      ring.style.opacity = hovering ? '0.9' : '0.5'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)
    document.documentElement.classList.add('has-custom-cursor')
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#38bdf8] md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 rounded-full border border-[#38bdf8] mix-blend-difference transition-opacity md:block"
      />
    </>
  )
}
