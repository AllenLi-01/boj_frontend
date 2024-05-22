<template>
  <div class="container">
    <div class="content">
      <div class="content-inner">
        <UserLoginView></UserLoginView>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginBanner from "@/views/user/LoginBanner.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import Footer from "@/components/footer/index.vue";
</script>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: black;
    font-size: 26px;
  }
}
</style>
