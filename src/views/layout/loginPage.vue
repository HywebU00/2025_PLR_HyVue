<template>
  <div style="background: #eee" class="h-screen w-100 d-flex justify-center">
    <div ref="loginCard" class="mt-16">
      <v-sheet elevation="5" rounded="lg" width="320px" class="pa-4 r mx-auto">
        <v-img
          :width="50"
          aspect-ratio="1/1"
          class="mr-auto ml-auto mt-5"
          cover
          src="~@/assets/images/logo.png"
        ></v-img>
        <h2 class="my-3 mb-5 text-center">網站管理平台</h2>
        <v-divider class="pt-2 mb-2"></v-divider>
        <v-form fast-fail>
          <v-text-field
            density="compact"
            messages="說明文字"
            label="請輸入帳號"
          ></v-text-field>
          <v-text-field
            label="請輸入密碼"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            :messages="['說明文字']"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="d-flex align-center mb-8">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || '']"
              label="記住我？"
              required
              hide-details=""
            ></v-checkbox>
            <v-btn variant="text">忘記密碼</v-btn>
          </div>
          <v-btn type="submit" block color="primary" class="mt-2">登入</v-btn>
        </v-form>
        <ul class="text-caption text-center mt-8">
          <li>如有登入問題，請聯繫資訊科 王大明 分機123</li>
          <li>電子郵件：abc@gmail.com</li>
        </ul>
      </v-sheet>
    </div>
  </div>
</template>

<script></script>
