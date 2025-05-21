<script setup>
import { ref, reactive, computed, watch, onBeforeMount } from "vue";

const memberData = reactive({});

onBeforeMount(() => {
  init();
});

const init = async () => {
  let data = {
    idType: "O",
    creator: "N",
    publisher: "Y",
    subAccount: "N",
    role: "公司團體出版者",
    accountStatus: "啟用",
    settlementAmount: 0,
    paymentStatus: "未結算",
    isbnProposed: 0,
    isbnApproved: 0,
    isbnWaitApproval: 0,
    isbnTempSaved: 0,
    creatorAuth_proposed: 0,
    creatorAuth_approved: 0,
    creatorAuth_waitApproval: 0,
    creatorAlias_proposed: 0,
    creatorAlias_approved: 0,
    creatorAlias_waitApproval: 0,
  };
  console.log(data);
  Object.assign(memberData, data);
};
</script>

<template>
  <!-- 📌 增加 index className -->
  <v-container class="container index">
    <page-bread :breadcrumbs="['首頁']" />
    <!-- 📌 增加i nfoGrp className -->
    <v-row class="infoGrp">
      <h2 class=""><span>我的首頁</span></h2>

      <!-- 第一row -->
      <!-- 左欄：帳號資訊摘要 -->
      <!--📌  cols有調整 -->
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="text-h6 mb-2">帳號摘要資訊區塊</h3>
          <div class="mb-2">
            <strong>帳號身分：</strong> {{ memberData.role }}
          </div>
          <div>
            <strong>帳號驗證：</strong>
            <v-chip color="green" dark size="small">{{
              memberData.accountStatus
            }}</v-chip>
          </div>
        </v-card>
      </v-col>

      <!-- 右欄：補償金資訊摘要 -->
      <!--📌  cols有調整 -->
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="text-h6 mb-2">補償酬金資訊摘要</h3>
          <div class="mb-2">
            <strong>當期結算金額：</strong> {{ memberData.settlementAmount }}
          </div>
          <div>
            <strong>發放狀態：</strong>
            <v-chip color="blue" dark size="small">{{
              memberData.paymentStatus
            }}</v-chip>
          </div>
        </v-card>
      </v-col>

      <!-- 第二row -->
      <v-col cols="12">
        <v-card class="pa-4">
          <h3 class="text-h6 mb-2">登記作品資訊摘要</h3>
          <v-row>
            <!--📌  cols有調整 -->
            <v-col cols="12" md="6" lg="3" class="text-center">
              <div class="text-subtitle-1">已提交數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.isbnProposed }}
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="3" class="text-center">
              <div class="text-subtitle-1">已審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.isbnApproved }}
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="3" class="text-center">
              <div class="text-subtitle-1">待審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.isbnWaitApproval }}
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="3" class="text-center">
              <div class="text-subtitle-1">暫存清單數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.isbnTempSaved }}
              </div>
            </v-col>
            <!-- cols有調整 -->
          </v-row>
        </v-card>
      </v-col>

      <!-- 第三row -->
      <!-- 左欄：作者委託審核摘要 -->
      <!--📌  cols有調整 -->
      <v-col v-if="memberData.publisher == 'Y'" cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="text-h6 mb-2">作者委託審核摘要</h3>
          <!--📌  cols有調整 -->
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">已提交數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAuth_proposed }}
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">已審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAuth_approved }}
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">待審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAuth_waitApproval }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- 右欄：著作人名(筆名)審核摘要 -->
      <!--📌  cols有調整 -->
      <v-col v-if="memberData.publisher == 'Y'" cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="text-h6 mb-2">著作人名(筆名)審核摘要</h3>
          <!--📌  cols有調整 -->
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">已提交數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAlias_proposed }}
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">已審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAlias_approved }}
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-subtitle-1">待審核數量</div>
              <div class="text-h4 font-weight-bold">
                {{ memberData.creatorAlias_waitApproval }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- 📌 增加registerGrp className -->
    <v-row class="registerGrp">
      <!--📌  cols有調整 -->
      <v-col cols="12" class="d-flex">
        <h2 class="mb-0"><span>登記流程</span></h2>
        <a href="#" class="text-primary">>>詳情請參閱教學專區</a>
      </v-col>
      <!-- 出版品牌管理設定 -->
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 h-100 d-flex flex-column justify-space-between">
          <v-card-title> 1. 出版品牌管理 </v-card-title>
          <div>
            <div>系統依據所設定出版品牌帶入當季書目</div>
            <div class="text-subtitle-2 text-grey-darken-1 mb-2">
              [創作者可忽略此步驟]
            </div>
          </div>
          <v-card-actions>
            <v-btn
              v-if="memberData.publisher == 'Y'"
              :to="'/publisher-brand'"
              color="primary"
              block
              class="text-subtitle-1 font-weight-bold"
              >開始設定</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 作者委託管理 -->
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 h-100 d-flex flex-column justify-space-between">
          <v-card-title> 2. 作者委託管理 </v-card-title>
          <div>
            <div>
              管理作者委託狀況，尚未提交具結同意書之作者於此功能進行文件上傳
            </div>
            <div class="text-subtitle-2 text-grey-darken-1 mb-2">
              [創作者可忽略此步驟]
            </div>
          </div>
          <v-card-actions>
            <v-btn
              v-if="memberData.publisher == 'Y'"
              :to="'/publisher-creatorAuth'"
              color="primary"
              block
              class="text-subtitle-1 font-weight-bold"
              >開始設定</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 確認資料 -->
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 h-100 d-flex flex-column justify-space-between">
          <v-card-title> 3. 著作人名管理 </v-card-title>
          <div>
            <div>設定與管理個人創作者之筆名清單，驗證文件上傳</div>
            <div class="text-subtitle-2 text-grey-darken-1 mb-2">
              [出版者可於作者委託管理中直接設定著作人筆名，無須執行此步驟]
            </div>
          </div>
          <v-card-actions>
            <v-btn
              v-if="memberData.creator === 'Y'"
              :to="'/creator-alias'"
              color="primary"
              block
              class="text-subtitle-1 font-weight-bold"
              >開始設定</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 登記著作 -->
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-4 h-100 d-flex flex-column justify-space-between">
          <v-card-title> 4. 登記著作 </v-card-title>
          <div>
            <div>
              系統依據出版品牌帶出可登記之輸入，並顯示已通過審核之作者及著作人名(筆名)，可於清單中查看所有登記作品、書籍借閱次數，審核狀態等資訊<br />勾選欲登記之書目後，即可提交書目登記審核
            </div>
          </div>
          <v-card-actions>
            <v-btn
              v-if="memberData.publisher === 'Y'"
              :to="'/publisher-publication'"
              color="primary"
              block
              class="text-subtitle-1 font-weight-bold"
              >開始設定</v-btn
            >
            <v-btn
              v-else-if="memberData.creator === 'Y'"
              :to="'/creator-publication'"
              color="primary"
              block
              class="text-subtitle-1 font-weight-bold"
              >開始設定</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
