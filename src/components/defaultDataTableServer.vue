<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    item-value="name"
    class="dataTableServer defaultTableServer"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    name: "和小星說童話",
    class: "大新出版",
    status: "待審",
    function: "測試",
    iron: "測試",
  },
  {
    name: "和小星說童話",
    class: "大新出版",
    status: "待審",
    function: "測試",
    iron: "測試",
  },
  {
    name: "和小星說童話",
    class: "大新出版",
    status: "待審",
    function: "測試",
    iron: "測試",
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
      { title: "書目資訊", key: "name", align: "start", sortable: false },
      { title: "出版品牌", key: "class", align: "start", sortable: false },
      { title: "審核狀態", key: "status", align: "start", sortable: false },
      {
        title: "補償酬金發放",
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
        width: 100,
      },
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
