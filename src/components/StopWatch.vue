<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const timer = ref(55);
const mins = ref(59);
const Hrs = ref(0);
const active = ref(false);
let myInterval;
const Toast = useToast();
const starttimer = () => {
  active.value = true;
  myInterval = setInterval(() => {
    timer.value++;
    if (timer.value > 60) {
      mins.value++;
      timer.value = 0;
    }
    if (mins.value > 59) {
      Hrs.value++;
      mins.value = 0;
    }
  }, 1000);
  Toast.info("timer started", { bodyClassName: "toast-info" });
};

const stop = () => {
  clearInterval(myInterval);
  active.value = false;
};
</script>
<template>
  <h1>StopWatch</h1>
  <h1 v-if="Hrs">{{ Hrs }}H</h1>

  <h1 v-if="mins">{{ mins }}m</h1>
  <h1>{{ timer }}S</h1>
  <button @click="starttimer" :disabled="active">start timer</button>
  <button @click="stop">stop</button>
</template>
<style scoped></style>

//need to style the toast
