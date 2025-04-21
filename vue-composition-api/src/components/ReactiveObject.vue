<template>
    <h1>{{ state.username }}</h1>
    <button @click="state.username = 'Jordan'">Change Name</button>
</template>

<script setup>
import { reactive, watch } from 'vue';

const state = reactive({username: 'Alex'})

// Here we can't provide specific property of object
// - we have to provide the entire object, otherwise it's gonna give us error in console

// watch(state, (newValue, oldValue) => {
//     // If we are using "object" both new & old values will be same
//     console.log('new value', newValue);
//     console.log('old value', oldValue);
// })

// Now if we want to get the "old" & "new" values separately.
// - for that we'll have to pass a getter function.
// - & here we have to specify the actual object/state "property"

watch(() => state.username, (newValue, oldValue) => {
    console.log('new value', newValue);
    console.log('old value', oldValue);
})

</script>