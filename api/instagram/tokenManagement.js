const AWS = require('aws-sdk');
const axios = require('axios');

function getAWSClient(){
    //configuring the AWS environment
    AWS.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY
    });

    return new AWS.S3();
}

export async function exchangeShortForLongToken(shortToken){
    return new Promise((resolve, reject) => {
        baseUrl = 'https://graph.instagram.com/access_token'

        axios.get(baseUrl + '?grant_type=ig_exchange_token&client_secret=' + process.env.INSTAGRAM_CLIENT_SECRET + '&access_token=' + shortToken.access_token)
        .then(resolve)
        .catch(reject)
    })
}

export async function storeInstaToken(token){
    // The token is valid for 60 days but we can refresh anytime after 24 hours.
    // We will refresh every 48 hours try and avoid tokens expiring and have to manually renew.
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

export async function retrieveValidToken(){
    // returns a valid tokem
    return new Promise((resolve, reject) => {
        retrieveLatestTokenFromS3()
        .then(token => validateToken(token))
        .then(([token, isActive]) => {
            if(isActive){ 
                console.debug("Instagfram token still active, returning.")
                resolve(token)
            } else {
                console.debug("Refreshing Instagram token")
                console.debug(token)
                refreshToken(token)
                .then(token => {
                    return token.response.body 
                })
                .then(token => storeToken(token))
                .then(token => resolve(token))
                .catch(err => reject(err))
            }
        })
        .catch(err => {
            reject(err)
        })
    })
}

async function retrieveLatestTokenFromS3(){
    return new Promise((resolve, reject)=>{
        findLatestToken()
        .then(token => {
            const s3 = getAWSClient();
            return s3.getObject({
                Bucket: process.env.S3_BUCKET,
                Key: token
            }).promise()
        })
        .then((data) => {
            let parsedBody = JSON.parse(data.Body.toString('utf-8'))
            resolve(parsedBody)
        })
        .catch(err=>{reject(err)})
    })
}

function findLatestToken(){
    return new Promise((resolve, reject) => {

        // Inspired from here: https://medium.com/developer-rants/running-promises-in-a-loop-sequentially-one-by-one-bd803181b283
        const s3 = getAWSClient();

        function getList(marker){
            return s3.listObjects({
                Bucket: process.env.S3_BUCKET,
                Marker: marker,
                Delimiter: '/',
                Prefix: 'instagram_',
            }).promise()
        }

        function doNextMarker(marker){
            getList(marker)
            .then((data) => {
                marker = data.Marker;
                if(data.IsTruncated){
                    doNextMarker(marker)
                } else {
                    resolve(data.Contents[data.Contents.length-1].Key)
                }
            })
            .catch(err => reject(err))
        }
        doNextMarker('')
    })
}

async function validateToken(token){
    return new Promise((resolve) => {
        resolve([token, token.expiresAt > Date.now()] )
    })
}

function refreshToken(token){
    // First we get the last token we received
    console.debug('refresh instagram token')

    return new Promise((resolve, reject) => {
        axios.get('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + token.access_token)


        hubspotClient.oauth.defaultApi.createToken(
            'refresh_token', undefined, undefined,
            process.env.HUBSPOT_CLIENT_ID,
            process.env.HUBSPOT_CLIENT_SECRET,
            token.refresh_token
        )
        .then(resolve)
        .catch(err=>{
            console.error('Error refreshing hubspot token')
            console.error(err);
            reject(err)})
    })
}