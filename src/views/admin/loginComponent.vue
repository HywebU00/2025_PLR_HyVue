<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>使用者登入</span></h2>
      <v-col>
        <div class="h-screen w-100 d-flex justify-center loginPage login">
          <div class="loginCard">
            <v-sheet elevation="5" rounded="lg" class="mx-auto">
              <v-form>
                <v-row class="formGrp">
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      single-line
                      label="請輸入帳號"
                      type=""
                      density="compact"
                      prepend-inner-icon="mdi-account-outline"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col>
                    <v-text-field
                      label=" 請輸入e-mail"
                      single-line
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                      prepend-inner-icon="mdi-email-outline"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col>
                    <v-text-field
                      label=" 請輸入密碼"
                      single-line
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                      prepend-inner-icon="mdi-lock-outline"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- 驗證碼欄位 start -->
                <v-row class="formGrp">
                  <v-col class="compactContent" cols="">
                    <v-text-field
                      variant="outlined"
                      label="請輸入驗證碼"
                      type="text"
                      hide-details="auto"
                      single-line
                      density="compact"
                    ></v-text-field>
                    <div class="">
                      <div class="img">
                        <img src="~@/assets/images/captcha.gif" />
                      </div>
                      <v-btn class="iconBtn" elevation="0" color="transparent">
                        <v-icon icon="mdi-refresh"></v-icon>
                      </v-btn>
                      <v-btn class="iconBtn" elevation="0" color="transparent">
                        <v-icon icon="mdi-volume-high"></v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <!-- 驗證碼欄位 end -->

                <v-btn type="submit" block color="primary">登入</v-btn>
                <div class="content">
                  <a class="linkText" href="">忘記密碼</a>
                  <p>
                    沒有帳號，立即
                    <a class="linkText" href="">註冊帳號</a>
                  </p>
                </div>
              </v-form>
            </v-sheet>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: {},
};
</script>
<style></style>
