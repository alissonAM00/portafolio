<template>
  <div class="about">
    <h1>Sobre Mí</h1>
    <CarouselComp/>

    <section>
    <h3 class="my-5">Mis Habilidades</h3>
  </section>
  <section class="d-flex justify-content-evenly">
    <span>
      <img src="/img/html.png" alt="" />
    </span>
    <span>
      <img src="/img/css.png" alt="" />
    </span>
    <span>
      <img src="/img/js.png" alt="" />
    </span>
    <span>
      <img src="/img/sass.png" alt="" />
    </span>
    <span>
      <img src="/img/vue.png" alt="" />
    </span>
  </section>

  </div>
</template>
<script>
import CarouselComp from '../components/CarouselComp.vue'
export default {
  name:"AboutView",
  components:{
    CarouselComp
  }
  
}
</script>