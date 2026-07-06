import { useState } from 'react'
import { motion } from 'framer-motion'

const Interactive = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const blackHoleTypes = [
    {
      id: 'stellar',
      name: 'Buraco Negro Estelar',
      mass: '5-20 massas solares',
      formed: 'Colapso de estrela massiva',
      properties: 'Pequeno e denso',
      color: 'from-accretion to-radiation',
    },
    {
      id: 'supermassive',
      name: 'Buraco Negro Supermassivo',
      mass: 'Milhões a bilhões de massas solares',
      formed: 'Centro de galáxias',
      properties: 'Gravitacionalmente dominante',
      color: 'from-radiation to-cosmic',
    },
    {
      id: 'intermediate',
      name: 'Buraco Negro Intermediário',
      mass: 'Centenas a milhares',
      formed: 'Colisão de objetos estelares',
      properties: 'Raro e misterioso',
      color: 'from-cosmic to-accretion',
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-strong">Tipos de Buracos Negros</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blackHoleTypes.map((bh) => (
            <motion.div
              key={bh.id}
              onClick={() => setSelectedType(selectedType === bh.id ? null : bh.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${bh.color} p-8 rounded-lg cursor-pointer border-2 transition-all ${
                selectedType === bh.id ? 'border-radiation scale-105' : 'border-accretion/30'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{bh.name}</h3>
              {selectedType === bh.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 text-sm text-gray-100"
                >
                  <p><span className="font-bold">Massa:</span> {bh.mass}</p>
                  <p><span className="font-bold">Formação:</span> {bh.formed}</p>
                  <p><span className="font-bold">Propriedades:</span> {bh.properties}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interactive
