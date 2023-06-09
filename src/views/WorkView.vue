<script setup>
import {ref} from "vue";
import TitleComponent from "@/components/TitleComponent.vue";

const items = [
  {
    id: 1,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 2,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 3,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 4,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 5,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 6,
    name: 'test',
    description: '<br> Nig </br>',
  },
  {
    id: 7,
    name: 'test',
    description: '<br> Nig </br>',
  }
]

const doneExerciseArray = ref([]);
const doneExercise = (id) => {
  doneExerciseArray.value.push(id);
  if (doneExerciseArray.value.length >= items.length) {
    console.log("TODO")
  }
}
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TitleComponent title="Trenuj"/>
      </v-col>
    </v-row>
    <v-row justify="stretch" align="stretch">
      <v-col v-for="item in items" :key="item.id" cols="12" md="3" class="">
        <div class="training-component training-component__list">
          <div class="training-component-item">
            <v-img
                class="training-component-item__image"
                cover
                height="150px"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            />
            <div class="training-component-item__details d-flex w-100 flex-column">
              <h2 class="text-uppercase mt-4 text-white align-self-center training-component-item__title">{{ item.name }}</h2>
              <div class="mb-4 text-white" v-html="item.description"></div>
              <v-btn @click="doneExercise(item.id)" type="submit" :disabled="doneExerciseArray.includes(item.id)" :class="doneExerciseArray.includes(item.id) ? 'bg-green' : 'bg-primary'" class=" w-100  mt-2">
                Gotowe</v-btn>
            </div>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="overlay">
    <AddToTrainingComponent :on-exit="onExit" :on-save="onSave"/>
  </v-overlay>
</template>
<style lang="scss" scoped>
.training-component {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  background: #202020;
  border: 1px solid #626262;
  border-radius: 8px;
}
.training-component-item{
  &__title{
    font-family: "Roboto", serif;
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
}
.overlay__content {
  width: 50%;
}

</style>
