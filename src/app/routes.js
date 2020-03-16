
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import PanelAdministrativo from './components/PanelAdministrativo.vue';
import Oficina from './components/Oficina.vue';
import Rutas from './components/Rutas.vue';
import Nosotros from './components/Nosotros.vue';
import Contacto from './components/Contacto.vue';


const routes = [
   {
      path:'*',
      redirect:  '/'
   },
   {
      name:'Home',
      path: '/',
      component:Home
   },
   {
      name:'Login',
      path: '/login',
      component:Login,
      meta: { 
         guest: true
     }
   },
   {
      name:'Panel',
      path: '/Panel',
      component:PanelAdministrativo,
      meta: { 
         requiresAuth: true,
     }
   },
   {
      name:'Oficina',
      path: '/oficina',
      component:Oficina,
   },
   {
      name:'Rutas',
      path: '/rutas',
      component:Rutas,
   },
   {
      name:'Nosotros',
      path: '/nosotros',
      component:Nosotros,
   },
   {
      name:'Contacto',
      path: '/contacto',
      component:Contacto,
   }

]
export default routes;
