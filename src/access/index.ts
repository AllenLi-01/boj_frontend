import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";
import { Message } from "@arco-design/web-vue";

router.beforeEach(async (to, from, next) => {
  let loginUser = store.state.user.loginUser;
  //如果没登录，自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  const needAccess = (to?.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;

  //如果必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果还没登录
    if (
      !checkAccess(loginUser, ACCESS_ENUM.USER) &&
      !checkAccess(loginUser, ACCESS_ENUM.ADMIN)
    ) {
      //跳转到登录页，登录完毕重定向回来
      next(`/user/login?next=${to.fullPath}`);
      return;
    } else if (!checkAccess(loginUser, needAccess)) {
      Message.error("您不具有访问该功能的权限");
      next("/");
      return;
    }
  }
  next();
});
