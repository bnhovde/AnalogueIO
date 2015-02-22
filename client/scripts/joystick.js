
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    analogueIO.Joystick = function() {

        var self = this,
            target,
            minVal,
            maxVal;

        /**
        * Controller
        * @targetEl: element to control
        * @inputMin: minimum value of analogue input
        * @inputMax: maximum value of analogue input
        */

        this.control = function(targetEl, inputMin, inputMax){

            console.log('Attaching new controller!');

            var socket = io.connect('//localhost:3000');
            target = $(targetEl);
            minVal = inputMin;
            maxVal = inputMax;

            socket.on('update', function(data) {
                console.log('Socket update received!');
                self.rotate(data.value);
            });

            socket.on('error', function() { console.error(arguments); });
            socket.on('message', function() { console.log(arguments); });

        };

        /**
        * Rotate target element
        * @input: value from input device
        */

        this.rotate = function(input) {

            var min = -30;
            var max = 30;
            var rotation = self.transpose(input, minVal, maxVal, min, max);

            target.css('transform', 'rotate(' + rotation + 'deg)');

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