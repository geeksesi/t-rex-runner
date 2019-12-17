const express = require('express')
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const { my_io } = require('./leaderboard/server');
const mongoos = require('mongoose');


mongoos.connect('mongodb://127.0.0.1:27017/majale', { useNewUrlParser: true, useCreateIndex: true });

app.use('/', express.static('./'))

my_io(http);

http.listen(80, function(){
    console.log('listening on *:80');
});
