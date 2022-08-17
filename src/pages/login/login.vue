<!--
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 10:16:34
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 15:28:59
 * @FilePath: \epidvue\marina_vue\vite-project\src\pages\login\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>{{ mainsStore.name }}</div>
    <div>{{ mainsStore.nameLength }}</div>
    <n-button @click="updateName">修改名称</n-button>
  </div>
</template>

<script lang="ts" setup name="Login">
import { useMainsStore } from "@/store/main";
import { NButton } from "naive-ui";
import { onMounted } from "vue";
import mockHttp from "@/util/http/http";

const mainsStore = useMainsStore();

// 组件中使用全局配置环境变量 .env.development
// console.log(import.meta.env.VITE_APP_WEB_URL)
const test = () => {
  console.log("test");
};
const updateName = () => {
  mainsStore.$patch({
    name: "名称被修改了， nameLength也会发生改变",
  });
};

onMounted(() => {
  mockHttp.get("/getUsers").then((res) => {
    console.log(res);
  })
});
</script>

<style lang="scss"></style>
