<template>
    <h2 class="g-1">Another Global Style</h2>
    <h2 class="l-1">Another Local Style</h2>
</template>

<!-- Global style -->
<style>
.g-1 {
    background: fuchsia;
    color: white;
}
</style>

<!-- Local style -->
<style scoped>
.l-1{
    background-color: black;
    color: white;
}
</style>