// initial state
import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import { LoginUserVO, UserControllerService } from "../../generated";
import { Message } from "@arco-design/web-vue";

export default {
  namespaced: true,
  state: () => ({
    /**
     * 有userName和userRole两个属性
     */
    loginUser: {},
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      let loginData: LoginUserVO | undefined = {
        userName: "未登录",
        userRole: ACCESS_ENUM.NOT_LOGIN,
      };
      try {
        const res = await UserControllerService.getLoginUserUsingGet();
        if (res.code === 0) {
          loginData = res.data;
          console.log(loginData);
        }
      } catch (error) {
        Message.error("网络连接错误");
      } finally {
        commit("updateUser", loginData);
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
