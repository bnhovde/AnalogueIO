
var analogueIO = analogueIO || {};

(function($, window, document, undefined) {

    'use strict';

    analogueIO.Listener = function() {

        this.listen = function(targetEl){

            console.log('Listening for websocket updates!');

            var socket = io.connect('//localhost:3000');
            var target = $(targetEl);

            socket.on('update', function(data) {
                console.log('Socket update received!');
                target.text(data.value);
            });

            socket.on('error', function() { console.error(arguments) });
            socket.on('message', function() { console.log(arguments) });

        };
    };

})(jQuery, window, document);