<script setup>
import { ref } from 'vue'

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
      value: 'excercises',
      link: '/excercises'
    }
  ]
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
            
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="(item, i) in data.items"
            :key="i"
            :to="item.link"
            link
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          />
        </v-list>

        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-star" title="Logout" value="starred"></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style lang="scss" scoped>
// .header-nav {
//   height: 100vh;
//   max-width: 200px;
//   background: #1b1a1a;
//   border-right: 1px solid #626262;
//   box-shadow: 0px 4px 100px 8px rgba(0, 0, 0, 0.25);
//   backdrop-filter: blur(15px);
// }
</style>
