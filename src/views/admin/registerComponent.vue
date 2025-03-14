<template>
  <v-container class="container">
    <div class="d-flex justify-content-between aboveBtn">
      <v-btn class="ml-auto" color="primary"> 登記著作 </v-btn>
    </div>
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>已登記作品清單</span></h2>
      <v-col cols="12">
        <v-container class="filterList">
          <v-row class="formGrp">
            <v-col cols="12" class="fromTitle" sm="2"> 每期快速篩選 </v-col>
            <v-col>
              <v-chip
                color="primary"
                link
                label
                class="rounded-pill"
                size="large"
              >
                2025第一期(3)
              </v-chip>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="12" class="fromTitle" sm="2"> 狀態快速篩選 </v-col>
            <v-col>
              <div class="">
                <v-chip-group class="mb-1" v-model="selection">
                  <v-chip
                    size="large"
                    color="primary"
                    link
                    label
                    class="rounded-pill"
                  >
                    全部
                  </v-chip>
                  <v-chip
                    color="primary"
                    size="large"
                    link
                    label
                    class="rounded-pill"
                  >
                    待審核
                  </v-chip>
                  <v-chip
                    color="primary"
                    size="large"
                    link
                    label
                    class="rounded-pill"
                  >
                    審核通過
                  </v-chip>
                  <v-chip
                    color="primary"
                    size="large"
                    link
                    label
                    class="rounded-pill"
                  >
                    審核不通過
                  </v-chip>
                  <v-chip
                    color="primary"
                    size="large"
                    link
                    label
                    class="rounded-pill"
                  >
                    重新審核
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
                  <v-col cols="auto" class="pl-0">
                    <v-btn class="h-100" color="primary">確定</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="12" class="fromTitle" sm="2"> 出版品牌 </v-col>
            <v-col>
              <v-select
                variant="outlined"
                density="compact"
                hide-details="auto"
                :items="['項目一', '項目二', '項目三']"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <!-- 查詢區塊 start -->
      <v-col>
        <checkTable></checkTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkTable from "@/components/dataTableServer.vue";
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
