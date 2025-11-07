// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import QuemSou from '@/views/QuemSou.vue'
import OQueFaco from '@/views/OQueFaco.vue'
import Hobbies from '@/views/Hobbies.vue'

 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'QuemSou',
      component: QuemSou
    },   
    // DEFINIÇÃO DAS MINHAS ROTAS
    {
      path: '/oquefaco',  
      name: 'OQueFaco',  
      component: OQueFaco  
    } , 
   
    {
      path: '/hobbies',  
      name: 'Hobbies',  
      component: Hobbies  
    } , 
  ]
})

export default router