<template>
    <h1>Contactame</h1>

    <div class="row">
        <div class="col">
            <P>¿Quiere contactarme?</P>
            <a href="mailto:tucorreo@ejemplo.com?subject=Asunto%20del%20correo&body=Hola,%20me%20gustaría%20contactarte%20para..." class="btn">Envíeme un correo</a>
            <p> contacteme por whatsApp</p>
            <a href="https://wa.me/56922546870?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte" class="btn"> Envíeme un WhatsApp</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
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
  .btn {
            background-color: #25D366;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .btn {
            background-color: #20b357;
        }
    
</style>