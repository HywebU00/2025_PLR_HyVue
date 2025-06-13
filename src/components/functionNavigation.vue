<!-- 桌機版 start-->
<template>
  <div class="functionList">
    <!-- 首頁 start -->
    <!-- <v-btn class=""> 首頁 </v-btn> -->
    <!-- 首頁 end -->
    <div class="">
      <!-- v-btn-toggle start -->
      <v-btn-toggle
        class=""
        color="primary "
        mandatory
        v-model="toggle_exclusive"
      >
        <v-btn class="ma-0">我是出版者 </v-btn>
        <v-btn class="ma-0">我是創作者 </v-btn>
      </v-btn-toggle>
      <!-- v-btn-toggle end -->
      <!-- 登入按鈕 start -->
      <v-btn
        variant="flat"
        color="primary "
        class=""
        prepend-icon="mdi-account-outline"
        >登入</v-btn
      >
    </div>
    <!-- 登入按鈕 end -->
    <ul class="functionList__ul">
      <li>
        <router-link to=""> 城邦文化事業股份有限公司 </router-link>
      </li>
      <li>
        <router-link to=""> 登記前台首頁</router-link>
      </li>
      <li>
        <router-link to=""> 教學專區 </router-link>
      </li>
    </ul>

    <!-- 帳號維護 start -->
    <!-- <v-btn> 帳號維護 </v-btn> -->
    <!-- 帳號維護 end -->

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
  data() {
    return {
      toggle_exclusive: 1,
    };
  },
};
</script>
