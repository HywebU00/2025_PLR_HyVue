<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-row>
      <h2><span>使用者註冊</span></h2>

      <!-- tab start -->
      <v-col>
        <v-tabs class="tabBtnGrp" v-model="tab" color="primary" grow>
          <v-tab value="one">基本資訊</v-tab>
          <v-tab value="two">關聯項目</v-tab>
          <v-tab value="three">帳號管理</v-tab>
          <v-tab value="four">審核記錄</v-tab>
          <v-tab value="five">補償酬金</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-form>
                <v-container class="formInfo">
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 類型</label>
                    </v-col>
                    <v-col>
                      <div class="text">個人</div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 身份</label>
                    </v-col>
                    <v-col> <div class="text">出版者、創作者</div> </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 名稱</label>
                    </v-col>
                    <v-col>
                      <div class="compactContent">
                        <div class="text">Simmy</div>
                        <div class="ml-auto">
                          <!-- <v-btn
                            class="iconBtn mr-1"
                            elevation="0"
                            v-bind="activatorProps"
                            color="primary"
                            rounded="md"
                          >
                            <v-icon icon="mdi-square-edit-outline"></v-icon>
                          </v-btn> -->
                          <v-btn
                            class="iconBtn"
                            elevation="0"
                            v-bind="activatorProps"
                            color="primary"
                            rounded="md"
                            @click="eye = !eye"
                          >
                            <v-icon v-if="eye" icon="mdi-eye-outline"></v-icon>
                            <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 匯款帳戶 </label>
                    </v-col>
                    <v-col>
                      <div class="compactContent">
                        <div class="text">
                          000央行　台北分行　123********234
                        </div>
                        <div class="ml-auto">
                          <v-btn
                            class="iconBtn"
                            elevation="0"
                            v-bind="activatorProps"
                            color="primary"
                            rounded="md"
                            @click="eye = !eye"
                          >
                            <v-icon v-if="eye" icon="mdi-eye-outline"></v-icon>
                            <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for="">
                        是否具領取資格
                      </label>
                    </v-col>
                    <v-col>
                      <div class="text">是（戶政特殊記事：遷出國外）</div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 申請單位</label>
                    </v-col>
                    <v-col cols="">
                      <div class="text">本人</div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 法定地址</label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="compactContent">
                        <div class="text">新竹縣　竹北市　台元一****樓之6</div>
                        <div class="ml-auto">
                          <v-btn
                            class="iconBtn"
                            elevation="0"
                            v-bind="activatorProps"
                            color="primary"
                            rounded="md"
                            @click="eye = !eye"
                          >
                            <v-icon v-if="eye" icon="mdi-eye-outline"></v-icon>
                            <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 聯絡地址</label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="compactContent">
                        <div v-if="!field" class="text">
                          新竹縣　竹北市　台元一****樓之6
                        </div>
                        <div v-else class="d-flex inputGrp">
                          <v-select
                            variant="outlined"
                            label="請輸入驗證碼"
                            type="text"
                            hide-details="auto"
                            single-line
                            density="compact"
                            class="mr-1"
                            :items="['選擇1', '選擇2', '選擇3']"
                          >
                          </v-select
                          ><v-select
                            variant="outlined"
                            label="請輸入驗證碼"
                            type="text"
                            hide-details="auto"
                            single-line
                            density="compact"
                            class="mr-1"
                            :items="['選擇1', '選擇2', '選擇3']"
                          >
                          </v-select>
                          <v-text-field
                            variant="outlined"
                            label="請輸入驗證碼"
                            type="text"
                            hide-details="auto"
                            single-line
                            class="mr-md-0 mr-1"
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="ml-auto d-flex">
                          <v-btn
                            class="iconBtn"
                            @click="field = !field"
                            elevation="0"
                            v-bind="activatorProps"
                            color="primary"
                            rounded="md"
                          >
                            <v-icon icon="mdi-square-edit-outline"></v-icon>
                          </v-btn>
                          <v-btn
                            class="iconBtn"
                            elevation="0"
                            color="primary"
                            rounded="md"
                            @click="eye = !eye"
                          >
                            <v-icon v-if="eye" icon="mdi-eye-outline"></v-icon>
                            <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 聯絡電話</label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="compactContent">
                        <div v-if="field1" class="text">091****678</div>
                        <div v-else class="d-flex inputGrp">
                          <v-text-field
                            variant="outlined"
                            label="請輸入驗證碼"
                            type="text"
                            hide-details="auto"
                            single-line
                            class="mr-md-0 mr-1"
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="ml-auto d-flex">
                          <v-btn
                            class="iconBtn"
                            @click="field1 = !field1"
                            elevation="0"
                            color="primary"
                            rounded="md"
                          >
                            <v-icon icon="mdi-square-edit-outline"></v-icon>
                          </v-btn>
                          <v-btn
                            class="iconBtn"
                            elevation="0"
                            color="primary"
                            rounded="md"
                            @click="eye = !eye"
                          >
                            <v-icon v-if="eye" icon="mdi-eye-outline"></v-icon>
                            <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 委託對象 </label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="text">PLR平台</div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 建立時間 </label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="text">2025/01/01 01:01</div>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                      <label class="text-primary" for=""> 更新時間 </label>
                    </v-col>
                    <v-col class="" cols="">
                      <div class="text">2025/01/01 01:01</div>
                    </v-col>
                  </v-row>
                </v-container>
                <div class="d-flex justify-center formBtnGrp">
                  <v-btn
                    text="儲存"
                    variant="flat"
                    size="x-large"
                    class="bg-primary btn elevation-0 mx-2"
                  ></v-btn>
                  <v-btn
                    size="x-large"
                    class="bg-secondary btn elevation-0 mx-2"
                    text="取消"
                    variant="flat"
                  ></v-btn>
                </div>
              </v-form>
            </v-window-item>
            <v-window-item value="two"> Two </v-window-item>

            <v-window-item value="three"> Three </v-window-item>
            <v-window-item value="four">
              <v-container>
                <v-card class="pa-4">
                  <v-tabs class="tabGrp" v-model="tab2" color="primary" grow>
                    <v-tab value="1">委託審核</v-tab>
                    <v-tab value="2">出版品牌審核 </v-tab>
                    <v-tab value="3">著作人名審核</v-tab>
                    <v-tab value="4">登記審核</v-tab>
                    <v-tab value="5">補償酬金比例審核</v-tab>
                  </v-tabs>
                  <v-window v-model="tab2">
                    <v-window-item value="1">
                      <v-row class="mt-2">
                        <v-col>
                          <v-table class="table">
                            <thead class="bg-thead">
                              <tr>
                                <th class="text-center">序號</th>
                                <th class="text-center">送審時間</th>
                                <th class="text-center">委託人名稱</th>
                                <th class="text-center">審核狀態</th>
                                <th class="text-center">審核人員</th>
                                <th class="text-center">審核時間</th>
                                <th class="text-center">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in data" :key="item.name">
                                <td class="text-center">{{ item.id }}</td>
                                <td class="text-center">{{ item.date }}</td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                  <template v-if="item.status == true">
                                    <v-chip label color="primary"
                                      >待審核</v-chip
                                    >
                                    <!-- <v-chip label color="yellow-darken-4"
                                        >已驗證</v-chip
                                      >
                                      <v-chip label color="deep-orange-darken-2"
                                        >未通過</v-chip
                                      > -->
                                  </template>
                                </td>
                                <td class="text-center">{{ item.title }}</td>
                                <td class="text-center">{{ item.time }}</td>
                                <td class="text-center">
                                  <div class="btnGroup d-flex justify-center">
                                    <v-dialog scrollable maxWidth="900">
                                      <template
                                        v-slot:activator="{
                                          props: activatorProps,
                                        }"
                                      >
                                        <v-btn
                                          class="iconBtn"
                                          elevation="0"
                                          v-bind="activatorProps"
                                          color="primary"
                                          rounded="md"
                                        >
                                          <v-icon
                                            icon="mdi-square-edit-outline"
                                          ></v-icon>
                                        </v-btn>
                                      </template>

                                      <template v-slot:default="{ isActive }">
                                        <v-form>
                                          <v-card title="委託審核">
                                            <v-card-text>
                                              <v-container>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人證號
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label=""
                                                      density="compact"
                                                      hide-details="auto"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人名稱
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label="密碼表單"
                                                      type="password"
                                                      hide-details="auto"
                                                      density="compact"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>

                                                <!-- 驗證碼欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人匯款帳戶</label
                                                    >
                                                  </v-col>
                                                  <v-col cols="">
                                                    <div class="compactContent">
                                                      <v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select
                                                      ><v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select>
                                                      <v-text-field
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        class="mr-md-0 mr-1"
                                                        density="compact"
                                                      ></v-text-field>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                      <ul class="linkList">
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 驗證碼欄位 end -->
                                                <!-- 通知欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      通知（退回者必填）</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <v-textarea
                                                      variant="outlined"
                                                      label="請輸入驗證碼"
                                                      type="text"
                                                      hide-details="auto"
                                                      single-line
                                                      density="compact"
                                                    ></v-textarea>
                                                  </v-col>
                                                </v-row>
                                                <!-- 通知欄位 end -->
                                                <!-- 酬金比例 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      酬金比例</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <div
                                                      class="proportionContent"
                                                    >
                                                      <div>
                                                        <v-row class="item">
                                                          <v-col
                                                            cols="12"
                                                            md="3"
                                                            class="d-flex align-center justify-start justify-md-center"
                                                          >
                                                            <div>
                                                              <div
                                                                class="title"
                                                              >
                                                                出版者
                                                                <span
                                                                  class="block"
                                                                ></span>
                                                                補償酬金比例
                                                              </div>
                                                              <div
                                                                class="compactContent"
                                                              >
                                                                <v-text-field
                                                                  variant="outlined"
                                                                  value="35%"
                                                                  type="text"
                                                                  hide-details="auto"
                                                                  single-line
                                                                  class="mr-md-0 mr-1"
                                                                  density="compact"
                                                                ></v-text-field>
                                                              </div>
                                                            </div>
                                                          </v-col>
                                                          <v-col class="list">
                                                            <ul>
                                                              <li>
                                                                城邦文化事業股份有限公司
                                                                <span>10</span>%
                                                              </li>
                                                              <li>
                                                                城邦文化事業股份有限公司
                                                                <span>10</span>%
                                                              </li>
                                                              <li>
                                                                城邦文化事業股份有限公司
                                                                <span>10</span>%
                                                              </li>
                                                            </ul>
                                                          </v-col>
                                                        </v-row>
                                                        <!-- 補償酬金比例 start -->
                                                        <v-row class="item">
                                                          <v-col
                                                            cols="12"
                                                            class="pa-0"
                                                          >
                                                            <v-checkbox
                                                              label="調整作者補償酬金比例"
                                                              hide-details="auto"
                                                            ></v-checkbox>
                                                          </v-col>
                                                          <v-col
                                                            cols="12"
                                                            md="3"
                                                            class="d-flex align-center justify-start justify-md-center"
                                                          >
                                                            <div>
                                                              <div
                                                                class="title"
                                                              >
                                                                著作人-作者
                                                                <span
                                                                  class="block"
                                                                ></span>
                                                                補償酬金比例
                                                              </div>
                                                              <div
                                                                class="compactContent"
                                                              >
                                                                <v-text-field
                                                                  variant="outlined"
                                                                  value="35%"
                                                                  type="text"
                                                                  hide-details="auto"
                                                                  single-line
                                                                  class="mr-md-0 mr-1"
                                                                  density="compact"
                                                                ></v-text-field>
                                                              </div>
                                                            </div>
                                                          </v-col>
                                                          <v-col>
                                                            <v-table
                                                              class="itemtable"
                                                            >
                                                              <thead>
                                                                <tr>
                                                                  <th>
                                                                    調整補償酬金分配比例
                                                                  </th>
                                                                  <th>
                                                                    整本書籍補償酬金比例
                                                                  </th>
                                                                </tr>
                                                              </thead>
                                                              <tbody>
                                                                <tr
                                                                  v-for="i in 3"
                                                                  :key="i"
                                                                >
                                                                  <td
                                                                    class="d-flex"
                                                                  >
                                                                    <div
                                                                      class="symbol"
                                                                    >
                                                                      <v-icon
                                                                        icon="mdi-close"
                                                                      ></v-icon>
                                                                    </div>

                                                                    <div
                                                                      class="title"
                                                                    >
                                                                      王艾咪
                                                                    </div>
                                                                    <div
                                                                      class="d-flex"
                                                                    >
                                                                      <v-text-field
                                                                        variant="outlined"
                                                                        value="35"
                                                                        hide-details="auto"
                                                                        single-line
                                                                        density="compact"
                                                                      ></v-text-field>
                                                                      <div
                                                                        class="symbol"
                                                                      >
                                                                        <span
                                                                          >%</span
                                                                        >
                                                                      </div>
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="d-flex"
                                                                    >
                                                                      <div
                                                                        class="symbol"
                                                                      >
                                                                        <span
                                                                          >=</span
                                                                        >
                                                                      </div>
                                                                      <div
                                                                        class="d-flex w-100"
                                                                      >
                                                                        <v-text-field
                                                                          variant="outlined"
                                                                          value="35"
                                                                          hide-details="auto"
                                                                          single-line
                                                                          density="compact"
                                                                        ></v-text-field>
                                                                        <div
                                                                          class="symbol"
                                                                        >
                                                                          <span
                                                                            >%</span
                                                                          >
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </v-table>
                                                          </v-col>
                                                        </v-row>
                                                        <!-- 補償酬金比例 end -->
                                                        <!-- 調整譯者補償酬金比例 start -->
                                                        <v-row class="item">
                                                          <v-col
                                                            cols="12"
                                                            class="pa-0"
                                                          >
                                                            <v-checkbox
                                                              label="調整譯者補償酬金比例"
                                                              hide-details="auto"
                                                            ></v-checkbox>
                                                          </v-col>
                                                          <v-col
                                                            cols="12"
                                                            md="3"
                                                            class="d-flex align-center justify-start justify-md-center"
                                                          >
                                                            <div class="">
                                                              <div
                                                                class="title"
                                                              >
                                                                著作人-譯者
                                                                <span
                                                                  class="block"
                                                                ></span>
                                                                補償酬金比例
                                                              </div>
                                                              <div
                                                                class="compactContent"
                                                              >
                                                                <v-text-field
                                                                  variant="outlined"
                                                                  value="35%"
                                                                  type="text"
                                                                  hide-details="auto"
                                                                  single-line
                                                                  class="mr-md-0 mr-1"
                                                                  density="compact"
                                                                ></v-text-field>
                                                              </div>
                                                            </div>
                                                          </v-col>
                                                          <v-col>
                                                            <v-table
                                                              class="itemtable"
                                                            >
                                                              <thead>
                                                                <tr>
                                                                  <th>
                                                                    調整補償酬金分配比例
                                                                  </th>
                                                                  <th>
                                                                    整本書籍補償酬金比例
                                                                  </th>
                                                                </tr>
                                                              </thead>
                                                              <tbody>
                                                                <tr
                                                                  v-for="i in 3"
                                                                  :key="i"
                                                                >
                                                                  <td
                                                                    class="d-flex"
                                                                  >
                                                                    <div
                                                                      class="symbol"
                                                                    >
                                                                      <v-icon
                                                                        icon="mdi-close"
                                                                      ></v-icon>
                                                                    </div>

                                                                    <div
                                                                      class="title"
                                                                    >
                                                                      王艾咪
                                                                    </div>
                                                                    <div
                                                                      class="d-flex"
                                                                    >
                                                                      <v-text-field
                                                                        variant="outlined"
                                                                        value="35"
                                                                        hide-details="auto"
                                                                        single-line
                                                                        density="compact"
                                                                      ></v-text-field>
                                                                      <div
                                                                        class="symbol"
                                                                      >
                                                                        <span
                                                                          >%</span
                                                                        >
                                                                      </div>
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="d-flex"
                                                                    >
                                                                      <div
                                                                        class="symbol"
                                                                      >
                                                                        <span
                                                                          >=</span
                                                                        >
                                                                      </div>
                                                                      <div
                                                                        class="d-flex w-100"
                                                                      >
                                                                        <v-text-field
                                                                          variant="outlined"
                                                                          value="35"
                                                                          hide-details="auto"
                                                                          single-line
                                                                          density="compact"
                                                                        ></v-text-field>
                                                                        <div
                                                                          class="symbol"
                                                                        >
                                                                          <span
                                                                            >%</span
                                                                          >
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </v-table>
                                                          </v-col>
                                                        </v-row>
                                                        <!-- 調整譯者補償酬金比例 end -->
                                                      </div>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 酬金比例 end -->
                                              </v-container>
                                            </v-card-text>
                                            <v-card-actions
                                              class="d-flex justify-center"
                                            >
                                              <v-btn
                                                text="關閉"
                                                variant="flat"
                                                @click="isActive.value = false"
                                                size="x-large"
                                                class="bg-primary btn elevation-0 mx-2"
                                              ></v-btn>
                                            </v-card-actions>
                                          </v-card>
                                        </v-form>
                                      </template>
                                    </v-dialog>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-col>
                      </v-row>
                    </v-window-item>
                    <v-window-item value="2">
                      <v-row class="mt-2">
                        <v-col>
                          <v-table class="table">
                            <thead class="bg-thead">
                              <tr>
                                <th class="text-center">序號</th>
                                <th class="text-center">送審時間</th>
                                <th class="text-center">委託人名稱</th>
                                <th class="text-center">審核狀態</th>
                                <th class="text-center">審核人員</th>
                                <th class="text-center">審核時間</th>
                                <th class="text-center">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in data" :key="item.name">
                                <td class="text-center">{{ item.id }}</td>
                                <td class="text-center">{{ item.date }}</td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                  <template v-if="item.status == true">
                                    <v-chip label color="primary"
                                      >待審核</v-chip
                                    >
                                    <!-- <v-chip label color="yellow-darken-4"
                                        >已驗證</v-chip
                                      >
                                      <v-chip label color="deep-orange-darken-2"
                                        >未通過</v-chip
                                      > -->
                                  </template>
                                </td>
                                <td class="text-center">{{ item.title }}</td>
                                <td class="text-center">{{ item.time }}</td>
                                <td class="text-center">
                                  <div class="btnGroup d-flex justify-center">
                                    <v-dialog scrollable maxWidth="900">
                                      <template
                                        v-slot:activator="{
                                          props: activatorProps,
                                        }"
                                      >
                                        <v-btn
                                          class="iconBtn"
                                          elevation="0"
                                          v-bind="activatorProps"
                                          color="primary"
                                          rounded="md"
                                        >
                                          <v-icon
                                            icon="mdi-square-edit-outline"
                                          ></v-icon>
                                        </v-btn>
                                      </template>

                                      <template v-slot:default="{ isActive }">
                                        <v-form>
                                          <v-card title="委託審核">
                                            <v-card-text>
                                              <v-container>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人證號
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label=""
                                                      density="compact"
                                                      hide-details="auto"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人名稱
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label="密碼表單"
                                                      type="password"
                                                      hide-details="auto"
                                                      density="compact"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>

                                                <!-- 驗證碼欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人匯款帳戶</label
                                                    >
                                                  </v-col>
                                                  <v-col cols="">
                                                    <div class="compactContent">
                                                      <v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select
                                                      ><v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select>
                                                      <v-text-field
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        class="mr-md-0 mr-1"
                                                        density="compact"
                                                      ></v-text-field>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                      <ul class="linkList">
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 驗證碼欄位 end -->
                                                <!-- 通知欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      通知（退回者必填）</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <v-textarea
                                                      variant="outlined"
                                                      label="請輸入驗證碼"
                                                      type="text"
                                                      hide-details="auto"
                                                      single-line
                                                      density="compact"
                                                    ></v-textarea>
                                                  </v-col>
                                                </v-row>

                                                <!-- 通知欄位 end -->
                                              </v-container>
                                            </v-card-text>
                                            <v-card-actions
                                              class="d-flex justify-center"
                                            >
                                              <v-btn
                                                text="關閉"
                                                variant="flat"
                                                @click="isActive.value = false"
                                                size="x-large"
                                                class="bg-primary btn elevation-0 mx-2"
                                              ></v-btn>
                                            </v-card-actions>
                                          </v-card>
                                        </v-form>
                                      </template>
                                    </v-dialog>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-col> </v-row
                    ></v-window-item>
                    <v-window-item value="3">
                      <v-row class="mt-2">
                        <v-col>
                          <v-table class="table">
                            <thead class="bg-thead">
                              <tr>
                                <th class="text-center">序號</th>
                                <th class="text-center">送審時間</th>
                                <th class="text-center">委託人名稱</th>
                                <th class="text-center">審核狀態</th>
                                <th class="text-center">審核人員</th>
                                <th class="text-center">審核時間</th>
                                <th class="text-center">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in data" :key="item.name">
                                <td class="text-center">{{ item.id }}</td>
                                <td class="text-center">{{ item.date }}</td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                  <template v-if="item.status == true">
                                    <v-chip label color="primary"
                                      >待審核</v-chip
                                    >
                                    <!-- <v-chip label color="yellow-darken-4"
                                        >已驗證</v-chip
                                      >
                                      <v-chip label color="deep-orange-darken-2"
                                        >未通過</v-chip
                                      > -->
                                  </template>
                                </td>
                                <td class="text-center">{{ item.title }}</td>
                                <td class="text-center">{{ item.time }}</td>
                                <td class="text-center">
                                  <div class="btnGroup d-flex justify-center">
                                    <v-dialog scrollable maxWidth="900">
                                      <template
                                        v-slot:activator="{
                                          props: activatorProps,
                                        }"
                                      >
                                        <v-btn
                                          class="iconBtn"
                                          elevation="0"
                                          v-bind="activatorProps"
                                          color="primary"
                                          rounded="md"
                                        >
                                          <v-icon
                                            icon="mdi-square-edit-outline"
                                          ></v-icon>
                                        </v-btn>
                                      </template>

                                      <template v-slot:default="{ isActive }">
                                        <v-form>
                                          <v-card title="委託審核">
                                            <v-card-text>
                                              <v-container>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人證號
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label=""
                                                      density="compact"
                                                      hide-details="auto"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人名稱
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label="密碼表單"
                                                      type="password"
                                                      hide-details="auto"
                                                      density="compact"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>

                                                <!-- 驗證碼欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人匯款帳戶</label
                                                    >
                                                  </v-col>
                                                  <v-col cols="">
                                                    <div class="compactContent">
                                                      <v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select
                                                      ><v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select>
                                                      <v-text-field
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        class="mr-md-0 mr-1"
                                                        density="compact"
                                                      ></v-text-field>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                      <ul class="linkList">
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 驗證碼欄位 end -->
                                                <!-- 通知欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      通知（退回者必填）</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <v-textarea
                                                      variant="outlined"
                                                      label="請輸入驗證碼"
                                                      type="text"
                                                      hide-details="auto"
                                                      single-line
                                                      density="compact"
                                                    ></v-textarea>
                                                  </v-col>
                                                </v-row>
                                                <!-- 通知欄位 end -->
                                              </v-container>
                                            </v-card-text>
                                            <v-card-actions
                                              class="d-flex justify-center"
                                            >
                                              <v-btn
                                                text="關閉"
                                                variant="flat"
                                                @click="isActive.value = false"
                                                size="x-large"
                                                class="bg-primary btn elevation-0 mx-2"
                                              ></v-btn>
                                            </v-card-actions>
                                          </v-card>
                                        </v-form>
                                      </template>
                                    </v-dialog>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-col> </v-row
                    ></v-window-item>
                    <v-window-item value="4">
                      <v-row class="mt-2">
                        <v-col>
                          <v-table class="table">
                            <thead class="bg-thead">
                              <tr>
                                <th class="text-center">序號</th>
                                <th class="text-center">送審時間</th>
                                <th class="text-center">委託人名稱</th>
                                <th class="text-center">審核狀態</th>
                                <th class="text-center">審核人員</th>
                                <th class="text-center">審核時間</th>
                                <th class="text-center">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in data" :key="item.name">
                                <td class="text-center">{{ item.id }}</td>
                                <td class="text-center">{{ item.date }}</td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                  <template v-if="item.status == true">
                                    <v-chip label color="primary"
                                      >待審核</v-chip
                                    >
                                    <!-- <v-chip label color="yellow-darken-4"
                                        >已驗證</v-chip
                                      >
                                      <v-chip label color="deep-orange-darken-2"
                                        >未通過</v-chip
                                      > -->
                                  </template>
                                </td>
                                <td class="text-center">{{ item.title }}</td>
                                <td class="text-center">{{ item.time }}</td>
                                <td class="text-center">
                                  <div class="btnGroup d-flex justify-center">
                                    <v-dialog scrollable maxWidth="900">
                                      <template
                                        v-slot:activator="{
                                          props: activatorProps,
                                        }"
                                      >
                                        <v-btn
                                          class="iconBtn"
                                          elevation="0"
                                          v-bind="activatorProps"
                                          color="primary"
                                          rounded="md"
                                        >
                                          <v-icon
                                            icon="mdi-square-edit-outline"
                                          ></v-icon>
                                        </v-btn>
                                      </template>

                                      <template v-slot:default="{ isActive }">
                                        <v-form>
                                          <v-card title="委託審核">
                                            <v-card-text>
                                              <v-container>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人證號
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label=""
                                                      density="compact"
                                                      hide-details="auto"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人名稱
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label="密碼表單"
                                                      type="password"
                                                      hide-details="auto"
                                                      density="compact"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>

                                                <!-- 驗證碼欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人匯款帳戶</label
                                                    >
                                                  </v-col>
                                                  <v-col cols="">
                                                    <div class="compactContent">
                                                      <v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select
                                                      ><v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select>
                                                      <v-text-field
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        class="mr-md-0 mr-1"
                                                        density="compact"
                                                      ></v-text-field>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                      <ul class="linkList">
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 驗證碼欄位 end -->
                                                <!-- 通知欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      通知（退回者必填）</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <v-textarea
                                                      variant="outlined"
                                                      label="請輸入驗證碼"
                                                      type="text"
                                                      hide-details="auto"
                                                      single-line
                                                      density="compact"
                                                    ></v-textarea>
                                                  </v-col>
                                                </v-row>
                                                <!-- 通知欄位 end -->
                                              </v-container>
                                            </v-card-text>
                                            <v-card-actions
                                              class="d-flex justify-center"
                                            >
                                              <v-btn
                                                text="關閉"
                                                variant="flat"
                                                @click="isActive.value = false"
                                                size="x-large"
                                                class="bg-primary btn elevation-0 mx-2"
                                              ></v-btn>
                                            </v-card-actions>
                                          </v-card>
                                        </v-form>
                                      </template>
                                    </v-dialog>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-col> </v-row
                    ></v-window-item>
                    <v-window-item value="5">
                      <v-row class="mt-2">
                        <v-col>
                          <v-table class="table">
                            <thead class="bg-thead">
                              <tr>
                                <th class="text-center">序號</th>
                                <th class="text-center">送審時間</th>
                                <th class="text-center">委託人名稱</th>
                                <th class="text-center">審核狀態</th>
                                <th class="text-center">審核人員</th>
                                <th class="text-center">審核時間</th>
                                <th class="text-center">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in data" :key="item.name">
                                <td class="text-center">{{ item.id }}</td>
                                <td class="text-center">{{ item.date }}</td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                  <template v-if="item.status == true">
                                    <v-chip label color="primary"
                                      >待審核</v-chip
                                    >
                                    <!-- <v-chip label color="yellow-darken-4"
                                        >已驗證</v-chip
                                      >
                                      <v-chip label color="deep-orange-darken-2"
                                        >未通過</v-chip
                                      > -->
                                  </template>
                                </td>
                                <td class="text-center">{{ item.title }}</td>
                                <td class="text-center">{{ item.time }}</td>
                                <td class="text-center">
                                  <div class="btnGroup d-flex justify-center">
                                    <v-dialog scrollable maxWidth="900">
                                      <template
                                        v-slot:activator="{
                                          props: activatorProps,
                                        }"
                                      >
                                        <v-btn
                                          class="iconBtn"
                                          elevation="0"
                                          v-bind="activatorProps"
                                          color="primary"
                                          rounded="md"
                                        >
                                          <v-icon
                                            icon="mdi-square-edit-outline"
                                          ></v-icon>
                                        </v-btn>
                                      </template>

                                      <template v-slot:default="{ isActive }">
                                        <v-form>
                                          <v-card title="委託審核">
                                            <v-card-text>
                                              <v-container>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人證號
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label=""
                                                      density="compact"
                                                      hide-details="auto"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人名稱
                                                    </label>
                                                  </v-col>
                                                  <v-col>
                                                    <v-text-field
                                                      variant="outlined"
                                                      single-line
                                                      label="密碼表單"
                                                      type="password"
                                                      hide-details="auto"
                                                      density="compact"
                                                    ></v-text-field>
                                                  </v-col>
                                                </v-row>

                                                <!-- 驗證碼欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      委託人匯款帳戶</label
                                                    >
                                                  </v-col>
                                                  <v-col cols="">
                                                    <div class="compactContent">
                                                      <v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select
                                                      ><v-select
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        density="compact"
                                                        class="mr-1"
                                                        :items="[
                                                          '選擇1',
                                                          '選擇2',
                                                          '選擇3',
                                                        ]"
                                                      >
                                                      </v-select>
                                                      <v-text-field
                                                        variant="outlined"
                                                        label="請輸入驗證碼"
                                                        type="text"
                                                        hide-details="auto"
                                                        single-line
                                                        class="mr-md-0 mr-1"
                                                        density="compact"
                                                      ></v-text-field>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                      <ul class="linkList">
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                        <li>
                                                          <router-link
                                                            >這是委託具結書的檔名點擊另開視窗呈現.pdf</router-link
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </v-col>
                                                </v-row>
                                                <!-- 驗證碼欄位 end -->
                                                <!-- 通知欄位 start -->
                                                <v-row class="formGrp">
                                                  <v-col
                                                    class="pb-0 d-flex justify-lg-end"
                                                    cols="12"
                                                    lg="2"
                                                  >
                                                    <label
                                                      class="text-primary"
                                                      for=""
                                                    >
                                                      通知（退回者必填）</label
                                                    >
                                                  </v-col>
                                                  <v-col class="">
                                                    <v-textarea
                                                      variant="outlined"
                                                      label="請輸入驗證碼"
                                                      type="text"
                                                      hide-details="auto"
                                                      single-line
                                                      density="compact"
                                                    ></v-textarea>
                                                  </v-col>
                                                </v-row>
                                                <!-- 通知欄位 end -->
                                              </v-container>
                                            </v-card-text>
                                            <v-card-actions
                                              class="d-flex justify-center"
                                            >
                                              <v-btn
                                                text="關閉"
                                                variant="flat"
                                                @click="isActive.value = false"
                                                size="x-large"
                                                class="bg-primary btn elevation-0 mx-2"
                                              ></v-btn>
                                            </v-card-actions>
                                          </v-card>
                                        </v-form>
                                      </template>
                                    </v-dialog>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-col> </v-row
                    ></v-window-item>
                  </v-window>
                </v-card>
              </v-container>
            </v-window-item>
            <v-window-item value="five">
              <v-container class="formInfo">
                <v-row class="formGrp">
                  <v-col class="d-flex justify-lg-end" cols="12" lg="2">
                    <label class="text-primary title" for=""> 總覽</label>
                  </v-col>
                  <v-col cols="12" lg="10">
                    <div class="scroll">
                      <v-table class="table">
                        <thead class="bg-thead">
                          <tr>
                            <th class="text-center">期數</th>
                            <th class="text-center">統計期間</th>
                            <th class="text-center">應發<br />補償酬金</th>
                            <th class="text-center">異常退匯</th>
                            <th class="text-center">已核<br />發補償酬金</th>
                            <th class="text-center">未發<br />補償酬金</th>
                            <th class="text-center">發放狀態</th>
                            <th class="text-center">發放日期</th>
                            <th class="text-center">檢視</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in 3" :key="item.name">
                            <td class="text-center">1</td>
                            <td class="text-center">2026/04-2026/09</td>
                            <td class="text-center">330</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                            <td class="text-center">330</td>
                            <td class="text-center">尚未發放</td>
                            <td class="text-center">2024/12/30</td>
                            <td class="text-center">
                              <v-btn
                                class="iconBtn"
                                elevation="0"
                                color="primary"
                                rounded="md"
                              >
                                <v-icon icon="mdi-square-edit-outline"></v-icon>
                              </v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="d-flex justify-lg-end" cols="12" lg="2">
                    <label class="text-primary title" for="">
                      第3期 <span class="block"></span> 出版者明細</label
                    >
                  </v-col>
                  <v-col cols="12" lg="10">
                    <div class="scroll">
                      <v-table class="table">
                        <thead class="bg-thead">
                          <tr>
                            <th class="text-center">序號</th>
                            <th class="text-center">出版品牌</th>
                            <th class="text-center">已登記書目數</th>
                            <th class="text-center">本期借閱次數</th>
                            <th class="text-center">本期補償酬金</th>

                            <th class="text-center">檢視</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="i in 3" :key="i">
                            <td class="text-center">{{ i }}</td>
                            <td class="text-center">品牌Ａ</td>
                            <td class="text-center">10</td>
                            <td class="text-center">100</td>
                            <td class="text-center">30.00</td>

                            <td class="text-center">
                              <v-btn
                                class="iconBtn"
                                elevation="0"
                                color="primary"
                                rounded="md"
                              >
                                <v-icon icon="mdi-square-edit-outline"></v-icon>
                              </v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-col>
      <!-- tab end -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    tab2: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data
    data: [
      {
        id: "1",
        date: "2024/12/30 01:03",
        name: "小希",
        status: true,
        title: "客服1號",
        time: "2025/01/01 01:01",
      },
      {
        id: "2",
        date: "2024/12/30 01:03",
        name: "小希",
        status: true,
        title: "客服1號",
        time: "2025/01/01 01:01",
      },
      {
        id: "3",
        date: "2024/12/30 01:03",
        name: "小希",
        status: true,
        title: "客服1號",
        time: "2025/01/01 01:01",
      },
      {
        id: "4",
        date: "2024/12/30 01:03",
        name: "小希",
        status: true,
        title: "客服1號",
        time: "2025/01/01 01:01",
      },
      {
        id: "5",
        date: "2024/12/30 01:03",
        name: "小希",
        status: true,
        title: "客服1號",
        time: "2025/01/01 01:01",
      },
    ],
    //field
    eye: true,
    field: false,
    field1: false,
  }),
  methods: {},
  mounted() {},
  components: {},
};
</script>
<style></style>
