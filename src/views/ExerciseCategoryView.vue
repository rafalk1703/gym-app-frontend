<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import {ref} from 'vue'
import NavigationImage from "@/components/NavigationImage.vue";
import { onMounted } from "vue";
import axios from "axios";

let exerciseCategories = ref()
let isFetched = ref(false)

onMounted(() => {
  axios.get("/exerciseTypes", {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  }).then(res => {
    
    exerciseCategories = res.data
    isFetched.value = true

    console.log(exerciseCategories);
  }).catch(error => {
    console.log(error)
  })
  console.log("XD")
})

const createLink = (id) => {
  return "/exercises-list/" + id;
}



</script>
<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <TitleComponent title="Kategoria ćwiczeń" />
        </v-col>
      </v-row>
      <v-row justify="center" align="start">
        <v-col sm="12">
          <NavigationImage image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
            title="Moja lista" link="/exercises-list/0" />
        </v-col>
        <v-col v-if="isFetched" v-for="exerciseCategory in exerciseCategories" :key="exerciseCategory" cols="12" sm="3">
          <NavigationImage image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
            :title="exerciseCategory.name" :link="createLink(exerciseCategory.id)"/>
        </v-col>
      </v-row>
    </v-container>
  </div>


</template>
<style lang="scss" scoped></style>
