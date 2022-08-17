/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-16 19:46:19
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 11:10:13
 * @FilePath: \epidvue\marina_vue\vite-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import router from '@/router/router';
import { createPinia } from "pinia"

import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
