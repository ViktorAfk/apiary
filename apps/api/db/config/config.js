module.exports = {
  development: {
    dialect: 'postgres',
    database: 'postgres',
    username: 'postgres',
    password: '12345',
    host: 'localhost',
  },
  test: {
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
  }
}