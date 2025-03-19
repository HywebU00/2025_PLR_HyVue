// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import "@/sass/settings.scss";
// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
import { md1 } from "vuetify/blueprints";
export default createVuetify({
  // blueprint: md3,藍圖樣式
  theme: {
    defaultTheme: "default",
    blueprint: md1,
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#3a3a3a",
          info: "#626060",
          secondary: "#dcdcdc",
          loginColor: "#0156a2",
          light: "#8eebb1",
          navText: "#262626",
          thead: "#626060", // "#dcdcdc",
        },
      },
    },
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
