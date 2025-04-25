<template>
    <div>
        <h1>(( Using Fetch  ))</h1>
        <button @click="fetchData">Fetch Data</button>
    </div>

    <div>
        <h2>Data from API:</h2>
        <!-- <pre>{{ data.data }}</pre> -->

        <ul>
            <li>Id: {{ id }}</li>
            <li>Title: {{ title }}</li>
            <li>Description: {{ description }}</li>
            <li>Price: {{ price }}</li>
            <li>Brand: {{ brand }}</li>
            <li>Category: {{ category }}</li>
        </ul>
        

    </div>
</template>

<script setup>
import { ref } from 'vue';

// const data = ref(null);

const id = ref(null);
const title = ref('');
const description = ref('');
const price = ref(null);
const brand = ref('');
const category = ref('');

const fetchData = () => {
    // Make d GET request using fetch
    fetch('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        // Parse the JSON response
        return response.json()
    }).then((responseData) => {
        console.log(responseData);
        id.value = responseData.data.id;
        title.value = responseData.data.title;
        description.value = responseData.data.description;
        price.value = responseData.data.price;
        brand.value = responseData.data.brand;
        category.value = responseData.data.category;
    }).catch((error) => {
        console.error(`Error fetching data: ${error}`);
    })
}
</script>