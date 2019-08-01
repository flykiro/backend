/**
 * @description 客户资料模型
 */
import mongoose from "mongoose";
import * as schema from "../schema";

const CustomerData = mongoose.model("CustomerData", schema.customerData);

export const addCustomerData = async params => {
  const result = await CustomerData.create(params);
  return Object.assign(result, {
    __v: undefined
  });
};

export const updateCustomerData = async params => {
  await CustomerData.updateOne(
    {
      id: params.id
    },
    {
      name: "hello"
    }
  );
};
