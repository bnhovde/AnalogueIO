
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    analogueIO.Helpers = function() {

        var self = this;

        /**
        * Shared Function to transpose value into a new range of numbers, keeping the ratio from the old range.
        */

        this.transpose = function(input, oldMin, oldMax, newMin, newMax){

            var oldRange = (oldMax - oldMin);
            return((((input - oldMin) * (newMax - newMin)) / oldRange) + newMin);

        };

    };

})(jQuery, window, document);