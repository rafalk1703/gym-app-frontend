<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import NavigationImage from "@/components/NavigationImage.vue";
</script>
<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <TitleComponent title="Kategoria ćwiczeń"/>
        </v-col>
      </v-row>
      <v-row justify="center" align="start">
        <v-col sm="12">
          <NavigationImage image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
                           title="Moja lista" link="/exercises-list"/>
        </v-col>
        <v-col v-for="n in 8" :key="n" cols="12" sm="3">
          <NavigationImage image-url="https://www.pexels.com/pl-pl/zdjecie/miasto-woda-ulica-budynek-17111340/"
                           title="Moja lista" link="/exercises-list"/>
        </v-col>
      </v-row>
    </v-container>
  </div>


</template>
<style lang="scss" scoped></style>