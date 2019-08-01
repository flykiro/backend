import Koa from "koa";
import koaJWT from "koa-jwt";
import koaBody from "koa-body";
import { getLogger } from "log4js";

import router from "./router";
import { JWT_SECRET } from "./config";

const logger = getLogger();

const server = new Koa();

server.use(async (ctx, next) => {
  console.log(ctx.request.url);
  try {
    await next();
  } catch (err) {
    if (typeof err === "number") {
      ctx.status = err;
    } else {
      ctx.status = err.status || 500;
      ctx.body = err;
      logger.error(err.message, err.stack);
    }
  }
});

server.use(
  koaJWT({
    secret: JWT_SECRET
  }).unless({
    path: [/\/tokens/, "/users"]
  })
);

server.use(koaBody());

server.use(router());
server.use(async (ctx, next) => {
  await next();
});

server.listen(8080);
