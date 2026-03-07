const router = require('express').Router();
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(

  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
 
  "http://localhost:3000/auth/google/callback"
);

router.get('/google', (req, res) => {
  console.log(process.env.CLIENT_ID)
    console.log(process.env.CLIENT_SECRET)

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
  });
  res.redirect(url);
});


router.get('/google/callback', async (req, res) => {

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
});

module.exports = router;