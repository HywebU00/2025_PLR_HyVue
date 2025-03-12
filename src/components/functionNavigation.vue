<!-- 桌機版 start-->
<template>
  <div class="functionList">
    <v-btn class=""> 首頁 </v-btn>
    <v-btn
      variant="flat"
      color="primary "
      class=""
      prepend-icon="mdi-account-outline"
      >登入</v-btn
    >
    <v-btn> 帳號維護 </v-btn>

    <!-- 訊息通知按鈕 start -->
    <!-- <v-menu
      v-model="infoMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn>
          <v-badge :content="2" color="light">
            <span v-bind="props" class="icon material-icons-round">
              notifications_active
            </span>
          </v-badge>
        </v-btn>
      </template>
      <v-card min-width="100"><h1>123</h1></v-card>
    </v-menu> -->
    <!-- 訊息通知按鈕 end -->
  </div>
</template>
<!-- 桌機版 end-->

<script>
export default {
  data: () => ({
    theme: "",
    themeDark: false,
    mobileHeader: false,
    userLoginCard: false,
    ////////////////////////
    fontSizeMenu: false,
    fontSize: "",
    colorMenu: false,
    infoMenu: false,
    searchMenu: false,
    /////////////////////////
    cookie: "",
    btnSize: "",
    colorCookie: "",
  }),
  methods: {
    toggleDarkTheme() {
      let th = this.$vuetify.theme.global;
      th.name === `dark` ? (th.name = `default`) : (th.name = `dark`);
      this.createCookie("Theme", `${th.name}`, 356);
      this.themeDark = !this.themeDark;
      if (this.themeDark === true) {
        this.theme = "default";
      }
    },
    changeTheme(color) {
      let th = this.$vuetify.theme.global;
      th.name = color;
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },
    fontSizeChange(targetSize) {
      this.createCookie("FontSize", `${targetSize}`, 356);
      this.changeFontSizeClass(targetSize);
    },
    createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = "; expires=" + _date.toGMTString();
      } else {
        _expires = "";
      }
      document.cookie = name + "=" + value + _expires + "; path=/";
    },
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    changeFontSizeClass(targetName) {
      const body = document.querySelector("body");
      switch (targetName) {
        case "small":
          body.classList.remove("largeSize", "mediumSize");
          body.classList.add("smallSize");
          this.fontSize = "small";
          break;
        case "medium":
          body.classList.remove("smallSize", "largeSize");
          body.classList.add("mediumSize");
          this.fontSize = "medium";
          break;
        case "large":
          body.classList.remove("smallSize", "mediumSize");
          body.classList.add("largeSize");
          this.fontSize = "large";
          break;
      }
      this.getFontSizeText(targetName);
    },
    getFontSizeText(textSize) {
      switch (textSize) {
        case "small":
          this.btnSize = "小";
          break;
        case "medium":
          this.btnSize = "中";
          break;
        case "large":
          this.btnSize = "大";
          break;
      }
    },
    fontSizeInit() {
      const body = document.querySelector("body");
      this.cookie = this.readCookie("FontSize") || null;
      if (this.cookie == null) {
        this.cookie = "medium";
      }
      this.fontSize = this.cookie;
      body.classList.add(`${this.cookie}Size`);
      this.getFontSizeText(this.cookie);
    },
    themeInit() {
      this.theme = this.readCookie("Theme") || null;
      if (this.theme == null) {
        this.theme = "default";
        this.themeDark = false;
      }
      if (this.theme == "dark") {
        this.themeDark = true;
      }
      this.changeTheme(this.theme);
    },
    //桌機與手機版本header 切換
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991
        ? (this.mobileHeader = true)
        : (this.mobileHeader = false);
      this.isSmallScreen = window.innerWidth < 991;
    },
  },
  mounted() {
    this.fontSizeInit();
    this.handleResize();
    this.themeInit();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
