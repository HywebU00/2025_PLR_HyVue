<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<template>
  <v-row class="finder">
    <v-container>
      <p class="text-primary">
        PeopleFinder 元件放於 components/PeopleFinder.vue
      </p>
    </v-container>
    <v-dialog
      class="peopleFinderCard"
      v-model="dialog"
      scrollable
      max-width="800"
      transition="dialog-bottom-transition"
    >
      <!-- Demo 專用用按鈕 start -->

      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> peopleDemo範例元件 按鈕</v-btn>
      </template>
      <!-- Demo 專用用按鈕 end -->
      <v-card>
        <v-card-title>
          <v-container class="pb-0">
            <span class="text-primary font-weight-bold">選擇知識樹擁有者</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 人員/單位 </label>
                </v-col>
                <v-col class="d-flex align-start">
                  <v-row class="d-flex align-center">
                    <v-col cols="12" class="d-flex align-start"
                      ><v-text-field
                        variant="outlined"
                        single-line
                        class="w-100 mr-3"
                        hide-details="auto"
                        density="compact"
                      ></v-text-field>
                      <v-btn class="" color="primary">查詢</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 單位/專案群組 </label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="12">
                      <v-radio-group
                        color="primary"
                        inline
                        hide-details="auto"
                        single-line
                      >
                        <v-radio label="單位" value="true"></v-radio>
                        <v-radio label="專案群組" value="false"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col>
                      <v-autocomplete
                        id="type"
                        color="secondary"
                        variant="outlined"
                        single-line
                        hide-details="auto"
                        density="compact"
                        :items="['布農族', '阿美族', '卑南族']"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 常用流程 </label>
                </v-col>
                <v-col>
                  <v-autocomplete
                    id="type"
                    color="secondary"
                    variant="outlined"
                    hide-details="auto"
                    single-line
                    density="compact"
                    :items="['流程一', '流程二', '流程三']"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col class="pb-0 d-flex justify-lg-end" cols="12" lg="2">
                  <label class="text-primary" for=""> 交辦事項</label>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="outlined"
                    hide-details="auto"
                    single-line
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- 左右兩欄 start -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mx-2">應領數</v-col>
                  </v-row>
                  <v-row class="d-flex formGrp noBorder">
                    <v-col class="list multipleContent" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="1" class="btnList align-center d-flex">
                  <div
                    class="d-flex align-center justify-center flex-sm-column"
                  >
                    <v-btn
                      elevation="0"
                      class="mt-2 mt-md-0 iconBtn mb-2 mx-1"
                      rounded="md"
                      color="import"
                    >
                      <v-icon icon="mdi-chevron-right"></v-icon>
                    </v-btn>
                    <v-btn
                      elevation="0"
                      class="mt-2 mt-md-0 iconBtn mb-2 mx-1"
                      rounded="md"
                      color="export"
                    >
                      <v-icon icon="mdi-chevron-left"></v-icon>
                    </v-btn>
                    <v-btn
                      elevation="0"
                      class="mt-2 mt-md-0 iconBtn mb-2 mx-1"
                      rounded="md"
                      color="import"
                    >
                      <v-icon icon="mdi-chevron-up"></v-icon>
                    </v-btn>
                    <v-btn
                      elevation="0"
                      class="mt-2 mt-md-0 iconBtn mb-2 mx-1"
                      rounded="md"
                      color="export"
                    >
                      <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mx-2">扣領數</v-col>
                  </v-row>
                  <v-row class="d-flex formGrp noBorder">
                    <v-col class="list multipleContent" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- 左右兩欄 end -->
              <v-row class="d-flex formGrp formGrp_2 noBorder">
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mx-2"
                      >單位決行人員</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp noBorder">
                    <v-col class="list multipleContent" cols="12" sm="">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="1" class="btnList">
                  <div
                    class="d-flex align-center justify-center flex-sm-column"
                  ></div>
                </v-col>
                <v-col>
                  <v-row class="d-flex formGrp">
                    <v-col cols="12" md="4" class="infoTitle">
                      <label for="type">資訊單位</label>
                    </v-col>
                    <v-col>
                      <v-radio-group inline color="primary">
                        <v-radio label="許小傑" value="true"></v-radio>
                        <v-radio label="邱大發" value="false"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="submit"
            elevation="0"
            color="submit"
            variant="flat"
            rounded="md"
            size="large"
            @click="dialog = !dialog"
          >
            送出
          </v-btn>
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
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
