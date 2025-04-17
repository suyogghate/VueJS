<template>
    <!-- <h1>Original Number: {{ number }}</h1> -->
    <!-- <h1>Squared Number: {{ squaredNumber }}</h1> -->

    <!-- <h1>Full Name: {{ fullName }}</h1> -->

    <h1>Counter: {{ counter }}</h1>
    <p>Squared Counter: {{ squaredCounter }}</p>
    <button @click="incrementCounter">Increment</button>
</template>

<script setup>
import { ref, computed } from 'vue';

// const number = ref(5);
// const squaredNumber = computed(() => {
//     return number.value * number.value;
// });

// const firstName = ref('Huxn');
// const lastName = ref('WebDev');

// const fullName = computed(() => firstName.value + ' ' + lastName.value);
const counter = ref(0);
const squaredCounter = computed(() => counter.value ** 2)
const incrementCounter = () => counter.value++;
</script>