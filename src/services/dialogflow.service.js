const dialogflow = require('dialogflow');
const config = require('../config');

const projectId = config.PROJECT_ID;
const sessionId = config.SESSION_ID;
const languageCode = 'en-US';


const config = {
  credentials: {
    private_key: config.DIALOG_FLOW_PRIVATE_KEY,
    client_email: config.DIALOG_FLOW_CLIENT_EMAIL,
  },
};
const sessionClient = new dialogflow.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

exports.dialogflowProcess = (event) => {
  const intent = {
    session: sessionPath,
    queryInput: {
      text: {
        languageCode,
        text: event.message.text,
      },
    },
  };
  return sessionClient.detectIntent(intent);
};
