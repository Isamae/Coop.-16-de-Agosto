<template>
    <div>
        <div class="section-bg">
            <div id="container-equipo" class="container" >
                <div class="section-title  mx-auto">
                    <p>Coop. de Transporte de Pasajeros 16 de Agosto</p>
                </div>
                <div class="mb-4 mx-auto row container-hover color-blanco" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <div class="d-flex justify-content-center style-imagen-n" >
                                    <img class="" src="svg-pegado-272648x260.svg"/>
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="text-center style-imagen-n" >
                                <h2>¿Que es Biglieto?</h2>
                                <p>Somos una empresa tecnológica que optimiza, automatiza y moderniza el transporte terrestre, mediante una plataforma ágil y segura. 
                                </p>
                                <p>"Perder tu tiempo no es una opcion"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 mx-auto row" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                <img class="" src="svg-pegado-182.svg"/>
                                <h3>visión</h3>
                                <p>Ser un referente tecnológico para innovación y progreso de los sistemas y procesos de transporte.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                    <img class="" src="svg-pegado-152.svg"/>
                                    <h3>propósito</h3>
                                    <p>Ayudar a las personas a ahorrar su tiempo</p>
                            </div>  
                        </div>
                        <div class="col-12 col-md-4 elemen-bussines">
                            <div class="text-center container-hover " >
                                    <img class="" src="svg-pegado-170.svg"/>
                                    <h3>valores</h3>
                                    <p>Somos honestos, responsables, sinceros, altruistas, colaborativos, respetuosos, y procuramos el trabajo en equipo</p>
                            </div>
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
    }
    /* Mini tablet*/
    @media (min-width: 415px) and (max-width: 600px)
    {
        #container-equipo>div{
            width: 100% !important;  
        }
    }
    @media (min-width: 601px) and (max-width: 768px)
    {
        #container-equipo>div{
            width: 100% !important;  
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