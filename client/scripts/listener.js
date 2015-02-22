
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    analogueIO.Listener = function() {

        var self = this;

        this.listen = function(targetEl){

            console.log('Listening for websocket updates!');

            var socket = io.connect('//localhost:3000');
            var target = $(targetEl);

            socket.on('update', function(data) {
                console.log('Socket update received!');
                target.text(data.value);
                self.rotate(data.value)
            });

            socket.on('error', function() { console.error(arguments) });
            socket.on('message', function() { console.log(arguments) });

        };

        /**
        * Rotate target element
        */

        this.rotate = function(input) {

            var min = -30;
            var max = 30;
            var rotation = self.transpose(input, 100, 900, min, max);

            $('#joystick').css('transform', 'rotate(' + rotation + 'deg)');

        };

        /**
        * Shared Function to transpose value into a new range of numbers, keeping the ratio from the old range.
        */

        this.transpose = function(input, oldMin, oldMax, newMin, newMax){

          var oldRange = (oldMax - oldMin);
          return((((input - oldMin) * (newMax - newMin)) / oldRange) + newMin);
        };

    };

})(jQuery, window, document);