




// myFirstPromise : Promise<string>
// const myFirstPromise = new Promise(function (resolve, reject) {
//     // this function will wrap our async code

//     setTimeout(function () {
//         resolve('this will run after 1 sec');
//         // reject(new Error('something happened'));
//     }, 1000);

// });

// const myFailedPromise = new Promise(function (resolve, reject) {
//     // this function will wrap our async code

//     setTimeout(function () {
//         // resolve('this will run after 1 sec');
//         reject(new Error('something happened'));
//     }, 2000);

// });

// // attach a listener to my promise
// // Promise<number | string>
// const transformedPromise = myFirstPromise.then(
//     // this will run when the promise is resolved
//     function (msg) {
//         console.log(msg);
//         return msg.length
//     },

//     // this will run when the promise is rejected
//     function (err) {
//         return err.message;
//     }
// )

// // myFailedPromise.then(
// //     null,

// //     function (err) {
// //         console.log(err.message)
// //     }
// // );

// // Promise<boolean>
// const transformedPromise2 = myFailedPromise.catch(
//     function (err) {
//         console.log(err.message)
//         return true;
//     }
// )

// then returns Promise<?>
// catch => Promise<?>

// readFile url.txt

const fs = require('fs').promises;
const fetch = require('node-fetch');

// fs.readFile('url.txt', function(err, contentOfFile) {

//     const url = contentOfFile.toString();

//     // Promise<Response>
//     const fetchPromise = fetch(url);

//     // Promise<[{}, {}]>
//     const jsonPromise = fetchPromise.then(function(res) {
//         // Promise<[{}, {}]>
//         return res.json()
//     })

// })

// Promise<void>
// const whatPromise = fs.readFile('url.txt')
//     .then(function (contentOfFile) {
//         return fetch(contentOfFile.toString())
//     })
//     .catch(function (err) {
//         throw new RangeError('another error');
//     })
//     .then(function (res) {
//         return res.json();
//     })
//     .catch(function (err) {
//         throw new Error('this is my custom error');
//     })
//     .then(function (json) {
//         console.log(json);
//     });


/**
 * @returns Promise<[{...}, {...}] | string>
 */
async function myAsyncFunction() {
    let todoItem;
    let response;
    try {
        const contentOfFile = await fs.readFile('url.txt');
        response = await fetch(contentOfFile.toString());
    } catch (err) {
        // throw new Error('my specific error')

        // return 'did not work'
        // return [];
        todoItem = [];
    }

    const json = await response.json();
    return json
    // console.log('continuing...');
}

// fs.readFile('url.txt').then(function(content) {
//     console.log('continuing...');
// })

myAsyncFunction();
console.log('end of file')


