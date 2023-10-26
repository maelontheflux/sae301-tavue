import { createRouter, createWebHistory } from 'vue-router'
// Import des vues
 import HomeView from '@/views/HomeView.vue'
 import LoginView from '@/views/LoginView.vue'
 import ClientView from '@/views/ClientView.vue'
 import CollectionView from '@/views/CollectionView.vue'
 import PanierView from '@/views/PanierView.vue'
 import PersonnalisationView from '@/views/PersonnalisationView.vue'
 
 
// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavue.maelgrosjean.fr:443/";
else pocketbase_ip = "http://127.0.0.1:8090/";

const pb = new PocketBase(pocketbase_ip);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/',              name: 'HomeView',           component: HomeView },
      { path: '/login',         name: 'LoginView',          component: LoginView },
      { path: '/client',        name: 'ClientView',         component: ClientView },
      { path: '/collection',    name: 'CollectionView',     component: CollectionView },
      { path: '/pannier',        name: 'PanierView',         component: PanierView },
      { path: '/personnalisation', name: 'PersonnalisationView', component: PersonnalisationView },

  ]
})

// // Vérification de route demandée
// // to : où il veut aller
// // from : d'où il vient 
// // next : s'il peut y aller
// router.beforeEach( (to, from, next) =>{
//   if(to.name == "HomeView"){ // Si page d'accueil demandée, on autorise
//     next()
//   }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
//     if(pb.authStore.model != null){ // Utilisateur connecté => OK
//       next()
//     }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
//       router.push({name:"HomeView"})
//     }
//   }
// })

export default router
