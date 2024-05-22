<template>
  <a-alert style="width: 60%; margin-left: 280px"
    >为保证隐私安全，请不要上传任何个人信息
  </a-alert>
  <div class="upload-container">
    <a-upload
      style="width: 60%; height: 300px"
      draggable
      action="/"
      :auto-upload="false"
      :limit="1"
      @change="onChange"
      :show-upload-button="true"
    />
    <br />
  </div>
  <div style="margin-top: -130px; margin-left: 360px">
    <span>
      <span style="color: #0006">
        <i class="el-icon-bell"></i>
        使用帮助：请先在上方上传文件，随后点击下方按钮进行漏洞分析。目前仅支持分析.so文件。文件大小不能超过30MB。
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
// const onChange = () => {};
</script>

<style scoped>
.upload-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  /* align-items: center; */ /* 如果需要垂直居中，取消此行注释 */
  margin-top: 100px;
  height: 100%; /* 根据需要调整，如果需要垂直居中可能会用到 */
}
</style>
