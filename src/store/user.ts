// // initial state
import { StoreOptions } from "vuex";
// import ACCESS_ENUM from "@/access/accessEnum";
// import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {},
  mutations: {},
} as StoreOptions<any>;
