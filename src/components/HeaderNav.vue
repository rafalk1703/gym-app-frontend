<script setup>
import {ref} from 'vue'

const drawer = ref(true);
const rail = ref(true);
const data = {
  items: [
    {
      icon: 'mdi-home',
      title: 'Panel',
      value: 'home',
      link: '/'
    },
    {
      icon: 'mdi-calendar-month',
      title: 'Kalendarz',
      value: 'calendar',
      link: '/calendar'
    },
    {
      icon: 'mdi-note',
      title: 'Treningi',
      value: 'workouts',
      link: '/workouts'
    },
    {
      icon: 'mdi-run',
      title: 'Ćwiczenia',
      value: 'exercises',
      link: '/exercises'
    },
    {
      icon: 'mdi-run',
      title: 'About',
      value: 'about',
      link: '/about'
    },
    {
      icon: 'mdi-run',
      title: 'Login',
      value: 'login',
      link: '/login'
    }
  ]
}
</script>

<template>
  <v-card class="header-nav">
    <v-layout>
      <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list-item class="v-list-item--bold"
                     prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                     title="John Leider"
                     nav
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
              v-for="(item, i) in data.items"
              :key="i"
              :to="item.link"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
          />
        </v-list>

        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-logout" title="Wyloguj się" value="logout"></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style lang="scss" scoped>
.header-nav {
  position: absolute;
  z-index: 1000;
}
</style>
