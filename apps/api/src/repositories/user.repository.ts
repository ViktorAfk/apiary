import { sequelize } from '../db';
import { User } from '../models/user.model';
import { UserAttributes } from '../types/user';

const userRepository = sequelize.getRepository(User);

const createUser = async (
  user: Omit<UserAttributes, 'id'>,
): Promise<UserAttributes> => {
  const newUser = await userRepository.create(user);

  return newUser;
};

const getUsers = async (): Promise<UserAttributes[]> => {
  const allUsers = await userRepository.findAll();

  return allUsers;
};

export const userRepo = {
  createUser,
  getUsers,
};
