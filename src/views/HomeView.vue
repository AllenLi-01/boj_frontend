<template>
  <div class="home">
    <!--    <MdEditor :value="value" :handle-change="Onchange" />-->
    <!--    <code-editor :value="value" :handle-change="Onchange"></code-editor>-->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src
const value = ref();
onMounted(() => {
  value.value = "hello";
});
const Onchange = (v: string) => {
  // console.log("change");
  value.value = v;
  console.log("changing:" + value.value);
};
</script>
