const AWS = require('aws-sdk');

function getAWSClient(){
    //configuring the AWS environment
    AWS.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY
    });

    return new AWS.S3();
}

export async function storeInstaToken(token){
    // There's no expiry date on this so we need to add one. 
    // The token is valid for 60 days but we can refresh anytime after 24 hours.
    // We will refresh every 48 hours to ensure we don't expire and have to renew.
    let expiresAt = Date.now() + (48 * 60 * 60 * 1000);
    
    let newToken = token;
    newToken.expiresAt = expiresAt;
    
    
    console.debug('newToken');
    console.debug(newToken)
    const s3 = getAWSClient()

    return s3.upload({
        Bucket: process.env.S3_BUCKET,
        Body: JSON.stringify(newToken),
        Key: 'instagram_' + Date.now()
    }).promise();
}



