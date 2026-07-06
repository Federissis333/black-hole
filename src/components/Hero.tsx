import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: 'back.out' }
    )

    // Parallax effect
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.01
      const y = (e.clientY - window.innerHeight / 2) * 0.01
      gsap.to('.hero-bg', { x, y, duration: 0.5 })
    })
  })

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accretion rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-radiation rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cosmic rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="hero-title text-7xl md:text-8xl font-black text-glow-strong mb-6 leading-tight">
          Um Abismo
          <br />
          <span className="bg-gradient-to-r from-accretion to-radiation bg-clip-text text-transparent">Infinito</span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Mergulhe na física mais extrema do universo. Descubra os mistérios dos buracos negros através de uma experiência visual única.
        </p>

        <div className="hero-cta flex gap-4 justify-center">
          <button className="bg-accretion hover:bg-radiation text-white px-8 py-4 rounded-lg font-bold text-lg btn-glow transition-all hover:scale-105">
            Explorar Agora
          </button>
          <button className="border-2 border-radiation text-radiation hover:bg-radiation hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
            Aprender Mais
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
