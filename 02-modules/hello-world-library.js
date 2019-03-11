

var stam = 'hello';

// our goal is to create a function that prints hello world
// to expose this function (make it public)

function helloWorld() {
    console.log('hello world from our module');
}

// module.exports = {}

// exports = {}

// exports.ourHelloWorld = helloWorld;

//exports = helloWorld;

module.exports = helloWorld;
