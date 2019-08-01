/**
 * Authentication system
 * 身份验证系统
 * 1. 用户登录
 * 2. 用户登出
 * 3. 用户登录信息获取
 * 4. 用户Token下发系统
 * 5. 用户第三方登录系统
 */

import Router from "koa-router";
import { tokenController } from "../controller";
const router = new Router();

router
  .prefix("/authorizations")

  // create token like login
  .post("/", tokenController.createToken)

  .patch("/third", res => {
    console.log(res);
  });

// delete a token like logout
// .delete("/", (ctx, next) => {})
// get token information like session information
// .get("/", (ctx, next) => {
//   // ctx.router available
//   ctx.body = "get";
// });

export default router;
