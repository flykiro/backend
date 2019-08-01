import Joi from "@hapi/joi";
import log4js from "log4js";
import { userService } from "../service";

const logger = log4js.getLogger();

const addUserSchema = Joi.object().keys({
  phone: Joi.string()
    .length(11)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,18}$/)
    .required(),
  name: Joi.string()
    .min(2)
    .max(18)
    .required()
});

export const addUser = async ctx => {
  const { body } = ctx.request;
  const result = await Joi.validate(body, addUserSchema);
  ctx.body = await userService.addUser(result);
};

const getUserSchema = Joi.object().keys({
  id: Joi.string()
    .alphanum()
    .min(10)
    .max(50)
    .required()
});

export const getUser = async ctx => {
  const result = await Joi.validate(ctx.params, getUserSchema);
  ctx.body = await userService.getUser(result);
};
