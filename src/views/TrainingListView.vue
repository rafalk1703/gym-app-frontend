<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import { onMounted, ref, toRaw } from "vue";
import TrainingComponent from "@/components/TrainingComponent.vue";
import AddToTrainingComponent from "@/components/AddToTrainingComponent.vue";
import axios from 'axios'

const overlay = ref(false);
const trainings = ref()
const isFetched = ref(false)


onMounted(() => {

  axios
    .get('trainings', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res) => {
      trainings.value = res.data
      isFetched.value = true
    })
    .catch((error) => {
      console.log(error)
    })
})

const startTrainingRequest = (trainingId) => {

  axios
    .post('/trainingLogs/start/training/' + trainingId, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res) => {
      console.log(trainings)
    })
    .catch((error) => {
      console.log(error)
    })
}

const addNewTraining = (data) => {
  axios
    .post('trainings',
      JSON.stringify({
        name: data.title
      }),
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      })
    .then((res) => {
      console.log(trainings)
    })
    .catch((error) => {
      console.log(error)
    })
}

const onExit = () => {
  overlay.value = false;
}

const onSave = (data) => {
  addNewTraining(toRaw(data))
  overlay.value = false;
}
const trainingShowCallback = (id) => {
  console.log(id)
  //TODO
}

const trainingWorkCallback = (id) => {
  startTrainingRequest(id)
  console.log(id)
  //TODO
}

const addNewCallback = () => {
  overlay.value = true;
  console.log("do something")
}
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TitleComponent title="Treningi" />
      </v-col>
    </v-row>
    <v-row justify="stretch" align="stretch">

      <v-col cols="12" sm="3">
        <v-card class="training-component h-100" @click="addNewCallback">
          <div class="training-component__head">
            <span class="training-component__title">Dodaj nowy</span>
          </div>
        </v-card>
      </v-col>
      <v-col v-if="isFetched" v-for="training in trainings" :key="training" cols="12" sm="3">
        <TrainingComponent :data="{ last: '12', progress: '50' }"
          icon="https://images.pexels.com/photos/17066825/pexels-photo-17066825/free-photo-of-droga-krajobraz-ludzie-kobieta.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          :id="training.id"
          img-url="https://images.pexels.com/photos/17066825/pexels-photo-17066825/free-photo-of-droga-krajobraz-ludzie-kobieta.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          :name="'Trening ' + training.name" :on-click-show="trainingShowCallback" :on-click-work="trainingWorkCallback">

        </TrainingComponent>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="overlay">
    <AddToTrainingComponent :on-exit="onExit" :on-save="onSave" />
  </v-overlay>
</template>
<style lang="scss" scoped>
.training-component {
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
}

.overlay__content {
  width: 50%;
}
</style>
