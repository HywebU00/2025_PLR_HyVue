<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    item-value="name"
    class="dataTableServer bookTable"
    color="primary"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="">
          <div class="my-3">
            <div class="">
              <span class="title">ISBN:</span> {{ item.name.ISBN }}
              <a href=""><span class="check">查看</span></a>
            </div>
            <div class="">
              <span class="title">書名:</span>{{ item.name.book }}
            </div>
            <div class="">
              <span class="title">作者:</span>
              <template
                v-for="i in item.name.author"
                :key="i in item.name.author"
              >
                <span class="name" :class="{ 'text-gray': i.status === false }">
                  {{ i.name }}
                </span>
              </template>
            </div>
          </div>
        </td>
        <td class="">{{ item.class }}</td>
        <td class="">{{ item.status }}</td>
        <td>
          <div class="btnGroup d-flex">
            <v-btn elevation="0" color="primary" class="mr-1">刪除</v-btn>
            <v-btn elevation="0" color="primary" variant="outlined">新增</v-btn>
          </div>
        </td>
        <td>
          <div class="d-flex">
            <v-btn
              class="iconBtn mr-1"
              elevation="0"
              color="primary"
              rounded="md"
            >
              <v-icon icon="mdi-square-edit-outline"></v-icon>
            </v-btn>
            <v-btn class="iconBtn" elevation="0" color="primary" rounded="md">
              <v-icon icon="mdi-square-edit-outline"></v-icon>
            </v-btn>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="8">
          <div class="d-flex justify-space-between">
            <div class="tag">累積借閱次數：101次</div>
            <div class="">
              <span>送審日期:2025/01/09</span>
              <span>審核完畢:2025/01/09</span>
            </div>
          </div>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    name: {
      ISBN: "9789573311478",
      book: "和小星說童話",
      // ,陳小美,張小天
      author: [
        { name: "王小明", status: true },
        { name: "陳小美", status: false },
        { name: "張小天", status: false },
      ],
    },
    class: "大新出版",
    status: "待審",
  },
  {
    name: {
      ISBN: "9789573311478",
      book: "和小星說童話",
      // ,陳小美,張小天
      author: [
        { name: "王小明", status: true },
        { name: "陳小美", status: false },
        { name: "張小天", status: false },
      ],
    },
    class: "大新出版",
    status: "待審",
  },
  {
    name: {
      ISBN: "9789573311478",
      book: "和小星說童話",
      // ,陳小美,張小天
      author: [
        { name: "王小明", status: true },
        { name: "陳小美", status: false },
        { name: "張小天", status: false },
      ],
    },
    class: "大新出版",
    status: "待審",
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
