<template>
    <h1>Injecting Array</h1>
    <ul v-for="(friend, index) in friendsList" :key="index">
        <li>{{ friend }}</li>
    </ul>
    <hr>
    <h1>Injecting Objects</h1>
    <ul v-for="(game, i) in games" :key="i">
        <li>{{ game }}</li>
    </ul>
    <hr>
    <h1>Injecting Array of Objects</h1>
    <ul v-for="(mg, i) in moreGames" :key="i">
        <li>{{ mg }}</li>
    </ul>
    <hr>
    <h1>Object Destructuring</h1>
    <ul v-for="({title, genre, platform, releaseDate, director}, i) in moreGames" :key="i">
        <li>{{ title }}</li>
        <li>{{ genre }}</li>
        <li>{{ platform }}</li>
        <li>{{ releaseDate }}</li>
        <li v-if="director in {title, genre, platform, releaseDate, director}">
            {{ director }}
        </li>
    </ul>


</template>

<script setup>
import { inject } from 'vue';

const friendsList = inject('friends')
const games = inject('games')
const moreGames = inject('moreGames')

</script>