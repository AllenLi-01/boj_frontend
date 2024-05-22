<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <div class="title-bar" style="cursor: pointer">
          <img class="logo" src="../assets/boj.png" @click="logoClick" />
        </div>
      </a-space>
    </div>
    <div class="center-side">
      <a-menu
        mode="horizontal"
        @menu-item-click="doManuClick"
        :selected-keys="selectedKeys"
      >
        <a-menu-item
          key="0"
          disabled
          :style="{ padding: 0, marginRight: '38px' }"
        >
          <div class="title-bar" style="cursor: pointer">
            <img class="logo" src="../assets/boj.png" @click="logoClick" />
          </div>
        </a-menu-item>
        <!--   根据路由数组动态生成菜单项     -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </div>
    <ul class="right-side">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();

// 默认主页
const selectedKeys = ref(["/"]);
const store = useStore();
// 路由数组
const visibleRoutes = computed(() => {
  const loginUser = store.state.user.loginUser;
  return routes.filter((item, index) => {
    if (item?.meta?.hide === true) {
      return false;
    }
    // 根据权限过滤菜单
    return checkAccess(loginUser, item?.meta?.access as string);
  });
});

//路由跳转后，更新选中的菜单项
router.afterEach((to) => {
  selectedKeys.value = [to.path];
});

const logoClick = () => {
  router.push({
    path: "/",
  });
};
const doManuClick = (key: string) => {
  router.push({
    path: key,
  });
};

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "testUser",
//     role: ACCESS_ENUM.ADMIN,
//   });
// }, 3000);
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.center-side {
  flex: 1;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }

  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }

  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }

  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>
