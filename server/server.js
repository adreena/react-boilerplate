require('babel-register');
const express= require('express');
const fs = require('fs');
const app = express();
const data_dir = './data/';
const cors = require('cors');
const uid= require('uid');

app.use(cors());
app.use('/', express.static('public'));

app.post('/refresh', function(req,res){
	res.send(uid());
});

app.listen(8080, function(){
	console.log('Running on port: 8080');
});
