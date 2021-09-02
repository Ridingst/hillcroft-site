const axios = require('axios');
const FormData = require('form-data');

import { exchangeShortForLongToken, storeInstaToken } from './tokenManagement.js'

module.exports = (req, res) => {
  // Check we have an auth code
  if(req.query.code){
    // Stripe the #_ from the code
    const code = req.query.code.split('#_')[0]
    console.log('Instagram Access Code: ' + code)
    
    // Then exchange for short-lived token
    const params = new FormData();
    params.append('client_id', process.env.INSTAGRAM_CLIENT_ID);
    params.append('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', process.env.VERCEL_ENV_URL + '/api/instagram/callback');
    params.append('code', code);

    
    axios.post('https://api.instagram.com/oauth/access_token', params, {headers: params.getHeaders() })
    .then(function (response) {
      console.log(response)
      /* Expected response 
        {
          "access_token": "IGQVJ...",
          "user_id": 17841405793187218
        }
      */

      // exchange for long lived token      
      let accessToken = response.data
      exchangeShortForLongToken(accessToken)
      .then(storeInstaToken)
      .then(() => {
        res.status(200)
        res.send(accessToken)
      })     
    })
    .catch(function(error) {
      console.error(error.data);
      res.status(500)
      res.send('Error')
    })
  } else {
    res.status(500)
    res.send('Error')
  }
}