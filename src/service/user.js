import { database } from "../data";

export const getUser = async params => {
  return {
    userInfo: {
      32423: 32
    }
  };
};

export const addUser = async params => {
  return database.user.addUser(params);
};
