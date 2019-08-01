import mongoose from "mongoose";
import * as schema from "../schema";
import assert from "assert";

const User = mongoose.model("User", schema.user);

export const addUser = async params => {
  const user = await User.findOne({
    phone: params.phone
  });
  const err = new Error("手机号已注册");
  err.status = 409;
  assert(!user, err);
  const result = await User.create(params);
  return Object.assign(result, {
    password: undefined,
    __v: undefined
  });
};

export const updateUser = async params => {
  await User.updateOne(
    {
      id: params.id
    },
    {
      name: "hello"
    }
  );
};
