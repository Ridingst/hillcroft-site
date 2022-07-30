const request=require('request')
const axios = require('axios');
var csv = require('csvtojson');

export default function handler(req, res) {
  csv({id:"number", lat: "number", lng: "number"})
  .fromStream(request.get('https://hillcroft-lacrosse.s3.eu-west-1.amazonaws.com/data.csv'))
  .then(function(jsonArrayObj){ 
    res.send({
        data: jsonArrayObj
    })
  })
}
