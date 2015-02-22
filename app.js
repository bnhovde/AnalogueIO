var five = require("johnny-five"),
    board,
    myPotentiometer;

board = new five.Board();
board.on("ready", function() {
    myPotentiometer = new five.Sensor({
        pin: "A0",
        freq: 250
    });

    myPotentiometer.on("read", function() {
        var rawValue = this.raw;
        console.log(rawValue);
    });
});