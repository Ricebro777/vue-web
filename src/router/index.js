import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path:'/home',
    name:'Home',
    redirect:'/search',
    children:[
      {
        path:'/search',
        name:'Search',
        component:() => import('../views/Search/Search.vue'),
      },
      {
        path:'/searchCatalog',
        name:'searchCatalog',
        component:() =>import('../views/Search/SearchCatalog.vue')
      },
      {
        path:'/searchProcess',
        name:'searchProcess',
        component:() =>import('../views/Search/SearchProcess.vue')
      },
      {
        path:'/searchIndex',
        name:'searchIndex',
        component:() =>import('../views/Search/SearchIndex.vue')
      },
      {
        path:'/write',
        name:'Write',
        component:() => import('../views/Write/Write.vue') 
      },
      {
        path:'/match',
        name:'Match',
        component:() => import('../views/Match/Match.vue') 
      },
      {
        path:'/question',
        name:'Question',
        component:() => import('../views/Question/Question.vue') 
      },
      {
        path:'/questionProcess',
        name:'QuestionProcess',
        component:() => import('../views/Question/QuestionProcess.vue') 
      },
      {
        path:'/questionIndex',
        name:'QuestionIndex',
        component:() => import('../views/Question/QuestionIndex.vue') 
      },
  ],
    component: () => import('../views/Home.vue') 
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
