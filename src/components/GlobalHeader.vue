<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }">
          <div class="title-bar">
            <a href="http://localhost:8080/"><img class="logo" src=""></a>
            <div class="title">图标</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div class="Login-box">
        <!-- 这里应该是路由跳转 跳转到用户登录与注册界面 -->
        <a-button type="primary" shape="circle" class="Login-btn"
        @click=""
        >
          <icon-plus />
          <span class="Login-text">
            {{ store.state.user?.loginUser?.userName ?? "登录" }}
          </span>
        </a-button>


      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routers";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ACCESS_ENUM from "../assets/accessEnum";
import checkAccess from "../assets/checkAccess";
import { reactive, getCurrentInstance, onBeforeUnmount } from 'vue'


const router = useRouter();
const store = useStore();

const instance = getCurrentInstance();
const axios = require('axios').default;




// 展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

console.log();

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "鱼皮管理员",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};


// 登录与注册事件

// 直接路由



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}


/* 登录与注册按钮 */


.Login-text {
  font-size: 12px;
}
</style>
