<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <section id="hero" class="d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>Mejoramos nuestro servicio con venta de pasajes online en </h1>
                                    <a href="https://www.isyplus.com" target="_blank" style="color:rgba(239,239,227,1)"> <i class="bx bx-rocket"></i> <u>www.isyplus.com</u> </a>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 hero-img">
                                    <img src="img/car/bus.png" class="img-fluid animated" alt="">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="carousel-item">
                    <section id="hero" class="d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>Transporte de pasajeros y encomiendas </h1>
                                    <h2>dentro y fuera de Morona Santiago</h2>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 hero-img">
                                    <img src="img/camion.png" class="img-fluid animated" alt="">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="carousel-item">
                    <section id="hero" class="d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>Entrega de encomiendas a domicilio </h1>
                                    <h2>en el cantón Gualaquiza</h2>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 hero-img">
                                    <img src="img/camion.png" class="img-fluid animated" alt="">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>
<style >
    @media screen and (min-width: 769px)
    {
        .carousel-inner .carousel-item .row h1, .carousel-inner .carousel-item .row h2{
            color:rgba(239,239,227,1) !important;
        }
    }
   
</style>