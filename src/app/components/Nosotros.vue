<template>
    <div>
        <div id="container-equipo" class="container py-4" >
            <div class="section-title  mx-auto">
                <p style="color:rgba(239,239,227,1)">Coop. de Transporte de Pasajeros 16 de Agosto</p>
            </div>
            <div class="mb-4 container-hover elemen-bussines" data-aos="fade-up" data-aos-delay="100" style="">
                <div style="background-image: url('img/marco.jpg'); background-repeat: no-repeat; background-position: center center; background-size: cover;  width: 100%;">
                    <div class="row mb-5">
                         <div class="col-12 col-md-5 mx-auto my-auto" style="padding:0">
                            <div class="d-flex justify-content-center style-imagen-n" >
                                    <img class="" src="16deAgosto.png" style="width: 350px;">
                            </div>
                        </div>
                        <div class="col-12 col-md-7 mx-auto my-auto" style="padding:0">
                            <div class="text-center style-imagen-n" >
                                <p style="font-family:'Canter Bold'; font-weight:normal; font-size:42px;">“Más que viajar </p> 
                                <img class="" src="svg-pegado-170.svg"/> 
                                <p style="font-family:'Canter Bold'; font-weight:normal; font-size:42px;"> una manera de compartir”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-4 mx-auto row" data-aos="fade-up" data-aos-delay="100">
                <div class="row">
                    <div class="col-12 col-md-4 elemen-bussines">
                        <div class="text-center container-hover " style="background-image: url('img/marco5.png');" >
                            <img class="" src="svg-pegado-182.svg"/>
                            <h3 >Visión</h3>
                            <p>“Ser la cooperativa de transporte líder en la región, reconocida por su seguridad, confort, atención de calidad, responsabilidad social y constante innovación.”</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 elemen-bussines">
                        <div class="text-center container-hover " style="background-image: url('img/marco5.png');">
                                <img class="" src="svg-pegado-152.svg"/>
                                <h3>Misión</h3>
                                <p>“Somos una cooperativa de transporte de pasajeros y encomiendas, que brinda un servicio de manera ágil, responsable y oportuna; con amabilidad, respeto, seguridad y confort; contribuyendo con el desarrollo social y económico de nuestra zona de influencia."</p>
                        </div>  
                    </div>
                    <div class="col-12 col-md-4 elemen-bussines">
                        <div class="text-center container-hover " style="background-image: url('img/marco5.png');">
                                <img class="" src="svg-pegado-170.svg"/>
                                <h3>Valores</h3>
                                <p>Somos honestos, responsables, sinceros, altruistas, colaborativos, respetuosos, y procuramos el trabajo en equipo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="teem" class="teem section-bg">
            <div class="container text-center">
                <div class="section-title" data-aos="fade-up">
                    <h2>Equipo</h2>
                    <p>Nuestro equipo es profesional en su área y esta disponibles para servirle con la mejor calidad</p>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-1.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-2.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-3.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-1.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-2.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="img/team/team-3.jpg" alt="Generic placeholder image" width="220" height="220">
                        <h6>Heading</h6>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section id="clients" class="clients">
            <div class="container">
                <div class="section-title">
                    <h2>Nuestras Alianzas</h2>
                    <p style="color:rgba(239,239,227,1)" >Empresas</p>
                </div>
                <div class="owl-carousel clients-carousel" data-aos-delay="100">
                    <img src="img/clients/client-1.png" alt="">
                    <img src="img/clients/client-2.png" alt="">
                    <img src="img/clients/client-3.png" alt="">
                    <img src="img/clients/client-4.png" alt="">
                    <img src="img/clients/client-5.png" alt="">
                    <img src="img/clients/client-6.png" alt="">
                    <img src="img/clients/client-7.png" alt="">
                    <img src="img/clients/client-8.png" alt="">
                </div>
            </div>
            
        </section>  -->
    </div>
</template>
<style scoped>
    .elemen-bussines div.container-hover{
        
        background-repeat: no-repeat;
        background-position: center center; 
        background-size: cover;
    }
    .container-hover:hover {
        box-shadow: 11px 11px 8px rgba(0,0,0,0.5);
    }
    /* Celular Movil*/
    @media (min-width: 300px) and (max-width: 414px)
    {
        #container-equipo>div{
            width: 100% !important; 
        }
        #container-equipo{
            padding-top: 0% !important;
        }
        .style-imagen-n img{
            width: 200px !important; 
        }
    }
    /* Mini tablet*/
    @media (min-width: 415px) and (max-width: 600px)
    {
        #container-equipo>div{
            width: 100% !important;  
        }
        .style-imagen-n img{
            width: 200px !important; 
        }
    }
    @media (min-width: 601px) and (max-width: 768px)
    {
        #container-equipo>div{
            width: 100% !important;  
        }
        .style-imagen-n img{
            width: 250px !important; 
        }
    }
    /* tablet*/
    @media (min-width: 769px) and (max-width: 980px)
    {
        #container-equipo>div{
            width: 100% !important;  
        }
    }
    /* Escritorio*/
    @media screen and (min-width: 981px)
    {
    
    }
    /*container equipo*/
    #container-equipo{
        padding: 25px;
    }
    #container-equipo>div{
        /*width: 940px; */
        border-radius: calc(.25rem - 1px);
    }
    .color-blanco{
        background-color: #FFFFFF;
    }
    .style-imagen-n{
        width: 100%; 
        padding: 10px;
    }
    /*.elemen-bussines{
       padding: 25px;
    }*/
    .elemen-bussines>div{
        width: 100%; 
        padding: 20px; 
        background-color: #FFFFFF; 
        border-radius: calc(.25rem - 1px);
    }
</style>