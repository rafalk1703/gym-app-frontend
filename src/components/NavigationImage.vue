<script setup>
import {RouterLink} from "vue-router";

defineProps({
  title: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  }
})
</script>

<template>
  <RouterLink :to="{path: link}" class="navigation-image">
    <span class="navigation-image__title">{{title}}</span>
    <v-img
        class="navigation-image__image"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    />


  </RouterLink>
</template>

<style scoped lang="scss">
.navigation-image{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  width: 100%;
  height: 100px;

  background: #202020;
  border: 1px solid #626262;
  border-radius: 8px;
  &__title{
    font-family: 'Roboto',serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 3;
    color: #FFFFFF;
  }
  &__image{
    position: absolute;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    z-index: 1;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:after{
      position: absolute;
      content: "";
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
      width: 100%;
      height: 100%;
      transition: all ease-in-out 0.3s;
    }

  }
  &:hover{
    .navigation-image__image:after{
      background: rgba(0, 0, 0, 0);
    }
  }
}
</style>