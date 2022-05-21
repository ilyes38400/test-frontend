var express = require('express');
var app= express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path ='../dist/ilyes-front';


app.use('/',express.static(path.join(__dirname,app_path)))
  .get('*',(req,res)=> res.sendFile(path.join(__dirname,app_path+'/index.html')))
  .listen(PORT,()=>console.log(`listen on ${PORT}` ))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
