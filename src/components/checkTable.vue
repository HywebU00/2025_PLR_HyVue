<template>
  <v-data-table
    class="checkTable"
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    item-value="date"
    :items-per-page="itemsPerPage"
    hide-default-footer
  >
    <template v-slot:item.check="{ item }">
      <v-chip label> Chip </v-chip>
      <ul>
        <li>ISBN : 98726363774746</li>
        <li>書名：100個理想生活</li>
        <li>出版社：皇冠</li>
        <li>出版年：1994</li>
      </ul>
    </template>
    <template v-slot:item.author="{ item }">
      <tr>
        王小明
      </tr>
      <tr>
        史瑞家
      </tr>
    </template>
    <!-- <template v-slot:item.pay="{ item }">
      <tr>
        10%
      </tr>
      <tr>
        33%
      </tr>
    </template> -->
    <template v-slot:item.operate="{ item }">
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="查看紀錄"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
    <template v-slot:bottom>
      <div class="d-flex align-center justify-center pagination">
        <span
          >共{{ desserts.length }}筆資料，第1/{{
            pageCount || 1
          }}頁，每頁顯示 </span
        >
        <v-text-field
          :model-value="itemsPerPage"
          class="mx-2"
          max="15"
          density="compact"
          min="1"
          variant="outlined"
          type="number"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
        <span>筆</span>
      </div>
      <div class="text-center mt-6">
        <v-pagination
          active-color="gray"
          color="gray"
          size="small"
          :length="pageCount"
          v-model="page"
          @click="scrollTop"
        ></v-pagination>
        <!-- v-model="page" -->
      </div>
    </template>
  </v-data-table>
</template>
<script>
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      selected: [],
      headers: [
        {
          title: "已登記著作",
          align: "center",
          key: "check",
          sortable: false,
        },
        {
          title: "著作人",
          key: "author",
          sortable: false,
          align: "center",
        },
        {
          title: "補償酬金比例",
          key: "pay",
          align: "center",
          sortable: false,
        },
        {
          title: "操作",
          key: "operate",
          align: "center",
          sortable: false,
        },
        {
          title: "狀態",
          key: "status",
          align: "end",
          sortable: false,
        },
      ],
      desserts: [
        {
          status: "審核中",
        },
        {
          status: "審核中",
        },
      ],
      selectedFile: null,
      isSelecting: false,
      clickNum: 0,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : null;
    },
  },
  methods: {
    onButtonClick(item) {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      this.clickNum = item.num;
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.desserts[this.clickNum - 1].file = e.target.files[0].name;
      this.clickNum = 0;
    },
  },
  components: {
    VDataTable,
  },
};
</script>
