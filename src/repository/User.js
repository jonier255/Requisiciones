import User from '../models/User.js'; // asegúrate que este archivo también esté en ES Modules

export const findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (data) => {
  return await User.create(data);
};
