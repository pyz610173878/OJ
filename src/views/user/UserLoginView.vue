<template>
    <div id="Login-view">
        <a-form :model="form" @submit="handleSubmit">
            <div class="UserLoginView-box">
                <div class="UserLoginView-box1">
                    <span class="UserLoginView-img"> <img src="" alt="">图片</span>
                    <div class="UserLoginView-input">

                        <!-- 三个输入框对其 -->
                        <a-input v-model="form.userAccount" placeholder="请输入账号" class="btn" />
                        <a-input-password v-model="form.userPassword" placeholder="请输入密码" class="btn" />
                        <a-button type="primary" html-type="submit" width="100" class="btn UserLoginView-btn">
                            <span class="span">
                                登录 / 注册
                            </span>
                        </a-button>
                    </div>
                </div>
            </div>
        </a-form>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
const form = reactive({
    userAccount: "",
    userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
    const res = await UserControllerService.userLoginUsingPost(form);
    // 登录成功，跳转到主页
    if (res.code === 0) {
        await store.dispatch("user/getLoginUser");
        router.push({
            path: "/",
            replace: true,
        });
    } else {
        message.error("登陆失败，" + res.message);
    }
};
</script>
<style scoped>
.Login-view {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;

}


.UserLoginView-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    width: 384px;
    border-radius: 21px;
    background: rgba(var(--grey-0-rgb), 1);
    box-shadow: 0px 1px 2px rgba(var(--dsw-black-light-rgb), 0.1), 0px 10px 22px rgba(var(--dsw-black-light-rgb), 0.16);
    margin: 0px auto;
}

.UserLoginView-box1 {
    width: 320px;
}


.UserLoginView-img {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: justify;
    margin-bottom: 24px;
}

.UserLoginView-img .img {
    width: 120px;
}


.UserLoginView-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.UserLoginView-btn {
    margin: 0px auto;
    border-radius: 21px;
    width: 100%;
    box-shadow: 0px 1px 2px rgba(var(--dsw-black-light-rgb), 0.1), 0px 10px 22px rgba(var(--dsw-black-light-rgb), 0.16);
    background-size: cover;
    border: medium;
    outline: none;
    user-select: none;
    text-decoration: none;
    display: inline-flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    color: rgba(var(--dsw-white-light-rgb), 1);
    font-size: 14px;
    padding: 8px 12px;
    margin: 8px 0px 16px;
    background: rgb(36, 37, 40);
    border-radius: 8px;
    line-height: 24px;
    transition: background 0.3s ease 0s;
    font-weight: 500;
    background-color: rgb(36, 37, 40) !important;

}
.btn {
    height: 42px;
    margin-bottom: 35px;
    border-radius: 8px !important;
    border-width: 1px;
    border-style: solid;
}

.span {
    cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: rgba(var(--dsw-white-light-rgb), 1);
}
</style>


