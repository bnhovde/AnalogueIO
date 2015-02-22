
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    // Constructor
    analogueIO.App = function(options){

        // Default Settings
        this.settings = {
            something: 'something'
        };

        $.extend(this.settings, options);

        this._init();
    };

    analogueIO.App.prototype._init = function() {
        console.log('initialising!');

        // Attach modules
        analogueIO.App.prototype.joystick = new analogueIO.Joystick();

    };

})(jQuery, window, document);