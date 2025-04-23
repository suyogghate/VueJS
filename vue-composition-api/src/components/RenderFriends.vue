<template>
    <h2 v-for="(friend, i) in friends" :key="i">
        {{ friend }}
    </h2>
</template>

<script setup>
import { ref } from 'vue';

const friends = ref(['Huxn', 'Jordan', 'Alex', 'Mike'])
</script>