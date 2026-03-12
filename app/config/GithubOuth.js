const oauth = {
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
  redirect_uri: "http://localhost:3000/auth/github/callback"
};

module.exports = oauth;