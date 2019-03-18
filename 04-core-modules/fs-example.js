

const fs = require('fs');


/**
 * Error first callback
 * err {Error | null} - is the reading of file successful
 *  
 */

// mistake don't do that!
/*try {
    fs.readFile('README1.md', function (err, data) {
        //console.log(data.toString());
        if (err) {
            throw err;
        }
    });
}
catch (err) {
    console.log(err.message);
}*/

// fs.readFile('README1.md', function (err, data) {
//     //console.log(data.toString());
//     if (err) {
//         // deal with error here
//     }
// });

// promisify
// can convert error first callback async function => Promise functions

const promisify = require('util').promisify;

const readFileAsPromise = promisify(fs.readFile)

const promiseFile = readFileAsPromise('README1.md')

promiseFile.then(function (data) {

}).catch(function (err) {

})

// const myFile = await readFileAsPromise('README1.md')

const path = require('path');

async function readFileAsync() {
    try {
        console.log(__dirname + 'README1.md');
        const myFile = await readFileAsPromise(path.resolve(__dirname, 'README1.md'));
        console.log(myFile.toString());
    } catch (err) {
        console.log(`error: ${err}`);
    }
}

readFileAsync();




