<template>
 <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container text-center">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src="/img/logo.jpg" alt="logo"
        height="90"
        class="d-inline-block align-text-top rounded-circle">
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Chile</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body link" href="https://www.linkedin.com/"  target="_blank"><i class="bi bi-linkedin" style="font-size: 3rem;"></i></a></li>
    </ul>
  </footer>
</template>

<script>
export default {
    name: 'FooterComp',
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

<style scoped>
.link{
 color: rgb(92, 179, 223) !important;
} 

    
</style>