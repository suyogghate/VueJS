<template>
    <h1>{{ message }}</h1>
    <input type="text" v-model="inputText" placeholder="Type something....." />
</template>

<script setup>
import { ref, watch } from 'vue';

const message = ref('Hello Vue!!!')
const inputText = ref('apple')

// Watch for changes in inputText and update message accordingly
watch(inputText, (newValue, oldValue) => {
    // You can perform some logic here when inputText changes.
    console.log(newValue);
    console.log(oldValue);
    message.value = `You typed: ${newValue}`
});

</script>