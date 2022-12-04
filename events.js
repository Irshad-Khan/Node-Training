const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('NewEvent', (message) => { 
    console.log(`Message: ${message}`);
})

emitter.emit('NewEvent', 'Hello World!');