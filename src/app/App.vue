<template lang= "{{ str_replace('_', '-', app()->getLocale()) }}">
    <div class="hgpg" >
        <Nav></Nav>
        <template v-if="carruselVisible===0">
            <Carusel></Carusel>
        </template>
        <router-view></router-view>
        <Footer></Footer>
    </div>
    
</template>

<script>
    import Nav from './components/Nav.vue';
    import Carusel from './components/Carusel.vue';
    import Footer from './components/Footer.vue';
    import {mapState,mapMutations} from 'vuex'

    export default {
        data(){
            return{

            }
        },
        name: 'App',
        components:{
            Nav,
            Carusel,
            Footer
        },
        computed:{
            ...mapState(['carruselVisible'])
        },
        methods:{
            ...mapMutations(['setCarruselVisible'])
        }

    }
</script>
<style>
    .hgpg{
        height: 100%;
        position: absolute;
        width: 100%;
    }
</style>
