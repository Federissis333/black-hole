import { useEffect, useState } from 'react'
import gsap from 'gsap'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Explorar', 'Fatos', 'Galeria', 'Interativo']

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-event-horizon/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-glow-strong">🌌 BLACK HOLE</div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="text-white hover:text-accretion transition-colors cursor-pointer text-glow"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-accretion hover:bg-radiation text-white px-6 py-2 rounded-full btn-glow font-semibold">
            Conectar
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
