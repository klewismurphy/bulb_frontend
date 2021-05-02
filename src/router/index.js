import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'
import vSelect from 'vue-select'
import Home from '../views/Home.vue'
import PlantsIndex from '../views/PlantsIndex.vue'
import PlantsShow from '../views/PlantsShow.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import PlantSearch from '../views/PlantSearch.vue'
import PlantSearchState from '../views/PlantSearchState.vue'
import GardenIndex from '../views/GardenIndex.vue'
import Glossary from '../views/Glossary.vue'

Vue.use(VueRouter)
Vue.use(Vue2Filters)
Vue.component('v-select', vSelect)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plants',
    name: 'PlantsIndex',
    component: PlantsIndex
  },
  {
    path: '/plants/:id',
    name: 'PlantsShow',
    component: PlantsShow
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/search',
    name: 'search',
    component: PlantSearch
  },
  {
    path: '/search/state',
    name: 'PlantSearchState',
    component: PlantSearchState
  },
  {
    path: '/mygarden',
    name: 'GardenIndex',
    component: GardenIndex
  },
  {
    path: '/glossary',
    name: 'Glossary',
    component: Glossary
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
