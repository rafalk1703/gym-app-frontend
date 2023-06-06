<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import ExerciseComponent from "@/components/ExerciseComponent.vue";
import {ref} from "vue";
import ExerciseViewComponent from "@/components/ExerciseViewComponent.vue";
import AddToTrainingComponent from "@/components/AddToTrainingComponent.vue";

const overlay = ref(false);
const selectedExercise = ref(null);
const addToTraining = ref(false);
const addToList = ref(false);

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

const exerciseSelectCallback = (id) => {
  overlay.value = true;
  selectedExercise.value = id;
  addToTraining.value = false;
  addToList.value = false;
}

</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TitleComponent title="Lista ćwiczeń"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="start">
      <v-col v-for="n in 8" :key="n" cols="12" sm="3">
        <ExerciseComponent image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
                           title="Moja lista"
                           link="/"
                           time="12"
                           category="Plecy"
                           difficulty="Początkujący"
                           :id="n"
                           :on-click="exerciseSelectCallback"/>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="overlay">
    <ExerciseViewComponent
        v-if="selectedExercise != null && addToTraining !== true && addToList !== true"
        :id="selectedExercise"
        title="test"
        description="test"
        category="test"
        difficulty="test"
        time="12"
        :on-add-to-list="onAddToList"
        :on-add-to-trainings="onAddToTraining"
        :on-exit="onExit"
    />
    <AddToTrainingComponent
        v-if="addToTraining === true"
        :id="selectedExercise"
        title="test1"
        description="test"
        category="test"
        difficulty="test"
        time="12"
        :on-exit="onExit"
        :on-save="onExit"/>
    <ExerciseViewComponent
        v-if="addToList === true"
        :id="selectedExercise"
        title="test2"
        description="<b>test</b>"
        category="test"
        difficulty="test"
        time="12"
        :on-add-to-list="onAddToList"
        :on-add-to-trainings="onAddToTraining"
        :on-exit="onExit"
    />
  </v-overlay>
</template>
<style lang="scss" scoped>


</style>
