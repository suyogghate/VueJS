<template>
    <h1>{{ props.fullname }}</h1>
    <h1>{{ props.age }}</h1>
</template>

<script setup>
// Basic validation
// const props = defineProps({
//     fullname: String,
//     age: Number
// })

// Complex validation
const props = defineProps({
    fullname: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    age: Number
})
</script>