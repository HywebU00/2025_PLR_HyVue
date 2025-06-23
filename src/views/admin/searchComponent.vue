<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2>
        <span>補償酬金調整設定</span>
      </h2>
      <h2>
        <span
          >補償酬金調整設定

          <v-btn size="sm" variant="text" @click="expand3 = !expand3">
            <span class=""> {{ expand3 ? "收合說明" : "展開說明" }}</span>
            <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
          </v-btn>
        </span>
      </h2>
      <v-col cols="12 py-0">
        <v-expand-transition>
          <v-card v-show="expand3" class="SearchInfoContent">
            <ul>
              <li>
                消你各至問鴨唱動，真收都還消再方說才上乍支未風。馬草我抓的斥！蝸羽婆來眼白爪申；由松朵工訴干兔牠連加，四彩想晚西蝴！玩抄祖而司青弓千童少同；邊雨申讀牙肉河朱、誰六旁女住再借朵讀屋，友追加，故五做汗。
              </li>
              <li>
                央收開打幼抄秋書彩，春苗候音讀黑旁遠香帶、文空可，愛千九巴羽飽昔息園登爪幫，原流兆視冒新枝兆路各。爸主今。
              </li>
              <li>
                杯愛掃成九兌，品坡起左用讀「尼點果子哪笑公就」雨放坡實午圓河巴出止幫元孝胡夕，首成食也，教馬來又，黃里貓也從忍時走室斤五朱、做苦十遠。
              </li>
            </ul>
          </v-card>
        </v-expand-transition>
      </v-col>
      <!-- 查詢區塊 start -->

      <v-col class="d-flex align-center" cols="12">
        <h3 class="mx-2 h3">
          查詢條件
          <v-btn variant="text" @click="expand2 = !expand2">
            <span class="mr-1"> {{ expand2 ? "收合說明" : "展開說明" }}</span>
            <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
          </v-btn>
        </h3>
        <!-- 收合搜尋條件 -->
      </v-col>
      <v-col cols="12 py-0">
        <v-expand-transition>
          <v-card v-show="expand2" class="SearchInfoContent">
            <ul>
              <li>
                消你各至問鴨唱動，真收都還消再方說才上乍支未風。馬草我抓的斥！蝸羽婆來眼白爪申；由松朵工訴干兔牠連加，四彩想晚西蝴！玩抄祖而司青弓千童少同；邊雨申讀牙肉河朱、誰六旁女住再借朵讀屋，友追加，故五做汗。
              </li>
              <li>
                央收開打幼抄秋書彩，春苗候音讀黑旁遠香帶、文空可，愛千九巴羽飽昔息園登爪幫，原流兆視冒新枝兆路各。爸主今。
              </li>
              <li>
                杯愛掃成九兌，品坡起左用讀「尼點果子哪笑公就」雨放坡實午圓河巴出止幫元孝胡夕，首成食也，教馬來又，黃里貓也從忍時走室斤五朱、做苦十遠。
              </li>
            </ul>
          </v-card>
        </v-expand-transition>
      </v-col>
      <v-col class="d-block align-center d-sm-flex">
        <v-btn
          class="mb-2 showExpandBtn"
          color="primary"
          prepend-icon="mdi-magnify"
          size="large"
          @click="expand = !expand"
        >
          搜尋條件
        </v-btn>
        <div class="ml-auto">
          <v-select
            class="ml-auto filterSelect"
            label="下拉式選單"
            density="compact"
            variant="outlined"
            single-line
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </div>
      </v-col>
      <v-col cols="12">
        <v-expand-transition>
          <div v-show="expand">
            <v-card class="mb-6 showExpandCard">
              <div class="pa-2">
                <v-form>
                  <v-container>
                    <!-- from title start -->
                    <v-row class="formGrp">
                      <v-col>
                        <span class="fromTitle"> 查詢 </span>
                      </v-col>
                    </v-row>
                    <!-- from title end -->
                    <!-- 註冊帳號 start -->
                    <v-row class="formGrp">
                      <v-col
                        class="pb-0 d-flex justify-lg-end"
                        cols="12"
                        lg="2"
                      >
                        <label class="text-primary" for="">ISBN</label>
                      </v-col>
                      <v-col>
                        <v-text-field
                          variant="outlined"
                          single-line
                          label=""
                          hide-details=""
                          density="compact"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col
                        class="pb-0 d-flex justify-lg-end"
                        cols="12"
                        lg="2"
                      >
                        <label class="text-primary" for="">書名</label>
                      </v-col>
                      <v-col>
                        <v-text-field
                          variant="outlined"
                          single-line
                          label=""
                          hide-details=""
                          density="compact"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col
                        class="pb-0 d-flex justify-lg-end"
                        cols="12"
                        lg="2"
                      >
                        <label class="text-primary" for="">著作人</label>
                      </v-col>
                      <v-col>
                        <v-text-field
                          variant="outlined"
                          single-line
                          label=""
                          hide-details=""
                          density="compact"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col
                        class="pb-0 d-flex justify-lg-end"
                        cols="12"
                        lg="2"
                      >
                        <label class="text-primary" for="">審核狀態</label>
                      </v-col>
                      <v-col>
                        <v-text-field
                          variant="outlined"
                          single-line
                          label=""
                          hide-details=""
                          density="compact"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- 註冊帳號 end -->
                    <v-row>
                      <v-col>
                        <div class="d-flex justify-center formBtnGrp mt-3">
                          <v-btn
                            text="搜尋"
                            variant="flat"
                            class="bg-primary elevation-0 mx-1"
                            size="large"
                          ></v-btn>
                          <v-btn
                            class="bg-secondary elevation-0 mx-1"
                            size="large"
                            text="重設"
                            variant="flat"
                          ></v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-card>
          </div>
        </v-expand-transition>
      </v-col>
      <v-col class="d-block align-center d-sm-flex pb-0" cols="12">
        <h4 class="mx-2 h4">已登記作品清單</h4>
        <div class="ml-auto mt-sm-0 mt-2 titleBtnGrp">
          <v-btn class="mx-1" color="secondary"> 編輯報表 </v-btn>
          <v-btn class="mx-1" color="primary"> 匯出報表 </v-btn>
          <v-btn class="mx-1" color="info"> 編輯報表 </v-btn>
        </div>
      </v-col>
      <!-- 查詢區塊 end  -->
      <v-col>
        <checkTable></checkTable>
      </v-col>
      <v-col>
        <dataTable></dataTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkTable from "@/components/checkTableServer.vue";
import dataTable from "@/components/defaultDataTableServer.vue";
export default {
  data: () => ({
    tab: null,
    expand: false,
    expand2: false,
    expand3: false,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: {
    checkTable,
    dataTable,
  },
};
</script>
<style></style>
