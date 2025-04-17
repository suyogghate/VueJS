<template>
    <h1>{{ props.first }}</h1>
    <h1>{{ props.last }}</h1>
</template>

<script setup>
const props = defineProps(['first', 'last'])
</script>