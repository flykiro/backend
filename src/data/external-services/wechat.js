import axios from "axios";
import {
  WECHAT_MINI_PROGRAM_APP_ID,
  WECHAT_MINI_PROGRAM_APP_SECRET
} from "../../config";
import * as errors from "../../errors";

const MINI_PROGRAM_CONFIG = {
  APP_ID: WECHAT_MINI_PROGRAM_APP_ID,
  SECRET: WECHAT_MINI_PROGRAM_APP_SECRET
};

export const init = async () => {};

export const getAccessToken = async () => {
  console.log("start ----");
  const { status, data } = await axios.get(
    "https://api.weixin.qq.com/cgi-bin/token",
    {
      params: {
        grant_type: "client_credential",
        appid: MINI_PROGRAM_CONFIG.APP_ID,
        secret: MINI_PROGRAM_CONFIG.SECRET
      }
    }
  );
  console.log(new errors.ExternalServicesError("hello"));
  if (status !== 200) {
    throw new errors.ExternalServicesError("hello");
  } else {
    console.log(data);
  }
};

setTimeout(() => {
  getAccessToken();
}, 1e3);
