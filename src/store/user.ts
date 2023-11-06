// // initial state
import { StoreOptions } from "vuex";
// import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
import { useRouter } from "vue-router";
import ACCESS_ENUM from "@/assets/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "登录",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("UpdateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
