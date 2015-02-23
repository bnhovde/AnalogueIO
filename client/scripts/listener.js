
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    /**
    * Listener - Listens for socket updates from physical device
    * @eventName: Name of event to listen to
    * @controller: Name of controller to call on update
    */

    analogueIO.Listener = function(eventName, controller) {

        var socket = io.connect('//localhost:3000');

        console.log('Attaching new controller!');

        socket.on(eventName, function(data) {
            console.log('Socket update received!');
            controller.control.call(this, data.value);
        });

        socket.on('error', function() { console.error(arguments); });
        socket.on('message', function() { console.log(arguments); });

    };

})(jQuery, window, document);