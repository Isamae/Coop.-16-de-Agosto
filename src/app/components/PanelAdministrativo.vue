<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">{{user.nick}}</a>  
            <button style="p" @click="logout">Cerrar Sesion</button>          
        </nav>
        <div class="container">
            <section>
                <div class="row">
                    <div class="col-2">
                        <div class="card">
                            <div class="card-body">
                                <form @submit.prevent="enviarRespuesta">
                                    <div class="form-group">
                                        <input v-model="respuesta.titulo" type="text" placeholder="Insertar Respuesta Name" class="form-control" required>

                                    </div>
                                    <div class="form-group">
                                        <textarea v-model="respuesta.descripcion" name="" id="" cols="30" rows="10" class="form-control" placeholder="Inserte la Respuesta" required></textarea>
                                    </div>
                                    <template v-if="edit ===false">
                                        <button class="btn btn-primary btn-block">Enviar</button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-primary btn-block">Actualizar</button>
                                    </template>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Mensaje</th>
                                    <th>Descripcion</th>
                                    <th>idMensaje</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr v-for="resp of respuestas">
                                    <td>{{resp.titulo}}</td>
                                    <td>{{resp.descripcion}}</td>
                                    <td>{{resp.idMensaje}}</td>
                                    <td>
                                        <button @click="deleteRes(resp._id)" class="btn btn-danger">
                                            Eliminar
                                        </button>
                                        <button @click="editRes(resp._id)" class="btn btn-secondary">
                                            Editar
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div class="row">
                    <div class="col-2">
                        <div class="card">
                            <div class="card-body">
                                <form >
                                    <div class="form-group">
                                        <textarea v-model="mensaje.texto" name="" id="" cols="30" rows="10" class="form-control" placeholder="" required></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr v-for="(msj) of mensajes">
                                    <td>{{msj.nombre}}</td>
                                    <td>{{msj.email}}</td>
                                    <td>
                                        <button @click="deleteMsj(msj._id)" class="btn btn-danger">
                                            Eliminar
                                        </button>
                                        <button @click="editMsj(msj._id)" class="btn btn-secondary">
                                            Ver
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<style scoped>
    .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    }

    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
    padding: 2px 16px;
    }
    .card-body {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-radius: 0 !important;
    }
    .card-body {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        -webkit-border-radius: 0 !important;
        border-radius: 0 !important;
    }
    .btn{
        color: black;
    }
    th{
        margin-left: 20px !important;
        margin-right: 20px !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
</style>
<script>
    class Respuesta{
        constructor(titulo, descripcion, idMensaje){
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.idMensaje = idMensaje;
        }
    }
    class Mensaje{
        constructor(nombre, texto, email){
            this.nombre = nombre;
            this.texto = texto;
            this.email = email;
        }
    }
    class User{
        constructor(id,nick,password){
            this.id = id;
            this.nick = nick;
            this.password = password;
        }
    }
    export default {
        name: "Panel",
        data(){
            return{
                respuesta: new Respuesta(),
                respuestas:[],
                mensajes:[],
                mensaje:new Mensaje(),
                edit:false,
                idMsjEdit: "",
                user: new User()
            }
        },
        created(){
            this.getUserData()  
            this.getRespuestas();
            this.getMensajes();
        },
        methods: {
            enviarRespuesta(){
                if(this.edit ==false){
                    const uri = "/respuesta"
                    this.axios.post(uri, this.respuesta)
                    .then(res => {
                        this.getRespuestas();
                    })
                    .catch(err => console.log(err));
                    this.respuesta = new Respuesta();
                }
                else{
                    const uri = "/respuesta/"+this.idMsjEdit
                    this.axios.put(uri, this.respuesta)
                    .then(res => {
                        this.edit = false;
                        this.idMsjEdit = '';
                        this.getRespuestas();
                    })
                    .catch(err => console.log(err));
                    this.respuesta = new Respuesta();
                }
                

            },
            getRespuestas(){
                const uri = "/respuesta"
                this.axios.get(uri)
                .then(res => {
                    this.respuestas = res.data;
                })
                .catch(err => console.log(err));
            }, 
            deleteRes(id){
                const response = confirm('Estas Seguro de Eliminar este Mensaje');
                if(response){
                    const uri = "/respuesta/"
                    this.axios.delete(uri+id)
                    .then(res =>{
                        //this.respuestas.splice(id,1);
                        this.getRespuestas();
                        this.edit=false;
                        this.idMsjEdit = "";
                        this.respuesta = new Respuesta()
                    })
                    .catch(err => console.log(err));
                }else{
                    return;
                }
            },
            editRes(id){

                const uri = "/respuesta/"
                this.axios.get(uri+id)
                .then(res => {
                    this.respuesta = new Respuesta(res.data.titulo, res.data.descripcion,"idM");
                    this.edit = true;
                    this.idMsjEdit = res.data._id;
                })
                .catch(err => console.log(err));
                
            },
            getMensajes(){
                const uri = "/mensaje"
                this.axios.get(uri)
                .then(res => {
                    this.mensajes = res.data;
                })
                .catch(err => console.log(err));
            },
            deleteMsj(id){
                const response = confirm('Estas Seguro de Eliminar este Mensaje');
                if(response){
                    const uri = "/mensaje/"
                    this.axios.delete(uri+id)
                    .then(res =>{
                        this.getMensajes();
                        this.mensaje = new Mensaje();
                    })
                    .catch(err => console.log(err));
                }else{
                    return;
                }
            },
            editMsj(id){

                const uri = "/mensaje/"
                this.axios.get(uri+id)
                .then(res => {
                    this.mensaje = new Mensaje(res.data.nombre, res.data.texto, res.data.email);
                })
                .catch(err => console.log(err));
                
            }, 
            getUserData: function() {    
                this.axios.get("/api/user")    
                .then((response) => {    
                    this.user = new User(response.data.user._id,response.data.user.nick,response.data.user.password)   
                })    
                .catch((errors) => {    
                    console.log(errors)    
                    this.$router.push("/")    
                })    
            },   
            logout: function (e) {
                this.axios.get("/api/logout")
                .then(() => {
                    this.$cookies.remove("user");
                    this.$router.push("/")
                    
                })
            }
                    
        },
    }
</script>
