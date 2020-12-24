
const config = require('../config');
exports.verify = (req, res) => {

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  console.log(req.query);

  if (mode && token === config.VERIFY_TOKEN) {
    console.log('Verified', config.VERIFY_TOKEN);
    res.status(200).send(challenge);
  } else {
    console.log('else');
    res.sendStatus(403);
  }
};
