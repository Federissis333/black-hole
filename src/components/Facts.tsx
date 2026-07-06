import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Facts = () => {
  useEffect(() => {
    gsap.utils.toArray('.fact-card').forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const facts = [
    {
      title: 'Horizonte de Eventos',
      description: 'O ponto de não retorno. Uma vez atravessado, nada escapa, nem mesmo a luz.',
      icon: '⚫',
    },
    {
      title: 'Disco de Acreção',
      description: 'Matéria em espiral emitindo radiação extrema enquanto cai no buraco negro.',
      icon: '🌀',
    },
    {
      title: 'Singularidade',
      description: 'Um ponto infinitamente denso onde a física conhecida colapsa completamente.',
      icon: '💫',
    },
    {
      title: 'Relatividade Extrema',
      description: 'O tempo flui diferentemente perto de um buraco negro devido à gravidade massiva.',
      icon: '⏰',
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-strong">Fatos Fascinantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="fact-card bg-gradient-to-br from-event-horizon to-dark-matter p-8 rounded-lg border border-accretion/30 hover:border-accretion/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accretion/20"
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-accretion">{fact.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facts
