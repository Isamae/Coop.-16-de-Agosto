<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="container-fluid d-flex">

            <div class="logo mr-auto">
                <h1 class="text-light"><a href="index.html"><span>Coop. 16 de Agosto</span></a></h1>
                <!--  si usted prefiere puede usar el  logo de la empresa con el siguiente condigo -->
                <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    
                    <li  @click="setVcarrusel(0)">
                        <router-link  :to="{name:'Home'}">
                            Home
                        </router-link>
                    </li>
                    <li @click="setVcarrusel(0)">
                        <router-link   :to="{name:'Oficina'}" >
                            Oficina
                        </router-link>
                    </li>
                    <li @click="setVcarrusel(0)">
                        <router-link   :to="{name:'Rutas'}" >
                            Rutas
                        </router-link>
                    </li>
                    <li @click="setVcarrusel(0)">
                        <router-link   :to="{name:'Nosotros'}">
                            Nosotros
                        </router-link>
                    </li>
                    <li @click="setVcarrusel(0)">
                        <router-link   :to="{name:'Contacto'}">
                            Contactos
                        </router-link>
                    </li>
                    <template v-if="navVisible==0">
                        <li @click="setVcarrusel(1)" class="get-started text-center">
                            <router-link  :to="{name: 'Login'}" >
                                Login
                            </router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li @click="setNvisible(0)" class="get-started">
                            <a>
                                Salir
                            </a>
                        </li>
                    </template>
                    
                </ul>
            </nav>
            <!-- .nav-menu -->

        </div>
        
    </header>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
    name:"Nav",
    computed:{
        ...mapState(['navVisible'])
    },
    methods:{
        setVcarrusel(dato){
            this.setCarruselVisible(dato)
        },
        setNvisible(dato){
            this.axios.get("/api/logout")
            .then(() => {
                this.setNavVisible(dato)
                this.setCarruselVisible(0)
                this.$cookies.remove("user");
                this.$router.push("/")
                
            })
        },
        ...mapMutations(['setCarruselVisible','setNavVisible'])
    }
}
</script>
<style >
    li{
        color: aliceblue;
    }
</style>