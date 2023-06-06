<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import ExerciseView from "@/components/ExerciseComponent.vue";
</script>
<template>
  <v-container fluid> test
    <v-row>
      <v-col>
        <TitleComponent title="Lista ćwiczeń"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="start">
      <v-col v-for="n in 8" :key="n" cols="12" sm="3">
        <ExerciseView image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
                      title="Moja lista"
                      link="/"
                      time="12"
                      category="Plecy"
                      difficulty="Początkujący"
                      id="1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>