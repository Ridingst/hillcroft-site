var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'eu-west-1'
});
const axios = require('axios');

const slackURL = process.env.SLACK_URL;


async function sendEmail(email, subject, message){
  console.debug("Sending Email")
  // Create sendEmail params 
  const emailParams =  {
    Destination: { /* required */
      ToAddresses: [
        'info@hillcroftlacrosse.com',
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Text: {
        Charset: "UTF-8",
        Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
      },
    Source: 'info@hillcroftlacrosse.com', /* required */
    ReplyToAddresses: [
      email,
      /* more items */
    ],
  };

  return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(emailParams).promise();
}

async function sendSlackMessage(email, subject, message){
  let msgTemplate = {
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "Website Contact Form",
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*" + email + "*"
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Subject:*\n" + subject
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Message:*\n" + message
        }
      }
    ]
  }

  return axios.post(slackURL,msgTemplate)
}

module.exports = (req, res) => {

  Promise.all([
    sendEmail(req.body.email, req.body.subject, req.body.message),
    sendSlackMessage(req.body.email, req.body.subject, req.body.message)
  ])
  .then(values => console.debug(values))
  .then(res.send('Ok'))
  .catch(err => {
    console.error(err)
    res.status(500)
    res.send("Error sending notifications")
  })
}