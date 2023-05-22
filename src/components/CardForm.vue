<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  formTitle: {
    type: String,
    required: false
  },
  formSubtitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters class="">
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="mh-100 d-md-flex d-none d-sm-none justify-center align-center"
      >
        <v-img
          class="background-image"
          width="100%"
          height="100%"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <div class="title-content d-flex justify-center align-center flex-column">
          <span>{{ subtitle }}</span>
          <h1>{{ title }}</h1>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="mh-100">
        <v-container class="h-100">
          <v-row class="h-100" no-gutters>
            <v-col align-self="center" align="center">
              <v-card width="426px" class="card rounded-xl">
                <div class="card__title-section mb-4">
                  <h1 class="card__title">{{ formTitle }}</h1>
                  <h2 class="card__subtitle">{{formSubtitle}}</h2>
                </div>
                <slot> </slot>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.title-content {
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>
