

const myFs = require('fs');

// const contentOfTxtFile = myFs.readFileSync('hello.txt');
myFs.readFile('hello.txt', function (err, content) {
    console.log(content.toString());
});

console.log('what will be printed first? this console log? or the content of the file?')

//console.log(contentOfTxtFile.toString());

const lodashInstalled = require('lodash');

console.log(lodashInstalled.upperCase('hello world is this uppercased?'));
