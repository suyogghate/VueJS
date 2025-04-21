<template>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
const message = ref('Hello')

// LifeCycle Hooks
onBeforeMount(() => {
    console.log("Component is about to be mounted.");
})

onMounted(() => {
    console.log("Component has been mounted.");
})

onBeforeUpdate(() => {
    console.log("Component is about to be updated.");
})

onUpdated(() => {
    console.log("Component has been updated!");
})

onBeforeUnmount(() => {
    console.log("Component is about to unmounted.");
})

onUnmounted(() => {
    console.log("Component has been unmounted.");
})

const updateMessage = () => {
    message.value = 'Updated message';
}

</script>