import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import BlackHoleVisualization from './components/BlackHoleVisualization'
import Facts from './components/Facts'
import Gallery from './components/Gallery'
import Interactive from './components/Interactive'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-void via-dark-matter to-event-horizon relative overflow-hidden">
      <div className="starfield" />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <BlackHoleVisualization />
        <Facts />
        <Gallery />
        <Interactive />
        <Footer />
      </div>
    </div>
  )
}

export default App
