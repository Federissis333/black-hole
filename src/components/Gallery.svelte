<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const images = [
    {
      title: 'M87 Black Hole',
      description: 'A primeira imagem de um buraco negro capturada pelo Event Horizon Telescope',
      gradient: 'from-accretion to-radiation',
    },
    {
      title: 'Sagittarius A*',
      description: 'O buraco negro supermassivo no centro da nossa galáxia',
      gradient: 'from-radiation to-cosmic',
    },
    {
      title: 'Disco de Acreção',
      description: 'Matéria em alta rotação emitindo raios X intensos',
      gradient: 'from-cosmic to-accretion',
    },
    {
      title: 'Jatos Relativísticos',
      description: 'Feixes de energia ejetados pelos polos do buraco negro',
      gradient: 'from-radiation to-accretion',
    },
  ]
</script>

<section class="py-20 relative">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-strong">Galeria Cósmica</h2>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      class="rounded-2xl overflow-hidden"
    >
      {#each images as img, i}
        <SwiperSlide key={i}>
          <div class={`bg-gradient-to-br ${img.gradient} p-12 rounded-2xl min-h-96 flex flex-col justify-center items-center text-center`}>
            <h3 class="text-3xl font-bold mb-4 text-white">{img.title}</h3>
            <p class="text-lg text-gray-100 max-w-2xl">{img.description}</p>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</section>
