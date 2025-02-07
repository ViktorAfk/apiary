import { User } from '@/types/user';
import { Api } from './repository';
const BASE_URL = process.env.API_URL;

const { getAll, getOne, remove, update, post } = Api;

export const getAllUsers = async () => {
  const users = await getAll(`${BASE_URL}/users`);

  return users;
};

export const getSignInUser = async (
  params: Pick<User, 'email' | 'password'>,
) => {
  const signInUser = await post(`${BASE_URL}/sign-in`, params);

  return signInUser;
};
