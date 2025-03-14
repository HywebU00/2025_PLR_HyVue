import App from "./App.vue";

// Composables
import { createApp } from "vue";
// import { createVuetify } from "vuetify";
// Plugins
import { registerPlugins } from "@/plugins";

//chart
import VueApexCharts from "vue3-apexcharts";
import "@/sass/settings.scss";
const app = createApp(App);

registerPlugins(app);
app;
app.use(VueApexCharts).mount("#app");
