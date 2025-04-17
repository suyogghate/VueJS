<template>
    <!-- <h1>Hello</h1>
    <h1>Count : {{ count }}</h1>
    <button @click="incrementCount">Increment</button>
    <br>
    <br>
    <button @click="decrementCount">Decrement</button> -->
    <!-- <form @submit.prevent="submitForm">
        <input type="email" placeholder="Please enter your email id....">
        <br>
        <br>
        <input type="password" placeholder="Please enter your password....">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form> -->

    <button @click="showMessage('This is my message!')">Show Message</button>
</template>

<script setup>
// import { ref } from 'vue';
// let count = ref(0);

// const incrementCount = () => count.value++;
// const decrementCount = () => count.value--;

// const submitForm = (e) => {
//     alert('Valid credentials!')
// }

const showMessage = (message) => alert(message);
</script>
<!-- Reactiviy and Reactive -->