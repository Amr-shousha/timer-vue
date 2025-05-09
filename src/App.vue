<script setup></script>

<template>
  <div>
    <div class="nav-bar">
      <router-link to="/"><button class="nav">Home</button></router-link>
      <router-link :to="{ name: 'Timer' }"
        ><button class="nav">Timer</button>
      </router-link>
      <router-link :to="{ name: 'stopwatch' }"
        ><button class="nav">stop watch</button>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.nav {
  border: none;
  padding: 6px 50px;
  width: auto;
  font-weight: 700;
  background-color: #c4bbb8;
}
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
