const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-event-horizon to-transparent py-20 border-t border-accretion/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-glow">🌌 Black Hole</h3>
            <p className="text-gray-400 text-sm">Explorando os mistérios mais profundos do universo.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accretion">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-accretion cursor-pointer">Explorar</li>
              <li className="hover:text-accretion cursor-pointer">Fatos</li>
              <li className="hover:text-accretion cursor-pointer">Galeria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accretion">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-accretion cursor-pointer">NASA</li>
              <li className="hover:text-accretion cursor-pointer">ESO</li>
              <li className="hover:text-accretion cursor-pointer">Documentação</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accretion">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-accretion cursor-pointer">Email</li>
              <li className="hover:text-accretion cursor-pointer">Twitter</li>
              <li className="hover:text-accretion cursor-pointer">GitHub</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accretion/20 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Black Hole Explorer. Todos os direitos reservados. 🚀</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
