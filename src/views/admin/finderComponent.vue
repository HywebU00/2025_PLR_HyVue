<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>補償酬金調整設定</span></h2>

      <!-- 查詢區塊 start -->
      <v-col class="d-flex align-center" cols="12">
        <h3 class="mx-2 h3">查詢條件</h3>
        <!-- 收合搜尋條件 -->
      </v-col>
      <v-col>
        <PeopleFinder />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PeopleFinder from "@/components/PeopleFinder.vue";
// import { maskStore, pageStting } from "@/stores/storage.js";
// const ps = pageStting();
export default {
  data: () => ({
    // mk: maskStore(),
    // ps: pageStting(),
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    //  dialog data
    dialog: false,
    listStyle: false,
    //checkbox
    selected: ["John"],
  }),
  // created() {
  //   ps.setTopNavPageTiltle("帳號管理");
  // },
  // mounted() {
  //   this.removeIndexBg();
  // },
  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    removeIndexBg() {
      const hasImg = document
        .querySelector(".content")
        .classList.contains("mpImg");
      if (hasImg) {
        document.querySelector(".content").classList.remove("mpImg");
      } else {
        return;
      }
    },
  },
  components: {
    PeopleFinder,
  },
};
</script>
