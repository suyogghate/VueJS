<script setup>
import { ref, computed } from 'vue';
import Welcome from './components/pages/Welcome.vue';
import Layout from './components/layouts/Layout.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Workout from './components/pages/Workout.vue';
import { workoutProgram } from './utils';

const defaultData = {};
for (let workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx];
  defaultData[workoutIdx] = {};

  for(let e of workoutData.workout) {
    defaultData[workoutIdx][e.name] = '';
  }
}

const selectedDisplay = ref(1);
const data = ref(defaultData);
const selectedWorkout = ref(-1);

const isWorkoutComplete = computed(() => {
  const currWorkout = data.value?.[selectedWorkout.value];
  if (!currWorkout) { return false } // guard clause to exit function

  const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex)
  console.log('ISCOMPLETE: ', isCompleteCheck);

  return isCompleteCheck;
})

const firstIncompleteWorkoutIndex = computed(() => {
  const allWorkouts = data.value
  if (!allWorkouts) { return -1 }

  // loop over every key:value pair and check if the workout is complete
  for (const [index, workout] of Object.entries(allWorkouts)) {
    const isComplete = Object.values(workout).every(ex => !!ex)
    if (!isComplete) {
      return parseInt(index);
    }
  }
  return -1;
})

function handleChangeDisplay(idx) {
  selectedDisplay.value = idx;
}

function handleSelectWorkout(idx) {
  selectedDisplay.value = 3;
  selectedWorkout.value = idx;
}

function handleSaveWorkout() {
  localStorage.setItem('workouts', JSON.stringify(data.value))

  selectedDisplay.value = 2;

  selectedWorkout.value = -1;
}
</script>

<template>
  <div>
    <Layout>
        <!-- PAGE 1 -->
        <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1"/>
        <!-- PAGE 2 -->
        <Dashboard :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex" :handleSelectWorkout="handleSelectWorkout" v-if="selectedDisplay == 2"/>
        <!-- PAGE 3 -->
         <Workout :handleSaveWorkout="handleSaveWorkout" :isWorkoutComplete="isWorkoutComplete" :data="data" :selectedWorkout="selectedWorkout" v-if="workoutProgram?.[selectedWorkout] "/>
    </Layout>
  </div>
</template>

<style scoped>

</style>
