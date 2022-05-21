var express = require('express');
var app= express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path ='../dist/ilyes-front';


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('/',express.static(path.join(__dirname,app_path)))
  .get('*',(req,res)=> res.sendFile(path.join(__dirname,app_path+'/index.html')))
  .listen(PORT,()=>console.log(`listen on ${PORT}` ))
