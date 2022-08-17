/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-16 19:46:19
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 14:45:41
 * @FilePath: \epidvue\marina_vue\vite-project\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path";
import viteCompression from "vite-plugin-compression";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteMockServe({
      /**
     *{
        supportTs?: boolean; --是否读取ts文件模块，设置为true时不能读取js文件
        logger?:boolean; --是否在控制台显示请求日志
        mockPath?: string;  --设置模拟数据的存储文件夹，如果不是index.js需要写明完整路径
        ignore?: RegExp | ((fileName: string) => boolean);--读取文件时忽略指定格式的文件
        watchFiles?: boolean;--是否监视mockPath文件夹内文件的修改
        localEnabled?: boolean;--设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        ignoreFiles?: string[]; --读取文件时忽略的文件
        configPath?: string;--设置模拟读取的数据条目。 当文件存在并且位于项目根目录中时，将首先读取并使用该文件。 配置文件返回一个数组
        prodEnabled?: boolean;--设置打包是否启用 mock 功能
        injectFile?: string;--如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}。这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包。如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.js
        injectCode?: string;--injectCode代码注入的文件,默认为项目根目录下src/main.{ts,js}
      }
     */
      supportTs: true,
      logger: false,
      mockPath: "./mock/",
      prodEnabled: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // 运行IP、端口、代理等的配置
  server: {
    host: "127.0.0.1",
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  build: {
    target: ["es2015", "es2020", "esnext"],
    cssTarget: ["chrome80", "chrome90", "chrome92"],
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 公共全局样式，全局注入
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
});
