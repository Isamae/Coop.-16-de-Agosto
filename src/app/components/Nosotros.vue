<template>
    <div>
            <div id="container-equipo" class="container py-4" >
                <div class="section-title  mx-auto">
                    <p style="color:rgba(239,239,227,1)">Coop. de Transporte de Pasajeros 16 de Agosto</p>
                </div>
                <div class="mb-4 mx-auto row container-hover color-blanco" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <div class="d-flex justify-content-center style-imagen-n" >
                                    <img class="" src="16deAgosto.jpeg" style="width: 350px;">
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="text-center style-imagen-n" >
                                <h2>Eslogan</h2>
                                <p>“Más que viajar…    ...una manera de compartir”</p>
                                <p>Somos una empresa de transporte que brinda su servicio dentro y fuera de Morona Santiago. 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 mx-auto row" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                <img class="" src="svg-pegado-182.svg"/>
                                <h3 >Visión</h3>
                                <p>“Ser la cooperativa de transporte líder en la región, reconocida por su seguridad, confort, atención de calidad, responsabilidad social y constante innovación.”</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                    <img class="" src="svg-pegado-152.svg"/>
                                    <h3>Misión</h3>
                                    <p>“Somos una cooperativa de transporte de pasajeros y encomiendas, que brinda un servicio de manera ágil, responsable y oportuna; con amabilidad, respeto, seguridad y confort; contribuyendo con el desarrollo social y económico de nuestra zona de influencia."</p>
                            </div>  
                        </div>
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                    <img class="" src="svg-pegado-170.svg"/>
                                    <h3>Valores</h3>
                                    <p>Somos honestos, responsables, sinceros, altruistas, colaborativos, respetuosos, y procuramos el trabajo en equipo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
    </div>
</template>
<style scoped>
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
        padding: 20px;
    }
    .elemen-bussines{
        padding: 25px;
    }
    .elemen-bussines>div{
        width: 100%; 
        padding: 20px; 
        background-color: #FFFFFF; 
        border-radius: calc(.25rem - 1px);
    }
    .contaner-contact-nos{
        margin: 0%;
    }
    .contaner-contact-nos>{
        padding-left: 2em; 
        padding-right: 2em;
        margin: 0%;
    }
    .contact-form-nosotros>div{
        margin: 0%;
    }
    .margin-cero{
        margin: 0%;
    }
    .actAsDiv{
        width:100%; 
        height:275px;
    }
</style>