<template>
    <!-- <div v-format-div="5">Using simple custom directive</div> -->

    <!-- <div v-format-div:orange>Using simple custom directive</div>
    <div v-format-div:purple>Using simple custom directive</div>
    <div v-format-div:teal>Using simple custom directive</div>
    <div v-format-div:pink>Using simple custom directive</div> -->

    <div v-format-div>Using simple custom directive</div>
</template>

<script setup>
// const vFormatDiv = {
//     mounted: (el, binding) => {
//         // console.log(el);
//         // console.log(binding);
//         // console.log(binding.value);
    
//         // el.style.fontSize = '4rem'
//         // el.style.fontStyle = 'italic'
//         // el.style.color = 'teal'

//         // el.style.fontSize = binding.value + 'rem'
//         // el.style.border = `${binding.value}px solid red`

//         switch (binding.arg) {
//             case 'orange':
//                 el.style.color = 'orange'
//                 break;
//             case 'pink':
//                 el.style.color = 'pink'
//                 break;
//             case 'purple':
//                 el.style.color = 'purple'
//                 break;
//             case 'teal':
//                 el.style.color = 'teal'
//                 break;
//             default:
//                 el.style.color = 'black'
//                 break;
//         }
//     }
// }

const vFormatDiv = (el) => (el.style.fontSize = '5rem')
</script>