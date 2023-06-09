<script setup>

import { ref } from "vue";

defineProps({
  onExit: {
    type: Function,
    required: true
  },
  onSave: {
    type: Function,
    required: true
  }
})



const data = ref({
  imageUrl: '',
  title: '',
  icon: '',
});

</script>

<template>
  <div class="add-training-component">
    <div class="d-flex flex-column flex-sm-column flex-md-row w-100 align-start">
      <v-img class="w-25 h-100 rounded-lg" cover :src="data.imageUrl" />
      <div class="w-66 d-flex flex-column justify-center">
        <h2 class="align-self-center text-center">Dodaj nowy treningu</h2>
        <v-text-field prepend-inner-icon="mdi-format-text" variant="underlined" label="Nazwa treningu"
          v-model="data.title"></v-text-field>
        <v-text-field prepend-inner-icon="mdi-image-area" variant="underlined" label="Adres url obrazka"
          v-model="data.imageUrl"></v-text-field>
        <v-text-field prepend-inner-icon="mdi-panda" variant="underlined" label="Icona material design"
          v-model="data.icon"></v-text-field>
      </div>
    </div>
    <div class="d-flex flex-row w-100">
      <v-container fluid class="ma-0 pa-0">
        <v-row class="v-row--no-gutters">
          <v-col class="pe-1">
            <v-btn @click="onExit()" type="submit" class="w-100 bg-red mt-2"> Zamknij</v-btn>
          </v-col>
          <v-col class="ps-1">
            <v-btn @click="onSave(data)" type="submit" class="w-100 bg-primary mt-2"> Zapisz</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.add-training-component {
  min-width: 50vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;

  background: #202020;
  border: 1px solid #626262;
  border-radius: 8px;

  h2 {
    font-family: 'Roboto', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }

  &__blocks {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-content: flex-start;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    color: #fff;

    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
    }

    &-value {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      /* identical to box height, or 117% */

      display: flex;
      align-items: center;
      text-align: center;

      color: #ffffff;
    }
  }

  &>.d-flex {
    gap: 16px;
  }

  .v-input__details {
    display: none !important;
  }
}
</style>

