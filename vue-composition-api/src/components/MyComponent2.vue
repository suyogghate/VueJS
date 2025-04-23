<template>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script setup>
import { ref } from 'vue';

// When using the <script setup>
// - It's private by default
// - A parent referencing a child won't be able to access anything

// First we have to expose all the properties and methods
// then we'd be able to use them in parent component.
// - use (defineExpose) to expose our data for the parent to use.

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--

defineExpose({ count, increment, decrement });
</script>