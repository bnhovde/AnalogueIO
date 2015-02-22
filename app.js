var five = require("johnny-five"),
    board,
    myPotentiometer,
    threshold = 5,
    val1 = 0;

board = new five.Board();
board.on("ready", function() {
    myPotentiometer = new five.Sensor({
        pin: "A0",
        freq: 250
    });

    myPotentiometer.on("read", function() {
        var newVal = this.raw;

        // Check if value has changed (and above threshold)
        if ( newVal > val1 + threshold || newVal < val1 - threshold ) {
            val1 = newVal;
            console.log(val1);
        }
    });
});