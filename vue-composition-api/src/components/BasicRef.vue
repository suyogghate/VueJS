<template>
    <div>
        <input type="text" placeholder="Enter your name..." ref="myref">
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const myRef = ref('')

// console.log(myRef.value);

onMounted(() => {
    console.log(myRef.value);
    myRef.value.focus();
    myRef.value.value = 'something';
})

</script>