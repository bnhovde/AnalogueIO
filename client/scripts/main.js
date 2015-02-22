
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
        analogueIO.App.prototype.listener = new analogueIO.Listener();
        // analogueIO.App.prototype.moduleB = new analogueIO.ModuleB();

    };

})(jQuery, window, document);