import { readFileSync } from 'fs';
import path from 'path';
import { number } from 'yup';
var csv = require('csvtojson');

export default function handler(req, res) {
  const file = path.join(process.cwd(), 'files', 'data.csv');
  csv({id:"number", lat: "number", lng: "number"})
  .fromFile(file)
  .then(function(jsonArrayObj){ 
    res.send({
        data: jsonArrayObj
     }); 
   })
}