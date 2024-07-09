import { Request, Response } from 'express';
import { UserAttributes } from 'src/types/user';
import { userService } from '../service/user.service';

interface CustomRequest<T> extends Request {
  body: T;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  const users = await userService.getAllUsers();
  res.status(200).send(users);
};

const create = async (
  req: CustomRequest<Omit<UserAttributes, 'id'>>,
  res: Response,
): Promise<void> => {
  const data = req.body;

  const newUser = await userService.createNewUser(data);
  res.status(200).send(newUser);
};

export const userController = {
  create,
  getAll,
};
