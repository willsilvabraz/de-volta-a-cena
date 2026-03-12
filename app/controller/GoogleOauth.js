const { google } = require('googleapis');
const oauth2Client = require('../config/GoogleOauth');

exports.googleAuth = (req, res) => {

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
  });

  res.redirect(url);
};


exports.googleCallback = async (req, res) => {

  try {

    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2',
    });

    const user = await oauth2.userinfo.get();

    req.session.user = user.data;

    res.json(user.data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};