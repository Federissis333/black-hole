import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BlackHoleVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0.1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 2.5

    // Black Hole (Central sphere with glow)
    const blackHoleGeometry = new THREE.SphereGeometry(0.5, 64, 64)
    const blackHoleMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
    })
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial)
    scene.add(blackHole)

    // Event Horizon Glow
    const glowGeometry = new THREE.SphereGeometry(0.55, 64, 64)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      transparent: true,
      opacity: 0.3,
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    scene.add(glow)

    // Accretion Disk
    const diskGeometry = new THREE.TorusGeometry(1.2, 0.3, 64, 100)
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: 0xf7b801,
      transparent: true,
      opacity: 0.7,
    })
    const disk = new THREE.Mesh(diskGeometry, diskMaterial)
    disk.rotation.x = Math.PI / 3
    scene.add(disk)

    // Particle system for accretion
    const particleCount = 500
    const particles = new THREE.BufferGeometry()
    const positionArray = new Float32Array(particleCount * 3)
    const velocityArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1 + Math.random() * 0.5
      const y = (Math.random() - 0.5) * 0.3

      positionArray[i * 3] = Math.cos(angle) * radius
      positionArray[i * 3 + 1] = y
      positionArray[i * 3 + 2] = Math.sin(angle) * radius

      velocityArray[i * 3] = Math.cos(angle) * 0.01
      velocityArray[i * 3 + 1] = 0
      velocityArray[i * 3 + 2] = Math.sin(angle) * 0.01
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xff6b35,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      blackHole.rotation.y += 0.001
      glow.rotation.y += 0.0005
      disk.rotation.z += 0.002
      particleSystem.rotation.y += 0.0008

      // Update particles
      const positions = particles.getAttribute('position') as THREE.BufferAttribute
      const posArray = positions.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        let x = posArray[i * 3]
        let y = posArray[i * 3 + 1]
        let z = posArray[i * 3 + 2]

        const dist = Math.sqrt(x * x + y * y + z * z)
        if (dist > 0.5) {
          const force = 0.02 / (dist * dist)
          posArray[i * 3] -= (x / dist) * force
          posArray[i * 3 + 2] -= (z / dist) * force
        } else {
          const angle = Math.random() * Math.PI * 2
          const radius = 1 + Math.random() * 0.5
          posArray[i * 3] = Math.cos(angle) * radius
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 0.3
          posArray[i * 3 + 2] = Math.sin(angle) * radius
        }
      }

      positions.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section className="py-20 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow-strong">Visualização 3D</h2>
      <div
        ref={containerRef}
        className="w-full h-96 md:h-screen rounded-2xl overflow-hidden shadow-2xl border border-accretion/30"
      />
    </section>
  )
}

export default BlackHoleVisualization
