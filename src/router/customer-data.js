/**
 * 客户资料
 * 1. 添加客户资料
 * 2. 获取客户资料列表
 * 3. 获取客户资料详情
 * 4. 获取客户资料特殊信息
 * 5. 更新客户资料信息
 * 7. 删除客户资料信息
 */

import Router from "koa-router";
import { userController } from "../controller";

export default new Router({
  prefix: "/customer-data"
})
  /**
   * 添加客户资料
   */
  .post("/", userController.addUser)
  /**
   * 获取客户资料
   */
  .get("/:id", userController.getUser)
  /**
   * 更新客户资料
   */
  .patch("/:id", () => {});
