<template>
    <h1 :ref="myRefFunc">This is initial value</h1>
</template>

<script setup>
const myRefFunc = (el) => {
    console.log(el.textContent);    // Reading text content
    el.textContent = 'Text changed'
    el.style.color = 'crimson'
}
</script>