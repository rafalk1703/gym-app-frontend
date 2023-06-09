import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ExerciseCategoryView from "@/views/ExerciseCategoryView.vue";
import AboutView from "@/views/AboutView.vue";
import ExerciseListView from "@/views/ExerciseListView.vue";
import axios from "axios";
import TrainingListView from "@/views/TrainingListView.vue";
import CalendarView from "@/views/CalendarView.vue";
import WorkView from "@/views/WorkView.vue";

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
      meta: { withoutHeader: true, requiresAuth: false}
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { withoutHeader: true, requiresAuth: false}
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: TrainingListView,
      meta: { withoutHeader: false , requiresAuth: true}
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
      meta: { withoutHeader: false , requiresAuth: true}
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExerciseCategoryView,
      // meta: { withoutHeader: false , requiresAuth: true}
    },
    {
      path: '/exercises-list/:id',
      name: 'exercises-list',
      component: ExerciseListView,
      // meta: { withoutHeader: false , requiresAuth: true}
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      // meta: { withoutHeader: false , requiresAuth: true}
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
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (axios.defaults.headers.common["Authorization"] == null) {
//       next("/login")
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
