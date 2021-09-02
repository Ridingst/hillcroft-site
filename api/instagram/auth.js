module.exports = (req, res) => {
   const client_id = '1535986596754956'
   const redirect_uri = 'https://hillcroft-site.vercel.com/api/instagram/callback'

  const authUrl = 'https://api.instagram.com/oauth/authorize' + 
  '?client_id=' + client_id + 
  '&redirect_uri=' + redirect_uri + 
  '&scope=user_profile,user_media&response_type=code'

  // Redirect the user
  return res.send(`<a href=` + authUrl + `>Link Here</a>`);

}
