<template>
    <MyComponent2 ref="myRef"/>
</template>

<script setup>
import MyComponent2 from './MyComponent2.vue';
import { onMounted, ref } from 'vue';
const myRef = ref(null)

onMounted(() => {
    console.log(myRef.value);
    
})
</script>