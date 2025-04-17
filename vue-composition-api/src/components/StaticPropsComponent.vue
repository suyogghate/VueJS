<template>
    <h1>{{ props.name }}</h1>
</template>

<script setup>
// import { ref } from 'vue';

const props = defineProps(['name']);

console.log(props);

</script>