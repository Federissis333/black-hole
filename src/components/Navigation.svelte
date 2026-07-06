<script lang="ts">
  let isScrolled = false

  const handleScroll = () => {
    isScrolled = window.scrollY > 50
  }

  const navItems = ['Explorar', 'Fatos', 'Galeria', 'Interativo']
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-event-horizon/80 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  }`}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <div class="text-2xl font-bold text-glow-strong">🌌 BLACK HOLE</div>
      <ul class="hidden md:flex space-x-8">
        {#each navItems as item}
          <li class="text-white hover:text-accretion transition-colors cursor-pointer text-glow">
            {item}
          </li>
        {/each}
      </ul>
      <button class="bg-accretion hover:bg-radiation text-white px-6 py-2 rounded-full btn-glow font-semibold">
        Conectar
      </button>
    </div>
  </div>
</nav>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
