<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">用户登录</div>
    <a-form
      :model="form"
      class="login-form"
      layout="vertical"
      @submit-success="handleSubmit"
      scroll-to-first-error
      size="large"
    >
      <a-form-item
        field="userAccount"
        hide-label
        :validate-trigger="['change', 'blur']"
        :rules="[{ required: true, message: '账号不能为空' }]"
      >
        <a-input v-model="form.userAccount" placeholder="请输入账号">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="userPassword"
        hide-label
        :validate-trigger="['change', 'blur']"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <a-input-password
          allow-clear
          v-model="form.userPassword"
          placeholder="请输入密码"
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>

      <a-space :size="16" direction="vertical">
        <a-button type="primary" long html-type="submit">登录</a-button>
        <a-button
          type="text"
          long
          class="login-form-register-btn"
          @click="handleRegister"
        >
          注册账号
        </a-button>
      </a-space>
    </a-form>
    <a-modal
      v-model:visible="visible"
      title="用户注册"
      @cancel="handleCancel"
      :unmount-on-close="true"
      :on-before-ok="handleRegisterSubmit"
    >
      <a-form ref="registerFormRef" :model="registerForm">
        <a-form-item
          field="userAccount"
          label="账号"
          validate-trigger="blur"
          :rules="[
            { required: true, message: '账号不能为空' },
            { minLength: 4, message: '账号不能小于4位' },
          ]"
        >
          <a-input
            v-model="registerForm.userAccount"
            placeholder="请输入账号"
          />
        </a-form-item>
        <a-form-item
          field="userName"
          label="昵称"
          validate-trigger="blur"
          :rules="[{ required: true, message: '用户昵称不能为空' }]"
        >
          <a-input
            v-model="registerForm.userName"
            placeholder="请输入用户昵称"
          />
        </a-form-item>
        <a-form-item
          field="userPassword"
          label="密码"
          validate-trigger="blur"
          :rules="[
            { required: true, message: '密码不能为空' },
            { minLength: 6, message: '密码不少于6位' },
          ]"
        >
          <a-input-password
            v-model="registerForm.userPassword"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item
          field="checkPassword"
          label="确认密码"
          validate-trigger="blur"
          :rules="[
            { required: true, message: '确认密码不能为空' },
            {
              match: new RegExp(`^${registerForm.userPassword}$`),
              message: '再次输入的密码不匹配',
            },
          ]"
        >
          <a-input-password
            v-model="registerForm.checkPassword"
            placeholder="请确认密码"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { UserControllerService } from "../../../generated";
import { Message } from "@arco-design/web-vue";
import { LocationQueryValue, useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
let visible = ref(false);
const registerFormRef = ref(null);

const handleRegister = () => {
  visible.value = true;
};

/**
 * 注册组件确认事件 异步确认
 */
const handleRegisterSubmit = async () => {
  const error = await registerFormRef.value?.validate();
  if (!error) {
    try {
      const res = await UserControllerService.userRegisterUsingPost(
        registerForm
      );
      //注册成功
      if (res.code === 0) {
        Message.success("注册成功！");
        //清空表单数据
        registerFormRef.value.resetFields();
        return true;
      } else {
        Message.error(res.message);
      }
    } catch (registerError) {
      if (registerError.isAxiosError && !registerError.response) {
        Message.error("网络连接错误！");
      } else {
        Message.error("发生了意料之外的错误。请稍后再尝试。");
      }
    }
  }

  return false;
};

const handleCancel = () => {
  visible.value = false;
};
const registerForm = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
  userName: "",
});

/**
 * 表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
});

/**
 * 登录
 */
const handleSubmit = async () => {
  console.log(form);
  try {
    const res = await UserControllerService.userLoginUsingPost(form);

    // 登陆成功 跳转主页
    if (res.code === 0) {
      await store.dispatch("user/getLoginUser");
      const next = route.query.next || "/";
      await router.push(next);
    } else {
      Message.error(res.message);
    }
  } catch (error) {
    // 检查是否是网络错误
    if (error.isAxiosError && !error.response) {
      Message.error("网络连接错误！");
    } else {
      Message.error("发生了意料之外的错误。请稍后再尝试。");
    }
  }
};
</script>

<style lang="less" scoped>
.login-form {
  margin-top: 20px;

  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
