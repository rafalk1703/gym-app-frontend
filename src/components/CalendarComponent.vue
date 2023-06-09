<script setup>

import {ref} from "vue";

defineProps({

})

const attrs = ref([
  {

    // highlight: {
    //   color: 'red',
    //   fillMode: 'outline',
    // },
    dot: {
      color: 'blue',
      fillMode: 'outline',
    },
    popover: {
      label: 'Take Noah to basketball practice.',
    },
    dates: new Date(),
  },
]);

</script>

<template>
  <div class="calendar-component" >
    <div class="calendar-component__calendar">
      <VCalendar is-dark="true" color="custom" transparent borderless
                 :attributes="attrs"/>
    </div>

  </div>
</template>

<style scoped lang="scss">
 .calendar-component{
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
   &__calendar{
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
 }
</style>
