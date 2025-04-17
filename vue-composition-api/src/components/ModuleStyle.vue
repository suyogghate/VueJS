<template>
<!-- <h1 :class="$style['m-class']">Using Module css with $ syntax (kebab-case)</h1> -->
 <!-- <h1 :class="$style.anotherClass">Using module css with $ syntax (camelCase)</h1> -->
 <h1 :class="myClasses.anotherClass">Using module css with $ syntax (camelCase)</h1>
</template>

<script>
</script>

<style module="myClasses">
/* kebab-case */
.m-class{
    background: firebrick;
    color: white;
}

.anotherClass {
    background-color: seagreen;
    color: white;
}
</style>