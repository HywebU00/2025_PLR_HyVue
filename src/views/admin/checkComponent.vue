<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>使用者註冊</span></h2>
      <!-- stepBar 新增 classname active  start-->
      <v-col class="stepBar">
        <ul>
          <li class="active">
            <div class="icon">
              <img src="~@/assets/images/icon_user.png" alt="" />
            </div>
            <div class="">
              <span>Step 1</span>
              <div class="">選擇身份 建立帳號</div>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~@/assets/images/icon_plan.png" alt="" />
            </div>
            <div class="">
              <span>Step 2</span>
              <div class="">填寫個人資料單位</div>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~@/assets/images/icon_userCheck.png" alt="" />
            </div>
            <div class="">
              <span>Step 3</span>
              <div class="">身分驗證 開通帳號</div>
            </div>
          </li>
        </ul>
      </v-col>
      <!-- stepBar end-->
      <v-form>
        <v-container>
          <!-- 註冊帳號 start -->
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">帳號</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="16541333"
                hide-details=""
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">電子郵件</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="abc@hyweb.com.tw"
                hide-details=""
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">身份</label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="公司出版者暨創作者"
                hide-details=""
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- 註冊帳號 end -->
          <!-- from title start -->
          <v-row class="formGrp">
            <v-col>
              <span class="fromTitle">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                請確認及填寫詳細資訊
              </span>
            </v-col>
          </v-row>
          <!-- from title end -->
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for=""
                >使用VAT登入
                <span class="d-none d-lg-inline"><br /></span> 快速通關</label
              >
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="12"
                  ><v-btn
                    text="VAT帳號登入成功"
                    variant="flat"
                    size="x-large"
                    class="bg-primary btn elevation-0 mx-2"
                  ></v-btn
                ></v-col>
                <v-col cols="12">
                  <span class="info text-error"
                    >請確認以下必填項目(由VAT帶回之訊息無法編輯，如有問題請洽客服)</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                公司團體名稱</label
              >
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="公司出版者暨創作者"
                messages="請輸入您的真實姓名，欲登記作品者需要進行身份驗證，請務必輸入正確姓名"
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                登記地址</label
              >
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                density="compact"
                label="文字標準表單"
                single-line
                hide-details="auto"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                聯絡地址</label
              >
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                density="compact"
                label="文字標準表單"
                single-line
                hide-details="auto"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="d-none d-lg-block"></v-col>
            <v-col class="ml-3 pa-0">
              <v-checkbox label="同登記地址" hide-details="auto"></v-checkbox
            ></v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                聯絡地址</label
              >
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="6" md="4" lg="2">
              <v-select
                variant="outlined"
                density="compact"
                label=""
                class="h-100"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </v-col>
            <v-col cols="12" lg="6" class="py-0">
              <v-checkbox label="同登記地址" hide-details="auto"></v-checkbox>
            </v-col>
            <v-col cols="2" class="d-none d-lg-block"></v-col>
            <v-col class="ml-3 px-0">
              <v-text-field
                density="compact"
                label="文字標準表單"
                single-line
                hide-details="auto"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                聯絡電話</label
              >
            </v-col>
            <v-col cols="12" lg="10">
              <v-row class="formGrp">
                <v-col cols="12" class="pa-lg-0 pl-lg-1 pb-0 pl-2">
                  <label class="text-primary" for="">市內電話</label>
                </v-col>
                <v-col cols="5" lg="3">
                  <v-text-field
                    variant="outlined"
                    single-line
                    label=""
                    hide-details=""
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="7" lg="9">
                  <v-text-field
                    density="compact"
                    single-line
                    variant="outlined"
                    label="文字標準表單"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12" class="pa-lg-0 pl-lg-1 pb-0 pl-2">
                  <label class="text-primary" for="">行動電話</label>
                </v-col>
                <v-col cols="5" lg="3">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    hide-details="auto"
                    variant="outlined"
                    single-line
                  ></v-text-field>
                </v-col>
                <v-col cols="7" lg="9">
                  <v-text-field
                    density="compact"
                    variant="outlined"
                    label="文字標準表單"
                    hide-details="auto"
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" class="d-none d-lg-block"></v-col>
            <v-col class="ml-3 pa-0">
              <span class="d-block my-3 text-info info"
                >聯絡電話可二選一填寫</span
              >
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                登記地址</label
              >
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    density="compact"
                    label="凌網出版股份有限公司"
                    single-line
                    hide-details="auto"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" md="4" lg="2">
                  <v-select
                    variant="outlined"
                    density="compact"
                    label=""
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="6" md="4" lg="2">
                  <v-select
                    variant="outlined"
                    density="compact"
                    label=""
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="12" lg="8">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    single-line
                    hide-details="auto"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col class="ml-3 pa-0">
                  <span class="d-block my-3 text-info info"
                    >匯款帳號需為本人/公司戶頭，戶名需與姓名或公司、團體名相同，如因帳戶名稱不符而導致匯款錯誤，匯款手續費於首次發生時由本部負擔，後續發生者則由受款人自行負擔。</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- from title start -->
          <v-row class="formGrp">
            <v-col>
              <span class="fromTitle">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                請選擇身份驗證方式
              </span>
            </v-col>
          </v-row>
          <!-- from title end -->
          <!-- tab start -->
          <v-row class="formGrp">
            <v-col>
              <div class="tab">
                <v-tabs v-model="tab" align-tabs="start">
                  <v-tab value="one">工商憑證驗證</v-tab>
                  <v-tab value="two">上傳證明文件</v-tab>
                </v-tabs>
                <v-card-text>
                  <v-window v-model="tab">
                    <v-window-item value="one">
                      <v-row>
                        <v-col cols="12" md="6">
                          <ul class="infoList">
                            <li>1.請將卡片插入讀卡機後，點選「讀取卡片」</li>
                            <li>2.請輸入PIN碼</li>
                            <li>3.點選送出</li>
                          </ul>
                          <div class="img">
                            <img src="~@/assets/images/Pica.png" alt="" />
                          </div>
                        </v-col>
                        <v-col class="btnGrp" cols="12" md="6">
                          <v-row>
                            <v-col>
                              <v-btn
                                size="x-large"
                                class="bg-secondary btn elevation-0 mx-2"
                                text="讀取卡片"
                                block
                                variant="flat"
                              ></v-btn>
                            </v-col>
                          </v-row>
                          <v-row class="mx-0">
                            <v-col class="pb-0 d-flex" cols="12">
                              <label class="text-primary" for="">
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*
                                </abbr>
                                公司團體名稱</label
                              >
                            </v-col>
                            <v-col>
                              <v-text-field
                                variant="outlined"
                                single-line
                                label="公司出版者暨創作者"
                                messages=""
                                density="compact"
                                hide-details=""
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="">
                            <v-col>
                              <v-btn
                                text="送出"
                                variant="flat"
                                size="x-large"
                                block
                                class="bg-primary btn elevation-0 mx-2"
                              ></v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-window-item>
                    <v-window-item value="two">
                      <v-row>
                        <v-col cols="12" md="6">
                          <ul class="infoList">
                            <li>1.請將卡片插入讀卡機後，點選「讀取卡片」</li>
                            <li>2.請輸入PIN碼</li>
                            <li>3.點選送出</li>
                          </ul>
                          <div class="img">
                            <img src="~@/assets/images/Pica.png" alt="" />
                          </div>
                        </v-col>
                        <v-col class="btnGrp" cols="12" md="6">
                          <v-row>
                            <v-col>
                              <v-btn
                                size="x-large"
                                class="bg-secondary btn elevation-0 mx-2"
                                text="重新讀取卡片"
                                block
                                variant="flat"
                              ></v-btn>
                            </v-col>
                          </v-row>
                          <v-row class="mx-0">
                            <v-col class="pb-0 d-flex" cols="12">
                              <ul class="infoText">
                                <li>統一編號：16541333</li>
                                <li>姓名：凌網文化</li>
                              </ul>
                              <span class="alert text-error">
                                請注意，須與帳號的統一編號與公司團體名稱完全符合方可驗證成功
                              </span>
                            </v-col>
                          </v-row>
                          <v-row class="">
                            <v-col>
                              <v-btn
                                text="驗證身份"
                                variant="flat"
                                size="x-large"
                                block
                                class="bg-primary btn elevation-0 mx-2"
                              ></v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-window-item>
                  </v-window>
                </v-card-text>
              </div>
            </v-col>
          </v-row>
          <!-- tab end -->
        </v-container>
        <div class="d-flex justify-center formBtnGrp">
          <v-btn
            text="儲存並繼續驗證身份"
            variant="flat"
            size="x-large"
            class="bg-primary btn elevation-0 mx-2"
          ></v-btn>
          <v-btn
            size="x-large"
            class="bg-secondary btn elevation-0 mx-2"
            text="重新設定"
            variant="flat"
          ></v-btn>
        </div>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: {},
};
</script>
<style></style>
