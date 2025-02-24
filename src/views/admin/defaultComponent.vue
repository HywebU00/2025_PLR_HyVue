<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>使用者註冊</span></h2>
      <v-col class="stepBar">
        <ul>
          <li class="active">
            <div class="icon">
              <img src="~@/assets/images/icon_user.png" alt="" />
            </div>
            <div class="">
              <span>Step 1</span>
              <div class="">選擇身份 建立帳號</div>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~@/assets/images/icon_plan.png" alt="" />
            </div>
            <div class="">
              <span>Step 2</span>
              <div class="">填寫個人資料單位</div>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~@/assets/images/icon_userCheck.png" alt="" />
            </div>
            <div class="">
              <span>Step 3</span>
              <div class="">身分驗證 開通帳號</div>
            </div>
          </li>
        </ul>
      </v-col>
      <v-form>
        <v-container>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="6" lg="5">
              <v-text-field
                variant="outlined"
                single-line
                label="文字標準表單"
                hide-details="auto"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="6" lg="5">
              <v-text-field
                variant="outlined"
                label="文字標準表單"
                hide-details="auto"
                single-line
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                label="文字標準表單"
                density="compact"
                single-line
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="auto">
              <v-btn class="h-100" color="primary">選擇</v-btn>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="">
              <v-text-field
                variant="outlined"
                label="有icon的輸入匡"
                type="text"
                hide-details="auto"
                single-line
                :messages="['說明文字']"
                append-inner-icon="mdi-pencil"
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="密碼表單"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                :messages="['說明文字']"
                @click:append-inner="visible = !visible"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="12" lg="2" class="pb-0 d-flex justify-lg-end">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                label="文字標準表單"
                single-line
                hide-details="auto"
                :messages="['文字標準表單']"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="auto">
              <v-checkbox label="同會員資訊" hide-details="auto"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="12" lg="2" class="pb-0 d-flex justify-lg-end">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="4" lg="3">
              <v-select
                variant="outlined"
                density="compact"
                label="下拉式選單"
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="8" lg="7">
              <v-text-field
                variant="outlined"
                single-line
                density="compact"
                label="文字標準表單"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="4" lg="3">
              <v-text-field
                placeholder="886"
                density="compact"
                single-line
                variant="outlined"
                hide-details="auto"
              >
                <template v-slot:prepend>
                  <v-icon> mdi-plus </v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="5" lg="4">
              <v-text-field
                density="compact"
                hide-details="auto"
                single-line
                variant="outlined"
                label=""
              >
                <template v-slot:append>
                  <p>分機</p>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                density="compact"
                hide-details="auto"
                single-line
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="4" lg="3">
              <v-text-field
                density="compact"
                label="文字標準表單"
                variant="outlined"
                single-line
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="8" lg="7">
              <v-text-field
                density="compact"
                label="文字標準表單"
                single-line
                hide-details="auto"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="3">
              <v-select
                label="下拉式選單"
                single-line
                density="compact"
                variant="outlined"
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-select
                label="下拉式選單"
                density="compact"
                variant="outlined"
                single-line
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="">
              <v-text-field
                label="文字標準表單"
                single-line
                density="compact"
                variant="outlined"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import gsap from "gsap";

import pieChart from "@/components/chart/pieChart.vue";
import lineAndBarChart from "@/components/chart/lineAndBarChart.vue";

export default {
  data: () => ({
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    countCards: [
      { title: "今日訪客人數", bgColor: "#32a7fa", num: 500 },
      { title: "待審資料", bgColor: "#3fd1b5", num: 320 },
      { title: "今日新增資料", bgColor: "#0156a2", num: 1370 },
      { title: "今日訪客人數", bgColor: "#1c93d0", num: 348 },
    ],
  }),
  methods: {
    count(index, num = 200) {
      let th = this.$refs.countCard[index];
      let Numbs = { val: 0 },
        NewVal = num;
      gsap.to(Numbs, {
        val: NewVal,
        roundProps: "val",
        duration: 2,
        onUpdate: function () {
          th.innerHTML = Numbs.val;
        },
      });
    },
  },
  mounted() {
    // this.countCards.forEach((item, index) => {
    //   this.count(index, item.num);
    // });
  },
  components: {
    pieChart,
    lineAndBarChart,
  },
};
</script>
<style scoped>
.pieCard {
  height: 90%;
}
</style>
