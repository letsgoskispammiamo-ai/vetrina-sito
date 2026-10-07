import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

/**
 * 3D tilt on hover: card rotates following the cursor.
 */
export default function Tilt({ children, max = 8, className }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [t, setT] = useState({ rx: 0, ry: 0 })

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setT({ rx: -py * max, ry: px * max })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: t.rx === 0 && t.ry === 0 ? 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' : 'transform 0.06s linear',
        transformStyle: 'preserve-3d',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}
