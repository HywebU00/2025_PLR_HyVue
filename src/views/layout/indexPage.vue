<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center">
          <p class="text-h5 font-weight-bold">公共出借權登記系統</p>
        </h3>
        <v-btn color="secondary"
          ><a
            href="https://github.com/HywebU00/2025_PLR_HyVue"
            class="text-primary"
            >檔案下載</a
          ></v-btn
        >
      </div>
      <div class="d-flex mb-2 justify-center">
        <div style="width: 75%" class="mt-1">
          <v-card>
            <v-table>
              <thead class="bg-primary">
                <tr>
                  <th class="text-left text-white">編號</th>
                  <th class="text-left text-white">頁面名稱</th>
                  <th class="text-left text-white">連結</th>
                  <th class="text-left width text-white">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td v-html="item.note"></td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "使用者註冊",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/",
          note: "",
        },
        {
          name: "身份驗證",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/check",
          note: "",
        },
        {
          name: "補償金調整",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/search",
          note: "",
        },
        {
          name: "已登記作品清單",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/register",
          note: "",
        },
        {
          name: "樹狀圖",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/widget",
          note: "",
        },
        {
          name: "登入頁面",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/login",
          note: "",
        },

        {
          name: "PeopleFinder 元件",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/finder",
          note: "",
        },
        {
          name: "登入頁面卡片",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/loginCard",
          note: "",
        },
        {
          name: "工程師新增頁面",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/myindex",
          note: "新增className 已用 📌 標示在檔案中",
        },
        {
          name: "入口元件頁面",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/indexcard",
          note: "",
        },
        {
          name: "出版者創作者資訊頁面",
          link: "https://hywebu00.github.io/2025_PLR_HyVue/#/tab",
          note: "📌補償酬金比例 視窗 在[審核紀錄]>[委託審核]>[操作]的第一個按鈕視窗 <br>📌補償酬金tab下有table樣式",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
  min-height: 100vh;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.index_title {
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  button.v-btn {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.index_table {
  thead {
    background: #17214c;
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
      white-space: nowrap;
    }
    .width {
      width: 100px;
    }
  }
  tbody {
    tr > td {
      &:nth-child(2) {
        min-width: 250px;
      }
    }
  }
}
</style>
