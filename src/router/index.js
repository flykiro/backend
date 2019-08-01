/**
 * Router layout
 * 1. 文件系统推荐使用第三方对象存储系统
 * 2. 会话管理建议使用Json Web Token
 */
import combineRouters from "koa-combine-routers";

import authorizations from "./authorizations";
import users from "./users";
import customerData from "./customer-data";
import products from "./products";

export default combineRouters(authorizations, users, customerData, products);
