<template>
  <v-data-table :headers="headers" :items="items" item-value="id">
    <template v-slot:body="{ items }">
      <tbody>
        <template v-for="(item, index) in groupedItems" :key="index">
          <tr v-for="(subItem, subIndex) in item.values" :key="subIndex">
            <!-- 第一列顯示 rowspan，其餘隱藏 -->
            <td v-if="subIndex === 0" :rowspan="item.values.length">
              {{ item.category }}
            </td>
            <td>{{ subItem.name }}</td>
            <td>{{ subItem.price }}</td>
          </tr>
        </template>
      </tbody>
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
