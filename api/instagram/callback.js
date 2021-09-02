module.exports = (req, res) => {
  if(req.query.code){
    // Let's exchange the auth code for a token
    console.debug(req.query.code)
    // Then exchange for long-lasting token

    // Then store to S3
    res.status(200)
    res.send('Ok')
  } else {
    res.status(500)
    res.send('Error')
  }
}