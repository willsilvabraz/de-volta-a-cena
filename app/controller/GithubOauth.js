const axios = require('axios');
const github = require('../config/GithubOuth.js');

exports.github = (req, res) => {

  const url =
  `https://github.com/login/oauth/authorize?client_id=${github.client_id}`;

  res.redirect(url);

};

exports.githubCallback = async (req, res) => {

  const code = req.query.code;

  const token = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: github.client_id,
      client_secret: github.client_secret,
      code
    },
    {
      headers: { Accept: "application/json" }
    }
  );

  const access_token = token.data.access_token;

  const user = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  res.json(user.data);

};