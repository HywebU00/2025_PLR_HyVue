// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "system",
        component: () => import("@/views/admin/systemComponent.vue"),
      },
      {
        path: "component",
        component: () => import("@/views/admin/Component.vue"),
      },
      {
        path: "myindex",
        component: () => import("@/views/admin/MyIndex2.vue"),
      },
      {
        path: "indexcard",
        component: () => import("@/views/admin/indexCard.vue"),
      },
      {
        path: "tab",
        component: () => import("@/views/admin/tabComponent.vue"),
      },
      {
        path: "/",
        component: () => import("@/views/admin/defaultComponent.vue"),
      },
      {
        path: "loginCard",
        component: () => import("@/views/admin/loginComponent.vue"),
      },
      {
        path: "check",
        component: () => import("@/views/admin/checkComponent.vue"),
      },
      {
        path: "search",
        component: () => import("@/views/admin/searchComponent.vue"),
      },
      {
        path: "register",
        component: () => import("@/views/admin/registerComponent.vue"),
      },
      {
        path: "from",
        component: () => import("@/views/admin/fromComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/admin/tableComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/admin/cardComponent.vue"),
      },
      {
        path: "finder",
        component: () => import("@/views/admin/finderComponent.vue"),
      },
      {
        path: "widget",
        component: () => import("@/views/admin/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/admin/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/admin/mediaPhotoComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
  {
    path: "/empty",
    component: () => import("@/views/layout/emptyPage.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
