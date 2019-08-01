import { configure, levels } from "log4js";
import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const JWT_SECRET = env.JWT_SECRET;
export const WECHAT_MINI_PROGRAM_APP_ID = env.WECHAT_MINI_PROGRAM_APP_ID;
export const WECHAT_MINI_PROGRAM_APP_SECRET =
  env.WECHAT_MINI_PROGRAM_APP_SECRET;

configure({
  appenders: {
    cheese: {
      type: "dateFile",
      filename: "logs/cheese.log",
      pattern: ".yyyy-MM-dd-hh",
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ["cheese"],
      level: levels.ALL
    }
  }
});

// export wechat
