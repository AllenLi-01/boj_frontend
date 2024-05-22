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
import IndexView from "@/views/IndexView.vue";
import DetectView from "@/views/DetectView.vue";
import VulsView from "@/views/VulsView.vue";

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
    redirect: "/home",
    meta: {
      hide: true,
    },
  },
  {
    path: "/home",
    name: "起始页",
    component: IndexView,
    meta: {
      hide: true,
    },
  },
  {
    path: "/detect",
    name: "文件分析",
    component: DetectView,
  },
  {
    path: "/vunFun",
    name: "漏洞函数库",
    component: VulsView,
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
    path: "/history",
    name: "历史记录",
    component: VulsView,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/404",
    meta: {
      hide: true,
    },
  },
];
