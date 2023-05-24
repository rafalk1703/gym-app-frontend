<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'

</script>

<template>
  <HeaderNav class="app-header" v-if="$route.meta.withoutHeader !== true"/>
  
  <RouterView class="app-view"/>
</template>

<style lang="scss" scoped>

</style>
