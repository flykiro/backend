/**
 * 第三方认证系统
 */

import { Schema } from "mongoose";

const schema = new Schema(
  {
    userId: {
      type: String
    },
    openAuthType: {
      type: String
    },
    openId: {
      type: String
    },
    accessToken: {
      type: String
    },
    ifVerified: {
      type: Number
    },
    createAt: {
      type: Date,
      default: Date.now
    },
    updateAt: {
      type: Date
    }
  },
  {
    collection: "third_auths"
  }
);

export default schema;
