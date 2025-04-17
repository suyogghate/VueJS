<template>
    <!-- <h1>This is some text.</h1> 
    <h2>{{ myMessage }}</h2>  
    <p>{{ myNumber }}</p> 
    <p>2 + 5 = {{ 2 + 5 }}</p>
    <h2>Add two numbers: {{ add(3, 7) }}</h2> -->

    <a :href="myChannel">My youtube channel</a>

    <!-- <img :src="amazingImage" :alt="panda" :width="imageWidth" :height="imageHeight"> -->
    <img :="imageInfo">   <!-- dynamic binding-->


</template>

<script setup>
// const myMessage = "!Yellow World!";
// const myNumber = 100;

// function add(x, y){
//     return x + y;
// }

// const myChannel = "https://www.youtube.com/@huxnwebdev"

// const amazingImage = "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZGFzfGVufDB8fDB8fHww"

// const altText = "panda";

// const imageWidth = 400;
// const imageHeight = 400;

// --------------------------------------------------

// Dynamic binding
const imageInfo = {
    src: "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZGFzfGVufDB8fDB8fHww",
    alt: "panda",
    width: 500,
    height: 500
}
</script>

