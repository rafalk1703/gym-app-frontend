<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import ExerciseComponent from "@/components/ExerciseComponent.vue";
import { onMounted, ref } from "vue";
import ExerciseViewComponent from "@/components/ExerciseViewComponent.vue";
import AddToTrainingComponent from "@/components/AddToTrainingComponent.vue";
import axios from "axios";

const overlay = ref(false);
const selectedExercise = ref(null);
const addToTraining = ref(false);
const addToList = ref(false);
const exercises = ref();
const trainings = ref();
const isFetched = ref(false);

const exerciseTypeId = window.location.href.split("/").slice(-1)[0];
console.log(exerciseTypeId)

if (exerciseTypeId !== 0) {
  onMounted(() => {
    axios.get("/exercises/global/type/" + exerciseTypeId, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }).then(res => {

      exercises.value = res.data
      isFetched.value = true

      console.log(exercises);
    }).catch(error => {
      console.log(error)
    })
    console.log("XD")
  })
} else {
  onMounted(() => {
    axios.get("/exercises", {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }).then(res => {

      exercises.value = res.data
      isFetched.value = true

      console.log(exercises);
    }).catch(error => {
      console.log(error)
    })
    console.log("XD")
  })
}

const addToTrainingRequest = (exerciseId, trainingIdList) => {

  axios(`/exercises/addToTrainings/exercise/` + exerciseId, {
    withCredentials: true,
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: JSON.stringify({
  "trainings": trainingIdList
  }).then(res => {

      trainings.value = res.data
      isFetched.value = true

      console.log(trainings.value);
    }).catch(error => {
      console.log(error)
    })
});
}

const onSave = () => {
  overlay.value = false;
  selectedExercise.value = null;
  addToTraining.value = false;
  addToList.value = false;
}

const onExit = () => {
  overlay.value = false;
  selectedExercise.value = null;
  addToTraining.value = false;
  addToList.value = false;
}

const onAddToList = () => {
  addToTraining.value = false;
  addToList.value = true;
}

const onAddToTraining = () => {
  addToTraining.value = true;
  addToList.value = false;
}

const exerciseSelectCallback = (exercise) => {

  overlay.value = true;
  selectedExercise.value = exercise;
  addToTraining.value = false;
  addToList.value = false;
}


</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TitleComponent title="Lista ćwiczeń" />
      </v-col>
    </v-row>
    <v-row justify="center" align="start">
      <v-col v-if="isFetched" v-for="exercise in exercises" :key="exercise" cols="12" sm="3">
        <ExerciseComponent image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
                           :title="exercise.name"
                           link="/"
                           :time="exercise.time"
                           :category="exercise.type"
                           :difficulty="exercise.level"
                           :id="exercise.id"
                           :on-click="() => exerciseSelectCallback(exercise)"/>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="overlay">
    <ExerciseViewComponent v-if="selectedExercise != null && addToTraining !== true && addToList !== true"
      :id="selectedExercise.id" :title="selectedExercise.name" :description="selectedExercise.description"
      :category="selectedExercise.type" :difficulty="selectedExercise.level" :time="selectedExercise.time"
      :on-add-to-list="onAddToList" :on-add-to-trainings="onAddToTraining" :on-exit="onExit" />
    <AddToTrainingComponent v-if="addToTraining === true" :id="selectedExercise" title="test1" description="test"
      category="test" difficulty="test" time="12" :on-exit="onExit" :on-save="onSave" />
    <ExerciseViewComponent v-if="addToList === true" :id="selectedExercise" title="test2" description="<b>test</b>"
      category="test" difficulty="test" time="12" :on-add-to-list="onAddToList" :on-add-to-trainings="onAddToTraining"
      :on-exit="onExit" />
  </v-overlay>
</template>
<style lang="scss" scoped></style>
