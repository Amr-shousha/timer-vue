// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Timer from "../views/Timer.vue";
import stopwatch from "../views/StopWatch.vue";
import Home from "../views/home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Timer", name: "Timer", component: Timer },
  { path: "/stopwatch", name: "stopwatch", component: stopwatch },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
