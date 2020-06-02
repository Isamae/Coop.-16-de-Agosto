<template lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <div>
        <section id="services" class="services py-4">
            <div class="container">
                <div class="embed-responsive embed-responsive-16by9 " style="margin-bottom: 60px;">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ukib0irIzcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="section-title">
                    <h2>Servicios</h2>
                    <p style="color:rgba(239,239,227,1)">Nuestros Servicios están disponibles dentro y fuera de la provincia</p>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-user"></i></div>
                            <h4 class="title"><a href="">Transporte de Pasajeros</a></h4>
                            <p class="description">Dentro y fuera de la provincia de Morona Santiago con la mejor calidad</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-mail-send"></i></div>
                            <h4 class="title"><a href="">Encomiendas</a></h4>
                            <p class="description">Envió y recepción de encomiendas dentro y fuera de la provincia</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400" href="https://www.isyplus.com">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bxs-plane"></i></div>
                            <h4 class="title"><a href="https://www.isyplus.com" target="_blank">Venta de Boletos</a></h4>
                            <p class="description">Reserva y venta de Boletos online y en ventanillas  </p>
                            <a style="font-size: 16px;" href="https://www.isyplus.com" target="_blank">www.isyplus.com</a>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <h4 class="title"><a href="">Cobertura</a></h4>
                            <p class="description">Viajes a las provincias de Azuay, Loja , Morona Santiago</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section id="informmation" >
            <div class="footer-top">
                <div class="container">
                    <div class="section-title">
                        <p>Cooperativa de Pasajeros 16 de Agosto</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12 footer-contact" data-aos="fade-up" data-aos-delay="100">
                            Av. Sixto Durán Ballén y 12 de Febrero (esquina); Abierto de 08h00 a 13h00 y de 14h00 a 17h00. <br><br>
                            <strong>SEDE SOCIAL (Teléfono ): </strong>07-2780846<br>
                            <strong>Email:</strong> cooperativa16deagosto@hotmail.com<br>
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-12 footer-contact" data-aos="fade-up" data-aos-delay="100">
                            <h4>Nuestras Redes Sociales</h4>
                            <div class="social-links mt-3">
                                <a href="https://www.facebook.com/coop16deagosto/" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
 <script>
 export default {
    name: 'home-page',
    data() {
        return {
            mensaje:{
                nombre:'',
                email:'',
                texto:'',
            }
        }
    },
    created() {
    },
    mounted(){
    },
     methods: {
        sendMensaje(){
            const uri = "/mensaje"
            this.axios.post(uri, this.mensaje)
            .then(res => {
                alert(res.data.mensaje);
                this.$router.replace({name:"Home"});
            })
            .catch(err => console.log(err));
         }
     },
 }
 </script>