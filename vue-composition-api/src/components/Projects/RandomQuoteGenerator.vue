<template>
    <h1>Random Quotes</h1>
    <button @click="fetchData">Get Quotes</button>
    <p>Author: {{ author }}</p>
    <p>Quote: {{ content }}</p>
</template>

<script setup>
import { ref } from 'vue';

const author = ref('');
const content = ref('');


const fetchData = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json();
        console.log(responseData);
        author.value = responseData.data.author;
        content.value = responseData.data.content;
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
    }
}

</script>