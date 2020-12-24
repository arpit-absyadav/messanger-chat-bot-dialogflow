
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const webHookController = require('./controllers/webhook.controller');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', webHookController.verify);
app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(
    `Server running on : http://${config.APP_HOST}:${config.APP_PORT}`
  );
  console.log(`Time : ${new Date()}`);
});





