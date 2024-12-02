<script setup></script>

<template>
  <div>
    <router-link to="/">Home </router-link>
    <router-link :to="{ name: 'Timer' }">Timer </router-link>
    <router-link :to="{ name: 'stopwatch' }">stop watch </router-link>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
