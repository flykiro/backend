import jwt from "jsonwebtoken";

export const createToken = async params => {
  return {
    token: jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        aId: "accountId" + params.account,
        uId: "userId"
      },
      "secret"
    )
  };
};
