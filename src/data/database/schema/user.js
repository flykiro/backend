/**
 * 用户信息
 */
import { Schema } from "mongoose";

const schema = new Schema(
  {
    password: {
      type: String
    },
    phone: {
      type: String
    },
    name: {
      type: String
    },
    age: {
      type: Number
    },
    gender: {
      type: Number
    },
    status: {
      type: String
    },
    ifDeleted: {
      type: Boolean,
      default: false
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
    collection: "users"
  }
);
export default schema;
