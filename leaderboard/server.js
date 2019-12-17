const {add_score} = require('./DB.js');

module.exports.my_io = function (server) {

    const io = require('socket.io')(server, { pingInterval: 3000 });

    io.on('connection', socket => {

        socket.on("start", () =>{
            socket.gs_time = Math.floor(Date.now() / 1000);
        });

        socket.on('stop', (username, phone, score, cb)=>{
           add_score(score, username, phone); 
            console.log(username + " ::: " + score);
            cb("OK");
        });
    });
    
}
