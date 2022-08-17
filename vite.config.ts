/*
* @Author: victoriaXY 617989449@qq.com
* @Date: 2022-08-16 19:46:19
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 08:35:57
* @FilePath: \epidvue\marina_vue\vite-project\vite.config.ts
* @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
});
