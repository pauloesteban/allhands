var satelize = require('satelize');
 
// Example retrieve IP from request
// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
 
// then satelize call
 
satelize.satelize({ip:'46.19.37.108'}, function(err, payload) {
  // if used with expressjs
  // res.send(payload);
  // res.json...
  console.log(payload)
});