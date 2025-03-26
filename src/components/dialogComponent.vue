<script>
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    datepickerModalVue,
  },
};
</script>

<template>
  <v-row class="finder">
    <v-container>
      <p class="text-primary">
        DialogComponent 元件放於 components /DialogComponent
      </p>
    </v-container>
    <v-dialog
      class="peopleFinderCard"
      v-model="dialog"
      scrollable
      max-width="800"
      transition="dialog-bottom-transition"
    >
      <!-- Demo 專用用按鈕 start -->

      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> DialogComponent 按鈕</v-btn>
      </template>
      <!-- Demo 專用用按鈕 end -->
      <v-card>
        <v-card-title>
          <v-container class="pb-0">
            <span class="text-primary font-weight-bold">燈箱表單標題</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 驗證方式 </label>
                </v-col>
                <v-col class="d-flex align-start">
                  <v-select
                    placeholder="文字標準表單"
                    single-line
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                    error-messages="錯誤錯誤錯錯誤"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 帳號１ </label>
                </v-col>
                <v-col class="d-flex align-start">
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    variant="outlined"
                    single-line
                    details="文字標準表單"
                    error-messages="錯誤錯誤錯錯誤"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    姓名<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    variant="outlined"
                    hide-details="auto"
                    single-line
                    details="文字標準表單"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    層級<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    hide-details="auto"
                    variant="outlined"
                    single-line
                    details="文字標準表單"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    角色設定<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    variant="outlined"
                    single-line
                    hide-details="auto"
                    details="文字標準表單"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    行政區<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    variant="outlined"
                    hide-details="auto"
                    single-line
                    details="文字標準表單"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    日期設定<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <datepickerModalVue> </datepickerModalVue>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    規則<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-select
                    placeholder="文字標準表單"
                    variant="outlined"
                    single-line
                    density="compact"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-gray" for="">
                    指定名單<abbr
                      class="necessary"
                      title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="d-flex align-start">
                  <v-file-input
                    prepend-icon=""
                    append-inner-icon="mdi-file-upload-outline"
                    variant="outlined"
                    single-line
                    density="compact"
                    hide-details="auto"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="submit"
            elevation="0"
            color="submit"
            variant="flat"
            rounded="md"
            size="large"
            @click="dialog = !dialog"
          >
            送出
          </v-btn>
          <v-btn
            color="cancel"
            variant="flat"
            rounded="md"
            size="large"
            class="cancel"
            @click="dialog = !dialog"
          >
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
