const axios = require('axios');
import { TokenFileWebIdentityCredentials } from 'aws-sdk';
import { retrieveValidToken } from './tokenManagement.js'

module.exports = (req, res) => {
  retrieveValidToken()
  .then(token => {
    return axios.get('https://graph.instagram.com/me?fields=id,username&'+token.access_token)
  })
  .then(response => res.send(response.data))
  .catch(err => {
    console.error(err)
    res.status(500)
    res.send("Error")
  })
}