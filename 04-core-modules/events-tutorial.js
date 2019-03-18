/**
 * EventEmitter
 */

const EventEmitter = require('events').EventEmitter;

const myFirstEmitter = new EventEmitter();


setTimeout(function () {
    myFirstEmitter.emit('timer', "hello world from emitter");
}, 1000);

myFirstEmitter.on('timer', function (msg) {
    console.log(msg);
});

/**
 * event: 'message'
 * 
 * const chat = new Chat()
 * chat.emit('message', "hello from chat", "", [], );
 * chat.messages == ["hello from chat"]
 */
class Chat extends EventEmitter {

    constructor() {
        super();
        this.messages = [];
    }

    emit(type, ...args) {
        if (type === 'message') {
            this.messages.push(args[0])
        }
        super.emit(type, ...args);
    }
}

const chat = new Chat();

chat.on('error', function (err) {
    console.log('is this running')
});

chat.emit('error', new Error('something happened'));




// throw new Error()

setTimeout(function () {
    console.log('wikil this be activated');
}, 2000);






