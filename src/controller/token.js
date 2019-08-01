import Joi from "@hapi/joi";
import { tokenService } from "../service";

const createTokenSchema = Joi.object().keys({
  account: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,18}$/)
    .required()
});

export const createToken = async (ctx, next) => {
  const { body, query } = ctx.request;

  const result = await Joi.validate(body, createTokenSchema);
  ctx.body = await tokenService.createToken(result);
};
