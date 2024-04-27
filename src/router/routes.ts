import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuth from "@/views/NoAuth.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import UserLayout from "@/layout/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import QuestionAddView from "@/views/question/QuestionAddView.vue";
import QuestionManageView from "@/views/question/QuestionManageView.vue";
import QuestionsView from "@/views/question/QuestionsView.vue";
import QuestionsSubmitView from "@/views/question/QuestionsSubmitView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hide: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
  {
    path: "/",
    redirect: "/questions",
    meta: {
      hide: true,
    },
  },
  {
    path: "/questions",
    name: "题库",
    component: QuestionsView,
  },
  {
    path: "/question/:id",
    name: "题目详情",
    component: QuestionsSubmitView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hide: true,
    },
  },
  {
    path: "/add/question",
    name: "添加题目",
    component: QuestionAddView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: QuestionManageView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: QuestionAddView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
      hide: true,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuth,
    meta: {
      hide: true,
    },
  },

  {
    path: "/admin",
    name: "管理",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/about",
    name: "关于我的",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/404",
    meta: {
      hide: true,
    },
  },
];
