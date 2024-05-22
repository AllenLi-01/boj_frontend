<template>
  <a-row align="center" id="globalHeader" class="grid-demo">
    <a-col flex="auto">
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
            <img
              class="logo"
              src="@/static/image/logo.png"
              @click="logoClick"
            />
          </div>
        </a-menu-item>
        <!--   根据路由数组动态生成菜单项     -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <!--      <div>-->
      <!--        {{ store.state.user?.loginUser?.userName ?? "未登录" }}-->
      <!--      </div>-->
      <a-dropdown trigger="click">
        <a-avatar :size="32" :style="{ marginRight: '8px', cursor: 'pointer' }">
          <img alt="avatar" :src="avatar" />
        </a-avatar>
        <template #content>
          <a-doption>
            <a-space @click="switchRoles">
              <icon-tag />
              <span> 个人中心 </span>
            </a-space>
          </a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-demo {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}
</style>
