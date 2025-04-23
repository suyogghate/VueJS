<template>
    <h1>Count: {{ counter.count }}</h1>
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button> -->
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
</template>

<script setup>
// import { ref } from 'vue';

// let count = ref(0)

// const increment = () => count.value++;
// const decrement = () => count.value--;

// What if i wanna use this logic in another component, How can i do it?
// - Your first answer will be : well just call that component in another place
// -- To call the component in another place it's gonna give us all the UI (template)
// in another component as well.

// SOLUTION:
// The solution is to extract all the logic from this component and create a separate composable
// - Creating a separate composable will alllow us to reuse that logic in overall application
// -  make our code totally clean & organized
import { useCounter } from '@/composables/useCounter';
const counter = useCounter()
</script>