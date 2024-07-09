import express from 'express';
import { sequelize } from './db';
import UserRoute from './routes/user.route';
const PORT = 3001;
const app = express();

const start = async () => {
  app.use(express.json());
  app.use('/', UserRoute);
  await sequelize.sync();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Port is listening on ${PORT}`);
  });

  return app;
};

void start();
