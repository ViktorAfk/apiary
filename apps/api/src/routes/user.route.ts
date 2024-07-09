import Express from 'express';
import { userController } from '../controller/user.controller';

const UserRoute = Express.Router();

UserRoute.get('/users', userController.getAll);
UserRoute.post('/users', userController.create);

export default UserRoute;
