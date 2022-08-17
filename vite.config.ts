import { plugins } from './../../epid/src/components/Tinymce/src/tinymce';
/*
* @Author: victoriaXY 617989449@qq.com
* @Date: 2022-08-16 19:46:19
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 11:50:48
* @FilePath: \epidvue\marina_vue\vite-project\vite.config.ts
* @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  // 运行IP、端口、代理等的配置
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 公共全局样式，全局注入
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },
});
