<script setup>
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";

const Toast = useToast();

//const timer = ref(10);
const minutes = ref(0);
const hours = ref(0);
const secconds = ref(0);
const totalSeconds = ref(0);
const isRunning = ref(false);
let myInterval;

//final
const formattedTime = computed(() => {
  const hrs = Math.floor(totalSeconds.value / 3600);
  const mins = Math.floor((totalSeconds.value % 3600) / 60);
  const secs = totalSeconds.value % 60;

  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;
});

const starttimer = () => {
  totalSeconds.value = hours.value * 3600 + minutes.value * 60 + secconds.value;
  if (totalSeconds.value <= 0) return; // Prevent starting a timer with no time
  isRunning.value = true;
  myInterval = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
    } else {
      stopTimer();
      Toast.info("time's up");
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(myInterval);
  isRunning.value = false;
};
</script>

<template>
  <div class="container">
    <h1 class="title">Count Down</h1>

    <h1 class="time">{{ formattedTime }}</h1>
    <div class="input-container d-flex justify-content-center gap-4">
      <div>
        <input type="number" v-model="hours" />
        <label for=""> H</label>
      </div>

      <div>
        <input type="number" v-model="minutes" />
        <label for=""> m </label>
      </div>

      <div>
        <input type="number" v-model="secconds" />
        <label for=""> S </label>
      </div>
    </div>

    <div class="d-flex justify-content-center gap-4">
      <button @click="starttimer" :disabled="isRunning">start timer</button>
      <button class="stop" @click="stopTimer">stop</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
