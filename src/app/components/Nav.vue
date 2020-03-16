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
                
                <li ><a href="index.html">Home</a></li>
                <li>
                    <router-link  :to="{name:'Oficina'}">
                        Oficina
                    </router-link>
                </li>
                <li>
                    <router-link  :to="{name:'Rutas'}">
                        Rutas
                    </router-link>
                </li>
                <li>
                    <router-link  :to="{name:'Nosotros'}">
                        Nosotros
                    </router-link>
                </li>
                <li>
                    <router-link  :to="{name:'Contacto'}">
                        Contactos
                    </router-link>
                </li>

            <li class="get-started"><a href="#about">Login</a></li>
            </ul>
        </nav>
        <!-- .nav-menu -->

        </div>
    </header>
</template>
<script>
export default {
    name:"Nav"
}
</script>