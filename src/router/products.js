/**
 * 用户产品系统
 * 1. 添加产品
 * 2. 获取产品列表
 * 3. 获取产品详情
 * 4. 更新产品
 * 5. 删除产品
 * 6.
 */
import Router from "koa-router";
import { userController } from "../controller";

export default new Router({
  prefix: "/products"
})
  /**
   * 添加产品
   */
  .post("/", userController.addUser)

  /**
   * 获取产品
   */
  .get("/:id", userController.addUser);
