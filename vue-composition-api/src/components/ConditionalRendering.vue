<template>
    <!-- <div>
        <p v-if="isTrue">This will show if isTrue is true.</p>
        <p v-else-if="isFalse">This will show if isFalse is true.</p>
        <p v-else="isFalse">This will show if neither isTrue or isFalse is true</p>
    </div> -->
    <!-- <div>
        <p v-if="isVisible">This paragraph will be shown or hidden based on the value of isVisible</p>
        <button @click="isVisible = !isVisible">Toggle Visibility</button>
    </div> -->

    <!-- <div>
        <h1 v-if="isLoggedIn">Welcome {{ username }}</h1>
        <p v-else>Please log in to access content</p>

        <div v-show="showDetails">
            <h4>You are now able to modufy your dashboard</h4>
        </div>
    </div> -->

    <!-- <div v-if="isActive">
        <h1>My Blog Post</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis iure, asperiores, commodi unde quae tempora at delectus esse saepe ut temporibus inventore et quam qui corporis laborum deleniti autem dolores quibusdam amet recusandae illum?
        </p>
    </div>

    <button @click="isActive = !isActive">Toggle Post</button> -->

    <h1 v-if="password.length > 8">Strong Password</h1>
    <h1 v-else-if="password.length < 8">Weak Password</h1>
    <h1 v-else>Plese enter your password</h1>
</template>

<script setup>
// const isTrue = false;
// const isFalse = false;

import { ref } from 'vue';

// let isVisible = ref(true);

// let isLoggedIn = ref(true);
// let username = 'Huxn';
// let showDetails = ref(isLoggedIn);

// let isActive = ref(false);

let password = ref(9)

</script>