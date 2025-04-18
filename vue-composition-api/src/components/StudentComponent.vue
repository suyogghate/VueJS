<template>
    <h1>Student Component (child)</h1>
    <h1>{{ studentName }}</h1>
    <h1>{{ studentAge }}</h1>
    <h1>{{ studentLocation }}</h1>
</template>

<script setup>
import { inject } from 'vue';
const studentName = inject('studentName')
const studentAge = inject('studentAge')
const studentLocation = inject('studentLocation')
</script>