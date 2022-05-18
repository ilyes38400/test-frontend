var express = require('express');
var app= express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path ='../dist/ilyes-front';

app.use('/',express.static(path.join(__dirname,app_path))).listen(PORT,()=>console.log(`listen on ${PORT}`))
