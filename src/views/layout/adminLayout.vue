<template>
  <v-app id="inspire">
    <v-app-bar class="nav elevation-0">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        width="64"
        class="rounded-0 h-100 ml-0 phoneBtn"
        @click.stop="[(rail = !rail), (overlay = true)]"
      ></v-app-bar-nav-icon>
      <h1 class="logoText">
        <a href="">
          <img src="~@/assets/images/h_logo.png" alt="" />
        </a>
      </h1>
      <functionNavigation />
    </v-app-bar>
    <!-- 桌機版 menu start  -->
    <v-app-bar class="pcMenu bg-light elevation-0">
      <div class="">
        <v-btn variant="plain" append-icon="mdi-chevron-down">
          出版品牌管理
          <v-menu activator="parent" open-on-hover>
            <v-list>
              <v-list-item v-for="i in 2" :key="i" link>
                <v-list-item-title>Item {{ i }}</v-list-item-title>
                <template v-slot:append>
                  <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                </template>
                <v-menu
                  :open-on-focus="false"
                  activator="parent"
                  open-on-hover
                  submenu
                >
                  <v-list>
                    <v-list-item v-for="j in 2" :key="j" link>
                      <v-list-item-title
                        >Item {{ i }} - {{ j }}</v-list-item-title
                      >
                      <template v-slot:append>
                        <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                      </template>

                      <v-menu
                        :open-on-focus="false"
                        activator="parent"
                        open-on-hover
                        submenu
                      >
                        <v-list>
                          <v-list-item v-for="k in 2" :key="k" link>
                            <v-list-item-title
                              >Item {{ i }} - {{ j }} -
                              {{ k }}</v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn variant="plain" append-icon="mdi-chevron-down">
          子帳號管理
          <v-menu activator="parent" open-on-hover>
            <v-list>
              <v-list-item v-for="i in 2" :key="i" link>
                <v-list-item-title>Item {{ i }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn variant="plain"> 作者委託管理 </v-btn>
        <v-btn variant="plain"> 著作人名管理 </v-btn>
        <v-btn variant="plain"> 登記著作 </v-btn>
        <v-btn variant="plain"> 補償金查詢 </v-btn>
        <v-btn variant="plain"> 補償酬金調整管理 </v-btn>
        <v-btn variant="plain"> 補償酬金調查 </v-btn>
        <v-btn variant="plain"> 暫緩登記清單 </v-btn>
      </div>
    </v-app-bar>
    <!-- 桌機版 menu end  -->
    <v-main>
      <!-- <v-overlay v-model="overlay" @click="[(rail = !rail)]"> </v-overlay> -->
      <!-- 手機版 menu start  -->
      <v-navigation-drawer
        v-model="drawer"
        :class="['navDrawer', { hidden: !rail }]"
        :rail="!rail"
        permanent
        :rail-width="railWidth"
        width="256"
      >
        <v-app-bar-nav-icon
          icon="mdi-chevron-left"
          width="64"
          class="rounded-0 ml-0 ml-auto mobileBtn"
          @click.stop="[(rail = !rail), (overlay = false)]"
        ></v-app-bar-nav-icon>
        <v-list
          density="compact"
          nav
          class="text-navText"
          :opened="opened"
          @update:opened="menuTarget"
        >
          <!-- 出版品牌管理 start -->
          <v-list-group value="出版品牌管理">
            <template v-slot:activator="{ props }">
              <v-list-item
                color="white"
                prepend-icon=""
                v-bind="props"
                title="出版品牌管理"
                @click.stop="overlay = false"
              >
              </v-list-item>
            </template>
            <v-list-item title="item1" value="item1" @click="pushLink('')">
            </v-list-item>
            <v-list-item title="item2" value="item2" @click="pushLink('')">
            </v-list-item>
            <v-list-item title="item3" value="item3" @click="pushLink('')">
            </v-list-item>
          </v-list-group>
          <!-- 出版品牌管理 end -->
          <!-- 子帳號管理 start -->
          <v-list-group value="子帳號管理">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                color="white"
                title="子帳號管理"
                @click.stop="overlay = false"
              >
              </v-list-item>
            </template>
            <v-list-item title="item1" value="item1" @click="pushLink('')">
            </v-list-item>
            <v-list-item title="item2" value="item2" @click="pushLink('')">
            </v-list-item>
            <v-list-item title="item3" value="item3" @click="pushLink('')">
            </v-list-item>
          </v-list-group>
          <!-- 子帳號管理 end -->
          <!-- 作者委託管理 start -->
          <v-list-group value="作者委託管理">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                append-icon=""
                title="作者委託管理"
                @click="pushLink('')"
              >
              </v-list-item>
            </template>
          </v-list-group>
          <!-- 作者委託管理 end -->
          <!-- 著作人名管理 start -->
          <v-list-group value="著作人名管理">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                append-icon=""
                title="著作人名管理"
                @click="pushLink('')"
              >
              </v-list-item>
            </template>
          </v-list-group>
          <!-- 著作人名管理 end -->
          <!-- 登記著作 start -->
          <v-list-group value="登記著作">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                append-icon=""
                title="登記著作"
                @click="pushLink('')"
              >
              </v-list-item>
            </template>
          </v-list-group>
          <!-- 登記著作 end -->
          <!-- 補償金查詢 start -->
          <v-list-group value="補償金查詢">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                append-icon=""
                title="補償金查詢"
                @click="pushLink('')"
              >
              </v-list-item>
            </template>
          </v-list-group>
          <!-- 補償金查詢 end -->
          <!-- 補償酬金調整管理 start -->
          <v-list-group value="補償酬金調整管理">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon=""
                v-bind="props"
                append-icon=""
                title="補償酬金調整管理"
                @click="pushLink('')"
              >
              </v-list-item>
            </template>
          </v-list-group>

          <ul class="functionList__ul">
            <li>
              <router-link to=""> 城邦文化事業股份有限公司 </router-link>
            </li>
            <li>
              <router-link to=""> 登記前台首頁</router-link>
            </li>
            <li>
              <router-link to=""> 教學專區 </router-link>
            </li>
          </ul>

          <!-- 補償酬金調整管理 end -->
          <ul class="navlist">
            <li>
              <v-btn variant="plain" block @click="pushLink('')">回首頁 </v-btn>
            </li>
            <li>
              <v-btn variant="plain" block @click="pushLink('')"> 登入 </v-btn>
            </li>
            <li>
              <v-btn variant="plain" block @click="pushLink('')">
                帳號維護
              </v-btn>
            </li>
          </ul>
          <!-- 出版者切換 start -->
          <v-btn-toggle class="mb_toggle" mandatory v-model="toggle_exclusive">
            <v-btn variant="plain" block> 我是出版者 </v-btn>
            <v-btn variant="plain" block> 我是創作者 </v-btn>
          </v-btn-toggle>
        </v-list>
        <!-- 出版者切換 end -->
      </v-navigation-drawer>
      <!-- 手機版 menu end  -->
      <pageView />
    </v-main>
    <v-footer class="footer">
      <div class="">
        <div class="footerImg">
          <img src="~@/assets/images/f_logo.png" alt="" />
        </div>
        <v-list lines="one">
          <v-list-item>
            <ul>
              <li><a href="">隱私權政策</a></li>
              <li><a href="">網站安全政策</a></li>
              <li><a href="">政府網站資料開放宣告</a></li>
            </ul>
          </v-list-item>
          <v-list-item
            title="國立公共資訊圖書館版權所有 © 2020 All Rights Reserved."
          ></v-list-item>
          <v-list-item title="諮詢電話：(03)560-1325"></v-list-item>
          <v-list-item title="諮詢信箱：plrservice@nlpi.edu.tw"></v-list-item>
          <v-list-item
            title="建議瀏覽器：Microsoft Edge、Firefox、Chrome(螢幕設定最佳顯示效果為1280*1024)"
          ></v-list-item>
        </v-list>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import functionNavigation from "@/components/functionNavigation.vue";
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "0",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    toggle_exclusive: 1,
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    functionNavigation,
    pageView,
  },
  methods: {
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
  },
};
</script>
