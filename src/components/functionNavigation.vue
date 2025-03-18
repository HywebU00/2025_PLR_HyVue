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
export default {};
</script>
