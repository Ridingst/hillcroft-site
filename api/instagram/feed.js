const axios = require('axios');
import { retrieveValidToken } from './tokenManagement.js'

module.exports = (req, res) => {
  retrieveValidToken()
  .then(token => {
    console.log('querying Instagram API')
    return axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token='+token.access_token)
  })
  .then(response => {
    // The response comes in {data: 0: post0Info, 1: post1Info...} and we need an array
    // We also filter to 8 items as that's all we want to display
    return [...Array(8).keys()].map(p=> response.data.data[p])
  })
  .then(posts => res.send(posts))
  .catch(err => {
    console.error(err.response)
    res.status(500)
    res.send("Error")
  })
}