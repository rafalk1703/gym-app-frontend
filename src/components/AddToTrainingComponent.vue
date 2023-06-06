<script setup>

defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  onExit: {
    type: Function,
    required: true
  },
  onSave: {
    type: Function,
    required: true
  }
})

//TODO
</script>

<template>
  <div class="exercise-component">
    <div class="d-flex flex-column flex-sm-column flex-md-row w-100 align-start">
      <v-img
          class="w-25 h-100 rounded-lg"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      />
      <div class="w-66 d-flex flex-column justify-center ">
        <h2 class="align-self-center text-center">Dodaj do treningu</h2>

      </div>
    </div>
    <div class="d-flex flex-row w-100">
      <v-container fluid class="ma-0 pa-0" >
        <v-row class="v-row--no-gutters">
          <v-col class="pe-1">
            <v-btn @click="onExit()" type="submit" class="w-100 bg-red mt-2">
              Zamknij
            </v-btn>
          </v-col>
          <v-col class="ps-1">
            <v-btn @click="onSave(id)" type="submit" class="w-100 bg-primary mt-2">
              Zapisz
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>


  </div>
</template>

<style scoped lang="scss">
.exercise-component {
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

    color: #FFFFFF;
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

      color: #FFFFFF;
    }

  }

  & > .d-flex {
    gap: 16px;
  }

}
</style>
