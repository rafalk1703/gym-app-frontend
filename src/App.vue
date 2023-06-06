<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'

</script>

<template>
  <HeaderNav class="app-header" v-if="$route.meta.withoutHeader !== true"/>
  <div v-if="$route.meta.withoutHeader !== true" class="header-space header-space--top"></div>
  <main class="d-flex align-content-start" :class="{ 'mt-4' : !$route.meta.withoutHeader}">
    <div v-if="$route.meta.withoutHeader !== true" class="header-space header-space--left"></div>
    <RouterView class="app-view"/>
  </main>


</template>

<style lang="scss" scoped>
.app-view{
  width: 100%;
}
main {
  width: 100%;
}
.header-space{
  &--left{
    width: 56px;
  }
  &--top{
    width: 100vw;
    height: 57px;
    background: #1B1A1A;
    border-bottom: 1px solid #626262;
    box-shadow: 0 4px 100px 8px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
  }
}

</style>
