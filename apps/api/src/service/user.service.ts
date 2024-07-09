import { userRepo } from '../repositories/user.repository';
import { UserAttributes } from '../types/user';

const getAllUsers = async (): Promise<UserAttributes[]> => {
  const users = await userRepo.getUsers();

  return users;
};

const createNewUser = async (
  data: Omit<UserAttributes, 'id'>,
): Promise<UserAttributes> => {
  const user = await userRepo.createUser(data);

  return user;
};

export const userService = {
  getAllUsers,
  createNewUser,
};
