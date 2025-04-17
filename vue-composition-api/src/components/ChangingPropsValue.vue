<template>
    <h1>{{ favNumber.favNumber }}</h1>
</template>

<script setup>
const favNumber = defineProps(['favNumber']);

// favNumber.favNumber = 10;    // warning: you can not change the value of props
// Props are "immutable" which means there value cannot be changed
// and they are just readonly.

</script>