import App from "./App.vue";

// Composables
import { createApp } from "vue";
// import { createVuetify } from "vuetify";
// Plugins
import { registerPlugins } from "@/plugins";

//chart
import "@/sass/settings.scss";
const app = createApp(App);

registerPlugins(app);
app.mount("#app");
