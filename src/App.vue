<template>
 <NavBar/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:antiquewhite;
}
  body, html {
  background: rgb(37,4,71);
  background: radial-gradient(circle, rgba(37,4,71,1) 0%, rgba(9,9,121,0.8941701680672269) 45%, rgba(0,212,255,1) 100%);
  
}

</style>
