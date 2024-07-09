import { Sequelize } from 'sequelize-typescript';
import { validateEnv } from './config/env.config';
import { User } from './models/user.model';

const DB_NAME = validateEnv()?.DB_NAME;
const USER_NAME = validateEnv()?.USER_NAME;
const DB_PASSWORD = validateEnv()?.DB_PASSWORD;

export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: 'postgres',
  username: USER_NAME,
  password: DB_PASSWORD,
  storage: ':memory:',
  models: [User],
  repositoryMode: true,
});
