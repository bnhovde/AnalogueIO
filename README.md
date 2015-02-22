# AnalogueIO

AnalogueIO is an interface between one or more analogue input devices connected to an Arduino and a web browser.

  - Uses nodejs and johnny-five to talk to the Arduino
  - Server running express
  - pushes updates to the client using socket.io
  - includes example front-end setup with gulp and sass and all that

This is built for an internal project where a collection of physical controller will eventually be used as controllers for a html5 game.

### Version
0.1

### Hardware Requirements
- Arduino (Mine is a uno)
- Input device (like a potensiometer, a joystick etc)
- Wires to connect this to the Arduino
- USB cable for the Arduino

### System Requirements
- Arduino IDE
- bower
- gulp
- node/npm
- python (Only for Windows)
- Visual Studio Express (Only for Windows)
- Windows SDK (Only for Windows)

### Installation
- Run npm install and bower install

### Wiring it up

Download Arduino IDE if you haven't already and connect your Arduino via the USB cable
Open Arduino IDE and open the standard firmata by clicking: File > Examples > Firmata > StandardFirmata
Pick your Arduino variant (e.g. Arduino Uno) via Tools > Board
Select the port for your board via Tools > Serial Port
Upload the program by clicking File > Upload

All you need to do next is connect your input device to the arduino's analogue input port (number 0). 
This is described in great detail here: http://node-ardx.org/exercises/8

### Running the server

Running the server:

```sh
$ node server/server.js
```

To serve the front-end (when developing):
```sh
$ gulp serve
```

To compile the front-end (for deployment):
```sh
$ gulp build
```


License
----

MIT
