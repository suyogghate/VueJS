<template>
    <form @submit.prevent="$emit('userInfo', username, email, password)">
        Username: <input type="text" v-model="username" placeholder="please enter your username" />
        <br>
        Email: <input type="email" v-model="email" placeholder="please enter your email" />
        <br>
        Password: <input type="password" v-model="password" placeholder="please enter your password"/>
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
</script>

