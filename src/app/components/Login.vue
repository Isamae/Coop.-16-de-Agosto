<template lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <div class="body vertical-center">
        <div class="container">
            <div class="row my-auto align-self-center">
                <div class="col-12 col-md-4 mx-auto " >
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Iniciar Sesión</h5>
                            <form class="form-signin text-center" @submit.prevent="login" >
                                <div class="form-label-group">
                                    <input  type="text" id="nick" class="form-control" placeholder="Usuario" v-model="nick" required autofocus>
                                </div>
                                <div class="form-label-group" >
                                    <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required>
                                </div>
                                <button class="btn btn-lg btn-facebook btn-block text-uppercase " type="submit">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 <script>
 import {mapMutations} from 'vuex'
 export default {
     name: "Login", 
     data(){
         return{
             nick:'',
             password:'',
         }
     },
     methods:{
         login(){
            let data = {    
                name: this.nick,    
                password: this.password
            }
             this.axios.post("/api/login", data)    
            .then((response) => {
                var user = { id:1, name:this.nick ,session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' };
                this.$cookies.set("user",user); 
                this.$emit('loggedIn')
                this.setNavVisible(1)
                this.$router.push("/Panel")
            })     
            .catch((errors) => {   
                console.log(errors) 
            })  
        },
        setNvisible(dato){
            this.setCarruselVisible(dato)
        },
        ...mapMutations(['setNavVisible','setCarruselVisible'])
        
     },
     mounted(){
         this.setCarruselVisible(1);
     }
 }
 </script>

 <style scoped>
    :root {
        --input-padding-x: 1.5rem;
        --input-padding-y: .75rem;
    }

    .body {
        background: #007bff;
        background: linear-gradient(to right, #0062E6, #33AEFF);
        overflow: hidden;
        height:100%;
        width: 100%;
    }

    .card-signin {
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    }

    .card-signin .card-title {
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.5rem;
    }

    .card-signin .card-body {
    padding: 2rem;
    }

    .form-signin {
        width: 100%;
    }

    .form-signin .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.2s;
    }

    .form-label-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .form-label-group>label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        line-height: 1.5;
        color: #495057;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }
    .btn-google {
        color: white;
        background-color: #ea4335;
    }

    .btn-facebook {
        color: white;
        background-color: #3b5998;
    }
    @supports (-ms-ime-align: auto) {
        .form-label-group>label {
            display: none;
        }
    }
    @media all and (-ms-high-contrast: none),
        (-ms-high-contrast: active) {
        .form-label-group>label {
            display: none;
        }
    }
    .vertical-center {
        min-height: 100%;  
        min-height: 100vh; 

        display: flex;
        align-items: center;
    }
 </style>