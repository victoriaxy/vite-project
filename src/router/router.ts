/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 10:15:15
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 11:56:02
 * @FilePath: \epidvue\marina_vue\vite-project\src\router\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router';

/**
  meta: {
    title:string; 页面标题，通常必选。
    icon?:string; 图标，一般配合菜单使用。
    auth?:boolean; 是否需要登录权限。
    ignoreAuth?:boolean; 是否忽略权限。
    roles?:RoleEnum[]; 可以访问的角色
    keepAlive?:boolean; 是否开启页面缓存
    hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
    order?:number; 菜单排序。
    frameUrl?:string; 嵌套外链。
  }
 */
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;