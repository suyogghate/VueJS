<template>
    <!-- <h1>Count: {{ initialState.count }}</h1> -->
    <!-- <button @click="initialState.count++">+</button>
    <button @click="initialState.count--">-</button> -->
    
    <h1>Current Count: {{ initialState.val.count }}</h1>
    <h1>User: {{ initialState.user }}</h1>

    <button @click="initialState.val.count += 10">Add 10</button>
    <button @click="changeUser">Change User</button>
    <button @click="initialState.user.push('John Doe')">Add one more</button>
</template>

<script setup>
import { reactive } from 'vue';

// let initialState = reactive({
//     count: 0
// });

const changeUser = () => {
    initialState.user[0] = "Sameer"
    initialState.user[1] = "Aakash"
}

let initialState = reactive({
    val: {count: 0},
    user: ["Huxn", "Suyog"]
});


</script>