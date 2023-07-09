// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/auth/login.vue'
import RegisterView from '../views/auth/register.vue'
import userPanel from "@/views/panel/userPanel.vue";
import adminPanel from "@/views/panel/adminPanel.vue";

// Import the store module
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    components: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'userPanel',
    component: userPanel,
    meta: { needsAuth: true }
  },
  {
    path: '/adminpanel',
    name: 'adminPanel',
    component: adminPanel,
    meta: { needsAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if(to.meta.needsAuth ){
    console.log(store.state.is_logged_in)
    // Use store.state.user_data instead of this.$store.state.user_data
    if (store.state.is_logged_in) {
      next()
    }else {
      next('/login')
    }

  }else{
    next()
  }
})
export default router
