<template>
  <v-container class="container">
    <div class="">
      <v-btn class="mb-2 ml-auto" color="primary">
        <!-- size="large" -->
        登記著作
      </v-btn>
    </div>
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>已登記作品清單</span></h2>
      <v-col cols="12">
        <v-container class="filterList">
          <v-row class="formGrp">
            <v-col cols="2" class="fromTitle"> 每期快速篩選 </v-col>
            <v-col> <v-chip color="primary" link label> 標籤 </v-chip> </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="2" class="fromTitle"> 狀態快速篩選 </v-col>
            <v-col>
              <div class="">
                <v-chip-group v-model="selection">
                  <v-chip
                    v-for="item in 6"
                    :key="item"
                    color="primary"
                    link
                    label
                  >
                    標籤
                  </v-chip>
                </v-chip-group>
              </div>
              <div class="d-flex">
                <v-row>
                  <v-col>
                    <v-text-field
                      placeholder="輸入ISBN篩選快速"
                      required
                      hide-details="auto"
                      variant="outlined"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn class="h-100" color="primary">確定</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="2" class="fromTitle"> 狀態快速篩選 </v-col>
            <v-col>
              <v-select
                variant="outlined"
                density="compact"
                :items="['項目一', '項目二', '項目三']"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>

        <!-- <ul>
         
          <li>
            狀態快速篩選
            <v-chip-group v-model="selection">
              <v-chip v-for="item in 6" :key="item" color="primary" link label>
                標籤
              </v-chip>
            </v-chip-group>
          </li>
          <li>
            <span>出版品牌</span>
          </li>
        </ul> -->
      </v-col>
      <!-- 查詢區塊 start -->
      <!-- <v-btn
          class="mb-2 ml-auto"
          color="primary"
          prepend-icon="mdi-magnify"
          size="large"

        >
          搜尋條件
        </v-btn> -->
      <v-col class="d-flex align-center" cols="12">
        <h3 class="mx-2 h3">查詢條件</h3>
        <!-- 收合搜尋條件 -->
      </v-col>
      <!-- 查詢區塊 end  -->
      <v-col>
        <!-- v-table start -->
        <v-table class="cellTable">
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
        </v-table>
        <!-- v-table end -->
        <checkTable></checkTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkTable from "@/components/checkTable.vue";

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
