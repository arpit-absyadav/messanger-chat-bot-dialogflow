const axios = require('axios');
const config = require('../config');
const FB_URL = 'https://graph.facebook.com/v2.6/me/messages?access_token=';
const headers = {
  'Content-Type': 'application/json',
};

exports.sendResponse = ({ userId, text }) => {

  const body = JSON.stringify({
    messaging_type: 'RESPONSE',
    recipient: {
      id: userId,
    },
    message: {
      text,
    },
  });

  return axios.default.post(`FB_URL${config.FACEBOOK_ACCESS_TOKEN}`, body, { headers });
};
