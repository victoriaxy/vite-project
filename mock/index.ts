/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 13:42:31
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 13:46:14
 * @FilePath: \epidvue\marina_vue\vite-project\mock\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  {
      url: "/api/getUsers",
      method: "get",
      response: () => {
          return {
              code: 0,
              message: "ok",
              data: {
                  'rows|10': [{
                      id: '@guid',
                      name: '@cname',
                      'age|20-30': 23,
                      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
                    }]
              },
          }
      }
  }
];