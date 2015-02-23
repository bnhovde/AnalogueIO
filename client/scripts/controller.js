
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    /**
    * Controller - receives data from listener and transposes input data
    * range to selected range, then calls callback given.
    * To find min and max input values, check the server logs when running.
    * @inputMin: Minimum input value (in mv)
    * @inputMax: Minimum input value (in mv)
    * @outputMin: Minimum output value (in mv)
    * @outputMax: Minimum output value (in mv)
    * @callback: Name of controller to call on update
    */

    analogueIO.Controller = function(inputMin, inputMax, outputMin, outputMax, callback) {

        var _inMin = inputMin,
            _inMax = inputMax,
            _outMin = outputMin,
            _outMax = outputMax,
            _cb = callback;

        /**
        * control - called on value change
        * @input: Input value (in mv)
        */

        this.control = function(input) {

            var outputVal = analogueIO.app.helpers.transpose(input, _inMin, _inMax, _outMin, _outMax);
            _cb.call(this, outputVal);

        };
    };

})(jQuery, window, document);