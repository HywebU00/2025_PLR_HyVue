<template>
  <!-- 📌 增加 index className -->
  <v-container class="container indexCard">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <!-- 📌 增加registerGrp className -->
    <v-row class="">
      <h2><span>首頁</span></h2>

      <v-col>
        <v-container class="d-flex cardGrp">
          <!-- 註冊 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-pencil-box-multiple-outline" /><span
                  >註冊</span
                >
              </v-card-title>
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 註冊 end -->
          <!-- 委託 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-account-file-outline" />
                <span>委託</span>
              </v-card-title>
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 委託 end -->
          <!-- 出版品牌 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-book-open-variant-outline" />
                <span>出版品牌</span>
              </v-card-title>
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 出版品牌 end -->
          <!-- 著作人名 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-account-edit-outline" />
                <span> 著作人名</span>
              </v-card-title>
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 著作人名  end  -->
          <!-- 登記 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-note-edit-outline" />
                <span> 登記 </span></v-card-title
              >
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 登記 end -->
          <!-- 補償酬金比例 start -->
          <router-link class="card">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi:mdi-cash-multiple" />
                <span> 補償酬金比例</span>
              </v-card-title>
              <div class="content">
                <div>3</div>
              </div>
              <v-card-actions>
                <div class="">待審核</div>
              </v-card-actions>
            </v-card>
          </router-link>
          <!-- 補償酬金比例 end -->
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
