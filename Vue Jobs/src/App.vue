<template>
  <Navbar />
  <!-- <Hero title="Test title" subtitle="sub title"/> -->
  <RouterView />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>