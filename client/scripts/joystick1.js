
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    /**
    * Example Joystick1 - Updates element on page from inputvalue
    * @value: Int - value between -30 and 30
    */

    analogueIO.Joystick = function( element ) {

        var el = $(element);

        /**
        * update - called on value change
        */

        this.update = function( value ) {

            el.css('transform', 'rotate(' + value + 'deg)');

        };
    };

})(jQuery, window, document);