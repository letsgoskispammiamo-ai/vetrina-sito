import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

/**
 * Magnetic wrapper: element is gently pulled toward the cursor.
 */
export default function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 && pos.y === 0 ? 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' : 'transform 0.08s linear',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}
