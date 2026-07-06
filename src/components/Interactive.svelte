<script lang="ts">
  let selectedType: string | null = null

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

  const toggleType = (id: string) => {
    selectedType = selectedType === id ? null : id
  }
</script>

<section class="py-20 relative">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-strong">Tipos de Buracos Negros</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {#each blackHoleTypes as bh}
        <div
          on:click={() => toggleType(bh.id)}
          class={`bg-gradient-to-br ${bh.color} p-8 rounded-lg cursor-pointer border-2 transition-all ${
            selectedType === bh.id ? 'border-radiation scale-105' : 'border-accretion/30'
          }`}
        >
          <h3 class="text-2xl font-bold mb-4 text-white">{bh.name}</h3>
          {#if selectedType === bh.id}
            <div class="space-y-3 text-sm text-gray-100">
              <p><span class="font-bold">Massa:</span> {bh.mass}</p>
              <p><span class="font-bold">Formação:</span> {bh.formed}</p>
              <p><span class="font-bold">Propriedades:</span> {bh.properties}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
