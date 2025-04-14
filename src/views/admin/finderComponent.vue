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
      <v-col class="mx-2 mb-2" cols="12"> <PeopleFinder /> </v-col>
      <v-col class="mx-2" cols="12"><DialogComponent /></v-col>
      <v-col class="mx-2">
        <v-row class="">
          <v-container>
            <p class="text-primary">告知聲明</p>
          </v-container>
          <v-dialog
            class="consent"
            v-model="dialog"
            scrollable
            max-width="800"
            transition="dialog-bottom-transition"
          >
            <!-- Demo 專用用按鈕 start -->

            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">
                DialogComponent 按鈕</v-btn
              >
            </template>
            <!-- Demo 專用用按鈕 end -->
            <v-card>
              <v-card-title>
                <v-container class="pb-0">
                  <span
                    class="text-primary font-weight-bold d-block text-center"
                    >公共出借權登記系統暨管理平臺
                    個人資料蒐集處理利用告知聲明</span
                  >
                </v-container>
              </v-card-title>
              <v-card-text>
                <v-container class="pa-0">
                  <ul>
                    <li>
                      一、蒐集之目的
                      本平臺為辦理「文化部試辦『公共出借權』計畫」相關業務，蒐集您的個人資料。其目的依據法務部頒布之「個人資料保護法」(以下簡稱個資法)之「特定目的及個人資料之類別」為「146圖書館、出版品管理」。
                    </li>
                    <li>
                      二、蒐集之個人資料類別
                      本平臺因執行業務蒐集臺端個人資料，包括姓名、身分證字號、電話、地址、金融機構帳戶、存歿等，其類別依據法務部頒布之「個人資料保護法」之「特定目的及個人資料之類別」為「C001辨識個人者」、「C002辨識財物者」、「C003政府資料中之辨識者」。
                    </li>
                    <li>
                      三、個人資料利用之期間、地區、對象及方式：
                      <ul>
                        <li>
                          (一)  期間：自在本平臺註冊之日起至註冊目的消失為止。
                        </li>
                        <li>(二)  地區：中華民國。</li>
                        <li>
                          (三) 
                          對象：「公共出借權登記系統暨管理平臺」管理單位(文化部、委託廠商）。
                        </li>
                        <li>
                          (四) 
                          方式：本平臺利用臺端個人資料於蒐集目的宣告之業務執行，包括因業務執行所必須之各項聯繫與通知及發放公共出借權補償酬金。
                        </li>
                      </ul>
                    </li>
                    <li>
                      四、臺端得自由選擇是否提供相關個人資料，惟臺端若拒絕提供相關個人資料，本平臺將無法進行必要之審核及處理作業，致無法提供臺端相關服務。
                    </li>

                    <li>
                      五、依據個資法第三條規定，臺端得以書面或致電本平臺管理者，就本平臺保有臺端之個人資料行使下列權利：
                      <ul>
                        <li>(一)查詢或請求閱覽；</li>
                        <li>(二)請求製給複製本；</li>
                        <li>(三)請求補充或更正；</li>
                        <li>(四)請求停止蒐集、處理、利用或</li>
                        <li>
                          (五)請求刪除。但本平臺依個人資料保護法之規定，保有准駁該申請之權。
                        </li>
                      </ul>
                    </li>
                    <li>
                      六、若有上述需求，請與本平臺管理者聯繫，於填妥個人資料權利行使申請書後，本平臺將依法進行回覆。本平臺個人資料保護申訴窗口。
                      電話：02-8512-6492，電子郵件：pinqian@moc.gov.tw。
                    </li>
                  </ul>
                </v-container>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="cancel"
                  variant="flat"
                  rounded="md"
                  size="large"
                  class="cancel"
                  @click="dialog = !dialog"
                >
                  取消
                </v-btn>
                <v-btn
                  class="submit"
                  elevation="0"
                  color="submit"
                  variant="flat"
                  rounded="md"
                  size="large"
                  @click="dialog = !dialog"
                >
                  同意
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PeopleFinder from "@/components/PeopleFinder.vue";
import DialogComponent from "@/components/dialogComponent.vue";

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
    DialogComponent,
  },
};
</script>
