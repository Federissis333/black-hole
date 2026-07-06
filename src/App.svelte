<script lang="ts">
  import Navigation from './components/Navigation.svelte'
  import Hero from './components/Hero.svelte'
  import BlackHoleVisualization from './components/BlackHoleVisualization.svelte'
  import Facts from './components/Facts.svelte'
  import Gallery from './components/Gallery.svelte'
  import Interactive from './components/Interactive.svelte'
  import Footer from './components/Footer.svelte'
  import { onMount } from 'svelte'
  import Lenis from 'lenis'
  import './app.css'

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
  })
</script>

<div class="min-h-screen bg-gradient-to-br from-void via-dark-matter to-event-horizon relative overflow-hidden">
  <div class="starfield" />
  <div class="relative z-10">
    <Navigation />
    <Hero />
    <BlackHoleVisualization />
    <Facts />
    <Gallery />
    <Interactive />
    <Footer />
  </div>
</div>

<style global>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
