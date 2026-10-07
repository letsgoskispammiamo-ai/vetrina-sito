import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const AZURE = '#38bdf8'
const BONE = '#f2efe9'

function WireCore() {
  const outer = useRef<THREE.Mesh>(null)
  const inner = useRef<THREE.Mesh>(null)
  const nucleus = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (outer.current) {
      outer.current.rotation.x += delta * 0.14
      outer.current.rotation.y += delta * 0.22
    }
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.24
      inner.current.rotation.y -= delta * 0.16
    }
    if (nucleus.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.12
      nucleus.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color={AZURE} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color={BONE} wireframe transparent opacity={0.35} />
      </mesh>
      {/* pulsing nucleus */}
      <mesh ref={nucleus}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color={AZURE} />
      </mesh>
    </group>
  )
}

function OrbitRing({ radius, speed, tilt, opacity }: { radius: number; speed: number; tilt: number; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0.4, 0]}>
      <torusGeometry args={[radius, 0.012, 8, 128]} />
      <meshBasicMaterial color={AZURE} transparent opacity={opacity} />
    </mesh>
  )
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.025
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={BONE} size={0.035} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const { x, y } = state.pointer
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.3, 0.06)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.22, 0.06)
  })
  return <group ref={ref}>{children}</group>
}

export default function Scene3D() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 9.5 : 7.5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
      eventSource={typeof document !== 'undefined' ? document.documentElement : undefined}
      eventPrefix="client"
    >
      <Rig>
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
          <WireCore />
        </Float>
        <OrbitRing radius={3.2} speed={0.3} tilt={1.2} opacity={0.5} />
        <OrbitRing radius={3.9} speed={-0.2} tilt={1.6} opacity={0.3} />
        <OrbitRing radius={4.6} speed={0.12} tilt={0.9} opacity={0.18} />
        <Particles count={isMobile ? 350 : 900} />
      </Rig>
    </Canvas>
  )
}
