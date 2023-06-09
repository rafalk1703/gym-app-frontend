<script setup>

import {onMounted, ref} from "vue";
import moment from "moment";

const props = defineProps({
  items: {
    type: Array
  },
})
const date = ref(new Date());

const attrs = ref([
  {
    highlight: {
      color: 'red',
      fillMode: 'outline',
    },
    dates: new Date(),
  },
]);

attrs.value = attrs.value.concat(props.items.map(training => {
  return {
    dot: {
      color: 'blue',
      fillMode: 'outline',
    },
    popover: {
      label: training.name,
    },
    dates: training.endDate,
  }
}))

const dateDiff = (a, b) => {
  const diff = Math.abs(a - b)
  return Math.floor(diff / (1000 * 60))
}
onMounted(() => [])
</script>

<template>
  <div class="calendar-component">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="3">
          <div class="calendar-component__calendar">
            <VDatePicker v-model="date" class="w-100" is-dark="true" color="custom" transparent borderless
                         :attributes="attrs"/>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="9">
          <v-container fluid>
            <v-row>
              <v-col cols="12"
                     md="3"
                     class="ma-1 calendar-component__stats"
                     :class="moment(training.endDate).format('YY-MM-DD') !== moment(date).format('YY-MM-DD') ? '' : 'calendar-component__stats--selected'"
                     @click="date = training.endDate"
                     v-for="training in items"
                     :key="training"
              >
                <div class="calendar-component__stat mb-2">
                  <span>
                    Nazwa
                  </span>
                  <span>
                    {{ training.name }}
                  </span>
                </div>
                <div class="calendar-component__stat mb-2">
                  <span>
                    Data
                  </span>
                  <span>
                    {{ moment(training.endDate).format("YY-MM-DD HH:mm:ss") }}
                  </span>
                </div>
                <div class="calendar-component__stat mb-2">
                  <span>
                    Wykonany trening
                  </span>
                  <span>
                    {{ !isDone ? 'Tak' : 'Nie' }}
                  </span>
                </div>
                <div class="calendar-component__stat">
                  <span>
                    Czas
                  </span>
                  <span>
                    {{ dateDiff(training.startDate, training.endDate) }}min
                  </span>
                </div>

              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<style scoped lang="scss">
.calendar-component {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  background: #202020;
  border: 1px solid #626262;
  border-radius: 8px;

  &__calendar {
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

  &__stat {
    display: flex;
    justify-content: space-between;
  }

  &__stats {
    color: white;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    &--selected {
      border: solid 1px dodgerblue;
    }

    span:first-child {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }

    span:last-child {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
