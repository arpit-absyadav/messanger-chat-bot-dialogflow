const dotenv = require('dotenv');

dotenv.config();

const config = {
  APP_HOST: process.env.APP_HOST || 'localhost',
  APP_PORT: process.env.APP_PORT || '3000',
  MONGO_HOST: process.env.MONGO_HOST || '0.0.0.0',
  MONGO_PORT: process.env.MONGO_PORT || 3306,
  MONGO_USERNAME: process.env.MONGO_USERNAME || 'root',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'root',
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'chat_bot',
  DIALOG_FLOW_PRIVATE_KEY: process.env.DIALOG_FLOW_PRIVATE_KEY,
  DIALOG_FLOW_CLIENT_EMAIL: process.env.DIALOG_FLOW_CLIENT_EMAIL,
  FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN,
  PROJECT_ID: process.PROJECT_ID,
  SESSION_ID: process.SESSION_ID,
  VERIFY_TOKEN: process.env.VERIFY_TOKEN || 'abs-token',
};

module.exports = config;