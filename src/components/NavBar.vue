<template>
  <nav class="navbar navbar-expand-lg bg-body-transparent text-center">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/img/logo.jpg" alt="logo"
        height="90"
        class="d-inline-block align-text-top rounded-circle"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav ms-auto">
        <router-link  class="nav-link"   to="/">Home</router-link>
        <router-link  class="nav-link"  to="/about">Sobre Mí</router-link>
        <router-link  class="nav-link"  to="/proyectos">Proyectos</router-link>
        <router-link  class="nav-link"  to="/contacto">Contacto</router-link>
      </div>
    </div> 
  </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
    nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>