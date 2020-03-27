<template>
    <div style="padding-top:30px;height:100%;">
        <section style="margin:10px">
            <div class="row">
                <div class="col-12 col-md-6">
                    <table class="table table-hover">
                        <thead>
                            <tr >
                                <th cope="col">Nombre</th>
                                <th cope="col">Email</th>
                                <th cope="col">Eliminar</th>
                                <th cope="col">Mensaje</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr v-for="(msj, k) of mensajes"  :key="k">
                                <th scope="row"><p>{{msj.nombre}}</p></th>
                                <td><p>{{msj.email}}</p> </td>
                                <td>
                                    <button @click="deleteMsj(msj._id)" type="button" class="btn btn-primary btn-sm">
                                        Eliminar
                                    </button>
                                </td>
                                <td>
                                    <button @click="editMsj(msj._id)" type="button" class="btn btn-secondary btn-sm">
                                        Ver
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>
                <div class="col-12 col-md-6">
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
            </div>
        </section>
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
    import {mapMutations} from 'vuex'
    
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
                mensajes:[],
                mensaje:new Mensaje(),
                edit:false,
                idMsjEdit: "",
                user: new User()
            }
        },
        created(){
            this.getUserData()  
            this.getMensajes();
        },
        methods: {
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
            },
            ...mapMutations(['setNavVisible','setCarruselVisible'])
                  
        },
        mounted(){
            this.setCarruselVisible(1);
            this.setNavVisible(1);
        }
    }
</script>
