<template>
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <h1>Password: {{ password }}</h1>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        validator: (propValue) => ['Mike', 'Alex', 'Carry'].includes(propValue)
    },

    age: {
        type: Number,
        validator: (propValue) => (propValue >= 18 && propValue <= 30 ? true : false)
    },

    password: {
        type: String,
        validator: (propValue) => propValue.length >= 8
    }
})
</script>