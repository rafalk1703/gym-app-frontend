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
  link: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})

//TODO
</script>

<template>
  <div class="exercise-component">
    <div class="exercise-component__head">
      <span class="exercise-component__title">{{ title }}</span>
      <v-img
          class="exercise-component__image"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      />
    </div>
    <div class="exercise-component__blocks">
      <div class="exercise-component__block">
        <v-icon size="x-large" icon="mdi-clock-time-four"/>
        <span class="exercise-component__block-title">
          Czas
        </span>
        <span class="exercise-component__block-value">
          {{ time }} min
        </span>
      </div>
      <div class="exercise-component__block">
        <v-icon size="x-large" icon="mdi-scale-balance"/>
        <span class="exercise-component__block-title">
          Poziom
        </span>
        <span class="exercise-component__block-value">
          {{ difficulty }}
        </span>
      </div>
      <div class="exercise-component__block">
        <v-icon size="x-large" icon="mdi-run"/>
        <span class="exercise-component__block-title">
          Partia
        </span>
        <span class="exercise-component__block-value">
          {{ category }}
        </span>
      </div>
    </div>
      <v-btn @click="onClick(id)" type="submit" class="w-100 bg-primary mt-2">
        Zobacz
      </v-btn>

  </div>
</template>

<style scoped lang="scss">
.exercise-component {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;

  width: 100%;

  background: #202020;
  border: 1px solid #626262;
  border-radius: 8px;

  &__head {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: center;
    align-content: center;
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

  &__title {
    font-family: 'Roboto', serif;
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

  &__image {
    position: absolute;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:after {
      position: absolute;
      content: "";
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
      width: 100%;
      height: 100%;
      transition: all ease-in-out 0.3s;
    }

  }

  &:hover {
    .exercise-component__image:after {
      background: rgba(0, 0, 0, 0);
    }
  }
}
</style>
