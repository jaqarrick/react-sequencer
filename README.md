# React Sequencer
React sequencer is an interactive web instrument that allows users to create unique drum loops and rhythms. This project is built on React, Teoria.js and Tone.js.

Try it out [here!](https://jaqarrick.github.io/react-sequencer/)

##### Install Locally
Clone this repo and install the dependencies:
```
git clone https://github.com/jaqarrick/react-sequencer
cd react-sequencer
npm i
```
Start the dev server with `npm start` or `yarn start`. 

## Build
The sequencer's main functionality stems from the ```song``` function in ```App.js```. When ```startStopLoop``` is called the Tone transport loop begins and ```song``` is called, which increases a beat counter. ```playInstruments``` will fire ```triggerAttackRelease``` on every instrument who's beat signature matches the counter. 

## Components
The UX/UI is divided into unique React components. The  ```controls``` directory contains components for ```Controls.js```, which allows users to play/pause the sequencer, add a new instrument, and open additional options defined in ```SequencerOptions.js```. 

The ```selector``` directory is divided into a beat *visualizer* and a beat *selector*. ```Selector.js``` also includes effects and note options, defined in ```SelectorOptions.js```

## Features to be implemented in Version 2.0
- Support for mobile use
- More effects for audio processing
- Sample upload: allow for users to upload their own samples to use in the sequencer.

## Issues
- Audio becomes distorted after continued use. This is bug that I've noticed frequently when using Tone with multiple instruments and could be memory/CPU related. 

## Attribution 
This project relies heavily on [Yotam Mann](https://github.com/tambien)'s Tone.js, a framework built on the Web Audio API. 

The note selection in ```SequencerOptions.js``` also uses [Jakob Miland](https://github.com/saebekassebil)'s Javascript music theory library [TeoriaJS](https://github.com/saebekassebil/teoria).

