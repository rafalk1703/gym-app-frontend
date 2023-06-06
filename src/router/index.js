import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ExerciseCategoryView from "@/views/ExerciseCategoryView.vue";
import AboutView from "@/views/AboutView.vue";
import ExerciseListView from "@/views/ExerciseListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { withoutHeader: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { withoutHeader: true }
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: HomeView,
      meta: { withoutHeader: false }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: HomeView,
      meta: { withoutHeader: false }
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExerciseCategoryView,
      meta: { withoutHeader: false }
    },
    {
      path: '/exercises-list',
      name: 'exercises-list',
      component: ExerciseListView,
      meta: { withoutHeader: false }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
