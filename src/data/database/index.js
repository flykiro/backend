import mongoose from "mongoose";
import * as model from "./model";

mongoose.connection.addListener("open", event => {
  console.log("mongo open");
});

mongoose.connection.addListener("close", event => {
  console.log("mongo close");
});

mongoose.connection.addListener("error", event => {
  console.log("mongo error");
});

const start = async () => {
  mongoose.set("useNewUrlParser", true);
  mongoose.connect("mongodb://127.0.0.1:27017/finance");
};

export default model;
