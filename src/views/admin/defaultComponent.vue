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
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                註冊類型</label
              >
            </v-col>
            <v-col
              ><v-radio-group
                inline
                label=""
                color="primary"
                hide-details="auto"
              >
                <v-radio label="公司團體" value="1"></v-radio>
                <v-radio label="個人" value="2"></v-radio> </v-radio-group
            ></v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                身份</label
              >
            </v-col>
            <v-col
              ><v-radio-group
                inline
                label=""
                color="primary"
                hide-details="auto"
              >
                <v-radio label="出版者暨創作者(預設)" value="1"></v-radio>
                <v-radio label="出版者" value="2"></v-radio>
                <v-radio label="創作者" value="3"></v-radio>
              </v-radio-group>
              <v-alert class="alertText">
                <div class="">
                  請注意，依據您選擇的註冊身分，需上傳證明文件來通過身分驗證，身分選擇錯誤會造成審核不通過，請確實選擇您的身分
                </div>
                <div class="">
                  公司團身分需要通過工商/單位憑證或提供公司負責人簽章具結個人身分將需要通過自然憑證或提供個人簽章具結
                </div>
              </v-alert>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                統一編號</label
              >
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label=""
                density="compact"
                :messages="['將為您的登入帳號，註冊認證後無法修改']"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                密碼
              </label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="密碼表單"
                type="password"
                density="compact"
                :messages="[
                  '請輸入8位數以上密碼，至少須包含英文大小寫、數字、符號',
                ]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*
                </abbr>
                再一次確認密碼
              </label>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                single-line
                label="請輸入登入密碼"
                type="password"
                density="compact"
                :error-messages="['密碼輸入不一致，請再確認一次']"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >* </abbr
                >E-mail</label
              >
            </v-col>
            <v-col cols="">
              <v-text-field
                variant="outlined"
                label=""
                type="text"
                hide-details="auto"
                single-line
                :messages="[
                  '請輸入可收取認證碼的E-mail，需先通過認證後方可繼續註冊',
                ]"
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- 驗證碼欄位 start -->
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >* </abbr
                >驗證碼</label
              >
            </v-col>
            <v-col class="compactContent" cols="">
              <v-text-field
                variant="outlined"
                label="請輸入驗證碼"
                type="text"
                hide-details="auto"
                single-line
                density="compact"
              ></v-text-field>
              <div class="img">
                <img src="~@/assets/images/captcha.gif" />
              </div>
              <v-btn class="iconBtn" elevation="0" color="secondary">
                <v-icon icon="mdi-refresh"></v-icon>
              </v-btn>
              <v-btn class="iconBtn" elevation="0" color="secondary">
                <v-icon icon="mdi-refresh"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <!-- 驗證碼欄位 end -->
          <!-- 檔案上傳 start -->
          <v-row class="formGrp">
            <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
              <label class="text-primary" for="">檔案</label>
            </v-col>
            <v-col>
              <div data-v-0ed52433="" class="upload-area hyUpload">
                <div
                  data-v-0ed52433=""
                  class="v-table v-theme--default v-table--density-default"
                >
                  <!---->
                  <div class="v-table__wrapper">
                    <table>
                      <thead data-v-0ed52433="">
                        <tr>
                          <th data-v-0ed52433="" width="15%">縮圖</th>
                          <th data-v-0ed52433="" width="40%" align="left">
                            檔案名稱
                          </th>
                          <th data-v-0ed52433="" width="15%">檔案大小</th>
                          <th data-v-0ed52433="" width="15%">狀態</th>
                          <th data-v-0ed52433="" width="15%">動作</th>
                        </tr>
                      </thead>
                      <tbody data-v-0ed52433="">
                        <tr
                          data-v-0ed52433=""
                          class="drag"
                          data-draggable="true"
                        >
                          <td data-v-0ed52433="" class="thumb" align="center">
                            <div>
                              <img
                                src="~@/assets/images/logo.png"
                                draggable="false"
                              />
                            </div>
                          </td>
                          <td data-v-0ed52433="" class="">
                            <a
                              data-v-0ed52433=""
                              href="http://plr.hyweb.com.tw/sample/202503/T-03745365.pdf"
                              target="_blank"
                              >113-1學期結業式流程表0110.pdf</a
                            >
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            94.6 KB
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            100%
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            <v-btn
                              class="iconBtn"
                              elevation="0"
                              color="secondary"
                            >
                              <v-icon icon="mdi-close"></v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr
                          data-v-0ed52433=""
                          class="drag"
                          data-draggable="true"
                        >
                          <td data-v-0ed52433="" class="thumb" align="center">
                            <div>
                              <img
                                src="~@/assets/images/logo.png"
                                draggable="false"
                              />
                            </div>
                          </td>
                          <td data-v-0ed52433="" class="">
                            <a
                              data-v-0ed52433=""
                              href="http://plr.hyweb.com.tw/sample/202503/T-83756458.pdf"
                              target="_blank"
                              >113學年度第2學期開學日時程表0110.pdf</a
                            >
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            81 KB
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            100%
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            <v-btn
                              class="iconBtn"
                              elevation="0"
                              color="secondary"
                            >
                              <v-icon icon="mdi-close"></v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr
                          data-v-0ed52433=""
                          class="drag"
                          data-draggable="true"
                        >
                          <td data-v-0ed52433="" class="thumb" align="center">
                            <div>
                              <img
                                src="~@/assets/images/logo.png"
                                draggable="false"
                              />
                            </div>
                          </td>
                          <td data-v-0ed52433="" class="">
                            <a
                              data-v-0ed52433=""
                              href="http://plr.hyweb.com.tw/sample/202503/T-43595332.pdf"
                              target="_blank"
                              >113-2班級幹部訓練時間表.pdf</a
                            >
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            79.8 KB
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            100%
                          </td>
                          <td data-v-0ed52433="" class="" align="center">
                            <v-btn
                              class="iconBtn"
                              elevation="0"
                              color="secondary"
                            >
                              <v-icon icon="mdi-close"></v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!---->
                </div>
                <p data-v-0ed52433="">
                  請把檔案拖拉到此框，或是<button
                    data-v-0ed52433=""
                    type="button"
                    class="v-btn v-theme--default text-gray v-btn--density-default v-btn--size-small v-btn--variant-tonal ml-2"
                  >
                    <span class="v-btn__overlay"></span
                    ><span class="v-btn__underlay"></span
                    ><!----><span class="v-btn__content" data-no-activator=""
                      >選擇檔案</span
                    ><!----><!---->
                  </button>
                </p>
                <p data-v-0ed52433="" class="textInfo">
                  <span data-v-0ed52433=""
                    >檔案類型：*.jpg *.jpeg *.gif *.png *.svg *.doc *.docx *.xls
                    *.xlsx *.pptx *.ppt *.pdf *.7z *.zip *.rar *.jpg *.jpeg
                    *.gif *.png *.svg *.txt *.odt *.ods *.odp *.odg *.mp3
                    *.mp4</span
                  ><span data-v-0ed52433="">檔案大小：5 MB</span
                  ><span data-v-0ed52433=""><!--v-if--></span>
                </p>
                <!--v-if--><input
                  data-v-0ed52433=""
                  type="hidden"
                  id="btn-attach"
                  name="btn-attach"
                  value="3"
                  style="display: none"
                /><input
                  data-v-0ed52433=""
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.svg,.doc,.docx,.xls,.xlsx,.pptx,.ppt,.pdf,.7z,.zip,.rar,.jpg,.jpeg,.gif,.png,.svg,.txt,.odt,.ods,.odp,.odg,.mp3,.mp4"
                  multiple=""
                  style="display: none"
                />
              </div>
            </v-col>
          </v-row>
          <!-- 檔案上傳 end -->
          <v-row class="formGrp">
            <v-col cols="" class="captchaCard">
              <div class="">
                <div class="img">
                  <img src="~@/assets/images/Pica-enhance.png" alt="" />
                </div>
                <div class="content">
                  <v-checkbox label="" hide-details="auto">
                    <template v-slot:label>
                      <div>我同意平台</div>
                    </template>
                  </v-checkbox>
                  <a class="linkText" href="">個人資料蒐集處理利用</a>
                </div>

                <div class="textError">
                  <p class="text">請閱讀個人資料搜集處理利用聲明</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <div class="d-flex justify-center formBtnGrp">
          <v-btn
            text="確定註冊"
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
