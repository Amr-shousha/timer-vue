<script setup>
import { ref } from "vue";

const timer = ref(10);
let myInterval;

const starttimer = () => {
  if (timer.value > 0) {
    myInterval = setInterval(() => {
      timer.value--;
    }, 1000);
  } else console.log("add time");
};

const stop = () => {
  clearInterval(myInterval);
};
</script>

<template>
  <h1>time (count down)</h1>
  <input v-model="timer" type="text" />
  <input v-model="mins" type="text" />
  <input v-model="Hrs" type="text" />

  <h1>{{ timer }}</h1>
  <button @click="starttimer">start timer</button>
  <button @click="stop">stop</button>
</template>

<style scoped></style>
