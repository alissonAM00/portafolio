<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto mt-4">
         <div class="card h-100">
        <img class="card-img-top" :src="proyecto.imagen" :alt="proyecto.title">
        <div class="card-body">
            <h5 class="card-title">{{proyecto.title}}</h5>
            <p class="card-text">{{proyecto.description}}</p>
            <div class="btn-group gap-2">
        <button class="btn btn-primary" @click="redirectTo(proyecto.githubLink)">Ver código en GitHub</button>
        <button class="btn btn-secondary" @click="redirectTo(proyecto.liveLink)">Ver la aplicación</button>
      </div>
        </div>
    </div>
   
    </div>
</template> 

<script>
export default {
    name: 'proyectoCard',
    props: {
        proyecto: Object
    },
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
.card-img-top{
    height: 200px;
    object-fit: cover;
}
    
</style>