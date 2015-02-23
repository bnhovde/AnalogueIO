// Arduino requirements
var five = require('johnny-five'),
    board,
    myPotentiometer,
    threshold = 5,
    val1 = 0;

// Server requirements
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Send current time to all connected clients
function sendVal(val) {
    console.log('sending val to client: ' + val);
    io.sockets.emit('update', { value: val });
}

// Server setup

app.get('/', function(req, res){
    res.sendfile('client/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


// Arduino setup and listeners

board = new five.Board();
board.on('ready', function() {
    myPotentiometer = new five.Sensor({
        pin: 'A0',
        freq: 50
    });

    myPotentiometer.on('read', function() {
        var newVal = this.raw;

        // Check if value has changed (and above threshold)
        if ( newVal > val1 + threshold || newVal < val1 - threshold ) {
            val1 = newVal;

            // Send value to client
            sendVal(val1);
        }
    });
});

