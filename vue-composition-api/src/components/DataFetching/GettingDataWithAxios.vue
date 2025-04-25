<template>
    <h1>(( Using Axios ))</h1>
    <button @click="fetchData">Fetch Data</button>
    <pre>{{ data }}</pre>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null)

const fetchData = async() => {
    try{
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
        data.value = response.data
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}
</script>