/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 11:03:54
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 11:04:35
 * @FilePath: \epidvue\marina_vue\vite-project\src\api\login\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ILoginParams {
  userName: string
  passWord: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams)=> Promise<any>
}