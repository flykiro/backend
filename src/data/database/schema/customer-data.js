import { Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String
    },
    phone: {
      type: String
    },
    age: {
      type: Number
    },
    gender: {
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
    collection: "customer_data"
  }
);
export default schema;
