/**
 * 用户系统
 * 1. 创建用户
 * 2. 获取用户信息
 * 3. 更新用户信息
 * 4. 获取用户列表
 * 5. 检查用户是否存在
 * 6. 注销用户
 */
import Router from "koa-router";
import { userController } from "../controller";

export default new Router({
  prefix: "/users"
})
  /**
   * 添加用户
   */
  .post("/", userController.addUser)
  /**
   * 获取用户信息
   */
  .get("/:id", userController.getUser)
  /**
   * 更新用户信息
   */
  .patch("/:id", () => {});
