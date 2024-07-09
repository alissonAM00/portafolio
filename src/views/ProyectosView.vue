<template>
    <h1>Mis Proyectos</h1>
    <div class="proyectos row">
        <proyecto-card
        v-for="proyecto in allProyectos"
         :key="proyecto.id"
         :proyecto="proyecto"/>
    </div>
</template>

<script>
import ProyectoCard from '@/components/ProyectoCard.vue'
import {mapActions, mapGetters} from "vuex"
export default {
  components: { ProyectoCard },
    name: 'ProyectView',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['allProyectos']) 
    },
    methods: {
        ...mapActions(['fetchProyectos'])
    },
    created() {
        this.fetchProyectos();
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>