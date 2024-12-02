<script setup>
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";

const totalSeconds = ref(0);
//const mins = ref(0);
//const Hrs = ref(0);
const active = ref(false);
let myInterval;
const Toast = useToast();

const formattedTime = computed(() => {
  const hrs = Math.floor(totalSeconds.value / 3600);
  const mins = Math.floor((totalSeconds.value / 3600) % 60);
  const secs = totalSeconds.value % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;
});

const starttimer = () => {
  active.value = true;
  myInterval = setInterval(() => {
    totalSeconds.value++;
  }, 1000);
  Toast.info("timer started", { bodyClassName: "toast-info" });
};

const stop = () => {
  clearInterval(myInterval);
  active.value = false;
};
</script>
<template>
  <div class="container">
    <h1 class="title">Stopwatch</h1>
    <h1 class="time">{{ formattedTime }}</h1>

    <div class="d-flex justify-content-center gap-4">
      <button @click="starttimer" :disabled="active">start timer</button>
      <button class="stop" @click="stop">stop</button>
    </div>
  </div>
</template>
<style scoped></style>

//need to style the toast
