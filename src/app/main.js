import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import VueCookies from "vue-cookies"
//Vue.use(VueCookies)
Vue.use(require('vue-cookies'))
import VueAxios from 'vue-axios';
import axios from 'axios';
 Vue.use(VueAxios, axios);

import routes from './routes.js'

import App from './App.vue';
const router = new VueRouter( {
   mode : 'history', 
   routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log($cookies.get("user"))
      if ($cookies.get("user") == null) {
          next({
              path: '/login'
          })
      } 
      else{
        next()
      }
  }else if(to.matched.some(record => record.meta.guest)) {
    if ($cookies.get("user") != null) {
      console.log("Si entro 1 ")
      next({ name: 'Panel'})

      
    } 
    else{
      next()
    }
  }
  else {
      next() 
  }
})

new Vue(Vue.util.extend({router}, App)).$mount('#app');
