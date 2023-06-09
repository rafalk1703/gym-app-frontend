<script setup>

defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  onClickWork: {
    type: Function,
    required: true
  },
  onClickShow: {
    type: Function,
    required: true
  }
})

</script>

<template>
  <div class="training-component">
    <div class="training-component__head">
      <span class="training-component__title">{{ name }}</span>
      <v-img
          class="training-component__image w-100"
          cover
          :src="imgUrl"
      />
    </div>
    <div class="d-flex w-100">
      <div class="w-25 training-component__icon">
        <v-icon size="x-large" icon="mdi-clock-time-four"/>
      </div>
      <div class="w-75 ml-4">
        <div class="training-component__stats mb-2">
          <span>Ostatni  trening</span>
          <span>{{data.last}}</span>
        </div>
        <div class="training-component__stats mb-2">
          <span>Progress</span>
          <span>{{data.progress}}%</span>
        </div>
      </div>
    </div>
    <div class="d-flex w-100 ">
      <div class="w-25 pr-1">
        <v-btn @click="onClickShow(id)" type="submit" variant="outlined" class="w-100 text-primary ">
          Zobacz
        </v-btn>
      </div>
      <div class="w-75 pl-1">
        <v-btn @click="onClickWork(id)" type="submit" class="w-100 bg-primary">
          Trenuj
        </v-btn>
      </div>
    </div>




  </div>
</template>

<style scoped lang="scss">
.training-component {
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
  &__icon{
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid #626262;
    border-radius: 8px;
  }
  &__stats{
    display: flex;
    justify-content: space-between;
    color: white;
    span:first-child {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
    span:last-child{
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__head {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: center;
    align-content: center;
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
    .training-component__image:after {
      background: rgba(0, 0, 0, 0);
    }
  }
}
</style>
