<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-nav">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-nav {
  height: 100vh;
  max-width: 200px;
  background: #1b1a1a;
  border-right: 1px solid #626262;
  box-shadow: 0px 4px 100px 8px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
}
</style>
