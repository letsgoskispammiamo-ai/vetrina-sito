import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin azure progress bar pinned to the top of the viewport.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[#38bdf8]"
      style={{ scaleX }}
    />
  )
}
