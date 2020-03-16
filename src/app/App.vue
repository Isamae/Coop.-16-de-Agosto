<template lang= "{{ str_replace('_', '-', app()->getLocale()) }}">
    <div class="hgpg" >
         <!-- <router-link :to="{name: 'CreateUser'}" class="btn btn-primary">
            Crear Item
        </router-link> -->
        <Nav></Nav>
        <Carusel></Carusel>
        <router-view></router-view>
        <Footer></Footer>
    </div>
    
</template>

<script>
    import Nav from './components/Nav.vue'
    import Carusel from './components/Carusel.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components:{
            Nav,
            Carusel,
            Footer
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
