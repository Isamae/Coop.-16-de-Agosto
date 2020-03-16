<template>
    <div>
        <section id="contact" class="contact">
            <div class="container ">

                <div class="section-title" data-aos="fade-up">
                    <h2>Contactanos</h2>
                    <p>Tienes alguna sugerencia o denuncia comunicate</p>
                </div>
                <div class="row">
                    <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div class="info">
                            <div class="address">
                                <i class="icofont-google-map"></i>
                                <h4>Ubicacion:</h4>
                                <p>Morona Santiago, Gualaquiza AV AV</p>
                            </div>

                            <div class="email">
                                <i class="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p>empresa@example.com</p>
                            </div>

                            <div class="phone">
                                <i class="icofont-phone"></i>
                                <h4>Telefono:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>
                            <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&height=400&hl=es&coord=-3.4042076956802307,-78.58405709266663&q=Ecuador%2C%20Gualquiza+(Coop%2016%20de%20Agosto)&ie=UTF8&t=k&z=16&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            
                        </div>

                    </div>
                    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="name">Nombre</label>
                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="name">Email</label>
                            <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Objetivo</label>
                            <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <label for="name">Mensaje</label>
                            <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>