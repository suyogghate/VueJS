<template>
    <h1>{{ username }}</h1>
    <h1>Count: {{ counter }}</h1>

    <button @click="username = 'Suyog'">Change Name</button>
    <button @click="counter++">Increment count</button>
</template>

<script setup>
import { ref, watch } from 'vue';

const username = ref('Jordan')
const counter = ref(0)

watch([username, counter], (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
})
</script>