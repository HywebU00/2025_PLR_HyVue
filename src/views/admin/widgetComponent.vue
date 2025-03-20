<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>

    <v-row>
      <h2><span>使用者註冊</span></h2>
      <v-col class="px-1" md="3" cols="12">
        <v-card class="treeviewBlock pa-2">
          <ul>
            <tree-item class="item" :model="treeData"></tree-item>
            <tree-item class="item" :model="treeData2"></tree-item>
          </ul> </v-card
      ></v-col>
      <v-col class="px-4" md="9" cols="12">
        <v-form>
          <!-- 表單start -->
          <v-container class="container">
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="type"
                  >族名
                  <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</abbr
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  single-line
                  hide-details="auto"
                  error-messages="測試測試"
                  density="compact"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="type"
                  >族別
                  <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</abbr
                  ></label
                >
              </v-col>
              <v-col>
                <v-autocomplete
                  id="type"
                  color="secondary"
                  hide-details="auto"
                  single-line
                  variant="outlined"
                  density="compact"
                  :items="['布農族', '阿美族', '卑南族']"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="mail"
                  >Email
                  <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</abbr
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  single-line
                  hide-details="auto"
                  id="mail"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="type"
                  >行動電話
                  <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</abbr
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  single-line
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="list"
                  >多選選單
                  <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</abbr
                  ></label
                >
              </v-col>
              <v-col
                ><v-radio-group
                  inline
                  label=""
                  color="primary"
                  hide-details="auto"
                >
                  <v-radio label="公司團體" value="1"></v-radio>
                  <v-radio label="個人" value="2"></v-radio> </v-radio-group
              ></v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="">交辦事項 </label>
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  hide-details="auto"
                  single-line
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="">文字輸入 </label>
              </v-col>
              <v-col>
                <v-textarea
                  placeholder="請輸入文字"
                  variant="outlined"
                  hide-details="auto"
                  density="compact"
                  auto-grow
                  rows="6"
                  row-height="30"
                  shaped
                  class="mb-2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="pb-0 d-flex justify-lg-end">
                <label for="">單選 </label>
              </v-col>
              <v-col>
                <v-radio-group inline color="info" hide-details="auto">
                  <v-radio label="是" value="true"></v-radio>
                  <v-radio label="否" value="false"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="">
                <label class="pb-0 d-flex justify-lg-end" for="">住址</label>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="6" md="3">
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      density="compact"
                      placeholder="輸入地址"
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-autocomplete
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      color="secondary"
                      density="compact"
                      placeholder="輸入地址"
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="2" class="">
                <label class="pb-0 d-flex justify-lg-end" for=""
                  >兩欄欄位</label
                >
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      density="compact"
                      placeholder="輸入地址"
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      variant="outlined"
                      single-line
                      color="secondary"
                      density="compact"
                      hide-details="auto"
                      placeholder="輸入地址"
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- 左右兩欄 start -->
            <v-row class="d-flex formGrp formGrp_2">
              <v-col cols="12" md="6">
                <v-row>
                  <v-col class="bg-thead formGrpTitle mb-5 mx-3">應領數</v-col>
                </v-row>
                <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                  <v-col cols="12" md="3" class="">
                    <label for="type"
                      >欄位一
                      <abbr
                        class="necessary"
                        title="為必填(選)欄位,不能為空白。"
                        >*</abbr
                      ></label
                    >
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      hide-details="auto"
                      single-line
                      density="compact"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <v-row>
                  <v-col class="bg-thead formGrpTitle mb-5 mx-3">扣領數</v-col>
                </v-row>
                <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                  <v-col cols="12" md="3" class="">
                    <label for="type"
                      >欄位一
                      <abbr
                        class="necessary"
                        title="為必填(選)欄位,不能為空白。"
                        >*</abbr
                      ></label
                    >
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- 左右兩欄 end -->
            <div class="d-flex justify-center formBtnGrp">
              <v-btn
                text="確定註冊"
                variant="flat"
                size="x-large"
                class="bg-primary btn elevation-0 mx-2"
              ></v-btn>
              <v-btn
                size="x-large"
                class="bg-secondary btn elevation-0 mx-2"
                text="重新設定"
                variant="flat"
              ></v-btn>
            </div>
          </v-container>
          <!-- 表單end -->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TreeItem from "@/components/TreeItem.vue";
const treeData = {
  name: "分類Ａ",
  children: [
    { name: "分類Ａ-1" },
    { name: "分類Ａ-2" },
    {
      name: "分類Ａ-3",
      children: [
        {
          name: "分類Ａ-3.1",
        },
        { name: "分類Ａ-3.2" },
        { name: "分類Ａ-3.3" },
        {
          name: "分類Ａ-3.4",
        },
      ],
    },
  ],
};
const treeData2 = {
  name: "分類B",
  children: [
    { name: "分類B-1" },
    { name: "分類B-2" },
    {
      name: "分類B-3",
      children: [
        {
          name: "分類B-3.1",
        },
        { name: "分類B-3.2" },
        { name: "分類B-3.3" },
        {
          name: "分類B-3.4",
        },
      ],
    },
  ],
};
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data
    data: [
      {
        id: "1",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "2",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "3",
        top: false,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
    ],
    treeData,
    treeData2,
    //table serve
  }),
  methods: {},
  components: {
    TreeItem,
  },
};
</script>
