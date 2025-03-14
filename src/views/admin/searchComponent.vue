<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>補償酬金調整設定</span></h2>

      <!-- 查詢區塊 start -->

      <v-col class="d-flex align-center" cols="12">
        <h3 class="mx-2 h3">查詢條件</h3>
        <!-- 收合搜尋條件 -->
        <v-btn
          class="mb-2 ml-auto"
          color="primary"
          prepend-icon="mdi-magnify"
          size="large"
          @click="expand = !expand"
        >
          搜尋條件
        </v-btn>
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
      <v-col class="d-flex" cols="12">
        <h3 class="mx-2 h3">已登記作品清單</h3>
      </v-col>
      <!-- 查詢區塊 end  -->
      <v-col>
        <checkTable></checkTable>
        <!-- v-table start -->
        <!-- <v-table class="cellTable">
          <thead class="bg-thead">
            <tr>
              <th class="text-center">選擇</th>
              <th class="text-center">管制代號</th>
              <th class="text-center">案件名稱</th>
              <th class="text-center">填報期限</th>
              <th class="text-center">交辦事項</th>
              <th class="text-center">主辦單位</th>
              <th class="text-center">預定完成日期</th>
              <th class="text-center">辦理情形</th>
              <th class="text-center">案件狀態</th>
              <th class="text-center">審核狀態</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="i in 2" :key="i">
              <tr class="text-center">
                <td rowspan="2">
                  <v-checkbox></v-checkbox>
                </td>
                <td rowspan="2">666-01<br />(2023/08/14)</td>
                <td rowspan="2">專案名稱專案名稱</td>
                <td rowspan="2">2023/08/14 <br />14:00</td>
                <td rowspan="2">
                  <p class="mt-1">請回報</p>
                  <div class="btnGroup">
                    <v-btn
                      class="my-1"
                      color="submit"
                      elevation="0"
                      size="small"
                      >批次下載填報附件</v-btn
                    >
                  </div>
                </td>
                <td>
                  <p class="mt-1">教育文化處</p>
                  <div class="btnGroup ma-1">
                    <v-btn color="submit" elevation="0" size="small"
                      >批次下載填報附件</v-btn
                    >
                  </div>
                </td>
                <td>2023/08/14</td>
                <td>
                  <ul>
                    <li>填報期限:2023/08/14</li>
                    <li>填報人:XXX</li>
                    <li>
                      本專案依XXX
                      辦理修正，並依規定送辦行政院公報，同時於本會網站更新資訊
                    </li>
                  </ul>
                </td>
                <td>
                  <p class="mt-1">持續追蹤</p>
                  <div class="btnGroup ma-1">
                    <v-btn color="primary" elevation="0" size="small"
                      >批次下載填報附件</v-btn
                    >
                  </div>
                </td>
                <td>
                  <p class="mt-1">持續追蹤</p>
                  <div class="btnGroup ma-1">
                    <v-btn color="primary" elevation="0" size="small"
                      >審核歷程</v-btn
                    >
                    <v-btn color="secondary" elevation="0" size="small"
                      >管理者退回</v-btn
                    >
                  </div>
                </td>
              </tr>
              <tr class="text-center">
                <td>
                  <p class="mt-1">教育文化處</p>
                  <div class="btnGroup">
                    <v-btn
                      class="ma-1"
                      color="primary"
                      elevation="0"
                      size="small"
                      >批次下載填報附件</v-btn
                    >
                  </div>
                </td>
                <td>2023/08/14</td>
                <td>填報期限：2023/08/14</td>
                <td>
                  <p class="mt-1">持續追蹤</p>
                  <div class="btnGroup">
                    <v-btn
                      color="primary"
                      class="ma-1"
                      elevation="0"
                      size="small"
                      >批次下載填報附件</v-btn
                    >
                  </div>
                </td>
                <td><p class="mt-1">持續追蹤</p></td>
              </tr>
            </template>
          </tbody>
        </v-table> -->
        <!-- v-table end -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkTable from "@/components/dataTableServer2.vue";
export default {
  data: () => ({
    tab: null,
    expand: false,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: {
    checkTable,
  },
};
</script>
<style></style>
