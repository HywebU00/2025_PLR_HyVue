<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    item-value="name"
    class="dataTableServer bookTable checkTable"
    color="primary"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td rowspan="2">
          <div class="d-md-flex justify-space-between">
            <div class="">
              <div class=""><span class="title">ISBN:</span>789573311478</div>
              <div class=""><span class="title">書名:</span>和小星說童話</div>
              <div class="">
                <span class="title">出版社:</span>
                大新
              </div>
              <div class="tag">累積借閱次數：101次</div>
            </div>
            <div class="">
              <v-btn
                elevation="0"
                class="mt-2 mt-md-0 iconBtn"
                rounded="md"
                variant="outlined"
              >
                <v-icon icon="mdi-delete"></v-icon>
              </v-btn>
            </div>
          </div>
        </td>
        <td class="">王小明</td>
        <td>85%</td>
        <td rowspan="2">
          <div class="btnGroup d-flex">
            <v-btn elevation="0" color="primary" class="mr-1">審核紀錄</v-btn>
            <v-btn elevation="0" color="primary" variant="outlined"
              >調整補償酬金比例</v-btn
            >
          </div>
        </td>
        <td rowspan="2" class="">無更改</td>
      </tr>
      <tr>
        <td>史瑞家</td>
        <td>85%</td>
      </tr>
      <tr>
        <td rowspan="2" class="">
          <div class="d-md-flex justify-space-between">
            <div class="">
              <div class=""><span class="title">ISBN:</span>789573311478</div>
              <div class=""><span class="title">書名:</span>和小星說童話</div>
              <div class="">
                <span class="title">出版社:</span>
                大新
              </div>
              <div class="tag">累積借閱次數：101次</div>
            </div>
            <div class="">
              <v-btn
                elevation="0"
                class="mt-2 mt-md-0 iconBtn"
                rounded="md"
                variant="outlined"
              >
                <v-icon icon="mdi-delete"></v-icon>
              </v-btn>
            </div>
          </div>
        </td>
        <td class="">王小明</td>
        <td>85%</td>
        <td rowspan="2">
          <div class="btnGroup d-flex">
            <v-btn elevation="0" color="primary" class="mr-1">審核紀錄</v-btn>
            <v-btn elevation="0" color="primary" variant="outlined"
              >調整補償酬金比例</v-btn
            >
          </div>
        </td>
        <td rowspan="2" class="">審核中</td>
      </tr>
      <tr>
        <td>史瑞家</td>
        <td>85%</td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    name: {
      ISBN: "9789573311478",
      book: "",
      class: "大新",
      iron: "操作",
      status: "審核中",
      author: [
        { name: "王小明", function: "15%" },
        { name: "陳小美", function: "15%" },
      ],
    },
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      { title: "已登記著作", key: "name", align: "start", sortable: false },
      { title: "著作人", key: "author", align: "start", sortable: false },
      {
        title: "補償金酬比例",
        key: "function",
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "操作",
        key: "iron",
        align: "start",
        sortable: false,
        width: 150,
      },
      { title: "狀態", key: "status", align: "start", sortable: false },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
  computed: {},
};
</script>
