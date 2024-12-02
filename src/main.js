import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";
import "./assets/bootstrap.min.css";

// Plugin options
const options = {
  position: "top-right", // Toast position
  timeout: 4000, // Time before toast disappears (in ms)
  hideProgressBar: false, // Show the progress bar
  closeOnClick: true, // Allow toast to be closed on click
  pauseOnHover: true, // Pause timeout when hovered
  draggable: true, // Enable dragging
  draggablePercent: 0.6, // Percentage of toast's width to be draggable
};

const app = createApp(App);

app.use(router); // Use the router
app.use(Toast, options);
app.mount("#app");
